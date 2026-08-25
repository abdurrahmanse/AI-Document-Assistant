"use client";

import { AnimatedMesh } from "@workspace/ui/components/ui/motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-background">
      {/* Deep Space / Organic Canvas */}
      <div className="absolute inset-0 bg-background" />

      {/* Aurora / Organic Mesh Gradients */}
      <AnimatedMesh
        animationType="primary"
        className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[120px] mix-blend-normal dark:mix-blend-screen pointer-events-none"
      />
      <AnimatedMesh
        animationType="secondary"
        className="absolute top-[20%] -right-[10%] w-[60%] h-[80%] rounded-full bg-indigo-500/20 blur-[120px] mix-blend-normal dark:mix-blend-screen pointer-events-none"
      />
      <AnimatedMesh
        animationType="tertiary"
        className="absolute -bottom-[20%] left-[20%] w-[80%] h-[60%] rounded-full bg-purple-500/20 blur-[120px] mix-blend-normal dark:mix-blend-screen pointer-events-none"
      />

      {/* Subtle radial glow for text readability in the center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--background)_0%,transparent_100%)] opacity-80" />

      {/* Very subtle organic noise overlay for premium texture */}
      <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.15] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
    </div>
  );
}
