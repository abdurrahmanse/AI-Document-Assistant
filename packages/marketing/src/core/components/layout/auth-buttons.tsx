import { Button } from "@workspace/ui/components/ui/button";
import { ThemeToggle } from "@workspace/ui/components/theme-toggle";

export function AuthButtons() {
  return (
    <>
      <div className="hidden md:flex items-center gap-2">
        <Button variant="ghost" className="font-bold rounded-full">Sign In</Button>
        <Button className="rounded-full font-bold shadow-lg shadow-primary/20 bg-primary/90 hover:bg-primary">
          Get Started
        </Button>
      </div>
      <div className="w-px h-6 bg-border hidden sm:block mx-1" />
      <ThemeToggle />
    </>
  );
}
