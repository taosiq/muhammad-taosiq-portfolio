"use client"

import { ExternalLink, Briefcase } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const experiences = [
  {
    period: "Jul 2025 - Nov 2025",
    title: "Junior Android Software Developer",
    company: "Blue Brackets",
    companyUrl: null,
    location: "Islamabad, Pakistan",
    description: [
      "Developed and maintained Android mobile applications.",
      "Integrated RESTful APIs and backend services.",
      "Troubleshot, debugged, and optimized software performance.",
      "Collaborated with cross-functional teams on software development projects.",
      "Assisted in database management and backend development tasks.",
    ],
    technologies: ["Java", "Android Studio", "REST APIs", "Git"],
  },
  {
    period: "Dec 2023 - Feb 2024",
    title: "Android Application Development Intern",
    company: "Blue Brackets",
    companyUrl: null,
    location: "Islamabad, Pakistan",
    description: [
      "Developed Android applications using Java and Android Studio, gaining hands-on mobile development experience.",
      "Worked in agile team environment, improving problem-solving and communication skills.",
      "Participated in full software development lifecycle including design, testing, and deployment.",
    ],
    technologies: ["Java", "Android Studio", "Agile", "Git"],
  },
]

export function Experience() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="experience" className="py-12 px-6 md:px-12 lg:px-24 bg-card/30">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Experience
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-balance">
            Professional Journey
          </p>
        </div>

        <div className="relative">
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="text-sm text-muted-foreground shrink-0 md:w-44 md:text-right">
                    <p className="font-medium">{exp.period}</p>
                  </div>
                  <div className="relative flex-1">
                    {/* Timeline dot */}
                    <div className="absolute left-[-20px] top-1.5 w-3 h-3 bg-primary rounded-full hidden md:block" />
                    {/* Timeline line */}
                    <div className="absolute left-[-17px] top-5 bottom-[-40px] w-px bg-border hidden md:block" />
                    <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all group-hover:shadow-lg group-hover:shadow-primary/5">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 flex-wrap">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium flex items-center gap-1">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline inline-flex items-center gap-1"
                            >
                              {exp.company}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            exp.company
                          )}
                        </p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 text-muted-foreground mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm leading-relaxed flex gap-3">
                          <span className="text-primary mt-0.5 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
