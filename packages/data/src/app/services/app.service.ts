import { IAppRepository, appRepository } from "../repositories/app.repository";

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

  async getDashboardData() {
    return this.repository.getDashboardData();
  }

  async getAppContent() {
    return this.repository.getAppContent();
  }
}

export const appService = new AppService(appRepository);
