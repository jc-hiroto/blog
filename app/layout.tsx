import { Providers } from "app/providers";
import "globals.css";
import Header from "components/Header";
import Footer from "components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SP } from "next/dist/shared/lib/utils";

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
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
