import { adminRepository } from '../repositories/admin.repository';
import { CoreMetricsData } from "@workspace/types/src/admin";

export class AdminService {
  async getCoreMetrics(): Promise<CoreMetricsData> {
    return adminRepository.getCoreMetrics();
  }
}

export const adminService = new AdminService();
