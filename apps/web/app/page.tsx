import { Header } from "../components/layout/header";
import { MarketingHero } from "../components/marketing/hero";
import { FeaturesGrid } from "../components/marketing/features-grid";
import { InteractiveDemo } from "../components/marketing/interactive-demo";

export default function WebHomepage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Header />
      <MarketingHero />
      <FeaturesGrid />
      <InteractiveDemo />
    </div>
  );
}
