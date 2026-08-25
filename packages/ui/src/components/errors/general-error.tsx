"use client";

import { FadeIn, FadeInView } from "../ui/motion";
import { Button } from "../ui/button";
import { RefreshCcw, AlertTriangle } from "lucide-react";

interface GeneralErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
}

export function GeneralErrorContent({
  error,
  reset,
  title = "Something went wrong",
}: GeneralErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-destructive/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none" />

      <FadeInView className="w-full max-w-2xl relative z-10 text-center flex flex-col items-center">
        <FadeIn delay={0.1}>
          <div className="w-20 h-20 bg-destructive/10 rounded-2xl flex items-center justify-center mb-8 mx-auto ring-1 ring-destructive/20 shadow-[0_0_40px_-10px_rgba(239,68,68,0.3)] backdrop-blur-sm">
            <AlertTriangle className="w-10 h-10 text-destructive" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">
            {title}
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            We've encountered an unexpected error. Our system administrators have been notified. Please try again.
          </p>
        </FadeIn>
        
        {/* Error Details (Only visible in dev or if explicitly passed, but good for context) */}
        {error.message && (
          <FadeIn delay={0.4} className="mb-10 w-full max-w-lg">
            <div className="bg-muted/50 border border-border rounded-xl p-4 text-left overflow-x-auto text-sm font-mono text-muted-foreground">
              {error.message}
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={() => reset()} size="lg" className="rounded-full px-8 shadow-lg transition-all">
              <RefreshCcw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </FadeIn>
      </FadeInView>
    </div>
  );
}
