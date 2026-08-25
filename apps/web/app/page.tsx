import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { MarketingHero } from "../components/marketing/hero";
import { SocialProof } from "../components/marketing/social-proof";
import { FeaturesGrid } from "../components/marketing/features-grid";
import { InteractiveDemo } from "../components/marketing/interactive-demo";

export default function WebHomepage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Header />
      <MarketingHero />
      <SocialProof />
      <FeaturesGrid />
      <InteractiveDemo />
      <Footer />
    </div>
  );
}
