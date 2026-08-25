import Link from "next/link";
import { Button } from "@workspace/ui/components/ui/button";
import { cn } from "@workspace/ui/lib/utils";
import { mainNav } from "../../config/navigation";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <div className={cn(
      "lg:hidden flex flex-col gap-4 overflow-hidden transition-all duration-300 ease-in-out",
      isOpen ? "max-h-[400px] mt-6 pb-4 opacity-100" : "max-h-0 opacity-0"
    )}>
      <nav className="flex flex-col gap-4 px-2">
        {mainNav.map((item) => {
          const Icon = item.icon;
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className="flex items-center gap-3 text-lg font-bold text-muted-foreground hover:text-primary transition-colors" 
              onClick={onClose}
            >
              {Icon && <Icon className="w-5 h-5 text-primary/70" />}
              {item.title}
            </Link>
          );
        })}
      </nav>
      <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
        <Button variant="outline" className="w-full font-bold justify-center rounded-full" onClick={onClose}>
          Sign In
        </Button>
        <Button className="w-full font-bold justify-center rounded-full" onClick={onClose}>
          Get Started
        </Button>
      </div>
    </div>
  );
}
