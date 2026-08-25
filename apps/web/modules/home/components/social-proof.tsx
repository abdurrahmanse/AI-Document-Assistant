import { FadeInView } from "@workspace/ui/components/ui/motion";
import { 
  Building2, 
  Command, 
  Component, 
  Globe2, 
  Layers, 
  Cpu 
} from "lucide-react";

const logos = [
  { name: "Acme Corp", icon: Building2 },
  { name: "Global Systems", icon: Globe2 },
  { name: "Command AI", icon: Command },
  { name: "Stack Labs", icon: Layers },
  { name: "TechNova", icon: Cpu },
  { name: "UI Components", icon: Component },
];

export function SocialProof() {
  return (
    <section className="py-24 border-b border-border/50 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none" />
      
      <FadeInView className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <p className="text-sm font-semibold text-muted-foreground tracking-widest uppercase mb-12">
          Trusted by innovative teams worldwide
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, index) => {
            const Icon = logo.icon;
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
