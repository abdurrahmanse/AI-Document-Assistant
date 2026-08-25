import { FadeInView } from "@workspace/ui/components/ui/motion";
import { Container } from "@workspace/ui/components/ui/container";
import * as Icons from "lucide-react";

export function SocialProof({ socialProof }: { socialProof: { title: string; logos: { name: string; icon: string }[] } }) {
  return (
    <div className="py-20 border-b border-border/40 bg-muted/30">
      <FadeInView className="relative z-10 text-center">
        <Container>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            {socialProof.title}
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {socialProof.logos.map((logo, i) => {
              const Icon = (Icons as any)[logo.icon] || Icons.HelpCircle;
              return (
                <div key={i} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Icon className="w-6 h-6" />
                  <span className="font-bold text-lg tracking-tight">{logo.name}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </FadeInView>
    </div>
  );
}
