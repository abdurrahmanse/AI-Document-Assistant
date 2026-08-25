import { MarketingRepository, LocalMarketingRepository } from '../repositories/marketing.repository';

export class MarketingService {
  constructor(private readonly repository: MarketingRepository) {}

  async getPricing() {
    return this.repository.getPricing();
  }

  async getFeatures() {
    return this.repository.getFeatures();
  }

  async getSecurity() {
    return this.repository.getSecurity();
  }

  async getHowItWorks() {
    return this.repository.getHowItWorks();
  }

  async getDocs() {
    return this.repository.getDocs();
  }

  async getContact() {
    return this.repository.getContact();
  }

  async getCore() {
    return this.repository.getCore();
  }

  async getLegal() {
    return this.repository.getLegal();
  }

  async getAuth() {
    return this.repository.getAuth();
  }

  async getHome() {
    return this.repository.getHome();
  }
}

// Export a singleton instance using the local implementation for now.
// Later, this can be swapped to use an ApiMarketingRepository.
export const marketingService = new MarketingService(new LocalMarketingRepository());
