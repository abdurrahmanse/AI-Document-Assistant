import type { ReactNode } from "react";
import { fontRajdhani } from "@workspace/ui/lib/fonts";
import { constructMetadata } from "@workspace/ui/lib/metadata";
import "@workspace/ui/globals.css";
import { QueryProvider, LenisProvider, ThemeProvider, ToastProvider, NuqsProvider } from "@workspace/ui/providers";
import { type Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: {
    template: "%s | Admin - AI Document Assistant",
    default: "Admin Command Center - AI Document Assistant",
  },
  description: "AI Document Assistant System Administration",
});

export default function RootLayout({ children }: { children: ReactNode }) {
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
