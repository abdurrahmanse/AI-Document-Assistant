import type { ReactNode } from "react";
import { Header } from "../../components/layout/header";
import { Footer } from "../../components/layout/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex flex-col pt-24">
        {children}
      </main>
      <Footer />
    </div>
  );
}
