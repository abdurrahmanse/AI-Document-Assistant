import { FadeInView } from "@workspace/ui/components/ui/motion";
import * as Icons from "lucide-react";

interface TimelineStepProps {
  step: {
    title: string;
    description: string;
    icon: string;
    color: string;
    iconColor: string;
  };
  index: number;
}

export function TimelineStep({ step, index }: TimelineStepProps) {
  const Icon = (Icons[step.icon as keyof typeof Icons] as any) || Icons.Circle;
  const isEven = index % 2 === 0;

  return (
    <FadeInView delay={0.2} yOffset={40}>
      <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? '' : 'md:flex-row-reverse'}`}>
        
        {/* Content */}
        <div className={`flex-1 text-left ${isEven ? 'md:text-right' : 'md:text-left'} space-y-4`}>
          <h2 className="text-3xl font-bold tracking-tight">{step.title}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
        </div>

        {/* Icon Center Node */}
        <div className="relative shrink-0 flex items-center justify-center">
          {/* Pulsing background */}
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-50 duration-1000" style={{ animationDelay: `${index * 500}ms` }} />
          <div className={`relative z-10 w-24 h-24 rounded-full bg-gradient-to-br ${step.color} border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-md`}>
            <Icon className={`w-10 h-10 ${step.iconColor}`} />
          </div>
        </div>

        {/* Empty space for balance on desktop */}
        <div className="flex-1 hidden md:block" />
        
      </div>
    </FadeInView>
  );
}
