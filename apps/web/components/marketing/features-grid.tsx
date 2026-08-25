import { FadeInView } from "@workspace/ui/components/ui/motion";
import { Zap, Shield, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@workspace/ui/components/ui";

const features = [
  { title: "Lightning Fast", description: "Built on edge infrastructure for sub-10ms response times globally.", icon: Zap },
  { title: "Enterprise Grade", description: "SOC2 Type II compliant with end-to-end military-grade encryption.", icon: Shield },
  { title: "AI Native", description: "Harness the power of latest frontier models to analyze your documents.", icon: Sparkles },
];

export function FeaturesGrid() {
  return (
    <section className="py-24 px-4 bg-secondary/50">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Everything you need</h2>
          <p className="text-muted-foreground text-lg">A complete toolkit for modern teams.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <FadeInView
              key={i}
              delay={i * 0.1}
            >
              <Card className="bg-background border-border/50 shadow-none hover:border-primary/50 transition-colors h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
