"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-6 md:px-12 transition-all duration-400 ${
        scrolled
          ? "bg-slate-brand/[.97] backdrop-blur-[10px] py-3"
          : "py-[18px]"
      }`}
    >
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <div className="w-8 h-8 bg-ridge rounded-[6px] flex items-center justify-center font-heading text-base font-extrabold text-sand-light">
          W
        </div>
        <div className="font-heading text-lg font-bold text-white tracking-tight">
          The Wasatch <span className="text-sage font-normal">Guide</span>
        </div>
      </Link>
      <div className="flex items-center gap-7">
        <Link
          href="/"
          className="hidden md:inline text-white/50 no-underline text-[13px] font-medium tracking-wide hover:text-white transition-colors"
        >
          Home
        </Link>
        <Link
          href="/guides/living-in-draper-utah"
          className="hidden md:inline text-white/50 no-underline text-[13px] font-medium tracking-wide hover:text-white transition-colors"
        >
          Draper
        </Link>
        <span className="hidden md:inline text-white/50 text-[13px] font-medium tracking-wide cursor-default">
          Sandy
        </span>
        <span className="hidden md:inline text-white/50 text-[13px] font-medium tracking-wide cursor-default">
          Cottonwood Heights
        </span>
        <Link
          href="#newsletter"
          className="text-[12px] font-semibold text-sand py-[7px] px-4 border border-sand/30 rounded-[4px] no-underline hover:bg-sand/10 hover:border-sand transition-all"
        >
          Subscribe
        </Link>
      </div>
    </nav>
  );
}
