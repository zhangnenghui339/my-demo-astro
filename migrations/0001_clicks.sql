-- Phase 1 唯一的表：affiliate 出站点击
-- 90天红线 outbound CTR 的分子数据源，Day 1 即开始积累
-- （leads → 0002/Phase1.5；keywords/seed_history → 0003/Phase2）
CREATE TABLE clicks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tool TEXT NOT NULL,
  page_path TEXT NOT NULL,
  position TEXT,               -- 'table' | 'card' | 'cta'
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX idx_clicks_tool_date ON clicks(tool, created_at);
