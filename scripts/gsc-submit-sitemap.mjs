import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const scope = 'https://www.googleapis.com/auth/webmasters';
const configPath = path.resolve('.local/gsc/config.json');
const tokenPath = path.resolve('.local/gsc/token.json');
const authUrlPath = path.resolve('.local/gsc/auth-url.txt');

function env(name) {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : undefined;
}

async function readJsonIfExists(file) {
  if (!existsSync(file)) return {};
  return JSON.parse(await readFile(file, 'utf8'));
}

function normalizeSiteUrl(value) {
  return value.endsWith('/') ? value : `${value}/`;
}

function openBrowser(url) {
  const command = process.platform === 'win32'
    ? ['powershell.exe', ['-NoProfile', '-Command', 'Start-Process -FilePath $args[0]', url]]
    : process.platform === 'darwin'
      ? ['open', [url]]
      : ['xdg-open', [url]];

  const child = spawn(command[0], command[1], {
    detached: true,
    stdio: 'ignore',
  });
  child.unref();
}

async function waitForOAuthCode({ clientId, clientSecret, oauthPort }) {
  const state = randomBytes(16).toString('hex');

  return await new Promise((resolve, reject) => {
    const server = createServer(async (req, res) => {
      try {
        const requestUrl = new URL(req.url, 'http://127.0.0.1');
        if (requestUrl.pathname !== '/oauth2callback') {
          res.writeHead(404);
          res.end('Not found');
          return;
        }

        if (requestUrl.searchParams.get('state') !== state) {
          throw new Error('OAuth state mismatch.');
        }

        const code = requestUrl.searchParams.get('code');
        if (!code) {
          throw new Error(requestUrl.searchParams.get('error') || 'OAuth code missing.');
        }

        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Authorization complete. You can close this tab.');
        server.close();
        resolve({ code, redirectUri });
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(error.message);
        server.close();
        reject(error);
      }
    });

    let redirectUri;
    server.listen(oauthPort, '127.0.0.1', () => {
      redirectUri = `http://127.0.0.1:${oauthPort}/oauth2callback`;
      const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
      authUrl.searchParams.set('client_id', clientId);
      authUrl.searchParams.set('redirect_uri', redirectUri);
      authUrl.searchParams.set('response_type', 'code');
      authUrl.searchParams.set('scope', scope);
      authUrl.searchParams.set('access_type', 'offline');
      authUrl.searchParams.set('prompt', 'consent');
      authUrl.searchParams.set('state', state);

      const url = authUrl.toString();
      mkdir(path.dirname(authUrlPath), { recursive: true })
        .then(() => writeFile(authUrlPath, `${url}\n`))
        .catch((error) => console.warn(`Could not write auth URL: ${error.message}`));

      console.log('Opening Google OAuth consent page...');
      console.log(url);
      console.log(`Auth URL saved to ${authUrlPath}`);
      openBrowser(url);
    });

    server.on('error', reject);
  });
}

async function exchangeCodeForToken({ clientId, clientSecret, code, redirectUri }) {
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    code,
    grant_type: 'authorization_code',
    redirect_uri: redirectUri,
  });

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(`OAuth token exchange failed: ${JSON.stringify(payload)}`);
  }

  return payload;
}

async function refreshAccessToken({ clientId, clientSecret, refreshToken }) {
  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
  });

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });

  const payload = await response.json();
  if (!response.ok) {
    throw new Error(`OAuth refresh failed: ${JSON.stringify(payload)}`);
  }

  return payload.access_token;
}

async function submitSitemap({ accessToken, siteUrl, sitemapUrl }) {
  const url = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Sitemap submit failed (${response.status}): ${text}`);
  }
}

async function main() {
  const config = await readJsonIfExists(configPath);
  const token = await readJsonIfExists(tokenPath);

  const clientId = env('GSC_CLIENT_ID') || config.client_id || config.clientId;
  const clientSecret = env('GSC_CLIENT_SECRET') || config.client_secret || config.clientSecret;
  let refreshToken = env('GSC_REFRESH_TOKEN') || token.refresh_token || config.refresh_token || config.refreshToken;
  const siteUrl = normalizeSiteUrl(env('GSC_SITE_URL') || config.site_url || config.siteUrl || 'https://careerradar.io/');
  const sitemapUrl = env('GSC_SITEMAP_URL') || config.sitemap_url || config.sitemapUrl || `${siteUrl}sitemap-index.xml`;
  const oauthPort = Number(env('GSC_OAUTH_PORT') || config.oauth_port || config.oauthPort || 53682);

  if (!clientId || !clientSecret) {
    throw new Error(`Missing OAuth client config. Create ${configPath} with client_id and client_secret, or set GSC_CLIENT_ID/GSC_CLIENT_SECRET.`);
  }

  if (!refreshToken) {
    const { code, redirectUri } = await waitForOAuthCode({ clientId, clientSecret, oauthPort });
    const newToken = await exchangeCodeForToken({ clientId, clientSecret, code, redirectUri });
    if (!newToken.refresh_token) {
      throw new Error('Google did not return a refresh_token. Revoke this app access in your Google account, then run again.');
    }

    await mkdir(path.dirname(tokenPath), { recursive: true });
    await writeFile(tokenPath, JSON.stringify(newToken, null, 2));
    refreshToken = newToken.refresh_token;
    console.log(`Saved OAuth token to ${tokenPath}`);
  }

  const accessToken = await refreshAccessToken({ clientId, clientSecret, refreshToken });
  await submitSitemap({ accessToken, siteUrl, sitemapUrl });
  console.log(`Submitted sitemap: ${sitemapUrl}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
