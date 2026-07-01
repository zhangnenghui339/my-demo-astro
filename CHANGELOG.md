# Changelog

本文件记录 CareerRadar 站点每次发布的核心内容变化。格式参考
[Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)：每次发布前，先把
本次改动写进 `[Unreleased]`；正式发布时，把这个区块改名成一个版本号
（例如 `[1.1.0] - 2026-07-01`），并在上方新建一个空的 `[Unreleased]`。

## [Unreleased]

### 这是什么

一套能直接塞进项目里跑起来的 Astro 结构——header / footer / radar 全局样式
集中收进 `Layout.astro`，站点导航、信任链接、footer 职位矩阵、affiliate
链接、4 款 AI 简历工具的评测数据全部拆成 `src/data/` 下的独立文件，改一处、
全站生效。同时带了一个真正"能变现"的页面：`/best/ai-resume-builder/`——
对比表 + 4 张深度评测卡 + FAQ + JSON-LD(ItemList) 全套齐活，对应项目里
"Reviews"这个主收入支柱。

### 文件树

```
src/
├── layouts/Layout.astro              ← header + footer + radar 全局样式（V1 版设计）
├── components/
│   ├── ComparisonTable.astro         ← 对比表组件
│   └── ReviewCard.astro              ← 单工具深评卡（复用 4 次）
├── data/
│   ├── site.ts                       ← nav / trustLinks / footerRoles 集中管理
│   ├── affiliates.ts                 ← 所有 affiliate 链接的唯一出处（当前都是占位 "#"）
│   └── resume-builders.ts            ← Rezi / Kickresume / Teal / Enhancv 的评分与文案
└── pages/
    ├── index.astro                   ← V1 首页（2 卡片 + "为什么信任我们"区块）
    └── best/ai-resume-builder/index.astro  ← 对比评测旗舰页
```

### Added

- 新增 `/best/ai-resume-builder/` 评测对比旗舰页（对比表 + 4 张深评卡 + 方法论
  + FAQ + JSON-LD ItemList）。
- 新增 `src/data/site.ts`、`affiliates.ts`、`resume-builders.ts` 三个数据文件，
  作为导航 / 信任链接 / 职位矩阵 / affiliate 链接 / 评测数据的唯一出处。
- 新增 `ComparisonTable.astro`、`ReviewCard.astro` 两个可复用组件。

### Changed

- 首页 `index.astro` 切换为 V1 版设计（2 张主打卡片 + "我们如何测试"信任板块），
  替换掉此前的 4 卡片 + Field notes 版本。
- `Layout.astro` 的导航、footer 改为从 `src/data/site.ts` 读取，不再硬编码。

### Known issues（待办，尚未发布上线）

- `/tools/ats-checker/`、`/how-we-test/`、`/about/`、`/disclosure/` 以及 5 个
  职位专属 ATS checker 页面目前还不存在，首页与 footer 上指向它们的链接暂时
  是死链，发布前需要先补上这些页面（或临时隐藏对应入口）。
- `src/data/affiliates.ts` 里的 4 个 affiliate 链接都是占位 `"#"`，需要替换成
  真实的联盟追踪链接。
