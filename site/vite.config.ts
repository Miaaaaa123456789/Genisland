import { cloudflare } from '@cloudflare/vite-plugin'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import { readdirSync, statSync } from 'node:fs'
import { defineConfig } from 'vite'

const films = new URL('./public/assets/films/', import.meta.url)
const filmSizes = Object.fromEntries(
  readdirSync(films)
    .filter((name) => name.endsWith('.mp4'))
    .map((name) => ['/assets/films/' + name, statSync(new URL(name, films)).size]),
)

export default defineConfig({
  server: { allowedHosts: ['terminal.local'] },
  define: { GENISLAND_FILM_SIZES: JSON.stringify(filmSizes) },
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tanstackStart(),
    react(),
  ],
})
