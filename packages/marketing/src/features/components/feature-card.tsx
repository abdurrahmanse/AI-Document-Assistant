import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@workspace/ui/components/ui";
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
    <Card className={`group relative overflow-hidden bg-muted/10 border-white/5 hover:border-white/10 transition-all duration-500 h-full backdrop-blur-sm ${className || ''}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="relative z-10">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary border border-primary/20 shadow-[0_0_15px_rgba(var(--primary),0.1)] group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <CardDescription className="text-base text-muted-foreground/80 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
