import pricingData from '../website/pricing.json';
import featuresData from '../website/features.json';
import securityData from '../website/security.json';
import howItWorksData from '../website/how-it-works.json';
import docsData from '../website/docs.json';
import contactData from '../website/contact.json';
import coreData from '../website/core.json';
import homeData from '../website/home.json';
import legalData from '../website/legal.json';
import authData from '../website/auth.json';

// Basic exported types inferred from the JSON
export type PricingData = typeof pricingData;
export type FeaturesData = typeof featuresData;
export type SecurityData = typeof securityData;
export type HowItWorksData = typeof howItWorksData;
export type DocsData = typeof docsData;
export type ContactData = typeof contactData;
export type CoreData = typeof coreData;
export type HomeData = typeof homeData;
export type LegalData = typeof legalData;
export type AuthData = typeof authData;

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
export * from './marketing/repositories/marketing.repository';
export * from './marketing/services/marketing.service';
export * from './marketing/queries/keys';
export * from './marketing/hooks/useMarketing';


export * from "./api/client";
export * from "./auth/api";
export * from "./auth/hooks";

export * from './admin/repositories/admin.repository';
export * from './admin/services/admin.service';
export * from './admin/queries/keys';
export * from './admin/hooks/useAdmin';

export * from './app/repositories/app.repository';
export * from './app/repositories/chat.repository';
export * from './app/repositories/document.repository';
export * from './app/services/app.service';
export * from './app/queries/keys';
export * from './app/hooks/useApp';
