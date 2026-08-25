import { describe, it, expect } from 'vitest';
import { adminRepository } from './admin.repository';

describe('AdminRepository', () => {
  it('should return core metrics', async () => {
    const metrics = await adminRepository.getCoreMetrics();
    
    expect(metrics).toBeDefined();
    expect(metrics.totalUsers).toBeDefined();
    expect(metrics.totalUsers.value).toBe('10,482');
    expect(metrics.systemHealth.value).toBe('99.99%');
  });
});
