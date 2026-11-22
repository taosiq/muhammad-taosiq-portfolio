// All the text on the website lives here. Edit this file to update the content;
// the components only handle layout and animation.

import {
  Award,
  Brain,
  Code,
  Database,
  Github,
  Globe,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  School,
  Wrench,
  type LucideIcon,
} from "lucide-react"

export const profile = {
  name: "Muhammad Taosiq",
  initials: "MT",
  title: "Computer Science Graduate & Full-Stack Developer",
  roles: [
    "Full-Stack Developer",
    "AI & Deep Learning Engineer",
    "Mobile App Developer",
    "Automation Builder",
  ],
  photo:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile-1i5BlovhXF3MMYWtthUJm0vG1K2Ffn.jpeg",
  email: "taosiqmuhammad@gmail.com",
  github: "https://github.com/taosiq",
  linkedin: "https://www.linkedin.com/in/mtaosiq",
}

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

export const socialLinks: { icon: LucideIcon; href: string; label: string }[] = [
  { icon: Github, href: profile.github, label: "GitHub" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
]

export const highlights: {
  icon: LucideIcon
  title: string
  value: string
  detail: string
  extra: string
}[] = [
  {
    icon: School,
    title: "Currently",
    value: "MSc Industrial Engineering",
    detail: "Beykent University, Istanbul",
    extra: "Sep 2026 - Present",
  },
  {
    icon: GraduationCap,
    title: "Education",
    value: "BS Computer Science",
    detail: "NUST, Pakistan",
    extra: "Oct 2021 - June 2025",
  },
  {
    icon: Award,
    title: "Scholarship",
    value: "Fully Funded",
    detail: "Allama Iqbal Scholarship",
    extra: "Merit-Based Award",
  },
  {
    icon: Languages,
    title: "IELTS Academic",
    value: "Band 6.5",
    detail: "Speaking: 7.0 | CEFR: B2",
    extra: "Dari (Native), Urdu, English",
  },
]

export const experiences = [
  {
    period: "Jul 2025 - Nov 2025",
    title: "Junior Android Software Developer (Full-Time)",
    company: "Blue Brackets",
    companyUrl: null as string | null,
    location: "Islamabad, Pakistan",
    description: [
      "Developed and maintained Android mobile applications.",
      "Integrated RESTful APIs and backend services.",
      "Troubleshooting, debugging, and optimizing software performance.",
      "Collaborated with cross-functional teams on software development projects.",
      "Assisted in database management and backend development tasks.",
    ],
    technologies: ["Android", "Java", "REST APIs", "Debugging", "Databases"],
  },
  {
    period: "Dec 2023 - Feb 2024",
    title: "Android Application Development Intern",
    company: "Blue Brackets (Internship)",
    companyUrl: null as string | null,
    location: "Islamabad, Pakistan",
    description: [
      "Developed Android applications using Java and Android Studio, gaining hands-on mobile development experience.",
      "Worked in agile team environment, improving problem-solving and communication skills.",
      "Participated in full software development lifecycle including design, testing, and deployment.",
    ],
    technologies: ["Java", "Android Studio", "Agile", "Git"],
  },
]

export type FeaturedProject = {
  slug: string
  title: string
  description: string
  technologies: string[]
  github: string | null
  live: string | null
  context: string
  date: string
  highlight: boolean
  metric?: { value: string; label: string }
  /** optional bullet points, shown under the description */
  bullets?: string[]
}

// To add a project, copy one of these blocks and fill it in.
// The first project is shown as the large card at the top.
export const featuredProjects: FeaturedProject[] = [
  {
    slug: "rehber",
    title: "Rehber: Multilingual AI Support Agent SaaS",
    description:
      "Built a multi-tenant SaaS platform where businesses deploy an AI support agent that answers customers from their own documents (RAG with citations) in 8 languages, including right-to-left Arabic, Persian and Urdu, over a website widget and WhatsApp.",
    bullets: [
      "Designed a LangGraph tool-calling agent that books appointments (two-step confirmation enforced in code), checks order status with identity verification, and hands conversations over to human staff through a live team inbox.",
      "Built an evaluation suite (17 cases in 8 languages: grounding, invented-price, prompt-injection and tool checks) with a 100% pass rate, plus per-business cost and latency analytics (p50/p95) and Langfuse tracing.",
      "Deployed with Docker and GitHub Actions CI (160 automated tests). Security covers tenant isolation, Argon2id, CSRF, rate limiting, SSRF protection, HMAC-verified webhooks and encryption of stored secrets.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "RAG",
      "PostgreSQL + pgvector",
      "Redis",
      "Next.js",
      "WhatsApp Cloud API",
      "Langfuse",
      "Docker",
      "GitHub Actions",
    ],
    github: "https://github.com/taosiq/Rehber",
    live: null,
    context: "AI SaaS Platform, Personal Project",
    date: "November 2026",
    highlight: true,
    metric: { value: "100%", label: "eval pass rate" },
  },
  {
    slug: "ai-trade-journal",
    title: "AI Trade Journal",
    description:
      "AI-powered trading analytics and journaling platform for tracking trades, behavioral patterns, and strategy performance. Built CRUD functionality for trade logging with real-time market data, news aggregation, and interactive analytics dashboards. Integrated Groq LLM for AI-driven trade analysis and discipline scoring, providing actionable insights into trader behavior and risk management. Designed with secure authentication, server-side rendering, responsive UI, and data visualization for performance tracking.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Groq API",
      "Recharts",
      "REST APIs",
    ],
    github: "https://github.com/taosiq",
    live: "https://ai-trade-journal-imsi7elnk-mtaosiqbscs21seecs-1571s-projects.vercel.app/",
    context: "AI-Powered Full-Stack Web Application",
    date: "April 2026",
    highlight: false,
  },
  {
    slug: "skill-exchange",
    title: "Peer-to-Peer Skill Exchange Platform",
    description:
      "A mobile application enabling peer-to-peer skill exchange via a unique time-based credit system. Features secure authentication, interactive dashboard, CRUD operations with REST API integration, responsive UI, and admin panel with role-based access control.",
    technologies: ["React Native", "Node.js", "Firebase", "REST APIs", "Expo"],
    github: "https://github.com/taosiq",
    live: null,
    context: "Final Year Project, NUST",
    date: "May 2025",
    highlight: false,
    metric: { value: "RBAC", label: "admin panel" },
  },
  {
    slug: "brain-tumor-detection",
    title: "Brain Tumor Detection System",
    description:
      "Medical image classification system implementing Transfer Learning with ResNet50 achieving 97.81% validation accuracy and weighted F1-score of 0.99 for MRI brain tumor detection. Engineered preprocessing with OpenCV for tumor isolation.",
    technologies: ["Python", "TensorFlow", "Keras", "ResNet50", "OpenCV"],
    github: "https://github.com/taosiq",
    live: null,
    context: "Deep Learning Project, NUST",
    date: "December 2023",
    highlight: false,
    metric: { value: "97.81%", label: "val. accuracy" },
  },
  {
    slug: "asl-recognition",
    title: "ASL Recognition System",
    description:
      "Real-time computer vision system for American Sign Language recognition. Developed a proprietary ASL dataset using Roboflow and trained YOLOv8s for real-time hand sign recognition with RTX 2060 GPU acceleration.",
    technologies: ["Python", "PyTorch", "YOLOv8", "Roboflow", "Ultralytics"],
    github: "https://github.com/taosiq",
    live: null,
    context: "Computer Vision Project, NUST",
    date: "February 2023",
    highlight: false,
    metric: { value: "YOLOv8s", label: "real-time" },
  },
]

