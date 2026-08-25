export interface CoreMetricsData {
  totalUsers: {
    value: string;
    trend: string;
    isPositive: boolean;
  };
  activeSubscriptions: {
    value: string;
    trend: string;
    isPositive: boolean;
  };
  systemHealth: {
    value: string;
    trend: string;
  };
  databaseLoad: {
    value: string;
    trend: string;
    isPositive: boolean;
  };
}
