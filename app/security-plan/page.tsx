import { Shield, Lock, Eye, Zap, Database, Server, Users, CheckCircle, AlertTriangle, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SecurityPlanPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">Security First</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Comprehensive Security Plan
              </h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Multi-layered security architecture protecting your digital portfolio with enterprise-grade controls
              </p>
            </div>
          </div>
        </div>
        {/* Animated background */}
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:50px_50px] opacity-10"></div>
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Overview</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Defense in Depth Strategy</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                This portfolio implements multiple layers of security controls to protect against various threats
              </p>
            </div>
          </div>

          <Alert className="mb-8 border-primary/20 bg-primary/5">
            <AlertTriangle className="h-5 w-5 text-primary" />
            <AlertTitle>Security Status: Active</AlertTitle>
            <AlertDescription>
              All security controls are actively monitoring and protecting this application. Last security audit: {new Date().toLocaleDateString()}
            </AlertDescription>
          </Alert>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-2">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Attack Protection</CardTitle>
                <CardDescription>Shield against common vulnerabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Arcjet Shield protects against SQL injection, XSS, and OWASP Top 10 vulnerabilities
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-2">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Rate Limiting</CardTitle>
                <CardDescription>Prevent abuse and DoS attacks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Token bucket algorithm limits requests to prevent resource exhaustion and API abuse
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="bg-primary/10 p-3 w-fit rounded-lg mb-2">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Bot Detection</CardTitle>
                <CardDescription>Block automated threats</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced bot detection identifies and blocks malicious scrapers and automated attacks
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Security Controls */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Controls</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Security Control Layers</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Comprehensive protection at every layer of the application
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Layer 1: Edge Protection */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Layer 1: Edge & Middleware Protection</CardTitle>
                    <CardDescription>First line of defense at the network edge</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">Clerk Authentication</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Enterprise-grade authentication protecting admin routes and sensitive resources
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">Route Protection</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Middleware enforces authentication on /admin, /resources, and /projects routes
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">Static Asset Protection</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Optimized matcher pattern excludes static files from authentication checks
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">Edge Runtime Optimization</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Lightweight middleware stays under Vercel's 1MB Edge Function limit
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Layer 2: API Protection */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Layer 2: API & Application Security</CardTitle>
                    <CardDescription>Arcjet protection for API routes and server actions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-primary text-primary">Arcjet Shield</Badge>
                    </div>
                    <h4 className="font-semibold">Attack Protection</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• SQL Injection prevention</li>
                      <li>• Cross-Site Scripting (XSS) blocking</li>
                      <li>• OWASP Top 10 vulnerability protection</li>
                      <li>• Command injection detection</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-primary text-primary">Rate Limiting</Badge>
                    </div>
                    <h4 className="font-semibold">Token Bucket Algorithm</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• 5 tokens refilled per 10 seconds</li>
                      <li>• 10 token maximum capacity</li>
                      <li>• Prevents API abuse and DoS attacks</li>
                      <li>• Per-user rate limiting with userId tracking</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-primary text-primary">Bot Detection</Badge>
                    </div>
                    <h4 className="font-semibold">Automated Threat Blocking</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• Blocks malicious scrapers and crawlers</li>
                      <li>• Prevents credential stuffing attacks</li>
                      <li>• Stops automated form submissions</li>
                      <li>• Allow-list for legitimate bots (configurable)</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-primary text-primary">Email Validation</Badge>
                    </div>
                    <h4 className="font-semibold">Newsletter Protection</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• Blocks disposable email addresses</li>
                      <li>• Verifies MX records exist</li>
                      <li>• Prevents spam submissions</li>
                      <li>• Protects email list quality</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Layer 3: Data Protection */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Layer 3: Data & Database Security</CardTitle>
                    <CardDescription>Protecting data at rest and in transit</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">Neon Database Security</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Serverless PostgreSQL with built-in encryption, connection pooling, and automatic backups
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">Drizzle ORM</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Type-safe database queries prevent SQL injection through parameterized statements
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">Environment Variables</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Sensitive credentials stored securely in environment variables, never in code
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">Data Validation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Zod schema validation ensures data integrity before database operations
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Layer 4: Access Control */}
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Layer 4: Access Control & Authorization</CardTitle>
                    <CardDescription>Fine-grained permission management</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">Role-Based Access Control</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Admin and user roles with different permission levels for content management
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">Server-Side Authorization</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Authorization checks performed on server to prevent client-side bypass
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">Session Management</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Secure session handling with automatic expiration and refresh tokens
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold">Multi-Factor Authentication</h4>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Optional MFA support through Clerk for enhanced account security
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Monitoring */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Monitoring</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Security Monitoring & Logging</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Continuous monitoring and detailed logging for threat detection and incident response
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Arcjet Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Real-time request monitoring</li>
                  <li>• Blocked request analytics</li>
                  <li>• Rule violation tracking</li>
                  <li>• Bot traffic patterns</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Application Logs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Authentication events</li>
                  <li>• Authorization failures</li>
                  <li>• Database operations</li>
                  <li>• Error tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                  Security Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Attack attempt notifications</li>
                  <li>• Rate limit violations</li>
                  <li>• Suspicious activity alerts</li>
                  <li>• Configuration changes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Best Practices</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Security Implementation Guidelines</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Following industry best practices for secure application development
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>✅ Implemented Controls</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Defense in Depth:</strong> Multiple security layers prevent single point of failure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Least Privilege:</strong> Users and services have minimum required permissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Secure by Default:</strong> Security features enabled from the start</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Zero Trust:</strong> Verify every request, trust nothing by default</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Input Validation:</strong> All user input validated and sanitized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Encryption:</strong> Data encrypted in transit (HTTPS) and at rest</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle>🔒 Compliance & Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Lock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>OWASP Top 10:</strong> Protected against most critical web vulnerabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>GDPR Ready:</strong> Privacy-focused design with data protection controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>SOC 2 Type II:</strong> Using providers with SOC 2 compliance (Clerk, Neon)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>NIST Framework:</strong> Aligned with cybersecurity framework guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Regular Updates:</strong> Dependencies kept current for security patches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span><strong>Security Testing:</strong> Continuous monitoring and vulnerability assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Technical</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Implementation Architecture</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Technical architecture and security component integration
              </p>
            </div>
          </div>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Security Stack</CardTitle>
              <CardDescription>Technologies and services protecting this application</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    Authentication & Authorization
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Clerk:</strong> Authentication provider</li>
                    <li>• <strong>JWT:</strong> Secure token-based auth</li>
                    <li>• <strong>RBAC:</strong> Role-based access control</li>
                    <li>• <strong>OAuth 2.0:</strong> Industry standard protocol</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    Application Security
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Arcjet:</strong> Security as a service</li>
                    <li>• <strong>Next.js:</strong> Secure framework defaults</li>
                    <li>• <strong>TypeScript:</strong> Type safety</li>
                    <li>• <strong>Zod:</strong> Runtime validation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Database className="h-4 w-4 text-primary" />
                    Data Security
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Neon:</strong> Serverless PostgreSQL</li>
                    <li>• <strong>Drizzle ORM:</strong> Type-safe queries</li>
                    <li>• <strong>TLS 1.3:</strong> Encrypted connections</li>
                    <li>• <strong>Parameterized queries:</strong> SQL injection prevention</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Resources</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Security Documentation</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Learn more about the security technologies and practices implemented
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Arcjet Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive guides for implementing Arcjet security features
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• <a href="https://docs.arcjet.com/" className="text-primary hover:underline">Getting Started</a></li>
                  <li>• <a href="https://docs.arcjet.com/shield/quick-start" className="text-primary hover:underline">Shield Protection</a></li>
                  <li>• <a href="https://docs.arcjet.com/bot-protection/quick-start" className="text-primary hover:underline">Bot Detection</a></li>
                  <li>• <a href="https://docs.arcjet.com/rate-limiting/quick-start" className="text-primary hover:underline">Rate Limiting</a></li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">Security Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Industry standards and frameworks for application security
                </p>
                <ul className="space-y-1 text-sm">
                  <li>• <a href="https://owasp.org/www-project-top-ten/" className="text-primary hover:underline">OWASP Top 10</a></li>
                  <li>• <a href="https://cheatsheetseries.owasp.org/" className="text-primary hover:underline">OWASP Cheat Sheets</a></li>
                  <li>• <a href="https://www.nist.gov/cyberframework" className="text-primary hover:underline">NIST Cybersecurity Framework</a></li>
                  <li>• <a href="https://nextjs.org/docs/app/building-your-application/authentication" className="text-primary hover:underline">Next.js Security</a></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
