import { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
}

export interface FooterLink {
  name: string;
  href: string;
  icon?: LucideIcon;
}

export interface DocsSection {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
}

export interface TimelineStep {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  iconColor: string;
}

export interface SecurityFeature {
  title: string;
  description: string;
  icon: LucideIcon;
  span: string;
}

export interface DeepDiveFeature {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  reverse: boolean;
}

export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  popular: boolean;
  features: PricingFeature[];
}

export interface FAQItem {
  q: string;
  a: string;
}
