import { DashboardStats, RecentDocument } from "@workspace/types/src/app";

export interface IAppRepository {
  getDashboardStats(): Promise<DashboardStats>;
  getRecentDocuments(): Promise<RecentDocument[]>;
}

export class AppRepository implements IAppRepository {
  async getDashboardStats(): Promise<DashboardStats> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      totalDocuments: {
        value: "1,248",
        description: "+12% from last month",
      },
      storageUsed: {
        value: "48.2 GB",
        description: "out of 100 GB allowance",
      },
      activeMembers: {
        value: "14",
        description: "3 currently online",
      },
    };
  }

  async getRecentDocuments(): Promise<RecentDocument[]> {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [
      { id: 1, title: "Q3 Financial Report", date: "2 hours ago", status: "Analyzed", members: 3 },
      { id: 2, title: "Product Roadmap 2026", date: "5 hours ago", status: "Processing", members: 5 },
      { id: 3, title: "Legal Terms v4", date: "Yesterday", status: "Analyzed", members: 2 },
      { id: 4, title: "Marketing Copy", date: "Yesterday", status: "Failed", members: 1 },
    ];
  }
}

export const appRepository = new AppRepository();
