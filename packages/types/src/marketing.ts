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

export interface DocsCardProps {
  section: DocsSection;
  index: number;
}

export interface TimelineStepProps {
  step: TimelineStep;
  index: number;
}

export interface SecurityBentoCardProps {
  feature: SecurityFeature;
  index: number;
}

export interface FooterProps {
  footerLinks: {
    product: { name: string; href: string; icon: string }[];
    company: { name: string; href: string; icon: string }[];
    legal: { name: string; href: string; icon: string }[];
  };
  siteName: string;
}

export interface HeaderProps {
  siteName: string;
  navItems: { title: string; href: string; icon: string }[];
}

export interface LogoProps {
  siteName: string;
}

export interface FeaturesGridProps {
  features: { title: string; description: string; icon: string }[];
  featuresSection?: { title: string; description: string };
}

export interface HeroContentProps {
  hero: { 
    title1: string; 
    title2: string; 
    description: string; 
    primaryButton: string; 
    secondaryButton: string;
    mockup?: {
      headerFilename: string;
      streamLabel: string;
      nodes: {
        label: string;
        value: string;
        subValue?: string;
        confidence: string;
      }[];
    }
  };
}

export interface InteractiveDemoProps {
  interactiveDemo: {
    title: string;
    description: string;
    pricing: { badge: string; title: string; description: string; price: string; frequency: string; features: string[]; button: string };
    faq: { question: string; answer: string }[];
  };
}

export interface SocialProofProps {
  socialProof: { title: string; logos: { name: string; icon: string }[] };
}

export interface DocsHeroProps {
  hero: { title: string; description: string };
}

export interface FeaturesHeroProps {
  hero: { title: string; description: string };
}

export interface TimelineHeroProps {
  hero: { title: string; description: string };
}

export interface SecurityHeroProps {
  hero: { title: string; description: string };
}

export interface FeatureDeepDiveProps {
  feature: {
    title: string;
    description: string;
    icon: string;
    image: string;
    reverse: boolean;
  };
}

/**
 * Legal pages data (privacy + terms). Mirrors
 * `packages/data/website/legal.json`.
 */
export interface LegalDocument {
  title: string;
  effectiveDate: string;
  content: string;
}

export interface LegalData {
  privacy: LegalDocument;
  terms: LegalDocument;
}
