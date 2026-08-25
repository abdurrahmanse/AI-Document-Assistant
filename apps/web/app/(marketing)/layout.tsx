import type { ReactNode } from "react";
import { Header } from "@workspace/marketing";
import { Footer } from "@workspace/marketing";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
