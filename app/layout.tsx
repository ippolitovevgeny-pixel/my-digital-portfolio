import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { AuthSync } from "@/components/auth-sync";
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs"; // Removed unused imports

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evgeny Ippolitov - ICT Customer Support Specialist",
  description:
    "Digital portfolio of Evgeny Ippolitov - ICT Customer Support Specialist with expertise in network engineering, system administration, and customer support.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Include AuthSync component for auto user role assignment */}
        <AuthSync />
        {children}
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  )
}
