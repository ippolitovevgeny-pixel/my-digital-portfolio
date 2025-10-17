"use client"

import { useInView } from "@/hooks/use-in-view"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "ICT Customer Support Specialist",
    company: "Infonet Solutions NZ Limited",
    location: "Auckland",
    period: "2023 – Present",
    description:
      "Monitoring, troubleshooting, administration, ticket management and dedicated remote assistance for enterprise clients.",
  },
  {
    title: "Food & Beverage Attendant",
    company: "Crowne Plaza",
    location: "Auckland",
    period: "2014 – 2020",
    description: "Banquets & Conference Attendant, Bartender, Room Setup, Waiter / IRD service.",
  },
  {
    title: "Food & Beverage Attendant",
    company: "Botswana Butchery & Copthorne Hotel",
    location: "Queenstown",
    period: "2012",
    description: "Banquets & Conference Attendant in premium hospitality venues.",
  },
  {
    title: "Commis Chef",
    company: "Dikanka Restaurant",
    location: "Magnitogorsk, Russia",
    period: "2011",
    description: "Food preparation and kitchen operations in traditional Russian restaurant.",
  },
  {
    title: "Car Driver",
    company: "Military Service",
    location: "Yekaterinburg, Russia",
    period: "2009 – 2010",
    description: "Military service as vehicle operator.",
  },
]

export function ExperienceSection() {
  const [ref, isInView] = useInView()

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-5xl font-bold mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative mb-12 transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-x-0"
                    : idx % 2 === 0
                      ? "opacity-0 -translate-x-10"
                      : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className={`md:flex ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}>
                  <div className="md:w-1/2" />

                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                  <div className="md:w-1/2 ml-8 md:ml-0">
                    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {exp.location} • {exp.period}
                      </p>
                      <p className="text-muted-foreground">{exp.description}</p>
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
