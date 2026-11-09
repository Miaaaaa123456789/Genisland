const clinicalSources = {
  childHealthcare: {
    label: 'NICE NG204',
    url: 'https://www.nice.org.uk/guidance/ng204/chapter/Recommendations',
  },
  socialAnxiety: {
    label: 'NICE CG159',
    url: 'https://www.nice.org.uk/Guidance/CG159/chapter/recommendations',
  },
  emotionRegulation: {
    label: '青少年情绪调节综述',
    url: 'https://pubmed.ncbi.nlm.nih.gov/34275057/',
  },
  adolescentDbt: {
    label: 'DBT-A 情绪调节研究',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33539915/',
  },
  emotionMeasurement: {
    label: '儿少情绪测量综述',
    url: 'https://pubmed.ncbi.nlm.nih.gov/42387570/',
  },
  adolescentNarrative: {
    label: '青少年叙事治疗随机试验',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10921878/',
  },
  interpersonalSkills: {
    label: 'IPT-AST 团体随机试验',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5467441/',
  },
  vrSafety: {
    label: '儿少 VR 安全综述',
    url: 'https://pubmed.ncbi.nlm.nih.gov/38466416/',
  },
  childPtsd: {
    label: 'NICE PTSD 指南 NG116',
    url: 'https://www.nice.org.uk/guidance/ng116/chapter/recommendations',
  },
  adolescentExposure: {
    label: '青少年 PE-A 随机试验',
    url: 'https://jamanetwork.com/journals/jama/fullarticle/1793800',
  },
  adultVrExposure: {
    label: '成人 PTSD 的 VR 暴露试验',
    url: 'https://pubmed.ncbi.nlm.nih.gov/27606699/',
  },
  veteranVrReview: {
    label: '退伍军人 VR 暴露综述',
    url: 'https://pubmed.ncbi.nlm.nih.gov/42620710/',
  },
  youthArts: {
    label: '儿少及青年艺术干预综述',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13694774/',
  },
  adolescentAct: {
    label: '青少年 ACT 荟萃分析',
    url: 'https://pubmed.ncbi.nlm.nih.gov/39303882/',
  },
  clinicalAssessment: {
    label: '儿少综合评估建议',
    url: 'https://doi.org/10.3760/cma.j.cn113661-20250918-00391',
  },
  healthAi: {
    label: 'WHO 医疗 AI 指南',
    url: 'https://www.who.int/publications/i/item/9789240084759',
  },
}

