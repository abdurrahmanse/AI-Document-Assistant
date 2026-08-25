import { FadeInView } from "@workspace/ui/components/ui/motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@workspace/ui/components/ui";
import { SecurityFeature } from "@workspace/types";

interface SecurityBentoCardProps {
  feature: SecurityFeature;
  index: number;
}

export function SecurityBentoCard({ feature, index }: SecurityBentoCardProps) {
  const Icon = feature.icon;
  return (
    <FadeInView delay={index * 0.1} yOffset={20} className={feature.span}>
      <Card className="h-full bg-background/50 backdrop-blur-sm border-white/5 shadow-xl overflow-hidden group">
        <CardHeader className="space-y-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
            <Icon className="w-6 h-6 text-emerald-500" />
          </div>
          <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-muted-foreground leading-relaxed">
            {feature.description}
          </CardDescription>
        </CardContent>
      </Card>
    </FadeInView>
  );
}
