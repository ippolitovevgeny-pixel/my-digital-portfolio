import { BookOpen, Calendar, ExternalLink, Target, Lightbulb, CheckCircle2, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Security Journal | Learning & Projects Log",
  description: "Documentation of cybersecurity mini-projects, lessons learned, and practical security implementations from LMS coursework.",
  keywords: ["security journal", "cybersecurity projects", "learning log", "security lessons", "hands-on security"],
}

// Security Journal Entries
const journalEntries = [
  {
    id: 1,
    title: "Arcjet Security Integration",
    date: "October 2025",
    category: "API Security",
    status: "Completed",
    tags: ["Rate Limiting", "Bot Detection", "OWASP", "Next.js"],
    projectLink: "https://github.com/ippolitovevgeny-pixel/my-digital-portfolio/blob/main/ARCJET_IMPLEMENTATION.md",
    demoLink: "https://my-digital-portfolio-zeta.vercel.app/api/arcjet",
    description: "Implemented enterprise-grade API protection using Arcjet for this digital portfolio.",
    objectives: [
      "Protect API routes from common attacks",
      "Implement rate limiting to prevent abuse",
      "Block malicious bots and scrapers",
      "Stay within Vercel's Edge Function limits"
    ],
    implementation: [
      "Integrated Arcjet Shield for OWASP Top 10 protection",
      "Configured token bucket rate limiting (5 tokens/10s)",
      "Set up bot detection with configurable allow-lists",
      "Avoided middleware integration due to size constraints"
    ],
    lessonsLearned: [
      {
        lesson: "Edge Function Size Limits",
        description: "Learned that Vercel's free plan has a 1MB limit for Edge Functions. Arcjet dependencies would exceed this in middleware, so implemented protection at the API route level instead.",
        impact: "Critical architectural decision that shaped the security implementation strategy"
      },
      {
        lesson: "Defense in Depth",
        description: "Applying security at multiple layers (API routes, server actions) provides better protection than relying on a single middleware layer.",
        impact: "More granular control over which endpoints receive which types of protection"
      },
      {
        lesson: "Token Bucket Algorithm",
        description: "Token bucket rate limiting is more flexible than fixed window approaches, allowing for burst traffic while still preventing abuse.",
        impact: "Better user experience while maintaining strong security posture"
      },
      {
        lesson: "Bot Allow-Lists",
        description: "Not all bots are malicious - search engines and social media previews need access. Configurable allow-lists are essential.",
        impact: "Balanced security with SEO and social media functionality"
      }
    ],
    challenges: [
      "Initial middleware implementation exceeded Vercel's size limit",
      "Balancing security strictness with user experience",
      "Understanding which bot categories to allow"
    ],
    outcomes: [
      "Successfully deployed API protection without deployment failures",
      "Reduced attack surface for API endpoints",
      "Real-time monitoring via Arcjet dashboard",
      "Documented implementation for future reference"
    ],
    keyTakeaways: "Security implementation requires understanding platform constraints. Always test deployment limits early and design protection strategies that work within those constraints."
  },
  {
    id: 2,
    title: "Clerk Authentication & Authorization",
    date: "October 2025",
    category: "Identity & Access Management",
    status: "Completed",
    tags: ["Authentication", "RBAC", "OAuth", "Session Management"],
    projectLink: "https://github.com/ippolitovevgeny-pixel/my-digital-portfolio/blob/main/middleware.ts",
    demoLink: "https://my-digital-portfolio-zeta.vercel.app/admin",
    description: "Implemented enterprise authentication and role-based access control using Clerk.",
    objectives: [
      "Secure admin and sensitive routes",
      "Implement role-based access control",
      "Provide seamless user authentication experience",
      "Support multiple authentication methods"
    ],
    implementation: [
      "Integrated Clerk middleware for route protection",
      "Protected /admin, /resources, and /projects routes",
      "Configured route matchers to exclude static assets",
      "Set up user roles and permissions"
    ],
    lessonsLearned: [
      {
        lesson: "Middleware Pattern Matching",
        description: "Proper middleware configuration is critical - incorrect matchers can block legitimate traffic or fail to protect sensitive routes.",
        impact: "Learned to carefully test route patterns and use Next.js matcher syntax correctly"
      },
      {
        lesson: "Static Asset Exclusion",
        description: "Authentication middleware must exclude static files to avoid performance issues and unnecessary authentication checks.",
        impact: "Significant performance improvement by excluding images, CSS, JS from auth checks"
      },
      {
        lesson: "Server-Side Authorization",
        description: "Client-side auth checks can be bypassed. Always verify permissions on the server side.",
        impact: "Implemented double-layer protection with both middleware and server-side checks"
      }
    ],
    challenges: [
      "Configuring complex route matchers for protected paths",
      "Balancing security with user experience",
      "Understanding Clerk's authentication flow"
    ],
    outcomes: [
      "Secure authentication system protecting sensitive routes",
      "Clean user experience with social login options",
      "Role-based access control for admin features",
      "Session management with automatic token refresh"
    ],
    keyTakeaways: "Authentication is just the first step - proper authorization and server-side validation are equally important. Never trust client-side security checks alone."
  },
  {
    id: 3,
    title: "Database Security with Neon & Drizzle ORM",
    date: "October 2025",
    category: "Data Security",
    status: "Completed",
    tags: ["PostgreSQL", "ORM", "Encryption", "SQL Injection Prevention"],
    projectLink: "https://github.com/ippolitovevgeny-pixel/my-digital-portfolio/blob/main/lib/db.ts",
    demoLink: null,
    description: "Implemented secure database architecture using Neon serverless PostgreSQL and Drizzle ORM.",
    objectives: [
      "Prevent SQL injection attacks",
      "Encrypt data in transit and at rest",
      "Implement type-safe database queries",
      "Use secure credential management"
    ],
    implementation: [
      "Configured Neon PostgreSQL with TLS 1.3 encryption",
      "Used Drizzle ORM for parameterized queries",
      "Implemented Zod schema validation",
      "Stored credentials in environment variables"
    ],
    lessonsLearned: [
      {
        lesson: "Type-Safe Queries",
        description: "TypeScript + Drizzle ORM provides compile-time safety that catches errors before they reach production.",
        impact: "Eliminated entire classes of bugs and security issues at development time"
      },
      {
        lesson: "Parameterized Queries",
        description: "ORMs automatically use parameterized queries, making SQL injection nearly impossible when used correctly.",
        impact: "Strong protection against one of the most common web vulnerabilities"
      },
      {
        lesson: "Environment Variable Security",
        description: "Never commit credentials to version control. Always use environment variables and .env.local files.",
        impact: "Prevented credential leaks and made multi-environment deployment secure"
      },
      {
        lesson: "Connection Pooling",
        description: "Serverless environments need efficient connection pooling to handle concurrent requests without overwhelming the database.",
        impact: "Neon's built-in pooling prevents connection exhaustion in serverless deployments"
      }
    ],
    challenges: [
      "Understanding serverless database connection patterns",
      "Configuring proper environment variables across environments",
      "Learning Drizzle ORM's TypeScript-first approach"
    ],
    outcomes: [
      "Zero SQL injection vulnerabilities through ORM usage",
      "Type-safe database operations with compile-time checks",
      "Encrypted database connections using TLS 1.3",
      "Secure credential management across environments"
    ],
    keyTakeaways: "Modern ORMs and type systems provide layers of security that go beyond traditional SQL sanitization. Embrace these tools to build secure-by-default applications."
  },
  {
    id: 4,
    title: "Security Plan Documentation",
    date: "October 2025",
    category: "Security Documentation",
    status: "Completed",
    tags: ["Documentation", "Security Architecture", "Compliance", "Best Practices"],
    projectLink: "https://github.com/ippolitovevgeny-pixel/my-digital-portfolio/blob/main/app/security-plan/page.tsx",
    demoLink: "https://my-digital-portfolio-zeta.vercel.app/security-plan",
    description: "Created comprehensive security plan page documenting multi-layered security architecture.",
    objectives: [
      "Document all security controls and measures",
      "Demonstrate security expertise to potential employers",
      "Create reference documentation for future projects",
      "Show compliance with industry standards"
    ],
    implementation: [
      "Documented 4-layer security architecture",
      "Detailed each security control with explanations",
      "Listed compliance standards (OWASP, GDPR, SOC 2, NIST)",
      "Created visual, accessible documentation"
    ],
    lessonsLearned: [
      {
        lesson: "Documentation as Security",
        description: "Good documentation is itself a security control - it ensures team members understand security measures and can maintain them properly.",
        impact: "Created reusable template for documenting security in future projects"
      },
      {
        lesson: "Transparency Builds Trust",
        description: "Being transparent about security measures (without revealing sensitive details) builds trust with users and demonstrates expertise.",
        impact: "Portfolio differentiator that showcases security knowledge"
      },
      {
        lesson: "Defense in Depth Visualization",
        description: "Layered security is easier to understand and audit when documented in clear layers: Edge → Application → Data → Access Control.",
        impact: "Clear mental model for understanding and improving security posture"
      }
    ],
    challenges: [
      "Balancing technical detail with accessibility",
      "Organizing complex security information clearly",
      "Making security documentation visually appealing"
    ],
    outcomes: [
      "Comprehensive security documentation accessible to all visitors",
      "Professional showcase of security implementation",
      "Reusable documentation framework",
      "SEO-optimized security content"
    ],
    keyTakeaways: "Security documentation is an often-overlooked but critical aspect of cybersecurity. Clear documentation helps with maintenance, audits, compliance, and knowledge transfer."
  }
]

