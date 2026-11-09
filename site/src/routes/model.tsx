import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { sitePath } from '../site-paths'

export const Route = createFileRoute('/model')({
  head: () => ({
    meta: [{ title: '梓笙园 AI 体验中心 · 三维全景' }],
    links: [{ rel: 'stylesheet', href: sitePath('model/public/experience.css') }],
  }),
  component: Model,
})

function Model() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = sitePath('model/public/experience.js')
    document.head.append(script)
    return () => script.remove()
  }, [])

  return (
    <>
      <div id="root" />
      <noscript>
        <p>请开启 JavaScript 以使用三维全景。</p>
        <a href={sitePath()}>返回视频动线</a>
      </noscript>
    </>
  )
}
