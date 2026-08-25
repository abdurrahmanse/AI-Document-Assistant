export const appKeys = {
  all: ['app'] as const,
  stats: () => [...appKeys.all, 'stats'] as const,
  recentDocuments: () => [...appKeys.all, 'recent-documents'] as const,
};
