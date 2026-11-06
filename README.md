# 梓笙园 AI 体验中心 · Genisland

## 从这里开始

本仓库有两个**不同阶段**，不要把它们混为一个已经完工的三维站点：

| 路径 | 状态 | 用途 |
| --- | --- | --- |
| 根目录 `index.html`、`assets/`、`netlify.toml` | 现有展示站 | 已有文字、图片和视频；Netlify 继续发布根目录，不改动现有站点 |
| `spatial/` | 新三维制作工作台 | 可运行的镜头、区域选择、昼夜和资产加载基础；九个房间模型尚待制作 |

接手制作时先读 [`AGENTS.md`](AGENTS.md) 和 [`spatial/README.md`](spatial/README.md)，再读 [`spatial/docs/PRODUCTION_PROMPT.md`](spatial/docs/PRODUCTION_PROMPT.md) 和 [`spatial/docs/ASSET_SPEC.md`](spatial/docs/ASSET_SPEC.md)。九张概念图在原设计会话中，未随本次代码与提示词公开发布；文字化的逐站资产规范已记录在 `ASSET_SPEC.md`。取得素材发布授权后才可放入 `spatial/public/reference/`。

**三维工作台**：`cd spatial && npm install && npm run dev`。`npm run build` 输出 `spatial/dist`。该目录不改变根目录的 Netlify 发布设置，也不自动宣称现有宣传页已经升级为三维页面。

设计目标：真实尺度的未来医疗体验空间，开阔且有内容；同一人物贯穿入口、个人探索、情绪表达、团体互动、可选个人练习、镜映、咖啡厅、共创与报告。原场地视频决定最终连接关系；现有概念坐标只用于技术开发，不能视为实际平面图。
