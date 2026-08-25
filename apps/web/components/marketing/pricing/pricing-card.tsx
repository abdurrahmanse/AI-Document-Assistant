import { CheckCircle2, X } from "lucide-react";
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from "@workspace/ui/components/ui";

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  popular: boolean;
  features: PricingFeature[];
}

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className={`relative h-full group ${plan.popular ? 'scale-105 z-10' : ''}`}>
      {plan.popular && (
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-purple-500/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
      )}
      <Card className={`relative h-full bg-background/50 backdrop-blur-xl flex flex-col ${plan.popular ? 'border-primary/30 shadow-[0_0_30px_rgba(var(--primary),0.1)]' : 'border-white/5 shadow-lg'}`}>
        {plan.popular && (
          <div className="absolute top-0 right-0 bg-primary/20 text-primary px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold border-b border-l border-primary/20">
            Most Popular
          </div>
        )}
        <CardHeader className="pb-8">
          <CardTitle className="text-2xl font-bold tracking-tight">{plan.name}</CardTitle>
          <CardDescription className="text-base text-muted-foreground">{plan.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow space-y-8">
          <div className="text-5xl font-black tracking-tighter">
            {plan.price}
            {plan.price !== "Custom" && <span className="text-xl text-muted-foreground font-normal tracking-normal">/mo</span>}
          </div>
          
          <ul className="space-y-4 flex-grow">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                {feature.included ? (
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                )}
                <span className={`text-sm font-medium ${feature.included ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>

          <Button size="lg" variant={plan.popular ? "default" : "outline"} className={`w-full h-12 font-bold rounded-xl transition-all ${plan.popular ? 'shadow-[0_0_20px_rgba(var(--primary),0.2)]' : 'bg-secondary/30'}`}>
            {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