export const stations = [
  {
    "name": "院区序厅",
    "loc": "进入入口前",
    "lead": "先看见医院，再理解这段体验为什么从这里开始。",
    "img": "route/00-gallery.webp",
    "caption": "院区功能示意 · 以医院核实资料为准",
    "facts": [
      [
        "空间里有什么",
        "实体院区地图、医院文化与项目简介；所有机器人形象在同一展厅亮相。"
      ],
      [
        "它承担什么",
        "区分既有医疗服务、产品成果和本体验中心的设计目标。"
      ],
      [
        "专业边界",
        "产品资质、既有研究与新体验的效果分别标注，不能相互替代。"
      ]
    ],
    "x": 13,
    "y": 76,
    "pan": "0% 50%",
    "action": "扫描院区全景",
    "evidence": {
      "topic": "既有研究与产品资质",
      "summary": "院内既有研究和器械资质按产品及适用范围展示。本体验中心整套方案的临床效果仍待验证。",
      "sources": [],
    },
    "film": "01-campus"
  },
  {
    "name": "形象入口",
    "loc": "入口 · 身份生成",
    "lead": "由本人决定最初的轮廓；同一个形象将陪伴整段航程。",
    "img": "route/01-avatar.webp",
    "caption": "虚拟形象从此进入动线",
    "facts": [
      [
        "可以做什么",
        "定制色彩、服饰和代号；可修改、匿名或跳过。"
      ],
      [
        "为什么在这里",
        "后续成长走廊与镜映使用同一形象，形成连续的个案线索。"
      ],
      [
        "空间动作",
        "穿过收束的暗廊，前方岛屿环屏豁然打开。"
      ]
    ],
    "x": 22,
    "y": 68,
    "pan": "15% 50%",
    "action": "重新聚合形象",
    "evidence": {
      "topic": "共同决策与隐私",
      "summary": "自选形象、匿名或跳过，参照儿少就医中的共同决策与隐私保护。虚拟形象为来访者提供一种参与方式。",
      "sources": [clinicalSources.childHealthcare],
    },
    "film": "02-avatar"
  },
  {
    "name": "情绪感知与个人岛",
    "loc": "开敞环形影像厅",
    "lead": "情绪不被打分；它先被感知，再慢慢长成可观察的岛。",
    "img": "route/02-emotion.webp",
    "caption": "情绪感知与岛屿生成 · 空间内容示意",
    "facts": [
      [
        "输入",
        "HRV、绘画与声音可分别参与，也允许不说话；由本人确认表达的含义。"
      ],
      [
        "沉浸呈现",
        "270°环屏、环绕声和可调微风、温度、湿度与气味共同塑造岛屿。多感官组合的耐受性待验证。"
      ],
      [
        "循证意图",
        "支持情绪觉察与命名；保留低刺激、无香和退出选项。"
      ]
    ],
    "x": 35,
    "y": 58,
    "pan": "29% 50%",
    "action": "让岛屿再次生长",
    "evidence": {
      "topic": "DBT-A 情绪调节",
      "summary": "参考青少年辩证行为疗法（DBT-A）的情绪调节技能，所引机制研究针对有自伤风险的青少年。绘画和声音用于表达，心率变异性（HRV）为可选生理线索，情绪含义由本人确认。",
      "sources": [clinicalSources.adolescentDbt, clinicalSources.emotionRegulation, clinicalSources.emotionMeasurement, clinicalSources.childHealthcare],
    },
    "film": "03-emotion"
  },
  {
    "name": "生成式成长走廊",
    "loc": "个人岛之后",
    "lead": "同行的形象穿过过去的选择，也在尚未回答的地方停下。",
    "img": "route/03-growth.webp",
    "caption": "时间切片与陪伴形象 · 内容示意",
    "facts": [
      [
        "交互",
        "根据本人认可的线索生成回望与提问，可以停留、修正或略过。"
      ],
      [
        "声音",
        "亲切、克制的同一讲述者；发问后留足空白，环境声随着步伐舒展开。"
      ],
      [
        "方法",
        "叙事回顾与重新表述，AI 不替本人下成长结论。"
      ]
    ],
    "x": 44,
    "y": 48,
    "pan": "42% 50%",
    "action": "唤醒一段时间切片",
    "evidence": {
      "topic": "叙事治疗与经历回顾",
      "summary": "参考叙事治疗中的经历梳理和重新讲述。所引随机试验纳入抑郁伴非自杀性自伤的青少年。AI 依据本人认可的线索提出回顾问题，具体效果待验证。",
      "sources": [clinicalSources.adolescentNarrative],
    },
    "film": "04-growth-corridor-4066"
  },
  {
    "name": "圆桌 VR 剧本体验",
    "loc": "走廊之后 · 团体",
    "lead": "同桌进入一段关系故事；每组的情境与回应都不一样。",
    "img": "route/04-roundtable.webp",
    "caption": "圆桌团体空间 · 概念示意",
    "facts": [
      [
        "生成式剧本",
        "专业人员先确定练习方向，AI 再变化人物、关系和事件。"
      ],
      [
        "空间与交互",
        "环形圆桌、VR 位、带领者观察位；桌边粒子光幕回应靠近和交谈。"
      ],
      [
        "循证意图",
        "借团体行为排演练习倾听、表达与协商；没有胜负和标准答案。"
      ]
    ],
    "x": 53,
    "y": 48,
    "pan": "52% 50%",
    "action": "改写圆桌粒子场",
    "evidence": {
      "topic": "人际技能训练与角色扮演",
      "summary": "参考青少年人际心理治疗技能训练（IPT-AST）的沟通练习和角色扮演，以及儿少社交焦虑 CBT 的社交技能排演。VR 圆桌用于练习倾听、表达与协商，耐受性和效果待验证。个体创伤暴露证据见第 06 站。",
      "sources": [clinicalSources.interpersonalSkills, clinicalSources.socialAnxiety, clinicalSources.vrSafety],
    },
    "film": "05-roundtable"
  },
  {
    "name": "分叉路",
    "loc": "圆桌之后",
    "lead": "更私密的探索，或回到人与人的共创。两条路都可以选择。",
    "img": "route/05-fork.webp",
    "caption": "两种路径最终都回到镜映",
    "facts": [
      [
        "个人岛",
        "可选择 VR 情境练习、舒缓舱或安静停留。"
      ],
      [
        "共创空间",
        "创作作品、与人交流，或只在开放空间观察。"
      ],
      [
        "共同原则",
        "选择可撤回，不把其中一条路径定义成“更好”。"
      ]
    ],
    "x": 62,
    "y": 49,
    "pan": "61% 50%",
    "action": "照亮另一条航线",
    "evidence": {
      "topic": "共同决策",
      "summary": "个人练习与共创均由本人选择，选择可以撤回。两条路径体现儿少就医中尊重本人偏好与参与意愿的原则。",
      "sources": [clinicalSources.childHealthcare],
    },
    "film": "06-branch",
    "silentFilm": true
  },
  {
    "name": "隐秘个人岛",
    "loc": "可选支路 · 私密",
    "lead": "将一个经本人确认的情境放到可以控制的距离。",
    "img": "rest-capsule-research.webp",
    "caption": "低刺激舒缓空间 · 设备概念示意",
    "facts": [
      [
        "VR 情境",
        "仅在专业评估适宜后，由治疗师制定分级情境与退出机制。"
      ],
      [
        "舒缓舱",
        "围合外壳与可调光、声和温度，作为休息和感官适配的选项。设备耐受性待验证。"
      ],
      [
        "专业边界",
        "展示设备不等于已验证本项目疗效。"
      ]
    ],
    "x": 68,
    "y": 28,
    "pan": "68% 30%",
    "action": "调整舒缓节律",
    "evidence": {
      "topic": "创伤治疗与 VR 暴露证据",
      "summary": "儿少创伤后应激障碍（PTSD）的创伤聚焦 CBT 有指南依据。青少年延长暴露（PE-A）试验纳入 13–18 岁性侵相关 PTSD 女孩。所引 VR 暴露研究来自成人军人及退伍军人，儿少 VR 应用待验证。若纳入创伤暴露，需由受训治疗师另行评估与实施。",
      "sources": [clinicalSources.childPtsd, clinicalSources.adolescentExposure, clinicalSources.adultVrExposure, clinicalSources.veteranVrReview],
    }
  },
  {
    "name": "共创空间",
    "loc": "可选支路 · 开放",
    "lead": "个人岛的一部分可以带到共享空间，也可以只与他人并肩创作。",
    "img": "route/07-cocreation.webp",
    "caption": "创作、社交和机器人产品陈列",
    "facts": [
      [
        "可以留下什么",
        "声音、画作和共同改写的岛屿；展示范围由作者决定。"
      ],
      [
        "空间设置",
        "开敞共创桌、可独处边缘、机器人与周边产品展示。"
      ],
      [
        "循证意图",
        "以自愿表达和合作支持人际连接，不强迫分享。"
      ]
    ],
    "x": 69,
    "y": 68,
    "pan": "68% 68%",
    "action": "重新连接共创岛屿",
    "evidence": {
      "topic": "自愿表达与合作",
      "summary": "绘画、声音与合作用于自愿表达，作品展示范围由本人决定。儿少及青年艺术干预的证据确定性有限，共创能否促进人际连接仍待验证。",
      "sources": [clinicalSources.youthArts, clinicalSources.childHealthcare],
    }
  },
  {
    "name": "镜映空间",
    "loc": "两路汇合",
    "lead": "同一形象再次出现，变化由经历和本人认可的细节构成。",
    "img": "route/08-mirror.webp",
    "caption": "入口形象与此刻的自己相遇",
    "facts": [
      [
        "镜面的作用",
        "回看沿途选择，从另一个角度与自己对话。"
      ],
      [
        "身份连续",
        "衣着、发型、代号与入口保持一致；变化不是系统评分。"
      ],
      [
        "方法",
        "自我观察与观点转换，不预设“已经治愈”。"
      ]
    ],
    "x": 78,
    "y": 44,
    "pan": "77% 50%",
    "action": "让镜像回应",
    "evidence": {
      "topic": "ACT 自我观察",
      "summary": "借鉴接纳与承诺疗法（ACT）的认知解离，练习观察自己的想法和感受。青少年 ACT 研究提示心理灵活性与症状改善有关，相关研究偏倚风险较高，虚拟镜映的效果待验证。",
      "sources": [clinicalSources.adolescentAct],
    },
    "film": "07-mirror"
  },
  {
    "name": "回到日常",
    "loc": "镜映之后 · 咖啡角",
    "lead": "在自然光和可交谈的空间里，慢慢回到日常。",
    "img": "route/09-cafe.webp",
    "caption": "镜映之后的缓冲空间 · 概念示意",
    "facts": [
      [
        "空间作用",
        "允许休息、独处或与同伴交谈，平稳衔接沉浸体验与报告展示。"
      ],
      [
        "自主选择",
        "可以直接走向报告厅，不需公开刚才的经历。"
      ],
      [
        "专业边界",
        "这里承担过渡与休息，不将空间氛围本身称为治疗效果。"
      ]
    ],
    "x": 83,
    "y": 64,
    "pan": "81% 60%",
    "action": "让光线回到日常",
    "evidence": {
      "topic": "适龄照护环境",
      "summary": "参照儿少照护环境的安静、舒适与适龄原则，设置可休息、独处或交谈的过渡空间。",
      "sources": [clinicalSources.childHealthcare],
    }
  },
  {
    "name": "报告展示厅",
    "loc": "回到日常之后 · 出口前",
    "lead": "一整面数字墙把航行足迹与专业复核的信息分层呈现。",
    "img": "route/10-report-wall.webp",
    "secondaryImg": "route/10-report-review.webp",
    "caption": "报告数字墙与专业复核视角 · 概念示意",
    "facts": [
      [
        "个人视图",
        "足迹、主动选择、精彩瞬间与下次想探索的方向。"
      ],
      [
        "专业视图",
        "自述、HRV、量表、AI 整理与专业判断分别标明来源和时间。"
      ],
      [
        "既有成果",
        "机器人产品的数据、研究与器械资质单独展示，不混同新空间疗效。"
      ]
    ],
    "x": 88,
    "y": 39,
    "pan": "87% 50%",
    "action": "查看另一层数据",
    "evidence": {
      "topic": "多源评估与专业复核",
      "summary": "自述、量表、生理信号、AI 整理与专业判断分层呈现，分别标注来源和时间。临床判断由专业人员负责。",
      "sources": [clinicalSources.clinicalAssessment, clinicalSources.healthAi],
    },
    "film": "08-report"
  },
  {
    "name": "下一次航程",
    "loc": "出口 · 复访",
    "lead": "同一个人可以带着新的问题回来；世界不必重复上一次的剧情。",
    "img": "voyage-redeparture.webp",
    "caption": "下次到访 · 新岛岸、新角色、新关系",
    "facts": [
      [
        "保留连续性",
        "仅保留本人同意的线索，与专业人员回看现实生活中的体验。"
      ],
      [
        "重新生成",
        "故事、角色、岛岸与团体关系随当下需要重新组合。"
      ],
      [
        "这段航程的意义",
        "留下再次尝试的可能，而非用一次游览写好结局。"
      ]
    ],
    "x": 94,
    "y": 28,
    "pan": "100% 50%",
    "action": "开启新的航程",
    "evidence": {
      "topic": "复访与重复练习",
      "summary": "经本人同意保留相关线索，在新的情境中继续练习。参与度以及技能能否用到日常生活中，仍待项目验证。",
      "sources": [],
    }
  }
];
