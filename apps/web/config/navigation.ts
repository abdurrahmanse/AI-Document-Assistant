import { Sparkles, Layers, CreditCard, ShieldCheck, FileText } from "lucide-react";
import { NavItem } from "@workspace/types";

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
