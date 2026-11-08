# 版本 2026.11.08-islands

这一版是「梓笙园 AI 体验中心」可交互三维动线网页的源码存档。

- 版本号: `2026.11.08-islands`
- 日期: 2026-11-08
- 运行栈: TanStack Start + React + Three.js 0.187.0
- 文件来源: 当时的动线网页工作区 `/workspace`。内容按该工作区源文件原样复制，只在每个文本文件顶部加了版本、来源和内容说明。
- 这一版相对上一稿的改动: 去掉湖面和池堂，地面改为石材岛屿；分叉处是三座低岛，情绪岛不再有浅海，共创桌面不再铺水。
- 与本仓库其他目录的关系: 根目录 `index.html` 和 `atlas/` 仍是现有静态入口。本目录不替换它们，也不读取 `genesis/`、`tour/` 或临床数据。

## 文件清单

| 本仓库路径 | 来源路径 | 文件内容 |
|---|---|---|
| `versions/2026.11.08-islands/src/experience/content.ts` | `/workspace/src/experience/content.ts` | 站点数据。十一处站点的名称、坐标、镜头、主路径、分叉路径与汇合路径，以及每站的设备、位置原因、依据和边界。不含疗效或风险结论。（275 行） |
| `versions/2026.11.08-islands/src/experience/world.ts` | `/workspace/src/experience/world.ts` | 三维场景。用 Three.js 搭建建筑、路径、环幕、粒子走廊、圆桌、分叉、镜面、报告墙和出口。地面是石材岛屿，没有湖面，也没有池堂。（1345 行） |
| `versions/2026.11.08-islands/src/experience/engine.ts` | `/workspace/src/experience/engine.ts` | 交互引擎。开场环视、拖拽旋转、缩放、平移、点击走位、沿动线浏览、剖切与外壳切换、悬停光晕和信息层。（526 行） |
| `versions/2026.11.08-islands/src/experience/geom.ts` | `/workspace/src/experience/geom.ts` | 几何工具。共享方体、圆角盒、坡道、路径带、丝带，以及岛屿（islandGeo）和台地岛（landGeo）。（274 行） |
| `versions/2026.11.08-islands/src/experience/screens.ts` | `/workspace/src/experience/screens.ts` | 屏幕内容。形象线框、环幕、圆桌、报告分层、海图和院区立面等画布贴图。人物只出现在屏幕上，不作为空间里的模型。（479 行） |
| `versions/2026.11.08-islands/src/experience/audio.ts` | `/workspace/src/experience/audio.ts` | 声音。按区域切换的环境声，语音或视频开始时压低，结束后恢复。（106 行） |
| `versions/2026.11.08-islands/src/experience/Experience.tsx` | `/workspace/src/experience/Experience.tsx` | 页面界面。全景画布、站点说明、迷你地图，以及全景、导览、剖切和静音控制。（233 行） |
| `versions/2026.11.08-islands/src/routes/index.tsx` | `/workspace/src/routes/index.tsx` | 页面入口。根路由只挂载 Experience 组件。（9 行） |
| `versions/2026.11.08-islands/src/styles.css` | `/workspace/src/styles.css` | 界面样式。动线页面的面板、地图和控件外观。（270 行） |
| `versions/2026.11.08-islands/public/media/lisheng.jpg` | `/workspace/public/media/lisheng.jpg` | 利笙屏幕与产品参考图。来自用户提供的机器人参考照片，用作屏幕贴图，不是空间里的人物。（二进制 163377 字节） |
| `versions/2026.11.08-islands/public/media/xiaosheng.jpg` | `/workspace/public/media/xiaosheng.jpg` | 小笙 JITAI 参考图。来自用户提供的双镜片机器人渲染，用作产品屏幕贴图。（二进制 21653 字节） |
| `versions/2026.11.08-islands/public/media/copilot.jpg` | `/workspace/public/media/copilot.jpg` | Copilot 界面参考图。来自用户提供的复诊助手界面截图，只贴在产品屏幕上。（二进制 177836 字节） |
| `versions/2026.11.08-islands/public/media/wanxing.jpg` | `/workspace/public/media/wanxing.jpg` | 晚星界面参考图。来自用户提供的星形角色界面截图，只贴在产品屏幕上。（二进制 63797 字节） |

## 屏幕贴图来源

`public/media/` 下四张图来自用户提供的机器人与界面参考图，只作为产品屏幕贴图。空间场景里没有真人模型，也没有卡通人物模型。
