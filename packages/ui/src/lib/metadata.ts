import type { Metadata } from "next";

export function constructMetadata({
  title = "AI Document Assistant",
  description = "AI-powered document intelligence platform. Upload, analyze, and extract insights from your enterprise documents in seconds.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string | { template: string; default: string };
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title: typeof title === "string" ? title : title?.default,
      description,
      images: [
        {
          url: image,
        },
      ],
      type: "website",
      siteName: "AI Document Assistant",
    },
    twitter: {
      card: "summary_large_image",
      title: typeof title === "string" ? title : title?.default,
      description,
      images: [image],
    },
    icons,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
