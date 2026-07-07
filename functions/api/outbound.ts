import { affiliates } from "../../src/data/affiliates";

interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const tool = (url.searchParams.get("tool") || "").toLowerCase();
  const from = (url.searchParams.get("from") || "unknown").slice(0, 200);
  const pos = (url.searchParams.get("pos") || "").slice(0, 40);

  const target = affiliates[tool]?.url;
  if (!target) {
    return new Response("Unknown tool", { status: 400 });
  }

  try {
    await context.env.DB.prepare(
      "INSERT INTO clicks (tool, page_path, position) VALUES (?1, ?2, ?3)"
    )
      .bind(tool, from, pos)
      .run();
  } catch (err) {
    // 统计失败不阻塞跳转
    console.error("clicks insert failed", err);
  }

  return Response.redirect(target, 302);
};
