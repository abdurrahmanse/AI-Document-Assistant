import Image from "next/image";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Button } from "@workspace/ui/components/ui";
import { FadeInView } from "@workspace/ui/components/ui/motion";

interface FeatureDeepDiveProps {
  feature: {
    title: string;
    description: string;
    icon: string;
    image: string;
    reverse: boolean;
  };
}

export function FeatureDeepDive({ feature }: FeatureDeepDiveProps) {
  // Map string icon name to Lucide component
  const Icon = (Icons[feature.icon as keyof typeof Icons] as React.ElementType) || Icons.Circle;

  return (
    <FadeInView delay={0.2} yOffset={40}>
      <div className={`flex flex-col gap-12 lg:gap-20 items-center ${feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        
        {/* Content Side */}
        <div className="flex-1 space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_20px_rgba(var(--primary),0.1)]">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{feature.title}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">{feature.description}</p>
          <Button variant="link" className="px-0 text-primary text-lg font-semibold group">
            Learn more about {feature.title.split(' ').pop()}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-muted/20 group">
            <Image 
              src={feature.image} 
              alt={feature.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 to-transparent" />
          </div>
        </div>

      </div>
    </FadeInView>
  );
}
