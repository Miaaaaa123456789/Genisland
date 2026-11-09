import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const base = (process.env.PAGES_BASE_PATH ?? '/Genisland').replace(/\/+$/, '') + '/'

export default defineConfig({
  base,
  build: { outDir: 'dist-pages' },
  preview: { host: '127.0.0.1' },
  plugins: [
    tanstackStart({
      server: { entry: 'server.pages.ts' },
      router: { basepath: base },
      pages: [{ path: '/' }, { path: '/model/' }],
      prerender: {
        enabled: true,
        autoStaticPathsDiscovery: false,
        crawlLinks: false,
        concurrency: 2,
      },
    }),
    react(),
  ],
})
