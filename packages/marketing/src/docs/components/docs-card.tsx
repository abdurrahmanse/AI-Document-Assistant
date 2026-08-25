import { FadeInView } from "@workspace/ui/components/ui/motion";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";

export interface DocsCardProps {
  section: {
    title: string;
    description: string;
    icon: string;
    color: string;
    bg: string;
  };
  index: number;
}

export function DocsCard({ section, index }: DocsCardProps) {
  const Icon = (Icons[section.icon as keyof typeof Icons] as React.ElementType) || Icons.Circle;

  return (
    <FadeInView delay={index * 0.1} yOffset={20}>
      <div className="h-full bg-background/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors group cursor-pointer">
        <div className={`w-14 h-14 rounded-2xl ${section.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
          <Icon className={`w-7 h-7 ${section.color}`} />
        </div>
        <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">
          {section.description}
        </p>
        <div className="flex items-center text-sm font-semibold text-primary">
          Explore documentation 
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </FadeInView>
  );
}
