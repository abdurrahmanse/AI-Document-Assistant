"use client";

import { FadeInView } from "@workspace/ui/components/ui/motion";
import { Book, Code, Terminal, Zap, ArrowRight, Search } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@workspace/ui/components/ui";

const sections = [
  {
    title: "API Reference",
    description: "Detailed documentation for all our REST API endpoints, including request/response formats and authentication.",
    icon: Code,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "SDKs & Libraries",
    description: "Official clients for Node.js, Python, Go, and Java to get you integrated in minutes.",
    icon: Terminal,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Quickstarts",
    description: "Step-by-step tutorials to help you build your first document processing pipeline.",
    icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Core Concepts",
    description: "Learn how our document intelligence engine works under the hood.",
    icon: Book,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  }
];

export default function DocsPage() {
  return (
    <div className="flex flex-col items-center pb-24 overflow-hidden min-h-screen relative">
      <div className="absolute top-0 w-full h-[400px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      
      {/* Hero */}
      <div className="text-center space-y-8 max-w-3xl mx-auto py-24 px-4 relative z-10 w-full">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Documentation</h1>
        <p className="text-xl text-muted-foreground">Everything you need to build with AI Document Assistant.</p>
        
        <div className="relative max-w-2xl mx-auto mt-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search documentation..."
            className="w-full h-14 pl-12 pr-4 rounded-2xl bg-background/50 backdrop-blur-md border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg transition-all shadow-xl"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4 relative z-10 w-full">
        {sections.map((section, i) => {
          const Icon = section.icon;
          return (
            <FadeInView key={i} delay={i * 0.1}>
              <Card className="h-full bg-background/40 backdrop-blur-sm border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 cursor-pointer group shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(var(--primary),0.2)]">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${section.bg}`}>
                    <Icon className={`w-6 h-6 ${section.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold flex items-center justify-between">
                    {section.title}
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {section.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeInView>
          );
        })}
      </div>
    </div>
  );
}
