import type { Metadata } from "next";
import { fontRajdhani, fontInter } from "@workspace/ui/lib/fonts";
import { constructMetadata } from "@workspace/ui/lib/metadata";
import "@workspace/ui/globals.css";
import { QueryProvider, LenisProvider, ThemeProvider, ToastProvider, NuqsProvider } from "@workspace/ui/providers";
import { Suspense } from "react";
import { PostHogProvider, PostHogPageView } from "@workspace/observability";

import { websiteData } from "@workspace/data";

export const metadata: Metadata = constructMetadata({
  title: {
    template: websiteData.metadata.web.title.template,
    default: websiteData.metadata.web.title.default,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any, // type assertion for template string format
  description: websiteData.metadata.web.description,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontRajdhani.variable} ${fontInter.variable} min-h-screen bg-background font-sans antialiased overflow-x-hidden`}>
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
