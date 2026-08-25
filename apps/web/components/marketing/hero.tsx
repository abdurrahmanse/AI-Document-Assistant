import { HeroBackground } from "./hero-background";
import { HeroContent } from "./hero-content";
import { HeroMockup } from "./hero-mockup";

export function MarketingHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 flex flex-col items-center text-center overflow-hidden">
      <HeroBackground />
      <HeroContent />
      <HeroMockup />
    </section>
  );
}
