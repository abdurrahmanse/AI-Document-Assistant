import { appRepository } from '../repositories/app.repository';
import { DashboardStats, RecentDocument } from "@workspace/types";

export class AppService {
  async getDashboardStats(): Promise<DashboardStats> {
    return appRepository.getDashboardStats();
  }

  async getRecentDocuments(): Promise<RecentDocument[]> {
    return appRepository.getRecentDocuments();
  }
}

export const appService = new AppService();
