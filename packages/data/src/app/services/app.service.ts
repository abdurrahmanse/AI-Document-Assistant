import { IAppRepository, AppRepository } from '../repositories/app.repository';

export class AppService {
  constructor(private readonly repository: IAppRepository) {}

  async getFeatures() {
    return this.repository.getFeatures();
  }

  async getDashboardStats() {
    return this.repository.getDashboardStats();
  }

  async getRecentDocuments() {
    return this.repository.getRecentDocuments();
  }
}

export const appService = new AppService(new AppRepository());
