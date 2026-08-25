import Link from "next/link";
import { Logo } from "./logo";
import * as Icons from "lucide-react";
import type { FooterProps } from "@workspace/types";

export function Footer({ 
  footerLinks,
  siteName 
}: FooterProps) {
  return (
    <footer className="bg-background border-t border-border/50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Logo siteName={siteName} />
            <p className="mt-6 text-muted-foreground text-sm leading-relaxed">
              The world&apos;s most advanced AI document assistant. Process, analyze, and understand enterprise documents at scale.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => {
                const Icon = (Icons[link.icon as keyof typeof Icons] as React.ElementType) || Icons.Circle;
                return (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                      {Icon && <Icon className="w-4 h-4 group-hover:text-primary transition-colors" />}
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => {
                const Icon = (Icons[link.icon as keyof typeof Icons] as React.ElementType) || Icons.Circle;
                return (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                      {Icon && <Icon className="w-4 h-4 group-hover:text-primary transition-colors" />}
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => {
                const Icon = (Icons[link.icon as keyof typeof Icons] as React.ElementType) || Icons.Circle;
                return (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-2 group">
                      {Icon && <Icon className="w-4 h-4 group-hover:text-primary transition-colors" />}
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Document Assistant. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
