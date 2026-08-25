"use client";

import Image from "next/image";
import { FadeInView } from "@workspace/ui/components/ui/motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroMockup() {
  return (
    <FadeInView 
      className="w-full max-w-7xl mx-auto mt-20 relative z-20 px-4 md:px-8"
      delay={0.3}
      yOffset={60}
    >
      {/* Floating UI Elements */}
      <motion.div 
        initial={{ opacity: 0, y: 20, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="absolute -left-4 md:-left-12 top-1/4 z-40 bg-background/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl hidden md:flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        </div>
        <div>
          <p className="text-sm font-semibold">Contract Analyzed</p>
          <p className="text-xs text-muted-foreground">Found 3 critical clauses</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        className="absolute -right-4 md:-right-8 top-1/3 z-40 bg-background/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl hidden lg:flex items-center gap-4"
      >
        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-purple-400" />
        </div>
        <div>
          <p className="text-sm font-semibold">AI Insight Generated</p>
          <p className="text-xs text-muted-foreground">Summarized 45 pages in 2s</p>
        </div>
      </motion.div>

      <div className="relative rounded-[2.5rem] border border-white/10 bg-background/30 p-2 md:p-4 backdrop-blur-3xl shadow-[0_0_80px_-20px_rgba(120,119,198,0.3)]">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-indigo-500/10 rounded-[2.5rem] pointer-events-none" />
        
        {/* Mac window controls */}
        <div className="absolute top-6 left-8 flex gap-2 z-30 hidden md:flex">
          <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
        </div>

        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-muted/20 aspect-[16/9] w-full group">
          {/* We use an unsplash placeholder for the beautiful dashboard UI */}
          <Image 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
            alt="Dashboard Interface Mockup"
            fill
            className="object-cover object-top opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
            priority
          />
          {/* Premium Glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_60%,rgba(0,0,0,0.4))]" />
        </div>
      </div>
    </FadeInView>
  );
}
