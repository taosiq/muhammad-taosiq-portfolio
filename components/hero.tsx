"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 relative overflow-hidden"
    >
      {/* Subtle animated background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-balance transition-all duration-700 delay-100 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Muhammad Taosiq
            </h1>

            <p
              className={`text-xl md:text-2xl text-primary font-medium mb-6 transition-all duration-700 delay-200 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Computer Science Graduate & Full-Stack Developer
            </p>

            <p
              className={`text-muted-foreground text-lg leading-relaxed max-w-2xl mb-6 text-pretty transition-all duration-700 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              I build accessible, pixel-perfect digital experiences for the
              web. Specializing in{" "}
              <span className="text-foreground font-medium">
                AI & Deep Learning
              </span>
              ,{" "}
              <span className="text-foreground font-medium">
                Full-Stack Development
              </span>
              , and{" "}
              <span className="text-foreground font-medium">
                Mobile Applications
              </span>
              .
            </p>

            <p
              className={`text-muted-foreground leading-relaxed max-w-2xl mb-8 text-pretty transition-all duration-700 delay-400 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Currently pursuing a{" "}
              <span className="text-primary font-medium">
                Master&apos;s in Industrial Engineering at Istanbul Beykent
                University
              </span>
              , while seeking{" "}
              <span className="text-primary font-medium">
                part-time opportunities
              </span>{" "}
              in software development, IT, automation, and technology.
            </p>

            <div
              className={`flex flex-wrap gap-4 mb-8 transition-all duration-700 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Button asChild className="group">
                <a href="#projects">
                  View Projects
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    &rarr;
                  </span>
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>

              <Button variant="ghost" asChild>
                <a href="#certifications" className="gap-2">
                  <Download className="w-4 h-4" />
                  Certifications
                </a>
              </Button>
            </div>

            <div
              className={`flex items-center gap-6 transition-all duration-700 delay-600 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="https://github.com/taosiq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/mtaosiq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="mailto:taosiqmuhammad@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ${
              isLoaded
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 to-primary/20 rounded-full blur-md opacity-60" />

              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile-1i5BlovhXF3MMYWtthUJm0vG1K2Ffn.jpeg"
                  alt="Muhammad Taosiq"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 288px"
                />
              </div>

              {/* Decorative ring */}
              <div className="absolute -inset-4 border-2 border-primary/10 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <a
          href="#about"
          className={`text-muted-foreground hover:text-primary transition-all ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
