"use client"

import { useInView } from "@/hooks/use-in-view"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ContactSection() {
  const [ref, isInView] = useInView()

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-5xl font-bold mb-12 text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card
            className={`p-8 transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg text-center text-muted-foreground mb-8">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
              and innovation.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:ippolitovevgeny@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-all hover:scale-105"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">ippolitovevgeny@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:0291280142"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-all hover:scale-105"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">029 128 01 42</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">88 Cook Street, Auckland 1010</p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/evgeny-ippolitov-16624423b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-all hover:scale-105"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">Connect with me</p>
                </div>
              </a>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Evgeny Ippolitov. Built with Next.js and deployed on Vercel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
