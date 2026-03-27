import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thewasatchguide.com"),
  title: {
    default: "The Wasatch Guide — Neighborhood Guides for the Wasatch Front",
    template: "%s | The Wasatch Guide",
  },
  description:
    "Local editorial guides to neighborhoods along Utah's Wasatch Front — from Ogden to Provo and everywhere in between.",
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
        <header className="border-b border-stone-200 bg-white">
          <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
            <Link href="/" className="text-xl font-bold tracking-tight text-stone-900">
              The Wasatch Guide
            </Link>
            <div className="flex gap-6 text-sm font-medium text-stone-600">
              <Link href="/" className="hover:text-stone-900 transition-colors">
                Guides
              </Link>
              <Link href="/about" className="hover:text-stone-900 transition-colors">
                About
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
          {children}
        </main>

        <footer className="border-t border-stone-200 bg-white">
          <div className="mx-auto max-w-3xl px-6 py-8 text-center text-sm text-stone-500">
            <p>
              &copy; {new Date().getFullYear()} The Wasatch Guide. Built along the Wasatch Front.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
