import { SpotlightCard } from "@workspace/ui/components/ui/spotlight-card";
import * as Icons from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  const Icon = (Icons[icon as keyof typeof Icons] as React.ElementType) || Icons.Circle;

  return (
    <SpotlightCard className={`group relative h-full flex flex-col p-6 ${className || ''}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 flex-1">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary border border-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.1)] group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight">{title}</h3>
        <p className="text-base text-muted-foreground/80 leading-relaxed">
          {description}
        </p>
      </div>
    </SpotlightCard>
  );
}
