"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Professional Skills",
    skills: [
      "Analytical Skills",
      "Advance Planning",
      "Leadership",
      "Creative Strategic Direction",
      "Marketing",
      "Innovative",
      "Risk Analysis",
      "Complex Problem Solver",
      "Training",
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      "Microsoft Office Suite",
      "System Administration",
      "Networking",
      "Adobe Photoshop",
      "Troubleshooting",
      "Programming",
      "Web Development",
    ],
  },
  {
    title: "Languages",
    skills: ["Russian (Native)", "English (Fluent)"],
  },
]

export function SkillsSection() {
  const [ref, isInView] = useInView()
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-5xl font-bold mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <Card
              key={category.title}
              className={`p-6 hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 transition-all duration-300 cursor-default ${
                      hoveredSkill === skill ? "bg-primary text-primary-foreground scale-110" : ""
                    }`}
                  >
                    {skill}
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
