"use client"

import { useInView } from "@/hooks/use-in-view"
import { GraduationCap } from "lucide-react"
import { Card } from "@/components/ui/card"

const education = [
  {
    degree: "Bachelor of Applied IT in Network Engineering",
    institution: "Whitecliffe College",
    location: "Christchurch, New Zealand",
    period: "2021-2023",
  },
  {
    degree: "Diploma of Hospitality Management",
    institution: "Queenstown Resort College",
    location: "Queenstown, New Zealand",
    period: "2012-2014",
  },
  {
    degree: "Catering Technologist",
    institution: "Trade & Economics College",
    location: "Magnitogorsk, Russia",
    period: "2005-2009",
  },
]

export function EducationSection() {
  const [ref, isInView] = useInView()

  return (
    <section id="education" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-5xl font-bold mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Education
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {education.map((edu, idx) => (
            <Card
              key={idx}
              className={`p-6 hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
