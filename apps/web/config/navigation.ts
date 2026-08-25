import { Sparkles, Layers, CreditCard, ShieldCheck, FileText, LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
}

export const mainNav: NavItem[] = [
  {
    title: "Features",
    href: "/features",
    icon: Sparkles,
  },
  {
    title: "How It Works",
    href: "/how-it-works",
    icon: Layers,
  },
  {
    title: "Pricing",
    href: "/pricing",
    icon: CreditCard,
  },
  {
    title: "Security",
    href: "/security",
    icon: ShieldCheck,
  },
  {
    title: "Docs",
    href: "/docs",
    icon: FileText,
  },
];
