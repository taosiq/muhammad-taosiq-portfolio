"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code, Globe, Brain, Database, Wrench } from "lucide-react"

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Java", "Python", "C++", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    icon: Globe,
    title: "Web & Mobile",
    skills: ["React Native", "React.js", "Node.js", "Android Studio", "Expo", "Bootstrap"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: [
      "TensorFlow",
      "Keras",
      "PyTorch",
      "OpenCV",
      "YOLOv8",
      "Deep Learning",
      "Computer Vision",
    ],
  },
  {
    icon: Database,
    title: "Databases & Cloud",
    skills: ["MySQL", "Firebase", "REST APIs"],
  },
  {
    icon: Wrench,
    title: "Tools & Collaboration",
    skills: ["Git", "GitHub", "VS Code", "PyCharm", "Trello", "Slack", "n8n"],
  },
]

export function Skills() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="skills" className="py-12 px-6 md:px-12 lg:px-24 bg-card/30">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Skills
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-balance">
            Technical Expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-lg hover:shadow-primary/5 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md border border-border hover:border-primary/50 hover:text-primary transition-all cursor-default ${
                      isVisible ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100 + skillIndex * 30}ms` }}
                  >
                    {skill}
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
