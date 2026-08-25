import pricingData from '../website/pricing.json';
import featuresData from '../website/features.json';
import securityData from '../website/security.json';
import howItWorksData from '../website/how-it-works.json';
import docsData from '../website/docs.json';
import contactData from '../website/contact.json';
import coreData from '../website/core.json';
import homeData from '../website/home.json';

// Basic exported types inferred from the JSON
export type PricingData = typeof pricingData;
export type FeaturesData = typeof featuresData;
export type SecurityData = typeof securityData;
export type HowItWorksData = typeof howItWorksData;
export type DocsData = typeof docsData;
export type ContactData = typeof contactData;
export type CoreData = typeof coreData;
export type HomeData = typeof homeData;

export const websiteData = {
  pricing: pricingData,
  features: featuresData,
  security: securityData,
  howItWorks: howItWorksData,
  docs: docsData,
  contact: contactData,
  core: coreData,
  home: homeData,
};

// Export New Data Access Architecture
export * from './repositories/marketing.repository';
export * from './services/marketing.service';
export * from './queries/keys';
export * from './hooks/useMarketing';
