/**
 * 版本: 2026.11.08-islands
 * 文件来源: 梓笙园动线网页工作区 /workspace/src/routes/index.tsx
 * 文件内容: 页面入口。根路由只挂载 Experience 组件。
 * 说明: 本文件是该版本的源码存档，不替代仓库根目录 index.html 与 atlas/ 静态入口。
 */
import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/experience/Experience";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <Experience />;
}
