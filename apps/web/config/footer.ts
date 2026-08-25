import { 
  Sparkles, Layers, CreditCard, ShieldCheck, FileText, 
  Info, Users, Newspaper, Mail, 
  ShieldAlert, ScrollText, Cookie
} from "lucide-react";
import { FooterLink } from "@workspace/types";

export const footerLinks: Record<string, FooterLink[]> = {
  product: [
    { name: "Features", href: "/features", icon: Sparkles },
    { name: "How It Works", href: "/how-it-works", icon: Layers },
    { name: "Pricing", href: "/pricing", icon: CreditCard },
    { name: "Security", href: "/security", icon: ShieldCheck },
    { name: "Documentation", href: "/docs", icon: FileText },
  ],
  company: [
    { name: "About Us", href: "/about", icon: Info },
    { name: "Careers", href: "/careers", icon: Users },
    { name: "Blog", href: "/blog", icon: Newspaper },
    { name: "Contact", href: "/contact", icon: Mail },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy", icon: ShieldAlert },
    { name: "Terms of Service", href: "/terms", icon: ScrollText },
    { name: "Cookie Policy", href: "/cookies", icon: Cookie },
  ],
};
