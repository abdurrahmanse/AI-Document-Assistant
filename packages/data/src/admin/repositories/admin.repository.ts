import {
  AdminDashboardHeroData,
  AdminFeaturesData,
  CoreMetricsData,
} from "@workspace/types/src/admin";
import { axiosInstance } from "../../api/client";
import featuresData from "../../../admin/features.json";
import heroData from "../../../admin/hero.json";

export interface IAdminRepository {
  getCoreMetrics(): Promise<CoreMetricsData>;
  getFeatures(): Promise<AdminFeaturesData>;
  getDashboardHero(): Promise<AdminDashboardHeroData>;
}

export class AdminRepository implements IAdminRepository {
  async getCoreMetrics(): Promise<CoreMetricsData> {
    const res = await axiosInstance.get<CoreMetricsData>("/api/admin/metrics");
    return res.data;
  }

  async getFeatures(): Promise<AdminFeaturesData> {
    return featuresData as AdminFeaturesData;
  }

  async getDashboardHero(): Promise<AdminDashboardHeroData> {
    return heroData as AdminDashboardHeroData;
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

  async getFeatures(): Promise<AdminFeaturesData> {
    return featuresData as AdminFeaturesData;
  }

  async getDashboardHero(): Promise<AdminDashboardHeroData> {
    return heroData as AdminDashboardHeroData;
  }
}

// Ensure the application uses the real API backend
export const adminRepository = new AdminRepository();
