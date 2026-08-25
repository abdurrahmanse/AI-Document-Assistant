export const adminKeys = {
  all: ['admin'] as const,
  features: () => [...adminKeys.all, 'features'] as const,
  metrics: () => [...adminKeys.all, 'metrics'] as const,
  hero: () => [...adminKeys.all, 'hero'] as const,
};
