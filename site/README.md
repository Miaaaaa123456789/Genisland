# 梓笙园 AI 体验中心

基于电影化动线第 8 版迁移至 TanStack Start。网站包含 12 个空间、8 段短片、互动粒子和最后一站的 3D 全景。第 03 站使用 `jimeng-2026-11-08-4066.mp4` 的画面与原声。

## 本机运行

使用 Node.js 22.12 或更新版本。

```sh
npm ci
npm run dev
```

## 构建 GitHub Pages

同一套动线、短片和 3D 全景可预渲染为静态页面。

```sh
npm run typecheck
npm run build:pages
npx vite preview --config vite.pages.config.ts
```

静态发布目录是 `dist-pages/client/`。手动构建时默认使用 `/Genisland/`，仓库的 GitHub Actions 会使用实际 Pages 路径。

## 发布到 Cloudflare Workers

使用 Wrangler 登录要发布到的 Cloudflare 账号。已经登录 Wrangler 时可以直接运行发布命令。

```sh
npx wrangler login --device --scopes account:read user:read workers_scripts:write
npm run deploy
```

`npm run deploy` 构建 TanStack Start 的 Worker 与静态资源，再发布到 `wrangler.jsonc` 中指定的 Worker。MP4 位于 `public/assets/films/`，视频分段响应使用构建时读取的文件大小。3D 全景的可运行构建文件和素材位于 `public/model/public/`。

## 自动航行

默认约 5 秒后开始，影片完整播放后立即进入下一站，不额外等待；无影片节点停留 12 秒。自动模式展开空间介绍，分叉路影片结束后直接依次展示两条支路，不在选择画面额外停留；手动模式保留支路选择，最后一站停留后自动打开 3D 全景。点选节点会延续自动模式；明确暂停或返回后保留手动模式；展开/收起细节不打断自动播放，点击自动播放可恢复。减少动态效果偏好仍需主动开始。

页面底部显示当前播放状态与下一站倒计时。影片结束事件遗漏时，通过末帧状态补偿，绝不跳过中途暂停的影片。

其它影片启动失败会显示重试按钮；主动暂停和切站导致的旧播放取消不会显示错误。

原声默认开启，浏览器若阻止有声自动播放，会显示一次音频启动入口，不强制静音或跳过影片。标签页隐藏时暂停计时和影片。重播或拖动影片进度会取消原有阅读倒计时，直到再次播完才开始下一站倒计时；原生播放器的静音选择也会延续到下一站。

回归检查：`node --test tests/*.test.mjs`。

## 影片响度

本机开发与发布构建需要 Python 3 和 FFmpeg。`npm run prepare:films` 会以首段原片实测响度为基准，为后续七段生成 `-balanced-v1` 副本；开发与构建会自动执行。首段及所有源文件保留不动，画面流直接复制，只有音频以 192 kbps AAC 重新编码。逐段检查响度误差不超过 0.15 LU、真峰值不超过 -1 dBTP，并核对视频流哈希。测量记录位于生成的 `assets/films/audio-balance-report.json`。
