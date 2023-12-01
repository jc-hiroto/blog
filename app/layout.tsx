import { Providers } from "./providers";
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
