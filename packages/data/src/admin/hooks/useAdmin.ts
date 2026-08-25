import { useQuery } from '@tanstack/react-query';
import { adminService } from '../services/admin.service';
import { adminKeys } from '../queries/keys';

export function useAdminMetrics() {
  return useQuery({
    queryKey: adminKeys.metrics(),
    queryFn: () => adminService.getCoreMetrics(),
  });
}

export function useAdminFeatures() {
  return useQuery({
    queryKey: adminKeys.features(),
    queryFn: () => adminService.getFeatures(),
  });
}

export function useAdminDashboardHero() {
  return useQuery({
    queryKey: adminKeys.hero(),
    queryFn: () => adminService.getDashboardHero(),
  });
}
