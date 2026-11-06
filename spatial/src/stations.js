// Conceptual ordering only. Coordinates must be replaced after matching the site video.
// Model paths deliberately fail loudly until real authored GLB assets exist.
export const stations = [
  { id: '01', name: '入口与形象', question: '今天，我想从哪里开始？', function: '自主建立形象与授权边界', model: '/models/01-arrival.glb', reference: '/reference/01-arrival.webp', position: [-18, 0, 7], radius: 3.8, next: '02' },
  { id: '02', name: '个人生成空间', question: '哪段经历与此刻有关？', function: '辨认情境与成长线索', model: '/models/02-personal.glb', reference: '/reference/02-personal.webp', position: [-13, 0, -2], radius: 4.0, next: '03' },
  { id: '03', name: '情绪交互', question: '刚才，我感受到了什么？', function: '本人确认感受与表达方式', model: '/models/03-emotion.glb', reference: '/reference/03-emotion.webp', position: [-7, 0, -8], radius: 4.0, next: '04' },
  { id: '04', name: '圆桌故事', question: '别人加入后，我可以怎样表达？', function: '团体表达、倾听与选择', model: '/models/04-roundtable.glb', reference: '/reference/04-roundtable.webp', position: [0, 0, -5], radius: 5.0, next: '05' },
  { id: '05', name: '可选个人分支', question: '我想练习面对，还是先照顾自己？', function: '经评估的练习／低刺激调节／直接通过', model: '/models/05-branch.glb', reference: '/reference/05-branch.webp', position: [4, 0, 3], radius: 5.0, next: '06' },
  { id: '06', name: '镜映', question: '刚才哪些选择属于我？', function: '回顾可追溯的自述与行为', model: '/models/06-mirror.glb', reference: '/reference/06-mirror.webp', position: [10, 0, -3], radius: 4.0, next: '07' },
  { id: '07', name: '咖啡厅过渡', question: '我想怎样回到日常？', function: '从沉浸体验缓慢回到现实', model: '/models/07-cafe.glb', reference: '/reference/07-cafe.webp', position: [13, 0, 4], radius: 4.0, next: '08' },
  { id: '08', name: '共创交流', question: '我愿意怎样与人连接？', function: '自主选择交流、共创或独处', model: '/models/08-cocreation.glb', reference: '/reference/08-cocreation.webp', position: [18, 0, -3], radius: 5.0, next: '09' },
  { id: '09', name: '报告与离场', question: '我愿意保留什么线索？', function: '区分自述、过程记录、正式评估和 AI 整理', model: '/models/09-report.glb', reference: '/reference/09-report.webp', position: [23, 0, 5], radius: 4.0, next: '01' }
]
