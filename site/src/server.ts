import handler from '@tanstack/react-start/server-entry'

type Env = {
  ASSETS: { fetch(request: Request): Promise<Response> }
}

declare const FixedLengthStream: new (length: number) => {
  readable: ReadableStream<Uint8Array>
  writable: WritableStream<Uint8Array>
}
declare const GENISLAND_FILM_SIZES: Record<string, number>

export default {
  fetch(request: Request, env: Env) {
    const url = new URL(request.url)
    const { pathname } = url
    if (pathname === '/model/index.html') {
      url.pathname = '/model'
      return Response.redirect(url, 308)
    }
    if (pathname.startsWith('/assets/films/')) {
      const size = GENISLAND_FILM_SIZES[pathname]
      if (size) return serveFilm(request, env.ASSETS, size)
      return env.ASSETS.fetch(request)
    }
    return handler.fetch(request)
  },
}

async function serveFilm(request: Request, assets: Env['ASSETS'], size: number): Promise<Response> {
  const range = request.headers.get('Range')
  const assetHeaders = new Headers(request.headers)
  assetHeaders.delete('Range')
  assetHeaders.delete('If-Range')
  const asset = await assets.fetch(new Request(request, { headers: assetHeaders }))

  if (asset.status !== 200) return asset

  const headers = new Headers(asset.headers)
  headers.set('Accept-Ranges', 'bytes')
  const fullResponse = () => new Response(asset.body, { status: 200, headers })
  const ifRange = request.headers.get('If-Range')
  if (!range || request.method !== 'GET' || !asset.body) return fullResponse()
  if (ifRange && ifRange !== headers.get('ETag') && ifRange !== headers.get('Last-Modified')) {
    return fullResponse()
  }

  // Workers' asset binding does not serve byte ranges itself. Safari requests
  // these ranges when opening or seeking a video.
  const match = /^bytes=(\d*)-(\d*)$/i.exec(range)
  if (!match || (!match[1] && !match[2])) return fullResponse()

  const start = match[1] ? Number(match[1]) : Math.max(0, size - Number(match[2]))
  const end = match[1] && match[2] ? Math.min(size - 1, Number(match[2])) : size - 1
  if (start >= size || start > end) {
    void asset.body.cancel().catch(() => {})
    headers.set('Content-Range', 'bytes */' + size)
    headers.delete('Content-Length')
    return new Response(null, { status: 416, headers })
  }

  headers.set('Content-Range', 'bytes ' + start + '-' + end + '/' + size)
  headers.delete('Content-Length')
  const stream = new FixedLengthStream(end - start + 1)
  void sliceBody(asset.body, start, end + 1).pipeTo(stream.writable).catch(() => {})
  return new Response(stream.readable, { status: 206, headers })
}

function sliceBody(body: ReadableStream<Uint8Array>, start: number, end: number) {
  const reader = body.getReader()
  let offset = 0

  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      while (offset < end) {
        const { done, value } = await reader.read()
        if (done) {
          controller.error(new Error('Film ended before the requested byte range'))
          return
        }
        const chunkStart = offset
        offset += value.length
        if (offset <= start) continue

        controller.enqueue(value.subarray(Math.max(0, start - chunkStart), end - chunkStart))
        if (offset >= end) {
          controller.close()
          void reader.cancel().catch(() => {})
        }
        return
      }
    },
    cancel(reason) {
      return reader.cancel(reason)
    },
  })
}
