"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    title: "IELTS Academic",
    issuer: "British Council / IDP / Cambridge",
    date: "October 2025",
    score: "Overall Band 6.5",
    details: "Listening: 6.5 | Reading: 6.0 | Writing: 6.0 | Speaking: 7.0 | CEFR: B2",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Muhammad%20Taosiq%20IELTS-1-xlM9fKFgVXavJT904IyhkBzwb4QqNN.png",
    verifyUrl: "https://ielts.org/verify",
  },
  {
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    date: "March 2026",
    certificateNo: "4pgztniiw2ox",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Introduction_to_Model_Context_Protocol_Certificate_Anthropic_page-0001-FECMSLY4CNVSerAhJkitjPnY1TwRhW.jpg",
    verifyUrl: "https://verify.skilljar.com/c/4pgztniiw2ox",
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "March 2026",
    certificateNo: "5fqhgb4nneu5",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Claude%20Code%20In%20Action%20By%20ANTHROPIC-1-nAvauxlpFKOyZegWdlNSUsAuBlHfzn.png",
    verifyUrl: "https://verify.skilljar.com/c/5fqhgb4nneu5",
  },
  {
    title: "Claude 101",
    issuer: "Anthropic",
    date: "2026",
    certificateNo: "tca2x72a29e8",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Claude%20101%20By%20Anthropic-1-cPXbtzmvqPCEBPoniF6xocMcUhu0PT.png",
    verifyUrl: "https://verify.skilljar.com/c/tca2x72a29e8",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "March 2026",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intro%20to%20Cyber%20Security%20Certificate-1-XJjYu7ddpIu1YSA7FyUf1vRYNvXMdu.png",
    verifyUrl: "https://www.credly.com/badges/a573595f-4ed0-4809-850a-73181efae260/public_url",
  },
  {
    title: "n8n: No Code AI Agent Builder",
    issuer: "Simplilearn SkillUp",
    date: "April 2026",
    certificateNo: "10079236",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/N8N%20Certificate-dU5Xoyw3gMbRxIhJ2i36YNnc2Q4wiS.png",
    verifyUrl: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0OTUxIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvMTAwNzkyMzZfMTAyNTc5NzRfMTc3NTc0NzYwNzc4Ny5wbmciLCJ1c2VybmFtZSI6Ik11aGFtbWFkIFRhb3NpcSJ9",
  },
  {
    title: "Business Communication and AI for Professionals",
    issuer: "LUMSx, Roshan Kal Academy, LUMS & PepsiCo",
    date: "November 2025",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Buissnes%20%26AI%20FOR%20professionals%20certificate_page-0001-G1LkTzo5dBAkmJUaJLLLtIk1SQ9JN1.jpg",
    verifyUrl: "https://ilmx.org/certificates/a064404add2443df80fad06415415aac",
  },
]

export function Certifications() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="certifications" className="py-12 px-6 md:px-12 lg:px-24 bg-card/30">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-2">
            Certifications
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-balance">
            Professional Credentials & Achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{cert.date}</span>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Verify <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                {cert.score && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-sm font-medium text-primary">{cert.score}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.details}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
