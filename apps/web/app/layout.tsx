import type { Metadata } from "next";
import { fontRajdhani } from "@workspace/ui/lib/fonts";
import { constructMetadata } from "@workspace/ui/lib/metadata";
import "@workspace/ui/globals.css";
import { QueryProvider, LenisProvider, ThemeProvider, ToastProvider, NuqsProvider } from "@workspace/ui/providers";

export const metadata: Metadata = constructMetadata({
  title: {
    template: "%s | AI Document Assistant",
    default: "AI Document Assistant - The Future of Document Intelligence",
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
