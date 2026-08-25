import type { Metadata } from "next";
import { fontRajdhani } from "@workspace/ui/lib/fonts";
import { constructMetadata } from "@workspace/ui/lib/metadata";
import "@workspace/ui/globals.css";
import { QueryProvider, LenisProvider, ThemeProvider, ToastProvider, NuqsProvider } from "@workspace/ui/providers";
import { Suspense } from "react";
import { PostHogProvider, PostHogPageView } from "@workspace/observability";

export const metadata: Metadata = constructMetadata({
  title: {
    template: "%s | AI Document Assistant",
    default: "AI Document Assistant - The Future of Document Intelligence",
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any, // type assertion for template string format
  description: "AI-powered document intelligence platform. Upload, analyze, and extract insights from your enterprise documents in seconds.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontRajdhani.variable} min-h-screen bg-background font-sans antialiased overflow-x-hidden`}>
        <PostHogProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem disableTransitionOnChange>
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
