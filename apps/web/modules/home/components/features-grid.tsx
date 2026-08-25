import { FadeInView } from "@workspace/ui/components/ui/motion";
import { websiteData } from "@workspace/data";
import { FeatureCard } from "../../features/components/feature-card";

export function FeaturesGrid() {
  const { features } = websiteData.home;
  
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-background">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Everything you need</h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto tracking-tight">A complete toolkit for modern teams to process, analyze, and manage enterprise documents at scale.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, i: number) => {
            // Create a bento box effect: make the first item span 2 columns on lg screens,
            // and the 4th item span 2 columns to create an asymmetric layout
            const isLarge = i === 0 || i === 3;
            
            return (
              <FadeInView
                key={i}
                delay={i * 0.1}
                className={isLarge ? "lg:col-span-2" : "col-span-1"}
              >
                <FeatureCard 
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
