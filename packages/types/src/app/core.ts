/**
 * Single feature entry exposed to the App (user-facing) shell.
 * Mirrors each entry in `packages/data/app/features.json`.
 */
export interface AppFeatureEntry {
  title: string;
  description: string;
}

/**
 * Map of app feature slug → its title/description. Keys mirror
 * `packages/data/app/features.json`.
 */
export interface AppFeaturesData {
  billing: AppFeatureEntry;
  profile: AppFeatureEntry;
  chat: AppFeatureEntry;
  documents: AppFeatureEntry;
}

/**
 * Hero block shown at the top of the App dashboard. Mirrors
 * `packages/data/app/dashboard.json` → `hero`.
 */
export interface AppDashboardHeroData {
  badge: string;
  title: string;
  description: string;
  newDocumentButton: string;
  uploadModal: {
    title: string;
    description: string;
    dragDropText: string;
    cancelButton: string;
    submitButton: string;
  };
}

/**
 * Titles for the three top-level stats cards on the App dashboard.
 * Mirrors `packages/data/app/dashboard.json` → `stats`.
 */
export interface AppDashboardStatsTitles {
  totalDocumentsTitle: string;
  storageUsedTitle: string;
  activeMembersTitle: string;
}

/**
 * Recent-documents card config (title, description, loading/error copy,
 * and dropdown menu labels). Mirrors `packages/data/app/dashboard.json` →
 * `recentDocuments`.
 */
export interface AppDashboardRecentDocumentsData {
  title: string;
  description: string;
  loadingText: string;
  errorText: string;
  menuItems: {
    viewDetails: string;
    share: string;
    delete: string;
  };
}

/**
 * Full App dashboard payload returned by `appService.getDashboardData()`.
 * Mirrors the structure of `packages/data/app/dashboard.json`.
 */
export interface AppDashboardData {
  hero: AppDashboardHeroData;
  stats: AppDashboardStatsTitles;
  recentDocuments: AppDashboardRecentDocumentsData;
}

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
