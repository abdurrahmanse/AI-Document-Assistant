import { FadeIn } from "@workspace/ui/components/ui/motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@workspace/ui/components/ui";
import { ShinyText } from "@workspace/ui/components/ui/shiny-text";

export function HeroContent({ hero }: { hero: { title1: string; title2: string; description: string; primaryButton: string; secondaryButton: string } }) {

  return (
    <FadeIn
      duration={1}
      yOffset={40}
      className="max-w-5xl mx-auto z-10 relative pt-12 md:pt-20"
    >
      <div className="relative space-y-10 flex flex-col items-center text-center">
       
        <ShinyText className="mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>Next-Generation Document Intelligence</span>
        </ShinyText>

        {/* Massive Dynamic Typography */}
        <div className="relative w-full text-center">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tighter leading-[1.05] text-foreground">
            {hero.title1} <br className="hidden md:block" />
            <span className="relative inline-block mt-2 md:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground">
              {hero.title2}
            </span>
          </h1>
        </div>
        
        {/* Authoritative Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light tracking-wide text-center">
          {hero.description}
        </p>
        
        {/* High-Contrast Interactive Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 w-full sm:w-auto relative z-20">
          <Button size="lg" className="relative h-14 px-10 text-lg font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] hover:shadow-[0_0_60px_-15px_rgba(var(--primary),0.7)] hover:-translate-y-1 group overflow-hidden">
            <span className="relative z-10 flex items-center">
              {hero.primaryButton}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </span>
            {/* Subtle button sweep animation */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[sweep_1.5s_ease-in-out_infinite]" />
          </Button>
          
          <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-medium rounded-full bg-background/50 backdrop-blur-sm border-border/50 text-foreground hover:bg-foreground/5 hover:text-foreground hover:border-border w-full sm:w-auto transition-all duration-300 hover:-translate-y-1">
            {hero.secondaryButton}
          </Button>
        </div>
      </div>
    </FadeIn>
  );
}