export default function SecurityJournalPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-background relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">Learning Journey</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Security Journal
              </h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Documenting hands-on cybersecurity projects, implementations, and lessons learned from real-world security challenges
              </p>
            </div>
          </div>
        </div>
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-10"></div>
      </section>

      {/* Overview Stats */}
      <section className="w-full py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            <Card className="border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-primary">
                  {journalEntries.length}
                </CardTitle>
                <CardDescription>Projects Completed</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-primary">
                  {journalEntries.reduce((acc, entry) => acc + entry.lessonsLearned.length, 0)}
                </CardTitle>
                <CardDescription>Lessons Learned</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-primary">
                  {new Set(journalEntries.flatMap(e => e.tags)).size}
                </CardTitle>
                <CardDescription>Security Topics Covered</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Journal Entries */}
      <section className="w-full py-12 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="space-y-8">
            {journalEntries.map((entry, index) => (
              <Card key={entry.id} className="border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="border-primary text-primary">
                          {entry.category}
                        </Badge>
                        <Badge variant={entry.status === "Completed" ? "default" : "secondary"}>
                          {entry.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl">{entry.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {entry.date}
                      </CardDescription>
                    </div>
                    <div className="flex gap-2">
                      {entry.projectLink && (
                        <a
                          href={entry.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Source Code
                        </a>
                      )}
                      {entry.demoLink && (
                        <a
                          href={entry.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {entry.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Description */}
                  <div>
                    <p className="text-muted-foreground">{entry.description}</p>
                  </div>

                  {/* Objectives */}
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary" />
                      Objectives
                    </h4>
                    <ul className="space-y-1 ml-6">
                      {entry.objectives.map((objective, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          {objective}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Implementation */}
                  <div>
                    <h4 className="font-semibold mb-2">Implementation Details</h4>
                    <ul className="space-y-1 ml-6">
                      {entry.implementation.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Lessons Learned */}
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      Lessons Learned
                    </h4>
                    <div className="space-y-4">
                      {entry.lessonsLearned.map((lesson, i) => (
                        <div key={i} className="space-y-2">
                          <h5 className="font-semibold text-sm text-primary">
                            {i + 1}. {lesson.lesson}
                          </h5>
                          <p className="text-sm text-muted-foreground ml-4">
                            {lesson.description}
                          </p>
                          <p className="text-xs text-muted-foreground ml-4 italic">
                            <strong>Impact:</strong> {lesson.impact}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges */}
                  {entry.challenges.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 text-orange-500" />
                        Challenges Encountered
                      </h4>
                      <ul className="space-y-1 ml-6">
                        {entry.challenges.map((challenge, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            • {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Outcomes */}
                  <div>
                    <h4 className="font-semibold mb-2">Outcomes & Results</h4>
                    <ul className="space-y-1 ml-6">
                      {entry.outcomes.map((outcome, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Takeaways */}
                  <div className="bg-muted rounded-lg p-4 border-l-4 border-primary">
                    <h4 className="font-semibold mb-2 text-sm">Key Takeaway</h4>
                    <p className="text-sm text-muted-foreground italic">
                      "{entry.keyTakeaways}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Principles */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Core Learning Principles</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Fundamental principles that guide my approach to cybersecurity
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Hands-On Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Theory is important, but practical implementation reveals the real challenges. Every project includes actual deployment and testing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Document Everything</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Detailed documentation of implementations, challenges, and lessons learned creates a knowledge base for future reference and sharing.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Embrace Failures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Failed deployments and broken implementations are learning opportunities. Understanding why something didn't work is as valuable as success.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Defense in Depth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Security is never about a single control. Layered protection ensures that if one measure fails, others provide backup security.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Stay Current</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cybersecurity evolves rapidly. Continuous learning, following security advisories, and updating dependencies are essential practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Share Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Security knowledge should be shared. Public documentation, open-source contributions, and teaching others strengthen the entire community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
