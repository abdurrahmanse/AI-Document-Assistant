"use client";

import { motion } from "framer-motion";
import { cn } from "@workspace/ui/lib/utils";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export function ShinyText({
  children,
  className,
  shimmerWidth = 100,
}: ShinyTextProps) {
  return (
    <motion.div
      style={{
        "--shimmer-width": `${shimmerWidth}px`,
      } as React.CSSProperties}
      className={cn(
        "relative mx-auto max-w-md bg-neutral-900/50 px-4 py-1.5 rounded-full overflow-hidden text-sm font-medium text-white/80 backdrop-blur-sm border border-white/10",
        className
      )}
    >
      <div className="absolute inset-0 z-0 bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.2),55%,transparent)] bg-[length:250%_100%] animate-shimmer" />
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.div>
  );
}
