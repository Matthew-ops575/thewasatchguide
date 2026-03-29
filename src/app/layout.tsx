import type { Metadata } from "next";
import Script from "next/script";
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Wasatch Guide",
  url: "https://thewasatchguide.com",
  description:
    "In-depth guides to the communities, restaurants, services, and outdoor life that make the Salt Lake metro unlike anywhere else.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Wasatch Guide",
  url: "https://thewasatchguide.com",
  logo: "https://thewasatchguide.com/logo.png",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MBYV4WZLQ2"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-MBYV4WZLQ2');`}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
