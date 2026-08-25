import { FadeInView } from "@workspace/ui/components/ui/motion";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@workspace/ui/components/ui";
import { DocsSection } from "@workspace/types";

interface DocsCardProps {
  section: DocsSection;
  index: number;
}

export function DocsCard({ section, index }: DocsCardProps) {
  const Icon = section.icon;
  return (
    <FadeInView delay={index * 0.1}>
      <Card className="h-full bg-background/40 backdrop-blur-sm border-white/5 hover:border-primary/30 transition-all hover:-translate-y-1 cursor-pointer group shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(var(--primary),0.2)]">
        <CardHeader>
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${section.bg}`}>
            <Icon className={`w-6 h-6 ${section.color}`} />
          </div>
          <CardTitle className="text-2xl font-bold flex items-center justify-between">
            {section.title}
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-muted-foreground">
            {section.description}
          </CardDescription>
        </CardContent>
      </Card>
    </FadeInView>
  );
}
