# 梓笙园 AI 体验中心 · Genisland

这是正在使用的宣传页与三维生成式体验源码。根目录 `index.html` 是宣传页；`genesis/` 是首页内嵌的三维生成式旅程（`genesis/index.html` + `genesis/world.js` + `genesis/genesis.js`），用 vendored three.js 实时渲染，不加载任何外部资源。

**当前可运行 ≠ 最终美术**。目前首页结构、九站真实动线顺序、程序生成的岛岸与人物线条、三种世界交互（确认线索改写岸线、共创距离可调可撤回、报告数字墙分层）与低沉舒缓女声旁白均已可运行；真实场地测绘、九站高保真 GLB、人物动作与正式真人配音尚未完成。不得把程序生成的线条场景称作已完成的临床产品。

接手顺序：`AGENTS.md` → `spatial/docs/PRODUCTION_PROMPT.md` → `spatial/docs/INTERACTION_WORLD_SPEC.md` → `spatial/docs/ASSET_SPEC.md` → `genesis/`。

## 三维生成式旅程（`genesis/`）

- **视觉**：近乎黑色的无边界空间，纤细青绿与暖金发光线条按生成顺序自下而上勾勒岛岸、人物与航线；少量粒子沿线流动；光从核心向外扩散；线条有余辉与轻微呼吸感。渲染管线为 three.js 0.187 + UnrealBloom + 自定义 ShaderMaterial（`aOrder` 控制显形），全部本地 vendored。
- **动线**：入口航标 → 03 站生成长廊 → 团体互动区 → 个人岛 → 镜映 → 共创空间 → 报告数字墙 → 出口，镜头沿真实动线连续推进，同一位访客贯穿全程（形象从首页 `localStorage` 读取，镜映与入口连续）。
- **交互**：靠近航线显示连接场景；03 站切换确认线索会改写岸线形态与岸边角色的姿态回应，并可撤回；07 共创区两岛距离可调，连线与关系标签即时变化，可撤回；08 报告数字墙按「本人确认 / AI 整理 / 量表观察 / 专业判断」四层来源分层呈现。
- **声音**：八段旁白全部由 `<audio>` 播放文件，**不使用浏览器 `speechSynthesis`**。低沉舒缓女声由 `docs/vo_deep.py` 生成（macOS `Grandma (中文)` 主声源 + 少量 `Tingting` 提清晰度，降调 0.88× + 中频提升 + 极短早期反射 + 软饱和），实测基频约 140–149 Hz。

## 宣传页统一旁白

`assets/narration/manifest.json` 是页面 55 个场景和组件的旁白台本与音频路径；`guide.js` 根据视口和组件切换调度，`guide.css` 呈现短字幕。配音说明见 `assets/narration/VOICE_PRODUCTION.md`。目前没有获审听的统一真人录音，`audio:null` 只显示字幕，三个原视频继续播放原声。录制完成后逐条补路径；不得用浏览器语音或旧合成试听假装正式旁白。首次有声播放仍需用户手势。

**三维体验与旁白**：三维生成式旅程是封面之后的**第一个模块**（`#genesis`），以 iframe 内嵌
`genesis/index.html`。默认零点击：区块滚入视野即自动播放，镜头沿真实动线连续推进，旁白播完自动进入下一段；
访客可随时用工具面板改变世界（确认线索、共创距离、报告层级），或用方向键前后跳转。
区块进入视口时首页滚动旁白与视频自动让位，离开后恢复（`body.genesis-running` + `genislandNarrationHold`）。
首页另有 `assets/narration/guide.js` 驱动的滚动旁白，台本见 `assets/narration/manifest.json`（55 条，第三人称、客观、可核查）。

**声音**：全部旁白都不使用浏览器 `speechSynthesis`，一律由 `<audio>` 播放文件。海浪白噪音与 BGM 已彻底移除
（`assets/documentary-archipelago.mp3` 已删除，页面内无 `.bgm-toggle` 与环境音轨）。

**声音现状**：全部旁白都不使用浏览器 `speechSynthesis`，一律由 `<audio>` 播放文件。
九站为真人录音（`assets/narration/audio/guide-01…09.mp3`，同一配音人同一录音链）；
三维旅程的八段为**低沉舒缓女声**（`docs/vo_deep.py` 生成，基频约 140–149 Hz）；
其余页面段落目前是**系统合成占位音**（macOS Tingting 经温润处理），
界面上明确标注「导览播放中 · 配音样带」，**不是成品音**，正式发布前须按
[`docs/VOICEOVER.md`](docs/VOICEOVER.md) 替换。叙述人称与专业口径见同一份文档。
