import Link from "next/link";
import { Brain } from "lucide-react";
import { websiteData } from "@workspace/data";

export function Logo() {
  const siteConfig = websiteData.core.site;
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors border border-primary/20">
        <Brain className="w-4 h-4 text-primary" />
      </div>
      <span className="font-bold text-lg tracking-tight hidden sm:block">
        {siteConfig.name}
      </span>
    </Link>
  );
}
