export const marketingKeys = {
  all: ['marketing'] as const,
  pricing: () => [...marketingKeys.all, 'pricing'] as const,
  features: () => [...marketingKeys.all, 'features'] as const,
  security: () => [...marketingKeys.all, 'security'] as const,
  howItWorks: () => [...marketingKeys.all, 'howItWorks'] as const,
  docs: () => [...marketingKeys.all, 'docs'] as const,
  contact: () => [...marketingKeys.all, 'contact'] as const,
  core: () => [...marketingKeys.all, 'core'] as const,
  home: () => [...marketingKeys.all, 'home'] as const,
};
