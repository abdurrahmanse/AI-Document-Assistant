export interface DashboardStats {
  totalDocuments: {
    value: string;
    description: string;
  };
  storageUsed: {
    value: string;
    description: string;
  };
  activeMembers: {
    value: string;
    description: string;
  };
}

export interface RecentDocument {
  id: number | string;
  title: string;
  date: string;
  status: "Analyzed" | "Processing" | "Failed";
  members: number;
}
