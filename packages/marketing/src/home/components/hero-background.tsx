"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden bg-background">
      {/* Deep Space Background */}
      
      {/* Central Conic Spotlight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-[conic-gradient(from_180deg_at_50%_0%,rgba(0,0,0,0)_0%,rgba(99,102,241,0.15)_30%,rgba(168,85,247,0.15)_50%,rgba(99,102,241,0.15)_70%,rgba(0,0,0,0)_100%)] blur-[100px] pointer-events-none"
      />

      {/* Subtle radial glow for text readability */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[radial-gradient(ellipse_at_center,var(--foreground)_0%,transparent_70%)] opacity-5 blur-[80px]" />

      {/* Very subtle grid lines for tech feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,#000_20%,transparent_100%)] pointer-events-none" />
      
      {/* Noise overlay for premium texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />
    </div>
  );
}
