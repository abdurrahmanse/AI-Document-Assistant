export const adminKeys = {
  all: ['admin'] as const,
  metrics: () => [...adminKeys.all, 'metrics'] as const,
};
