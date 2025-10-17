"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Network Monitoring Dashboard",
    description:
      "Real-time network monitoring system with alert management and performance analytics for enterprise infrastructure.",
    tags: ["System Admin", "Networking", "Monitoring"],
    link: "#",
  },
  {
    title: "IT Support Ticketing System",
    description:
      "Custom ticketing platform for managing customer support requests with automated routing and SLA tracking.",
    tags: ["Web Development", "Database", "Automation"],
    link: "#",
  },
  {
    title: "Hospitality Management Suite",
    description:
      "Comprehensive management system for restaurant operations including inventory, scheduling, and customer service.",
    tags: ["Full Stack", "Management", "Integration"],
    link: "#",
  },
  {
    title: "Network Security Audit Tool",
    description:
      "Automated security assessment tool for identifying vulnerabilities in network infrastructure and generating reports.",
    tags: ["Security", "Networking", "Python"],
    link: "#",
  },
  {
    title: "Remote Desktop Support Platform",
    description:
      "Secure remote assistance platform enabling efficient troubleshooting and system administration for distributed teams.",
    tags: ["Remote Support", "Security", "Real-time"],
    link: "#",
  },
  {
    title: "Asset Management System",
    description:
      "IT asset tracking and lifecycle management system with automated inventory updates and maintenance scheduling.",
    tags: ["Database", "Automation", "Reporting"],
    link: "#",
  },
]

export function ProjectsSection() {
  const [ref, isInView] = useInView()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-5xl font-bold mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Projects & Portfolio
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`p-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <ExternalLink
                  className={`h-5 w-5 text-primary transition-transform duration-300 ${
                    hoveredProject === idx ? "translate-x-1 -translate-y-1" : ""
                  }`}
                />
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
