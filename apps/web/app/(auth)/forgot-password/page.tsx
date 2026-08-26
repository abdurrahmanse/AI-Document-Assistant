"use client";

import { useState } from "react";
import { useCore, useAuthContent, useRequestPasswordReset, useResetPassword } from "@workspace/data";
import Link from "next/link";
import { Button } from "@workspace/ui/components/ui/button";
import { Container } from "@workspace/ui/components/ui/container";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const { data: coreData, isLoading: coreLoading } = useCore();
  const { data: authData, isLoading: authLoading } = useAuthContent();
  const router = useRouter();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const requestOtpMutation = useRequestPasswordReset();
  const resetPasswordMutation = useResetPassword();

  if (coreLoading || authLoading || !coreData || !authData) return null;

  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await requestOtpMutation.mutateAsync(email);
      setStep(2);
    } catch (err: unknown) {
      const errorResponse = err as { response?: { data?: { detail?: string } } };
      setError(errorResponse.response?.data?.detail || "Failed to request OTP. Please check your email and try again.");
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length < 4) {
      setError("Please enter a valid OTP.");
      return;
    }
    setError(null);
    setStep(3); // Move to password entry. The actual verification happens during reset.
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await resetPasswordMutation.mutateAsync([email, otp, newPassword]);
      router.push("/login?reset=success");
    } catch (err: unknown) {
      const errorResponse = err as { response?: { data?: { detail?: string } } };
      setError(errorResponse.response?.data?.detail || "Failed to reset password. The OTP may be invalid or expired.");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center py-12 md:py-24">
      <Container size="form">
        <main className="flex flex-col">
          <div className="mb-10 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight mb-2">{authData.forgotPassword.title}</h2>
            <p className="text-muted-foreground">
              {step === 1 && authData.forgotPassword.description}
              {step === 2 && "Enter the OTP sent to your email address."}
              {step === 3 && "Create a new secure password for your account."}
            </p>
          </div>

          <div className="space-y-5">
            {error && (
              <div className="p-3 text-sm text-destructive-foreground bg-destructive/10 rounded-md border border-destructive/20">
                {error}
              </div>
            )}

            {step === 1 && (
              <form onSubmit={handleRequestOtp} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full flex h-11 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-base font-semibold" disabled={requestOtpMutation.isPending}>
                  {requestOtpMutation.isPending ? "Sending OTP..." : "Send OTP"}
                </Button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleVerifyOtp} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="otp" className="text-sm font-medium">One-Time Password (OTP)</label>
                  <input
                    id="otp"
                    type="text"
                    required
                    className="w-full flex h-11 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 6-digit code"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-base font-semibold">
                  Verify OTP
                </Button>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors mt-2"
                >
                  Change email address
                </button>
              </form>
            )}

            {step === 3 && (
              <form onSubmit={handleResetPassword} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="newPassword" className="text-sm font-medium">New Password</label>
                  <input
                    id="newPassword"
                    type="password"
                    required
                    className="w-full flex h-11 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm New Password</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    className="w-full flex h-11 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-base font-semibold" disabled={resetPasswordMutation.isPending}>
                  {resetPasswordMutation.isPending ? "Resetting Password..." : "Reset Password"}
                </Button>
              </form>
            )}

            <div className="mt-8 text-center text-sm text-muted-foreground">
              Remembered your password?{" "}
              <Link href="/login" className="text-primary hover:underline font-semibold transition-colors">
                Back to login
              </Link>
            </div>
          </div>
        </main>
      </Container>
    </div>
  );
}
