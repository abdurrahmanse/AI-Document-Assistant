import type { ReactNode } from "react";
import { fontRajdhani } from "@workspace/ui/lib/fonts";
import { constructMetadata } from "@workspace/ui/lib/metadata";
import "@workspace/ui/globals.css";
import { QueryProvider, LenisProvider, ThemeProvider, ToastProvider, NuqsProvider } from "@workspace/ui/providers";
import { type Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: {
    template: "%s | App - AI Document Assistant",
    default: "Dashboard - AI Document Assistant",
  },
  description: "Manage your documents and interact with our AI.",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontRajdhani.variable} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NuqsProvider>
            <QueryProvider>
              <LenisProvider>
                {children}
                <ToastProvider />
              </LenisProvider>
            </QueryProvider>
          </NuqsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
