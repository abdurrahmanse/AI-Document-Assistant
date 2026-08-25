"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@workspace/ui/components/ui/button";
import { ThemeToggle } from "@workspace/ui/components/theme-toggle";
import { Sparkles, Menu } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className={cn(
          "flex flex-col px-6 py-3 rounded-[2rem] transition-all duration-500 overflow-hidden",
          (scrolled || mobileMenuOpen)
            ? "bg-background/80 backdrop-blur-2xl border border-border shadow-[0_4px_30px_rgba(0,0,0,0.1)]" 
            : "bg-transparent border-transparent"
        )}>
          
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
              </div>
              <span className="font-bold text-lg tracking-tight hidden sm:block">AI Doc Assist</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</Link>
              <Link href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Solutions</Link>
              <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
              <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Docs</Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="hidden md:flex items-center gap-2">
                <Button variant="ghost" className="rounded-full">Sign In</Button>
                <Button className="rounded-full shadow-lg shadow-primary/20 bg-primary/90 hover:bg-primary">Get Started</Button>
              </div>
              <div className="w-px h-6 bg-border hidden sm:block mx-1" />
              <ThemeToggle />
              
              {/* Mobile Menu Toggle */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden rounded-full"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Expansion */}
          <div className={cn(
            "lg:hidden flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-[400px] mt-6 pb-4 opacity-100" : "max-h-0 opacity-0"
          )}>
            <nav className="flex flex-col gap-4 px-2">
              <Link href="#features" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</Link>
              <Link href="#solutions" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
              <Link href="#pricing" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <Link href="/docs" className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Docs</Link>
            </nav>
            <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
              <Button variant="outline" className="w-full justify-center rounded-full" onClick={() => setMobileMenuOpen(false)}>Sign In</Button>
              <Button className="w-full justify-center rounded-full" onClick={() => setMobileMenuOpen(false)}>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
