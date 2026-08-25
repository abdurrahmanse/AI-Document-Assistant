"use client";

import { securityFeatures, trustChecklist } from "../../../config/marketing/security";
import { SecurityHero } from "../../../components/marketing/security/security-hero";
import { SecurityBentoCard } from "../../../components/marketing/security/security-bento-card";
import { TrustChecklist } from "../../../components/marketing/security/trust-checklist";

export default function SecurityPage() {
  return (
    <div className="flex flex-col items-center pb-24 overflow-hidden relative">
      <div className="absolute top-0 w-full h-full bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(16,185,129,0.1),rgba(255,255,255,0))] -z-10" />
      
      <SecurityHero />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 relative z-10 w-full">
        {securityFeatures.map((feature, i) => (
          <SecurityBentoCard key={i} feature={feature} index={i} />
        ))}
      </div>

      <TrustChecklist items={trustChecklist} />
    </div>
  );
}
