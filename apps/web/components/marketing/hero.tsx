import Image from "next/image";
import { FadeIn, FadeInView } from "@workspace/ui/components/ui/motion";
import { ArrowRight, Sparkles, LayoutDashboard } from "lucide-react";
import { Button } from "@workspace/ui/components/ui";

export function MarketingHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 flex flex-col items-center text-center overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute top-0 z-[-1] h-screen w-full bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]" />

      <FadeIn
        duration={0.8}
        yOffset={30}
        className="max-w-5xl mx-auto z-10"
      >
        <div className="relative space-y-8 flex flex-col items-center">
          <FadeIn 
            delay={0.1}
            duration={0.5}
            yOffset={0}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm shadow-[0_0_15px_rgba(var(--primary),0.2)] backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4" />
            <span>Introducing AI Document Assistant 2.0</span>
          </FadeIn>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05]">
            The Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 drop-shadow-sm">
              Document Intelligence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
            Upload, analyze, and extract insights from your enterprise documents in seconds. Powered by the world's most advanced AI models.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full">
            <Button size="lg" className="h-14 px-8 text-lg rounded-full group bg-gradient-to-r from-primary to-indigo-600 hover:opacity-90 shadow-[0_0_40px_-10px_rgba(var(--primary),0.5)] transition-all w-full sm:w-auto">
              Start Building Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full backdrop-blur-md bg-background/50 border-border/50 hover:bg-secondary/50 shadow-sm w-full sm:w-auto transition-all">
              <LayoutDashboard className="mr-2 w-5 h-5 text-muted-foreground" />
              View Live Demo
            </Button>
          </div>
        </div>
      </FadeIn>

      {/* Hero Mockup Image */}
      <FadeInView 
        className="w-full max-w-7xl mx-auto mt-20 relative z-20 px-4 md:px-8"
        delay={0.3}
        yOffset={60}
      >
        <div className="relative rounded-[2.5rem] border border-white/10 bg-background/30 p-2 md:p-4 backdrop-blur-3xl shadow-[0_0_80px_-20px_rgba(120,119,198,0.3)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-indigo-500/10 rounded-[2.5rem] pointer-events-none" />
          
          {/* Mac window controls */}
          <div className="absolute top-6 left-8 flex gap-2 z-30 hidden md:flex">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>

          <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-muted/20 aspect-[16/9] w-full">
            {/* We use an unsplash placeholder for the beautiful dashboard UI */}
            <Image 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
              alt="Dashboard Interface Mockup"
              fill
              className="object-cover object-top opacity-90 transition-transform duration-700 hover:scale-[1.02]"
              priority
            />
            {/* Glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>
        </div>
      </FadeInView>
    </section>
  );
}
