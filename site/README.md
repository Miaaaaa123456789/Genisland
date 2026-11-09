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
