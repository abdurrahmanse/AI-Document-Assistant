import { FadeInView } from "@workspace/ui/components/ui/motion";
import * as Icons from "lucide-react";

interface ContactInfoProps {
  hero: { title: string; description: string };
  methods: {
    icon: string;
    title: string;
    description: string;
    link?: string;
    linkText?: string;
  }[];
}

export function ContactInfo({ hero, methods }: ContactInfoProps) {
  return (
    <div className="flex-1 space-y-12">
      <FadeInView delay={0.1}>
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter">{hero.title}</h1>
          <p className="text-xl text-muted-foreground">{hero.description}</p>
        </div>
      </FadeInView>

      <FadeInView delay={0.2}>
        <div className="space-y-8">
          {methods.map((method, i) => {
            const Icon = (Icons[method.icon as keyof typeof Icons] as any) || Icons.Circle;
            return (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{method.title}</h3>
                  <p className="text-muted-foreground mb-2 whitespace-pre-line">{method.description}</p>
                  {method.link && method.linkText && (
                    <a href={method.link} className="font-semibold text-primary hover:underline">
                      {method.linkText}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </FadeInView>
    </div>
  );
}
