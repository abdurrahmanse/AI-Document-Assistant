import Link from "next/link";
import { mainNav } from "../../config/navigation";

export function DesktopNav() {
  return (
    <nav className="hidden lg:flex items-center gap-8">
      {mainNav.map((item) => {
        const Icon = item.icon;
        return (
          <Link 
            key={item.href} 
            href={item.href} 
            className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors group"
          >
            {Icon && <Icon className="w-4 h-4 group-hover:text-primary transition-colors" />}
            {item.title}
          </Link>
        );
      })}
    </nav>
  );
}
