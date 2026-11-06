// Route stations and authored-model handoff. Coordinates are conceptual until site survey.
export const stations = [
  { id: '01', name: '入口与形象', question: '今天，我想从哪里开始？', function: '自主建立形象与授权边界', model: './models/01-arrival.glb', reference: './reference/01-arrival.webp', position: [-18, 0, 7], radius: 3.8, next: '02' },
  { id: '02', name: '产品与专业入口', question: '哪些信息会被使用？', function: '筛查与专业人员共同确定体验边界', model: './models/02-personal.glb', reference: './reference/02-personal.webp', position: [-13, 0, -2], radius: 4.0, next: '03' },
  { id: '03', name: '生成走廊', question: '这一次，岛屿如何出现？', function: '授权信息、当下选择与共同目标驱动生成', model: './models/03-emotion.glb', reference: './reference/03-emotion.webp', position: [-7, 0, -8], radius: 4.0, next: '04' },
  { id: '04', name: '共享航段', question: '我看见了什么，想怎么表达？', function: '团体表达、倾听与选择', model: './models/04-roundtable.glb', reference: './reference/04-roundtable.webp', position: [0, 0, -5], radius: 5.0, next: '05' },
  { id: '05', name: '个人岛与舒缓空间', question: '我想练习面对，还是先照顾自己？', function: '经评估的练习／低刺激调节／直接通过', model: './models/05-branch.glb', reference: './reference/05-branch.webp', position: [4, 0, 3], radius: 5.0, next: '06' },
  { id: '06', name: '镜映', question: '刚才哪些选择属于我？', function: '回顾可追溯的自述与行为', model: './models/06-mirror.glb', reference: './reference/06-mirror.webp', position: [10, 0, -3], radius: 4.0, next: '07' },
  { id: '07', name: '共创交流', question: '我愿意怎样与人连接？', function: '自主选择交流、共创或独处', model: './models/07-cafe.glb', reference: './reference/07-cafe.webp', position: [13, 0, 4], radius: 4.0, next: '08' },
  { id: '08', name: '报告展示', question: '我愿意保留什么线索？', function: '区分自述、过程记录、正式评估和 AI 整理', model: './models/08-cocreation.glb', reference: './reference/08-cocreation.webp', position: [18, 0, -3], radius: 5.0, next: '09' },
  { id: '09', name: '离场与再访', question: '下一次从哪里继续？', function: '保持目标连续，场景与角色可再生成', model: './models/09-report.glb', reference: './reference/09-report.webp', position: [23, 0, 5], radius: 4.0, next: '01' }
]
export const narration = [
  '欢迎来到梓笙园。先给自己选一个愿意带着走的形象。机器人会说明体验的边界，也会提醒你，哪些信息可以选择不留下。',
  '在这里，经历可以被放到眼前，换一个距离观看。场景来自专业目标与本人选择；它不是诊断，也不会替人解释感受。',
  '从这段空间开始，岛屿会跟随当下选择重新生成。光、声音和角色可以变化，但可追溯的目标由本人和专业人员共同确认。',
  '几个人面对同一张航图，先说说各自看见什么。没有标准答案；一次清楚的请求，或一次认真倾听，都值得被看见。',
  '现在可以选择走近、停留，或者换一条较安静的路线。舒缓空间帮助调整刺激强度，练习的节奏始终由本人决定。',
  '镜中的人仍是入口时的你。换一个位置，看看刚才的选择；也可以保留原来的看法。这里展示可能性，不预测未来。',
  '从沉浸场景慢慢回到日常。你可以暂时独处，和同伴说句话，或只是观察。过渡本身也是体验的一部分。',
  '共同桌面上的岛屿可以被靠近，也能移远。把一句愿意分享的话放进关系里，再观察自己的选择带来了什么变化。',
  '离开前，回看走过的航线、主动选择与精彩瞬间。体验记录和专业评估分开呈现，下一次可以从新的位置继续。'
]
