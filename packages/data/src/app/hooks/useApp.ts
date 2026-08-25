import { useQuery } from '@tanstack/react-query';
import { appService } from '../services/app.service';
import { appKeys } from '../queries/keys';

export function useDashboardStats() {
  return useQuery({
    queryKey: appKeys.stats(),
    queryFn: () => appService.getDashboardStats(),
  });
}

export function useRecentDocuments() {
  return useQuery({
    queryKey: appKeys.recentDocuments(),
    queryFn: () => appService.getRecentDocuments(),
  });
}
