import { Book, Code, PlayCircle, Puzzle } from "lucide-react";

export const docCategories = [
  {
    title: "Getting Started",
    description: "Learn the basics, setup your workspace, and make your first query.",
    icon: PlayCircle,
    href: "/docs/getting-started"
  },
  {
    title: "API Reference",
    description: "Detailed documentation for our REST and GraphQL APIs.",
    icon: Code,
    href: "/docs/api"
  },
  {
    title: "Integrations",
    description: "Connect with Salesforce, Google Drive, Notion, and more.",
    icon: Puzzle,
    href: "/docs/integrations"
  },
  {
    title: "Guides & Tutorials",
    description: "Deep dives into advanced topics, workflows, and best practices.",
    icon: Book,
    href: "/docs/guides"
  }
];
