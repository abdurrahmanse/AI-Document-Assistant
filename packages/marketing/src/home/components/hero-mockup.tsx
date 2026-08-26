"use client";

import { Database, Code, Shield } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import type { HeroContentProps } from "@workspace/types";

export function HeroMockup({ mockup }: { mockup: NonNullable<HeroContentProps["hero"]["mockup"]> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], [15, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5], [-5, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  const [scanPosition, setScanPosition] = useState(0);

  // Animate the scan line smoothly
  useEffect(() => {
    let animationFrameId: number;
    let position = 0;
    
    const animate = () => {
      position += 0.5;
      if (position > 100) position = 0;
      setScanPosition(position);
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto mt-24 relative z-20 px-4 md:px-8 perspective-[2500px]">
      <motion.div style={{ rotateX, rotateY, y, scale }} className="relative transform-style-3d mx-auto">
        
        {/* Soft Ambient Glow Behind the App */}
        <div className="absolute -inset-10 bg-gradient-to-r from-primary/30 via-indigo-500/20 to-purple-500/30 blur-[100px] rounded-[3rem] -z-10 opacity-70 dark:opacity-40" />

        {/* The Main App Window (Glassmorphic) */}
        <div className="relative rounded-2xl border border-border/40 bg-background/60 dark:bg-background/40 backdrop-blur-3xl shadow-[0_20px_70px_-10px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
          
          {/* MacOS Style Header */}
          <div className="h-14 border-b border-border/30 flex items-center px-6 justify-between bg-foreground/[0.01]">
            <div className="flex gap-2.5 items-center">
              <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm" />
            </div>
            <div className="flex items-center text-xs font-medium text-muted-foreground bg-foreground/5 px-4 py-1.5 rounded-full backdrop-blur-md border border-border/30">
              <Shield className="w-3.5 h-3.5 mr-2 text-primary" /> {mockup.headerFilename}
            </div>
            <div className="flex gap-4">
              <div className="w-20 h-2 bg-foreground/5 rounded-full" />
              <div className="w-12 h-2 bg-foreground/5 rounded-full hidden sm:block" />
            </div>
          </div>

          {/* Editor Body */}
          <div className="relative flex flex-col md:flex-row h-[450px] md:h-[650px] w-full">
            
            {/* Left side: The Document Viewer */}
            <div className="flex-[1.5] border-r border-border/30 relative bg-background/50 overflow-hidden flex items-center justify-center p-6 md:p-12">
              
              {/* Document Skeleton / Wireframe */}
              <div className="w-full h-full max-w-lg bg-card border border-border/40 rounded-xl p-8 relative overflow-hidden shadow-sm">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                {/* Simulated text lines */}
                <div className="space-y-5 relative z-10">
                  <div className="h-8 w-3/4 bg-foreground/10 rounded-md" />
                  <div className="h-4 w-1/4 bg-primary/20 rounded mt-10" />
                  
                  <div className="space-y-3 mt-4">
                    <div className="h-3 w-full bg-foreground/5 rounded" />
                    <div className="h-3 w-11/12 bg-foreground/5 rounded" />
                    <div className="h-3 w-4/5 bg-foreground/5 rounded" />
                  </div>
                  
                  <div className="h-12 w-full bg-primary/5 rounded-lg mt-8 border border-primary/20 flex items-center px-4">
                     <div className="h-3 w-1/3 bg-primary/30 rounded" />
                  </div>
                  
                  <div className="space-y-3 mt-8">
                    <div className="h-3 w-full bg-foreground/5 rounded" />
                    <div className="h-3 w-5/6 bg-foreground/5 rounded" />
                    <div className="h-3 w-full bg-foreground/5 rounded" />
                  </div>
                </div>

                {/* Organic Laser Scanner */}
                <motion.div 
                  className="absolute left-0 right-0 h-[2px] bg-primary/80 shadow-[0_0_20px_4px_rgba(var(--primary),0.6)] z-20"
                  style={{ top: `${scanPosition}%` }}
                />
                <motion.div 
                  className="absolute left-0 right-0 h-40 bg-gradient-to-b from-transparent to-primary/10 pointer-events-none z-10"
                  style={{ top: `calc(${scanPosition}% - 10rem)` }}
                />
              </div>
            </div>

            {/* Right side: Real-time Extraction Dashboard */}
            <div className="w-full md:w-[380px] bg-foreground/[0.02] p-6 md:p-8 flex flex-col gap-5 overflow-hidden relative">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-semibold text-foreground uppercase tracking-widest flex items-center gap-2">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  {mockup.streamLabel}
                </div>
                <Database className="w-4 h-4 text-muted-foreground" />
              </div>

              {/* Data Nodes mapped dynamically */}
              <div className="space-y-4 flex-1 overflow-hidden relative">
                {mockup.nodes.map((node, i) => {
                  const triggerPoint = (i + 1) * 25; // 25, 50, 75
                  const isActive = scanPosition > triggerPoint;
                  
                  return (
                    <motion.div 
                      key={i}
                      animate={{ 
                        opacity: isActive ? 1 : 0.4,
                        y: isActive ? 0 : 10,
                        scale: isActive ? 1 : 0.98,
                        borderColor: isActive && scanPosition < triggerPoint + 30 ? 'rgba(var(--primary),0.4)' : 'var(--border)'
                      }}
                      transition={{ duration: 0.5, type: "spring" }}
                      className={`p-4 rounded-xl bg-card border transition-all relative overflow-hidden group ${isActive ? 'shadow-sm' : ''}`}
                    >
                      {/* Highlight flash effect */}
                      <motion.div 
                        animate={{ opacity: isActive && scanPosition < triggerPoint + 5 ? 1 : 0 }}
                        className="absolute inset-0 bg-primary/10 pointer-events-none"
                      />
                      
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-[11px] text-muted-foreground font-mono flex items-center gap-1.5">
                          <Code className="w-3 h-3" />
                          {node.label}
                        </div>
                        <div className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isActive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-foreground/5 text-muted-foreground'}`}>
                          {isActive ? node.confidence : 'WAITING'}
                        </div>
                      </div>
                      
                      <div className="text-sm font-semibold text-foreground flex items-center">
                        {node.value}
                      </div>
                      
                      {node.subValue && (
                        <div className="mt-2 text-xs text-muted-foreground border-t border-border/50 pt-2">
                          {node.subValue}
                        </div>
                      )}
                    </motion.div>
                  );
                })}

                {/* Fade out mask at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
