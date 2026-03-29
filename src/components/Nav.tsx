"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { communities, topics } from "@/lib/navigation";

function useClickOutside(ref: React.RefObject<HTMLElement | null>, handler: () => void) {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useClickOutside(navRef, () => setOpenDropdown(null));

  const publishedCommunities = communities.filter((c) => c.published);
  const upcomingCommunities = communities.filter((c) => !c.published);

  return (
    <>
      <nav
        ref={navRef}
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

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/"
            className="text-white/50 no-underline text-[13px] font-medium tracking-wide hover:text-white transition-colors"
          >
            Home
          </Link>

          {/* Communities dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "communities" ? null : "communities")}
              className="flex items-center gap-1 text-white/50 text-[13px] font-medium tracking-wide hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              Communities
              <svg className={`w-3 h-3 transition-transform ${openDropdown === "communities" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2">
                <path d="M3 4.5l3 3 3-3" />
              </svg>
            </button>
            {openDropdown === "communities" && (
              <div className="absolute top-full left-0 mt-3 w-[220px] bg-slate-brand/[.98] backdrop-blur-[12px] border border-white/[.08] rounded-lg py-2 shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
                {publishedCommunities.map((c) => (
                  <Link
                    key={c.name}
                    href={c.href}
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2.5 text-[13px] text-white/60 no-underline hover:text-white hover:bg-white/[.05] transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
                {upcomingCommunities.length > 0 && (
                  <>
                    <div className="border-t border-white/[.06] my-1.5" />
                    <div className="px-4 py-1.5 text-[10px] text-white/25 uppercase tracking-wider font-semibold">
                      Coming Soon
                    </div>
                    {upcomingCommunities.map((c) => (
                      <span
                        key={c.name}
                        className="block px-4 py-2 text-[13px] text-white/25 cursor-default"
                      >
                        {c.name}
                      </span>
                    ))}
                  </>
                )}
              </div>
            )}
          </div>

          {/* Topics dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpenDropdown(openDropdown === "topics" ? null : "topics")}
              className="flex items-center gap-1 text-white/50 text-[13px] font-medium tracking-wide hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              Topics
              <svg className={`w-3 h-3 transition-transform ${openDropdown === "topics" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2">
                <path d="M3 4.5l3 3 3-3" />
              </svg>
            </button>
            {openDropdown === "topics" && (
              <div className="absolute top-full left-0 mt-3 w-[220px] bg-slate-brand/[.98] backdrop-blur-[12px] border border-white/[.08] rounded-lg py-2 shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
                {topics.map((t) =>
                  t.href ? (
                    <Link
                      key={t.name}
                      href={t.href}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2.5 text-[13px] text-white/60 no-underline hover:text-white hover:bg-white/[.05] transition-colors"
                    >
                      {t.name}
                    </Link>
                  ) : (
                    <span
                      key={t.name}
                      className="flex items-center justify-between px-4 py-2.5 text-[13px] text-white/30 cursor-default"
                    >
                      {t.name}
                      <span className="text-[9px] text-white/15 uppercase tracking-wider">Soon</span>
                    </span>
                  )
                )}
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="text-white/50 no-underline text-[13px] font-medium tracking-wide hover:text-white transition-colors"
          >
            Blog
          </Link>

          <Link
            href="/about"
            className="text-white/50 no-underline text-[13px] font-medium tracking-wide hover:text-white transition-colors"
          >
            About
          </Link>

          <Link
            href="#newsletter"
            className="text-[12px] font-semibold text-sand py-[7px] px-4 border border-sand/30 rounded-[4px] no-underline hover:bg-sand/10 hover:border-sand transition-all"
          >
            Subscribe
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[99] bg-slate-brand/[.98] backdrop-blur-sm pt-20 px-6 flex flex-col gap-1 md:hidden overflow-y-auto pb-10">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-white no-underline text-lg font-medium py-3 border-b border-white/[.06]"
          >
            Home
          </Link>

          {/* Mobile Communities accordion */}
          <button
            onClick={() => setMobileExpanded(mobileExpanded === "communities" ? null : "communities")}
            className="flex items-center justify-between text-white text-lg font-medium py-3 border-b border-white/[.06] bg-transparent border-x-0 border-t-0 cursor-pointer w-full text-left"
          >
            Communities
            <svg className={`w-4 h-4 text-white/40 transition-transform ${mobileExpanded === "communities" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2">
              <path d="M3 4.5l3 3 3-3" />
            </svg>
          </button>
          {mobileExpanded === "communities" && (
            <div className="pl-4 border-b border-white/[.06] pb-2">
              {publishedCommunities.map((c) => (
                <Link
                  key={c.name}
                  href={c.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white/60 no-underline text-[15px] py-2.5"
                >
                  {c.name}
                </Link>
              ))}
              {upcomingCommunities.length > 0 && (
                <>
                  <div className="text-[10px] text-white/20 uppercase tracking-wider font-semibold mt-2 mb-1">
                    Coming Soon
                  </div>
                  {upcomingCommunities.map((c) => (
                    <span key={c.name} className="block text-white/20 text-[15px] py-2">
                      {c.name}
                    </span>
                  ))}
                </>
              )}
            </div>
          )}

          {/* Mobile Topics accordion */}
          <button
            onClick={() => setMobileExpanded(mobileExpanded === "topics" ? null : "topics")}
            className="flex items-center justify-between text-white text-lg font-medium py-3 border-b border-white/[.06] bg-transparent border-x-0 border-t-0 cursor-pointer w-full text-left"
          >
            Topics
            <svg className={`w-4 h-4 text-white/40 transition-transform ${mobileExpanded === "topics" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2">
              <path d="M3 4.5l3 3 3-3" />
            </svg>
          </button>
          {mobileExpanded === "topics" && (
            <div className="pl-4 border-b border-white/[.06] pb-2">
              {topics.map((t) =>
                t.href ? (
                  <Link
                    key={t.name}
                    href={t.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white/60 no-underline text-[15px] py-2.5"
                  >
                    {t.name}
                  </Link>
                ) : (
                  <span key={t.name} className="block text-white/20 text-[15px] py-2">
                    {t.name}
                  </span>
                )
              )}
            </div>
          )}

          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            className="text-white no-underline text-lg font-medium py-3 border-b border-white/[.06]"
          >
            Blog
          </Link>

          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="text-white no-underline text-lg font-medium py-3 border-b border-white/[.06]"
          >
            About
          </Link>

          <Link
            href="#newsletter"
            onClick={() => setMobileOpen(false)}
            className="mt-4 text-center text-[14px] font-semibold text-sand py-3 px-4 border border-sand/30 rounded-[6px] no-underline"
          >
            Subscribe
          </Link>
        </div>
      )}
    </>
  );
}
