import { useQuery } from '@tanstack/react-query';
import { adminService } from '../services/admin.service';
import { adminKeys } from '../queries/keys';

export function useAdminMetrics() {
  return useQuery({
    queryKey: adminKeys.metrics(),
    queryFn: () => adminService.getCoreMetrics(),
  });
}
