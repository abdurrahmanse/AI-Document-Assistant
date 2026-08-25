import { useMutation } from "@tanstack/react-query";
import { authApi } from "./api";

export const useRequestOtp = () => {
  return useMutation({
    mutationFn: (email: string) => authApi.requestOtp(email),
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: ({ email, code }: { email: string; code: string }) => 
      authApi.verifyOtp(email, code),
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (data: Parameters<typeof authApi.register>) => authApi.register(...data),
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: Parameters<typeof authApi.login>) => authApi.login(...data),
  });
};
