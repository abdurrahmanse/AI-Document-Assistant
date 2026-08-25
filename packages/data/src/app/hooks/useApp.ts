import { useQuery } from '@tanstack/react-query';
import { appService } from '../services/app.service';
import { appKeys } from '../queries/keys';

export function useAppStats() {
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

export function useAppFeatures() {
  return useQuery({
    queryKey: appKeys.features(),
    queryFn: () => appService.getFeatures(),
  });
}

export function useAppDashboardData() {
  return useQuery({
    queryKey: appKeys.dashboard(),
    queryFn: () => appService.getDashboardData(),
  });
}
