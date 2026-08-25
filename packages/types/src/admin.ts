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

/**
 * One feature entry on the admin index page. Each admin section
 * (audit-logs, dashboard, documents, …) renders the same shape.
 */
export interface AdminFeatureEntry {
  title: string;
  description: string;
}

/**
 * Map of admin feature slug → its title/description. Keys mirror the
 * `packages/data/admin/features.json` file and the slugs used by each
 * feature component.
 */
export interface AdminFeaturesData {
  "audit-logs": AdminFeatureEntry;
  dashboard: AdminFeatureEntry;
  documents: AdminFeatureEntry;
  feedback: AdminFeatureEntry;
  jobs: AdminFeatureEntry;
  settings: AdminFeatureEntry;
  system: AdminFeatureEntry;
  usage: AdminFeatureEntry;
  users: AdminFeatureEntry;
}

/**
 * Hero block shown at the top of the admin dashboard. Mirrors
 * `packages/data/admin/hero.json`.
 */
export interface AdminDashboardHeroData {
  badge: string;
  title: string;
  description: string;
  buttons: {
    primary: string;
    secondary: string;
  };
}
