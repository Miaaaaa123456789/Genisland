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

## 手动翻页

页面打开后不会自动进入或播放。点击「从第一站开始」播放第一段影片，之后点击「下一页」才切换并播放对应影片，原声默认开启。影片结束、阅读停留和切回标签页均不会自动翻页或开始播放；最后一站的 3D 全景只在点击按钮后打开。

保留返回、全景、站点直达、分支选择、设计细节与原生影片控制。离开当前站或隐藏标签页会停止原声，回到页面后可点击影片播放键继续。浏览器阻止播放时显示手动开启或重试按钮。视频文件及内容未改变。

回归检查：`node --test tests/*.test.mjs`。

## 影片响度

本机开发与发布构建需要 Python 3 和 FFmpeg。`npm run prepare:films` 会以首段原片实测响度为基准，为后续七段生成 `-balanced-v1` 副本；开发与构建会自动执行。首段及所有源文件保留不动，画面流直接复制，只有音频以 192 kbps AAC 重新编码。逐段检查响度误差不超过 0.15 LU、真峰值不超过 -1 dBTP，并核对视频流哈希。测量记录位于生成的 `assets/films/audio-balance-report.json`。
