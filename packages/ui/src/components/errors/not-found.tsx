"use client";

import Link from "next/link";
import { FadeIn, FadeInView } from "../ui/motion";
import { Button } from "../ui/button";
import { ArrowLeft, Search } from "lucide-react";

interface NotFoundProps {
  title?: string;
  description?: string;
  returnUrl?: string;
  returnLabel?: string;
}

export function NotFoundContent({
  title = "Page Not Found",
  description = "We couldn't find the page you were looking for. It might have been moved, deleted, or never existed.",
  returnUrl = "/",
  returnLabel = "Return to Dashboard",
}: NotFoundProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

      <FadeInView className="w-full max-w-2xl relative z-10 text-center flex flex-col items-center">
        <FadeIn delay={0.1}>
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 mx-auto ring-1 ring-primary/20 shadow-[0_0_40px_-10px_rgba(var(--primary),0.3)] backdrop-blur-sm">
            <Search className="w-10 h-10 text-primary" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-8xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/30 mb-4 tracking-tighter">
            404
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground/90">
            {title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            {description}
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-full px-8 bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all">
              <Link href={returnUrl}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {returnLabel}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-border bg-background/50 backdrop-blur-sm hover:bg-muted/50">
              <Link href="mailto:support@aidocumentassistant.com">
                Contact Support
              </Link>
            </Button>
          </div>
        </FadeIn>
      </FadeInView>
    </div>
  );
}