export const otherProjects = [
  {
    title: "Shams Rims Business Website",
    description:
      "Fully responsive business website with modern UI/UX, multi-page navigation, dynamic product catalog with category-based filtering.",
    technologies: ["React.js", "Bootstrap", "CSS3", "React Router"],
    github: null as string | null,
    context: "Freelance Project (USA)",
  },
  {
    title: "Netflix Search Algorithm",
    description:
      "Data structures implementation using Binary Search Trees, Linked Lists, and Hash Tables for efficient content retrieval.",
    technologies: ["C++", "Data Structures", "Algorithms"],
    github: "https://github.com/taosiq" as string | null,
    context: "NUST",
  },
  {
    title: "School Management System",
    description:
      "Full school management with secure CRUD operations, authentication, role-based access, and Tkinter GUI.",
    technologies: ["Python", "MySQL", "Tkinter"],
    github: "https://github.com/taosiq" as string | null,
    context: "NUST",
  },
]

export const skillCategories: { icon: LucideIcon; id: string; title: string; skills: string[] }[] = [
  {
    icon: Code,
    id: "languages",
    title: "Programming Languages",
    skills: ["Java", "Python", "C++", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    icon: Globe,
    id: "web_mobile",
    title: "Web & Mobile",
    skills: ["React Native", "React.js", "Node.js", "Android Studio", "Expo", "Bootstrap"],
  },
  {
    icon: Brain,
    id: "ai_ml",
    title: "AI & Machine Learning",
    skills: ["TensorFlow", "Keras", "PyTorch", "OpenCV", "YOLOv8", "Deep Learning", "Computer Vision"],
  },
  {
    icon: Database,
    id: "data_cloud",
    title: "Databases & Cloud",
    skills: ["MySQL", "Firebase", "REST APIs"],
  },
  {
    icon: Wrench,
    id: "tools",
    title: "Tools & Collaboration",
    skills: ["Git", "GitHub", "VS Code", "PyCharm", "Trello", "Slack", "n8n"],
  },
]

export const certifications: {
  title: string
  issuer: string
  date: string
  score?: string
  details?: string
  certificateNo?: string
  image: string
  verifyUrl: string
}[] = [
  {
    title: "IELTS Academic",
    issuer: "British Council / IDP / Cambridge",
    date: "October 2025",
    score: "Overall Band 6.5",
    details: "Listening: 6.5 | Reading: 6.0 | Writing: 6.0 | Speaking: 7.0 | CEFR: B2",
    // Personal identifiers (passport no., date of birth, candidate & report numbers) are blurred.
    image: "/certificates/ielts-academic.jpg",
    verifyUrl: "https://ielts.org/verify",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "March 2026",
    certificateNo: "4pgztniiw2ox",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Introduction_to_Model_Context_Protocol_Certificate_Anthropic_page-0001-FECMSLY4CNVSerAhJkitjPnY1TwRhW.jpg",
    verifyUrl: "https://verify.skilljar.com/c/4pgztniiw2ox",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "March 2026",
    certificateNo: "5fqhgb4nneu5",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Claude%20Code%20In%20Action%20By%20ANTHROPIC-1-nAvauxlpFKOyZegWdlNSUsAuBlHfzn.png",
    verifyUrl: "https://verify.skilljar.com/c/5fqhgb4nneu5",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: "2026",
    certificateNo: "tca2x72a29e8",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Claude%20101%20By%20Anthropic-1-cPXbtzmvqPCEBPoniF6xocMcUhu0PT.png",
    verifyUrl: "https://verify.skilljar.com/c/tca2x72a29e8",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "March 2026",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intro%20to%20Cyber%20Security%20Certificate-1-XJjYu7ddpIu1YSA7FyUf1vRYNvXMdu.png",
    verifyUrl: "https://www.credly.com/badges/a573595f-4ed0-4809-850a-73181efae260/public_url",
  },
  {
    title: "n8n: No Code AI Agent Builder",
    issuer: "Simplilearn SkillUp",
    date: "April 2026",
    certificateNo: "10079236",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/N8N%20Certificate-dU5Xoyw3gMbRxIhJ2i36YNnc2Q4wiS.png",
    verifyUrl:
      "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0OTUxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTAwNzkyMzZfMTAyNTc5NzRfMTc3NTc0NzYwNzc4Ny5wbmciLCJ1c2VybmFtZSI6Ik11aGFtbWFkIFRhb3NpcSJ9",
  },
  {
    title: "Business Communication and AI for Professionals",
    issuer: "LUMSx, Roshan Kal Academy, LUMS & PepsiCo",
    date: "November 2025",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Buissnes%20%26AI%20FOR%20professionals%20certificate_page-0001-G1LkTzo5dBAkmJUaJLLLtIk1SQ9JN1.jpg",
    verifyUrl: "https://ilmx.org/certificates/a064404add2443df80fad06415415aac",
  },
]

export const contactInfo: { icon: LucideIcon; label: string; value: string; href: string | null }[] = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: "+90 552 584 31 48", href: "tel:+905525843148" },
  { icon: MapPin, label: "Location", value: "Istanbul, Türkiye", href: null },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/mtaosiq", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "github.com/taosiq", href: profile.github },
]
