import { 
  PricingData, 
  FeaturesData, 
  SecurityData, 
  HowItWorksData, 
  DocsData, 
  ContactData, 
  CoreData, 
  HomeData 
} from '../../index';

export interface MarketingRepository {
  getPricing(): Promise<PricingData>;
  getFeatures(): Promise<FeaturesData>;
  getSecurity(): Promise<SecurityData>;
  getHowItWorks(): Promise<HowItWorksData>;
  getDocs(): Promise<DocsData>;
  getContact(): Promise<ContactData>;
  getCore(): Promise<CoreData>;
  getHome(): Promise<HomeData>;
}

// Simulated local repository
import pricingData from '../../../website/pricing.json';
import featuresData from '../../../website/features.json';
import securityData from '../../../website/security.json';
import howItWorksData from '../../../website/how-it-works.json';
import docsData from '../../../website/docs.json';
import contactData from '../../../website/contact.json';
import coreData from '../../../website/core.json';
import homeData from '../../../website/home.json';

export class LocalMarketingRepository implements MarketingRepository {
  async getPricing(): Promise<PricingData> {
    return pricingData;
  }
  
  async getFeatures(): Promise<FeaturesData> {
    return featuresData;
  }
  
  async getSecurity(): Promise<SecurityData> {
    return securityData;
  }
  
  async getHowItWorks(): Promise<HowItWorksData> {
    return howItWorksData;
  }
  
  async getDocs(): Promise<DocsData> {
    return docsData;
  }
  
  async getContact(): Promise<ContactData> {
    return contactData;
  }
  
  async getCore(): Promise<CoreData> {
    return coreData;
  }
  
  async getHome(): Promise<HomeData> {
    return homeData;
  }
}
