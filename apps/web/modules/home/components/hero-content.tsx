import { FadeIn } from "@workspace/ui/components/ui/motion";
import { ArrowRight, Sparkles, LayoutDashboard } from "lucide-react";
import { Button } from "@workspace/ui/components/ui";

export function HeroContent() {
  return (
    <FadeIn
      duration={0.8}
      yOffset={30}
      className="max-w-5xl mx-auto z-10"
    >
      <div className="relative space-y-8 flex flex-col items-center">
        <FadeIn 
          delay={0.1}
          duration={0.5}
          yOffset={0}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm shadow-[0_0_15px_rgba(var(--primary),0.2)] backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4" />
          <span>Introducing AI Document Assistant</span>
        </FadeIn>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05]">
          The Future of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-600 drop-shadow-sm">
            Document Intelligence
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium tracking-tight">
          Upload, analyze, and extract insights from your enterprise documents in seconds. Powered by the world&apos;s most advanced AI models.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
          <Button size="lg" className="h-14 px-8 text-lg font-bold rounded-full group bg-gradient-to-r from-primary via-indigo-500 to-purple-600 hover:opacity-90 shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] border border-primary/20 transition-all w-full sm:w-auto hover:shadow-[0_0_60px_-15px_rgba(var(--primary),0.6)]">
            Start Building Free
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold rounded-full backdrop-blur-md bg-background/50 border-border/50 hover:bg-secondary/80 hover:border-border shadow-sm w-full sm:w-auto transition-all">
            <LayoutDashboard className="mr-2 w-5 h-5 text-muted-foreground" />
            View Live Demo
          </Button>
        </div>
      </div>
    </FadeIn>
  );
}
