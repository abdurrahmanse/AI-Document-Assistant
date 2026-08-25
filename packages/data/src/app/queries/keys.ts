export const appKeys = {
  all: ['app'] as const,
  features: () => [...appKeys.all, 'features'] as const,
  stats: () => [...appKeys.all, 'stats'] as const,
  recentDocuments: () => [...appKeys.all, 'recent-documents'] as const,
  dashboard: () => [...appKeys.all, 'dashboard'] as const,
};
