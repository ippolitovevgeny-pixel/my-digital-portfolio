import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ShieldCheck, Bot, Database, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Security Overview | Digital Portfolio",
  description: "Comprehensive security controls implemented in the portfolio: Arcjet, Clerk, and database protection."
};

export default function SecurityPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Security Overview</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            <CardTitle>Arcjet API Protection</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-6">
              <li>Shield: Blocks OWASP Top 10 attacks (SQLi, XSS, etc.)</li>
              <li>Bot Detection: Identifies and blocks scrapers/malicious bots</li>
              <li>Rate Limiting: Token bucket algorithm (5/10s, 10 capacity)</li>
              <li>Monitored via Arcjet dashboard</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <UserCheck className="w-6 h-6 text-green-600" />
            <CardTitle>Clerk Authentication</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-6">
              <li>Enterprise-grade auth for admin/resources/projects</li>
              <li>Role-based access control</li>
              <li>Session management and user activity logs</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <Database className="w-6 h-6 text-purple-600" />
            <CardTitle>Database Security</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc ml-6">
              <li>Neon PostgreSQL with TLS 1.3 encryption</li>
              <li>Type-safe queries via Drizzle ORM</li>
              <li>Unique constraints, timestamps, and JSON validation</li>
              <li>Automatic backups and point-in-time recovery</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
