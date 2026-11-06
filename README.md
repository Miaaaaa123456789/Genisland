# 梓笙园 AI 体验中心 · Genisland

这是正在使用的宣传页与三维游览源码。根目录 `index.html` 是宣传页；航线地图下方的 iframe 加载 `tour/index.html`。`tour/` 是 `spatial/` 的发布产物，Netlify 从仓库根目录发布。修改三维源码后须运行 `cd spatial && npm run build`，并把 `spatial/dist` 的 HTML、JS、CSS、audio 同步到 `tour/`，同时检验宣传页与游览页。

**当前可运行 ≠ 最终美术**。目前有导航、镜头、昼夜、预录导览、父子页面音频互斥和第 03 站可复现的程序生成岛形；真实场地测绘、九站高保真 GLB、人物动作、临床决策驱动的生成及正式配音尚未完成。现有青色金属控制台是工作模型，不是验收画面。不得把缺失资产、摄影贴片或九个相似展台称作已完成的生成式世界。

接手顺序：`AGENTS.md` → `spatial/docs/PRODUCTION_PROMPT.md` → `spatial/docs/INTERACTION_WORLD_SPEC.md` → `spatial/docs/ASSET_SPEC.md` → `spatial/src/`。先核对原场地视频和九张概念图（未获公开上传授权，不在仓库），制作一站高保真垂直切片，再按同一材料与性能管线完成动线。仓库中无截图里另一个本地 `zishengyuan.html` 的源码，不能声称已经改动那个页面。

参考：[Folio 2025](https://github.com/brunosimon/folio-2025) 的区域资源与品质调度；[A Long-Expected Party](https://github.com/MengTo/a-long-expected-party) 的章节声景与节奏。要转译其**结构方法**，不复制代码或直接套用游戏风格。逐项对应与验收写在 `spatial/docs/INTERACTION_WORLD_SPEC.md`。

## 宣传页统一旁白

`assets/narration/manifest.json` 是页面 55 个场景和组件的旁白台本与音频路径；`guide.js` 根据视口和组件切换调度，`guide.css` 呈现短字幕。配音说明见 `assets/narration/VOICE_PRODUCTION.md`。目前没有获审听的统一真人录音，`audio:null` 只显示字幕，三个原视频继续播放原声。录制完成后逐条补路径；不得用浏览器语音或旧合成试听假装正式旁白。首次有声播放仍需用户手势。
