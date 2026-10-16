export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} 个项目`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "内容策划与达人传播",
        "tagline": "用户洞察｜选题策划｜达人匹配｜AI辅助研究",
        "items": [
          {
            "name": "AI资讯产品内容与达人传播",
            "meta": "AI Content Planning & Creator Collaboration",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "洞察与选题：反馈及价格调研转为产品卖点",
              "内容与达人：100+条内容，按画像筛选博主",
              "AI辅助：反馈归类、轻量看板与原始数据复核",
              "传播复盘：注册较前周+50%，首次专题创建率相对约+15%"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "用户研究与内容营销",
        "tagline": "教育场景｜产品内容｜高校活动｜反馈迭代",
        "items": [
          {
            "name": "AI教育产品内容营销与活动协作",
            "meta": "AI Education Content Marketing & Event Collaboration",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "场景调研：100+条反馈提炼需求与使用障碍",
              "内容建设：30+篇指南、FAQ及场景案例",
              "协作落地：高校宣讲体验、物料与海外对接",
              "反馈迭代：10条建议，期间核心功能使用率+30%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "新品卖点与社媒制作",
        "tagline": "消费者洞察｜英文内容｜渠道协作｜每周复盘",
        "items": [
          {
            "name": "ZUS Coffee新品内容与渠道传播",
            "meta": "ZUS Coffee Launch Content & Channel Communication",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "新品调研：用户偏好、互动反馈与竞品内容",
              "内容执行：50条Instagram内容及拍摄剪辑",
              "渠道协作：线上首发与FamilyMart传播素材",
              "迭代结果：15+次复盘，协同粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "Project details",
    "phImageLabel": "Project preview",
    "phButtonLabel": "Open project",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "Content & Creator Collaboration",
        "tagline": "Insights · Topics · Creator Matching · AI Research",
        "items": [
          {
            "name": "AI Information Content & Creator Collaboration",
            "meta": "User Insights, Content, Distribution & Review",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "Insights: feedback and pricing research informed messages",
              "Content: 100+ posts and audience-based creator screening",
              "AI: feedback classification, dashboard and source checks",
              "Review: registrations +50% vs prior week; first-topic rate approximately +15% relatively"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "User Research & Content Marketing",
        "tagline": "Education Use Cases · Content · Events · Iteration",
        "items": [
          {
            "name": "AI Education Content Marketing & Event Collaboration",
            "meta": "From User Questions to Content and University Trials",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "Research: classified 100+ feedback items",
              "Content: 30+ guides, FAQs and use cases",
              "Delivery: university trials, materials and overseas coordination",
              "Iteration: 10 suggestions; core-feature usage +30% during the period"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "Launch Messages & Social Production",
        "tagline": "Consumer Insights · English Content · Channels · Reviews",
        "items": [
          {
            "name": "ZUS Coffee Launch Content & Channel Communication",
            "meta": "Product Messages, Instagram and Retail Communication",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "Research: audience preferences, engagement and competitors",
              "Content: 50 Instagram posts, shooting and editing",
              "Channels: online launch and FamilyMart materials",
              "Iteration: 15+ reviews; contributed to 11k+ follower growth"
            ]
          }
        ]
      }
    ]
  }
}

export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
