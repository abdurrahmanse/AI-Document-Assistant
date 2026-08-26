import { FadeInView } from "@workspace/ui/components/ui/motion";
import { Container } from "@workspace/ui/components/ui/container";
import { Marquee } from "@workspace/ui/components/ui/marquee";
import * as Icons from "lucide-react";

export function SocialProof({ socialProof }: { socialProof: { title: string; logos: { name: string; icon: string }[] } }) {
  return (
    <div className="py-20 border-b border-border/40 bg-muted/30 overflow-hidden">
      <FadeInView className="relative z-10 text-center w-full">
        <Container>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            {socialProof.title}
          </h2>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {socialProof.logos.map((logo, i) => {
                const Icon = (Icons as unknown as Record<string, React.ElementType>)[logo.icon] || Icons.HelpCircle;
                return (
                  <div key={i} className="flex items-center gap-2 mx-8 text-muted-foreground hover:text-foreground transition-colors grayscale hover:grayscale-0">
                    <Icon className="w-6 h-6" />
                    <span className="font-bold text-lg tracking-tight">{logo.name}</span>
                  </div>
                );
              })}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-muted/30 dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-muted/30 dark:from-background"></div>
          </div>
        </Container>
      </FadeInView>
    </div>
  );
}
