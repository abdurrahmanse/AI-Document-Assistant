import { Header } from "@workspace/marketing";
import { Footer } from "@workspace/marketing";
import { MarketingHero } from "@workspace/marketing";
import { SocialProof } from "@workspace/marketing";
import { FeaturesGrid } from "@workspace/marketing";
import { InteractiveDemo } from "@workspace/marketing";

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
