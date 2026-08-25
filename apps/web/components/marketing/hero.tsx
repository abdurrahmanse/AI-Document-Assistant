import { FadeIn } from "@workspace/ui/components/ui/motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@workspace/ui/components/ui";

export function MarketingHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 flex flex-col items-center text-center">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute top-0 z-[-1] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />

      <FadeIn
        duration={0.8}
        yOffset={30}
        className="max-w-5xl mx-auto"
      >
        {/* Glassmorphic Container */}
        <div className="relative p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-background/40 border border-white/10 dark:border-white/5 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] overflow-hidden">
          {/* Inner Glow */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/30 blur-[60px] rounded-full mix-blend-screen pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />

          <div className="relative z-10 space-y-8 flex flex-col items-center">
            <FadeIn 
              delay={0.2}
              duration={0.5}
              yOffset={0}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm shadow-[0_0_15px_rgba(var(--primary),0.2)]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Introducing AI Document Assistant 2.0</span>
            </FadeIn>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
              The Future of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 drop-shadow-sm">
                Document Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Upload, analyze, and extract insights from your enterprise documents in seconds. Powered by the world's most advanced AI models.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full group bg-gradient-to-r from-primary to-indigo-600 hover:opacity-90 shadow-lg shadow-primary/25 transition-all w-full sm:w-auto">
                Start Building Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full backdrop-blur-md bg-background/50 border-border/50 hover:bg-secondary/50 w-full sm:w-auto">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
