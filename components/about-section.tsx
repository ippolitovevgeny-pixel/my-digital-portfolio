"use client"

import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const [ref, isInView] = useInView()

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-accent/30">
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">About Me</h2>

          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am a dedicated, self-motivated person with a positive attitude for the information technology industry.
              I am assured that my previous hospitality industry experience suits my character – I am always motivated
              to grasp opportunities to expand my skills and knowledge further.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              Originally from Russia, I came to New Zealand to study hospitality management at Queenstown Resort
              College, which has a great reputation for excellent quality standards. In 2023, I completed my Bachelor of
              Applied IT in Network Engineering at Whitecliffe College in Christchurch as I decided to change my career
              path.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              I am currently employed full-time as an ICT Customer Support Specialist at Infonet Solutions NZ Limited.
              My daily duties involve monitoring, troubleshooting, administration, ticket management, and dedicated
              remote assistance. I am keen to bring my enthusiasm and motivation along with a strong eye for industry
              expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
