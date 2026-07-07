# pSEO 数据生成任务书（喂给任意生成 AI：GPT / Gemini / Claude）

## 你的任务
为 careerradar.io 的 `/best/ai-resume-builder/[slug]/` pSEO 页面生成新的 JSON 数据条目。
每条 = 一个「职位 × 经验等级」组合的完整、差异化的评测导购内容。

## 硬性规则（违反任何一条 = 整批退回）
1. **禁止 thin content**：任意两条数据的 quickAnswer / painPoints / faq 内容重合度必须 < 45%。
   换职位只改标题里的职位名 = 失败。每个职位×等级组合有它真实独有的痛点：
   去想"这个人此刻在求职中真正卡在哪"，而不是复述通用简历建议。
2. **quickAnswer ≥ 220 字符**，自包含（单独摘出来也成立），首句直接回答"该选什么/怎么做"，
   这是 Answer-first 结构的引用弹药，会被 AI 搜索引擎原文引用。
3. **toolPicks 的 reason 必须是职位×等级特定的**（≥60字符）。
   "parse 干净"是通用理由（不合格）；"senior 工程师 4 段履历 20+ 技术栈不掉段"是特定理由（合格）。
4. **诚实评测**：不许通篇捧。painPoints 写真实痛点；faq 答案里该泼冷水就泼
   （如"免费够用就别付费"、"AI 生成的每一行都要能在面试里辩护"）。
5. **不编造数字**：salaryRange 给可信区间并标注 (US, base)；不引用不存在的测试数据。
6. 语言：英文（面向英语求职市场）。语气：直接、具体、无 filler。

## 字段规范
```
slug          小写连字符，格式 {seniority}-{job}，如 senior-ux-designer
title         "Best AI Resume Builder for {人群} ({年份})"
description   140-160字符 meta description，含核心关键词
jobTitle      职位名（与站内 ats-jobs 对齐时用相同拼写）
seniority     entry | mid | senior | switcher
industry      行业
keywords      3-5 个真实搜索词组
salaryRange   如 "$85,000 – $130,000 (US, base)"
quickAnswer   ≥220字符，见规则2
painPoints    3-5 条，该人群此刻真实的求职卡点
toolPicks     2-3 条 {tool, reason}，tool 枚举：
              rezi|kickresume|teal|enhancv|jobscan|resume-io|zety|
              novoresume|resume-worded|careerflow|huntr|canva
faq           3-4 条 {q, a}，a ≥100字符，答案要有立场和具体做法
lastVerified  "YYYY-MM"（生成当月）
```

## 质量标杆
参考 `src/data/pseo-jobs.json` 中已有的 8 条 exemplar——注意它们如何做到：
- senior vs entry 的痛点完全不同（senior 是"栈太多被截断"，entry 是"没经历被AI注水"）
- switcher（career-changer）有独立叙事（翻译旧经验但不许说谎）
- 特殊领域有领域特有失败模式（护士的证照放 header 被 parser 吃掉）

## 输出格式
只输出 JSON 数组（不要 markdown 代码块外的任何文字），每个元素符合上述字段规范，
可直接追加进 pseo-jobs.json 的 jobs 数组。

## 本批任务
生成以下组合（按此清单，每条独立构思）：
{在这里粘贴职位×等级清单，例如：
 entry-level-product-manager / senior-marketing-manager / mid-level-ux-designer /
 entry-level-nurse / senior-accountant / mid-level-sales-representative / ...}

## 验收
维护者会运行 `node scripts/validate-pseo.mjs`。
校验含：必填字段/slug唯一/枚举合法/最小字数/跨条目相似度(>60%重合直接报错)。
