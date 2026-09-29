"use client"

import { ExternalLink, Github, Folder, ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const featuredProjects = [
  {
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
    highlight: true,
  },
  {
    title: "Peer-to-Peer Skill Exchange Platform",
    description:
      "A mobile application enabling peer-to-peer skill exchange via a unique time-based credit system. Features secure authentication, interactive dashboard, CRUD operations with REST API integration, responsive UI, and admin panel with role-based access control.",
    technologies: ["React Native", "Node.js", "Firebase", "REST APIs", "Expo"],
    github: "https://github.com/taosiq",
    live: null,
    context: "Final Year Project, NUST",
    date: "May 2025",
    highlight: false,
  },
  {
    title: "Brain Tumor Detection System",
    description:
      "Medical image classification system implementing Transfer Learning with ResNet50 achieving 97.81% validation accuracy and weighted F1-score of 0.99 for MRI brain tumor detection. Engineered preprocessing with OpenCV for tumor isolation.",
    technologies: ["Python", "TensorFlow", "Keras", "ResNet50", "OpenCV"],
    github: "https://github.com/taosiq",
    live: null,
    context: "Deep Learning Project, NUST",
    date: "December 2023",
    highlight: false,
  },
  {
    title: "ASL Recognition System",
    description:
      "Real-time computer vision system for American Sign Language recognition. Developed a proprietary ASL dataset using Roboflow and trained YOLOv8s for real-time hand sign recognition with RTX 2060 GPU acceleration.",
    technologies: ["Python", "PyTorch", "YOLOv8", "Roboflow", "Ultralytics"],
    github: "https://github.com/taosiq",
    live: null,
    context: "Computer Vision Project, NUST",
    date: "February 2023",
    highlight: false,
  },
]

const otherProjects = [
  {
    title: "Shams Rims Business Website",
    description:
      "Fully responsive business website with modern UI/UX, multi-page navigation, dynamic product catalog with category-based filtering.",
    technologies: ["React.js", "Bootstrap", "CSS3", "React Router"],
    github: null,
    context: "Freelance Project (USA)",
  },
  {
    title: "Netflix Search Algorithm",
    description:
      "Data structures implementation using Binary Search Trees, Linked Lists, and Hash Tables for efficient content retrieval.",
    technologies: ["C++", "Data Structures", "Algorithms"],
    github: "https://github.com/taosiq",
    context: "NUST",
  },
  {
    title: "School Management System",
    description:
      "Full school management with secure CRUD operations, authentication, role-based access, and Tkinter GUI.",
    technologies: ["Python", "MySQL", "Tkinter"],
    github: "https://github.com/taosiq",
    context: "NUST",
  },
]

export function Projects() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="projects" className="py-12 px-6 md:px-12 lg:px-24">
      <div ref={ref} className="max-w-5xl mx-auto">

        {/* Section Heading */}
        <div
          className={`transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Projects
          </h2>

          <p className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-balance">
            Featured Work & Technical Projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-6 mb-10">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">

                <div className="flex-1">

                  {/* Project Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs text-muted-foreground">
                      {project.date}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      |
                    </span>

                    <span className="text-xs text-primary">
                      {project.context}
                    </span>

                    {project.highlight && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-3 shrink-0">

                  {/* GitHub */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}

                  {/* Live Website */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/live relative flex items-center gap-2 px-4 h-10 rounded-lg bg-primary text-primary-foreground text-sm font-medium shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
                      aria-label={`View ${project.title} live website`}
                    >
                      <span className="relative z-10">
                        Live Demo
                      </span>

                      <ExternalLink className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />

                      {/* Glow Effect */}
                      <span className="absolute inset-0 rounded-lg bg-primary opacity-0 group-hover/live:opacity-30 blur-md transition-opacity duration-300" />
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Heading */}
        <div
          className={`transition-all duration-700 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-foreground font-semibold mb-6 flex items-center gap-2">
            <Folder className="w-5 h-5 text-primary" />
            Other Noteworthy Projects
          </h3>
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className={`p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >

              {/* Card Header */}
              <div className="flex items-center justify-between mb-3">
                <Folder className="w-8 h-8 text-primary" />

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                )}
              </div>

              {/* Title */}
              <h4 className="text-foreground font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-3">
                {project.description}
              </p>

              {/* Context */}
              <p className="text-xs text-muted-foreground mb-3">
                {project.context}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
