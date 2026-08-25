"use client";

import { useState, useEffect } from "react";
import { Button } from "@workspace/ui/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";

import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { AuthButtons } from "./auth-buttons";
import type { HeaderProps } from "@workspace/types";

export function Header({ 
  siteName, 
  navItems 
}: HeaderProps) {
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
            <Logo siteName={siteName} />
            <DesktopNav items={navItems} />

            <div className="flex items-center gap-2 sm:gap-4">
              <AuthButtons />
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

          <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} items={navItems} />
        </div>
      </div>
    </header>
  );
}
