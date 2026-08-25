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

export interface BaseMarketingFeature {
  title: string;
  description: string;
  icon: string;
}

export interface DocsSection extends BaseMarketingFeature {
  color: string;
  bg: string;
}

export interface TimelineStep extends BaseMarketingFeature {
  color: string;
  iconColor: string;
}

export interface SecurityFeature extends BaseMarketingFeature {
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
