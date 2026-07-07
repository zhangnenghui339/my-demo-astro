#!/usr/bin/env node
/**
 * pSEO 数据质量闸门。用法：node scripts/validate-pseo.mjs
 * 外包AI生成的新条目必须通过本脚本才能上线（防 thin content，红线2）。
 * 退出码 0=通过，1=有错误。
 */
import { readFileSync } from "node:fs";

const data = JSON.parse(readFileSync(new URL("../src/data/pseo-jobs.json", import.meta.url), "utf8"));
const jobs = data.jobs;
const KNOWN_TOOLS = ["rezi", "kickresume", "teal", "enhancv", "jobscan", "resume-io", "zety", "novoresume", "resume-worded", "careerflow", "huntr", "canva"];
const SENIORITY = ["entry", "mid", "senior", "switcher"];
const errors = [];
const warn = [];

const slugs = new Set();
for (const [i, j] of jobs.entries()) {
  const id = `#${i} (${j.slug || "no-slug"})`;
  // 必填与格式
  for (const f of ["slug", "title", "description", "jobTitle", "seniority", "industry", "keywords", "salaryRange", "quickAnswer", "painPoints", "toolPicks", "faq", "lastVerified"]) {
    if (j[f] === undefined || j[f] === null || j[f] === "") errors.push(`${id}: 缺字段 ${f}`);
  }
  if (j.slug) {
    if (!/^[a-z0-9-]+$/.test(j.slug)) errors.push(`${id}: slug 只允许小写字母数字连字符`);
    if (slugs.has(j.slug)) errors.push(`${id}: slug 重复`);
    slugs.add(j.slug);
  }
  if (j.seniority && !SENIORITY.includes(j.seniority)) errors.push(`${id}: seniority 必须是 ${SENIORITY.join("|")}`);
  // 最小体量（防敷衍）
  if ((j.quickAnswer || "").length < 220) errors.push(`${id}: quickAnswer 过短（<220字符）— Answer-first 是引用弹药，不许水`);
  if ((j.painPoints || []).length < 3) errors.push(`${id}: painPoints 至少3条`);
  if ((j.toolPicks || []).length < 2) errors.push(`${id}: toolPicks 至少2条`);
  if ((j.faq || []).length < 3) errors.push(`${id}: faq 至少3条`);
  for (const p of j.toolPicks || []) {
    if (!KNOWN_TOOLS.includes(p.tool)) errors.push(`${id}: toolPicks 引用未知工具 "${p.tool}"`);
    if ((p.reason || "").length < 60) errors.push(`${id}: toolPick(${p.tool}) reason 过短 — 必须给职位×等级特定的理由`);
  }
  for (const f of j.faq || []) {
    if ((f.a || "").length < 100) errors.push(`${id}: faq "${(f.q||"").slice(0,30)}" 答案过短（<100字符）`);
  }
  if (j.lastVerified && !/^\d{4}-\d{2}$/.test(j.lastVerified)) errors.push(`${id}: lastVerified 需为 YYYY-MM`);
}

// 跨条目相似度检测：换职位只改H1 = 失败（红线2）
function tokens(s) { return new Set((s || "").toLowerCase().match(/[a-z]{4,}/g) || []); }
function jaccard(a, b) {
  const inter = [...a].filter((x) => b.has(x)).length;
  return inter / (a.size + b.size - inter || 1);
}
for (let a = 0; a < jobs.length; a++) {
  for (let b = a + 1; b < jobs.length; b++) {
    const fields = ["quickAnswer", "painPoints", "faq"];
    for (const f of fields) {
      const ta = tokens(JSON.stringify(jobs[a][f]));
      const tb = tokens(JSON.stringify(jobs[b][f]));
      const sim = jaccard(ta, tb);
      if (sim > 0.6) errors.push(`相似度违规: ${jobs[a].slug} vs ${jobs[b].slug} 的 ${f} 重合度 ${(sim*100).toFixed(0)}% (>60%) — thin content，重写差异化`);
      else if (sim > 0.45) warn.push(`相似度警告: ${jobs[a].slug} vs ${jobs[b].slug} 的 ${f} 重合度 ${(sim*100).toFixed(0)}%`);
    }
  }
}

for (const w of warn) console.warn("⚠ " + w);
if (errors.length) {
  for (const e of errors) console.error("✗ " + e);
  console.error(`\n未通过：${errors.length} 个错误，${jobs.length} 条数据`);
  process.exit(1);
}
console.log(`✓ 通过：${jobs.length} 条 pSEO 数据全部合格（${warn.length} 条相似度警告）`);
