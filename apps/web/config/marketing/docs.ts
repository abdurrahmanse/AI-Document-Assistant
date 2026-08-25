import { Book, Code, Terminal, Zap } from "lucide-react";
import { DocsSection } from "@workspace/types";

export const sections: DocsSection[] = [
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
