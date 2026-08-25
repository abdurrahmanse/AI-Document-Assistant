import { CoreMetricsData } from "@workspace/types/src/admin";

export interface IAdminRepository {
  getCoreMetrics(): Promise<CoreMetricsData>;
}

export class AdminRepository implements IAdminRepository {
  async getCoreMetrics(): Promise<CoreMetricsData> {
    // Simulated API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    return {
      totalUsers: {
        value: "10,482",
        trend: "+20.1% from last month",
        isPositive: true,
      },
      activeSubscriptions: {
        value: "+2350",
        trend: "+180 since yesterday",
        isPositive: true,
      },
      systemHealth: {
        value: "99.99%",
        trend: "Uptime over 30 days",
      },
      databaseLoad: {
        value: "42%",
        trend: "-4% since last hour",
        isPositive: false,
      },
    };
  }
}

export const adminRepository = new AdminRepository();
