"use client"

import { Shield, Lock, Eye, Zap, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SecuritySection() {
  return (
    <section id="security" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Security
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Enterprise-Grade Security
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Multi-layered security architecture protecting this portfolio with industry-leading controls and best practices
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <Card className="relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur transition-all hover:border-primary/40 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Attack Protection</CardTitle>
              <CardDescription>
                Arcjet Shield defends against OWASP Top 10 vulnerabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  SQL injection prevention
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Cross-site scripting (XSS) blocking
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Command injection detection
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur transition-all hover:border-primary/40 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Bot Detection</CardTitle>
              <CardDescription>
                Advanced detection blocks malicious automated traffic
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Scraper and crawler identification
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Credential stuffing prevention
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Automated attack blocking
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur transition-all hover:border-primary/40 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Rate Limiting</CardTitle>
              <CardDescription>
                Token bucket algorithm prevents API abuse and DoS attacks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Request throttling per user
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Resource exhaustion protection
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Distributed denial-of-service mitigation
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-primary/20 bg-background/50 backdrop-blur transition-all hover:border-primary/40 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Authentication & Access Control</CardTitle>
              <CardDescription>
                Enterprise authentication with role-based permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Clerk authentication integration
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Role-based access control (RBAC)
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Secure session management
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <Link href="/security-plan">
            <Button size="lg" className="group">
              View Complete Security Plan
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
