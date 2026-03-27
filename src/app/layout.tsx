import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://thewasatchguide.com"),
  title: {
    default: "The Wasatch Guide — Your Insider's Guide to Life Along the Wasatch Front",
    template: "%s | The Wasatch Guide",
  },
  description:
    "In-depth guides to the communities, restaurants, services, and outdoor life that make the Salt Lake metro unlike anywhere else.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Wasatch Guide",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
