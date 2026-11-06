import { build, context } from 'esbuild'
import { readFile, mkdir, cp, writeFile } from 'node:fs/promises'
import { createServer } from 'node:http'
import { join, extname } from 'node:path'

const out = new URL('./dist/', import.meta.url)
await mkdir(out, { recursive: true })
await cp(new URL('./public/', import.meta.url), out, { recursive: true, force: true })
await writeFile(new URL('./dist/index.html', import.meta.url), await readFile(new URL('./index.html', import.meta.url)))
const opts = { entryPoints: [new URL('./src/main.js', import.meta.url).pathname], bundle: true, format: 'esm', target: 'es2022', minify: !process.argv.includes('--serve'), outdir: out.pathname, entryNames: 'app', loader: { '.css': 'css' } }
if (!process.argv.includes('--serve')) {
  await build(opts)
  console.log('Built spatial/dist')
} else {
  const ctx = await context(opts)
  await ctx.watch()
  const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.webp': 'image/webp', '.glb': 'model/gltf-binary' }
  createServer(async (req, res) => {
    try {
      const path = decodeURIComponent((req.url || '/').split('?')[0])
      if (path.includes('..')) { res.writeHead(403); res.end(); return }
      const relative = path === '/' ? 'index.html' : path.slice(1)
      const data = await readFile(join(out.pathname, relative))
      res.writeHead(200, { 'Content-Type': types[extname(relative)] || 'application/octet-stream' }); res.end(data)
    } catch { res.writeHead(404); res.end('Not found') }
  }).listen(4173, '0.0.0.0', () => console.log('Spatial look-dev: http://localhost:4173'))
}
