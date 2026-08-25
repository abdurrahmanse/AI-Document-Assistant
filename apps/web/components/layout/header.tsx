import { ThemeToggle } from "@workspace/ui/components/theme-toggle";

export function Header() {
  return (
    <div className="absolute top-0 right-0 p-6 z-50">
      <ThemeToggle />
    </div>
  );
}
