import { Providers } from "app/providers";
import "globals.css";
import Header from "components/Header";
import Footer from "components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Blog by jc-hiroto",
    default: "Blog by jc-hiroto",
  },
  description:
    "A blog by jc-hiroto. Mostly about Software Engineering and Photography.",
  generator: "Next.js",
  keywords: ["jc-hiroto", "blog", "software engineering", "photography"],
  creator: "jc-hiroto",
  authors: [{ name: "jc-hiroto", url: "https://jchiroto.dev/" }],
  metadataBase: new URL("https://blog.jchiroto.dev/"),
  openGraph: {
    title: "Blog by jc-hiroto",
    description:
      "A blog by jc-hiroto. Mostly about Software Engineering and Photography.",
    url: "https://blog.jchiroto.dev/",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://blog.jchiroto.dev/api/og",
        width: 1200,
        height: 630,
        alt: "Blog by jc-hiroto",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">
        <Providers>
          <Header />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
