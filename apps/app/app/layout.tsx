import type { ReactNode } from "react";
import { fontRajdhani } from "@workspace/ui/lib/fonts";
import { constructMetadata } from "@workspace/ui/lib/metadata";
import "@workspace/ui/globals.css";
import { QueryProvider, LenisProvider, ThemeProvider, ToastProvider, NuqsProvider } from "@workspace/ui/providers";
import { type Metadata } from "next";
import { Suspense } from "react";
import { PostHogProvider, PostHogPageView } from "@workspace/observability";

import { websiteData } from "@workspace/data";

export const metadata: Metadata = constructMetadata({
  title: {
    template: websiteData.metadata.app.title.template,
    default: websiteData.metadata.app.title.default,
  },
  description: websiteData.metadata.app.description,
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontRajdhani.variable} min-h-screen bg-background font-sans antialiased`}>
        <PostHogProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <NuqsProvider>
              <QueryProvider>
                <LenisProvider>
                  <Suspense fallback={null}>
                    <PostHogPageView />
                  </Suspense>
                  {children}
                  <ToastProvider />
                </LenisProvider>
              </QueryProvider>
            </NuqsProvider>
          </ThemeProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
