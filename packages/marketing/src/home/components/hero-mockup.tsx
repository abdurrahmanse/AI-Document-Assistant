"use client";

import { FadeInView } from "@workspace/ui/components/ui/motion";
import { FileText, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import type { HeroContentProps } from "@workspace/types";

export function HeroMockup({ mockup }: { mockup: NonNullable<HeroContentProps["hero"]["mockup"]> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  const [scanPosition, setScanPosition] = useState(0);

  // Animate the scan line
  useEffect(() => {
    const interval = setInterval(() => {
      setScanPosition((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto mt-32 relative z-20 px-4 md:px-8 perspective-[2000px]">
      <motion.div style={{ rotateX, y, scale }} className="relative transform-style-3d mx-auto">
        
        {/* Glow behind the UI */}
        <div className="absolute -inset-10 bg-indigo-500/20 blur-[100px] rounded-[3rem] -z-10 opacity-50" />

        <div className="relative rounded-2xl border border-border/50 bg-background/80 backdrop-blur-3xl shadow-2xl overflow-hidden flex flex-col">
          
          {/* Minimalist Header */}
          <div className="h-12 border-b border-border/50 flex items-center px-4 justify-between bg-foreground/[0.02]">
            <div className="flex gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-foreground/10" />
              <div className="w-3 h-3 rounded-full bg-foreground/10" />
              <div className="w-3 h-3 rounded-full bg-foreground/10" />
            </div>
            <div className="flex items-center text-xs text-muted-foreground font-mono bg-foreground/5 px-3 py-1 rounded-md">
              <FileText className="w-3 h-3 mr-2" /> {mockup.headerFilename}
            </div>
            <div className="w-12" /> {/* Spacer */}
          </div>

          {/* Editor Body */}
          <div className="relative flex flex-col md:flex-row h-[400px] md:h-[600px] w-full">
            
            {/* Left side: The Document */}
            <div className="flex-1 border-r border-border/50 relative bg-background overflow-hidden flex items-center justify-center p-8">
              
              {/* Document Wireframe */}
              <div className="w-full max-w-sm h-full bg-foreground/[0.02] border border-border/50 rounded-lg p-6 relative overflow-hidden shadow-2xl">
                {/* Simulated text lines */}
                <div className="space-y-4">
                  <div className="h-6 w-3/4 bg-foreground/10 rounded" />
                  <div className="h-3 w-1/4 bg-foreground/5 rounded mt-8" />
                  <div className="h-3 w-full bg-foreground/5 rounded" />
                  <div className="h-3 w-5/6 bg-foreground/5 rounded" />
                  <div className="h-3 w-4/6 bg-foreground/5 rounded" />
                  
                  <div className="h-8 w-full bg-foreground/5 rounded mt-6 border border-border/50 flex items-center px-4">
                     <div className="h-3 w-1/3 bg-foreground/10 rounded" />
                  </div>
                  
                  <div className="h-3 w-full bg-foreground/5 rounded mt-6" />
                  <div className="h-3 w-5/6 bg-foreground/5 rounded" />
                </div>

                {/* Laser Scanner */}
                <motion.div 
                  className="absolute left-0 right-0 h-[2px] bg-indigo-500 shadow-[0_0_15px_2px_rgba(99,102,241,0.8)] z-10"
                  style={{ top: `${scanPosition}%` }}
                />
                <motion.div 
                  className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent to-indigo-500/10 pointer-events-none"
                  style={{ top: `calc(${scanPosition}% - 8rem)` }}
                />
              </div>
            </div>

            {/* Right side: Real-time Data Output */}
            <div className="w-full md:w-80 bg-card p-6 flex flex-col gap-4 overflow-hidden relative">
              <div className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider flex items-center">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                {mockup.streamLabel}
              </div>

              {/* Data Node 1 */}
              <motion.div 
                animate={{ 
                  opacity: scanPosition > 20 ? 1 : 0.3,
                  x: scanPosition > 20 ? 0 : 20,
                  borderColor: scanPosition > 20 && scanPosition < 40 ? 'rgba(99,102,241,0.5)' : 'var(--border)'
                }}
                className="p-4 rounded-lg bg-foreground/[0.02] border border-border/50 transition-all duration-300"
              >
                <div className="text-[10px] text-muted-foreground font-mono mb-1">{mockup.nodes[0].label}</div>
                <div className="text-sm font-medium text-foreground">{mockup.nodes[0].value}</div>
                <div className="mt-2 text-[10px] text-green-500 dark:text-green-400 font-mono">{mockup.nodes[0].confidence}</div>
              </motion.div>

              {/* Data Node 2 */}
              <motion.div 
                animate={{ 
                  opacity: scanPosition > 50 ? 1 : 0.3,
                  x: scanPosition > 50 ? 0 : 20,
                  borderColor: scanPosition > 50 && scanPosition < 70 ? 'rgba(168,85,247,0.5)' : 'var(--border)'
                }}
                className="p-4 rounded-lg bg-foreground/[0.02] border border-border/50 transition-all duration-300"
              >
                <div className="text-[10px] text-muted-foreground font-mono mb-1">{mockup.nodes[1].label}</div>
                <div className="text-sm font-medium text-foreground">{mockup.nodes[1].value}</div>
                <div className="mt-2 text-[10px] text-green-500 dark:text-green-400 font-mono">{mockup.nodes[1].confidence}</div>
              </motion.div>

              {/* Data Node 3 */}
              <motion.div 
                animate={{ 
                  opacity: scanPosition > 80 ? 1 : 0.3,
                  x: scanPosition > 80 ? 0 : 20,
                  borderColor: scanPosition > 80 && scanPosition < 100 ? 'rgba(236,72,153,0.5)' : 'var(--border)'
                }}
                className="p-4 rounded-lg bg-foreground/[0.02] border border-border/50 transition-all duration-300"
              >
                <div className="text-[10px] text-muted-foreground font-mono mb-1">{mockup.nodes[2].label}</div>
                <div className="text-sm font-medium text-foreground flex items-center">
                  {mockup.nodes[2].value}
                  {mockup.nodes[2].subValue && (
                    <>
                      <ChevronRight className="w-3 h-3 mx-1 text-muted-foreground" />
                      {mockup.nodes[2].subValue}
                    </>
                  )}
                </div>
                <div className="mt-2 text-[10px] text-green-500 dark:text-green-400 font-mono">{mockup.nodes[2].confidence}</div>
              </motion.div>
              
              {/* Fade out at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent pointer-events-none" />
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
