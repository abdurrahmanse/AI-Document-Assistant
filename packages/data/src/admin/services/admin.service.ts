import { IAdminRepository, AdminMockRepository } from '../repositories/admin.repository';

export class AdminService {
  constructor(private readonly repository: IAdminRepository) {}

  async getFeatures() {
    return this.repository.getFeatures();
  }

  async getCoreMetrics() {
    return this.repository.getCoreMetrics();
  }

  async getDashboardHero() {
    return this.repository.getDashboardHero();
  }
}

export const adminService = new AdminService(new AdminMockRepository());
