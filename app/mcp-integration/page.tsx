import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Network } from "lucide-react";

export const metadata: Metadata = {
  title: "MCP Integration | Digital Portfolio",
  description: "Model Context Protocol (MCP) integration for advanced AI agent workflows."
};

export default function MCPIntegrationPage() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Model Context Protocol (MCP) Integration</h1>
      <Card>
        <CardHeader>
          <Network className="w-6 h-6 text-cyan-600" />
          <CardTitle>What is MCP?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc ml-6">
            <li>MCP enables secure, context-rich communication between AI agents and applications.</li>
            <li>Supports advanced workflows, multi-agent orchestration, and real-time data exchange.</li>
            <li>Used for secure automation, data analysis, and intelligent decision-making.</li>
            <li>Integrates seamlessly with Next.js and serverless APIs.</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Benefits in This Portfolio</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc ml-6">
            <li>Enables AI-powered features and automation</li>
            <li>Improves security and compliance for sensitive workflows</li>
            <li>Facilitates scalable, modular agent integration</li>
            <li>Future-proof foundation for advanced AI capabilities</li>
          </ul>
        </CardContent>
      </Card>
    </main>
  );
}
