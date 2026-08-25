"use client";

import { Footer } from "@workspace/marketing";
import { useCore, useAuthContent } from "@workspace/data";
import Link from "next/link";
import { Button } from "@workspace/ui/components/ui/button";

export default function ForgotPasswordPage() {
  const { data: coreData, isLoading: coreLoading } = useCore();
  const { data: authData, isLoading: authLoading } = useAuthContent();

  if (coreLoading || authLoading || !coreData || !authData) return null;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl font-bold mb-4">{authData.forgotPassword.title}</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md">
          {authData.forgotPassword.description}
        </p>
        <Button asChild>
          <Link href="/">{authData.forgotPassword.returnHome}</Link>
        </Button>
      </main>
    </div>
  );
}
