"use client"

import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "taosiqmuhammad@gmail.com",
    href: "mailto:taosiqmuhammad@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+90 552 584 3148",
    href: "tel:+90 552 584 3148",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Istanbul, Turkey",
    href: null,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mtaosiq",
    href: "https://www.linkedin.com/in/mtaosiq",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/taosiq",
    href: "https://github.com/taosiq",
  },
]

export function Contact() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="contact" className="py-12 px-6 md:px-12 lg:px-24">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
                Contact
              </h2>
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Let&apos;s Connect
              </p>
            </div>

            <p
              className={`text-muted-foreground text-lg leading-relaxed mb-8 text-pretty transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              I&apos;m actively seeking{" "}
              <span className="text-foreground font-medium">Master&apos;s program opportunities</span>,{" "}
              remote positions, internships, or international collaborations. Whether you have 
              a question, want to discuss a project, or explore opportunities - feel free to reach out!
            </p>

            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button asChild size="lg" className="group">
                <a href="mailto:taosiqmuhammad@gmail.com">
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                  Say Hello
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-500 group ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-foreground hover:text-primary transition-colors font-medium truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium truncate">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
