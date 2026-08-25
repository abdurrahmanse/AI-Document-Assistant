import Link from "next/link";
import { Sparkles } from "lucide-react";
import { siteConfig } from "../../config/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
        <Sparkles className="w-4 h-4 text-primary" />
      </div>
      <span className="font-bold text-lg tracking-tight hidden sm:block">
        {siteConfig.name}
      </span>
    </Link>
  );
}
