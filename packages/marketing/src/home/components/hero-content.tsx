import { FadeIn } from "@workspace/ui/components/ui/motion";
import { ArrowRight, Zap, ChevronRight } from "lucide-react";
import { Button } from "@workspace/ui/components/ui";

export function HeroContent({ hero }: { hero: { badge: string; title1: string; title2: string; description: string; primaryButton: string; secondaryButton: string } }) {

  return (
    <FadeIn
      duration={1}
      yOffset={40}
      className="max-w-4xl mx-auto z-10 relative pt-10"
    >
      <div className="relative space-y-10 flex flex-col items-center">
        {/* Minimalist Glowing Badge */}
       
        {/* Massive Typography */}
        <div className="relative w-full text-center">
          <h1 className="text-[3.5rem] sm:text-7xl md:text-[6rem] lg:text-[7.5rem] font-medium tracking-tighter leading-[0.95] text-foreground">
            {hero.title1} <br className="hidden md:block" />
            <span className="relative inline-block mt-2 md:mt-4">
              {/* Subtle text gradient */}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60">
                {hero.title2}
              </span>
            </span>
          </h1>
        </div>
        
        {/* Authoritative Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-normal tracking-tight text-center">
          {hero.description}
        </p>
        
        {/* High-Contrast Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full sm:w-auto relative z-20">
          <Button size="lg" className="h-12 px-8 text-base font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-[1.02] group">
            {hero.primaryButton}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="ghost" className="h-12 px-8 text-base font-medium rounded-full text-foreground/70 hover:text-foreground hover:bg-foreground/5 w-full sm:w-auto transition-all">
            {hero.secondaryButton}
          </Button>
        </div>
      </div>
    </FadeIn>
  );
}
