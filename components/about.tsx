"use client"

import { Award, GraduationCap, Languages, Target } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const highlights = [
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
  {
    icon: Target,
    title: "Objective",
    value: "Masters Abroad",
    detail: "Open to Remote Opportunities",
    extra: "",
  },
]

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-12 px-6 md:px-12 lg:px-24">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            About
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-balance">
            Passionate about building impactful technology
          </p>
        </div>
        
        <div
          className={`space-y-5 text-muted-foreground leading-relaxed transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-pretty">
            I am a Computer Science graduate from the{" "}
            <span className="text-foreground font-medium">
              National University of Sciences and Technology (NUST)
            </span>
            , Pakistan. I was honored to receive a{" "}
            <span className="text-primary font-medium">
              Fully Funded Allama Iqbal Scholarship
            </span>{" "}
            for my undergraduate studies, recognizing academic excellence.
          </p>
          
          <p className="text-pretty">
            My expertise spans{" "}
            <span className="text-foreground">Deep Learning & Computer Vision</span>,{" "}
            <span className="text-foreground">Full-Stack Web Development</span>, and{" "}
            <span className="text-foreground">Mobile App Development</span>. I have a strong 
            interest in workflow automation, API integration, and emerging AI technologies.
          </p>

          <p className="text-pretty">
            Currently pursuing my{" "}
            <span className="text-primary font-medium">Master&apos;s in Industrial Engineering at Istanbul Beykent University</span>
            , while actively seeking{" "}
            <span className="text-primary font-medium">software development internships and part-time roles in Istanbul</span>
            {" "}— open to Android, full-stack, and AI-driven projects where I can contribute from day one and grow into a full-time role.
          </p>       
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`p-5 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 group hover:shadow-lg hover:shadow-primary/5 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <item.icon className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
              <p className="text-sm text-primary font-medium">{item.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
              <p className="text-xs text-muted-foreground">{item.extra}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
