import { FadeInView } from "@workspace/ui/components/ui/motion";
import * as Icons from "lucide-react";

export function SocialProof({ socialProof }: { socialProof: { title: string; logos: { name: string; icon: string }[] } }) {

  return (
    <section className="py-24 border-b border-border/50 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
      
      <FadeInView className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-12">
          {socialProof.title}
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {socialProof.logos.map((logo, index) => {
            const Icon = (Icons[logo.icon as keyof typeof Icons] as React.ElementType) || Icons.Circle;
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <Icon className="w-8 h-8" />
                <span className="text-xl font-bold tracking-tight">{logo.name}</span>
              </div>
            );
          })}
        </div>
      </FadeInView>
    </section>
  );
}
