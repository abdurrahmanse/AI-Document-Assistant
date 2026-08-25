import { CoreMetricsData } from "@workspace/types/src/admin";
import { apiClient } from "../../api/client";
import featuresData from "../../../admin/features.json";
import heroData from "../../../admin/hero.json";

export interface IAdminRepository {
  getCoreMetrics(): Promise<CoreMetricsData>;
  getFeatures(): Promise<any>;
  getDashboardHero(): Promise<any>;
}

export class AdminRepository implements IAdminRepository {
  async getCoreMetrics(): Promise<CoreMetricsData> {
    return await apiClient.get<CoreMetricsData>("/api/admin/metrics");
  }

  async getFeatures(): Promise<any> {
    return featuresData;
  }

  async getDashboardHero(): Promise<any> {
    return heroData;
  }
}

// We can still export a mock repository for local testing if the backend is down
export class AdminMockRepository implements IAdminRepository {
  async getCoreMetrics(): Promise<CoreMetricsData> {
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

  async getFeatures(): Promise<any> {
    return featuresData;
  }

  async getDashboardHero(): Promise<any> {
    return heroData;
  }
}

// Ensure the application uses the real API backend
export const adminRepository = new AdminRepository();
