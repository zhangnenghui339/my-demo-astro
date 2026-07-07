/**
 * Lead Magnet 下载资产：source_tag → Google Drive 文件映射。
 * tag 记录"用户从哪个页面/什么意图进来"，不是"发了哪个文件"——
 * 5 个模板 tag 共用同一个 zip，但来源意图分层保留（Phase 1.5 迁移 D1 时口径无缝）。
 * Drive 权限须为「知道链接的任何人可查看」。
 */
export type SourceTag =
  | "interview-pack"
  | "ats-checklist"
  | "tools-comparison"
  | "tpl-classic"
  | "tpl-swe"
  | "tpl-pm"
  | "tpl-marketing"
  | "tpl-analyst";

const driveUrl = (id: string) => `https://drive.google.com/uc?export=download&id=${id}`;

const FILES = {
  comparison: driveUrl("1cEqKohDebBjvJoPgF1uoTqjZ4IoBCiCP"),
  templatesZip: driveUrl("17Ngh2aTXqpeAFUsX3ZetxC2hwQrVgYo5"),
  interviewPack: driveUrl("1S_ErFV_7U-Uxvb8FoDt67TpSMQPoCRXY"),
  atsChecklist: driveUrl("15aiT_3sIU3Q6zTXqdzGw_sR1Afit7xGt"),
};

export const downloads: Record<SourceTag, { label: string; url: string }> = {
  "interview-pack": { label: "The AI-Era Interview Question Pack (50 questions, PDF)", url: FILES.interviewPack },
  "ats-checklist": { label: "The ATS Repair Checklist (27-point audit, PDF)", url: FILES.atsChecklist },
  "tools-comparison": { label: "12 AI Resume Tools Compared (PDF)", url: FILES.comparison },
  "tpl-classic": { label: "ATS-Ready Resume Templates (5-pack, ZIP)", url: FILES.templatesZip },
  "tpl-swe": { label: "ATS-Ready Resume Templates (5-pack, ZIP)", url: FILES.templatesZip },
  "tpl-pm": { label: "ATS-Ready Resume Templates (5-pack, ZIP)", url: FILES.templatesZip },
  "tpl-marketing": { label: "ATS-Ready Resume Templates (5-pack, ZIP)", url: FILES.templatesZip },
  "tpl-analyst": { label: "ATS-Ready Resume Templates (5-pack, ZIP)", url: FILES.templatesZip },
};
