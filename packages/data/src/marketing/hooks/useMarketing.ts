import { useQuery } from '@tanstack/react-query';
import { marketingService } from '../services/marketing.service';
import { marketingKeys } from '../queries/keys';

export function usePricing() {
  return useQuery({
    queryKey: marketingKeys.pricing(),
    queryFn: () => marketingService.getPricing(),
  });
}

export function useFeatures() {
  return useQuery({
    queryKey: marketingKeys.features(),
    queryFn: () => marketingService.getFeatures(),
  });
}

export function useSecurity() {
  return useQuery({
    queryKey: marketingKeys.security(),
    queryFn: () => marketingService.getSecurity(),
  });
}

export function useHowItWorks() {
  return useQuery({
    queryKey: marketingKeys.howItWorks(),
    queryFn: () => marketingService.getHowItWorks(),
  });
}

export function useDocs() {
  return useQuery({
    queryKey: marketingKeys.docs(),
    queryFn: () => marketingService.getDocs(),
  });
}

export function useContact() {
  return useQuery({
    queryKey: marketingKeys.contact(),
    queryFn: () => marketingService.getContact(),
  });
}

export function useCore() {
  return useQuery({
    queryKey: marketingKeys.core(),
    queryFn: () => marketingService.getCore(),
  });
}

export function useHome() {
  return useQuery({
    queryKey: marketingKeys.home(),
    queryFn: () => marketingService.getHome(),
  });
}

export function useLegal() {
  return useQuery({
    queryKey: marketingKeys.legal(),
    queryFn: () => marketingService.getLegal(),
  });
}

export function useAuthContent() {
  return useQuery({
    queryKey: marketingKeys.auth(),
    queryFn: () => marketingService.getAuth(),
  });
}
