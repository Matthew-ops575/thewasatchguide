import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-brand pt-14 pb-8 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-[2.5fr_1fr_1fr_1fr] gap-10 mb-10">
        <div>
          <div className="font-heading text-xl font-bold text-white mb-2">
            The Wasatch <span className="text-sage font-normal">Guide</span>
          </div>
          <p className="text-[13px] text-white/30 leading-[1.7] max-w-[280px]">
            An independent resource for residents and newcomers to the Salt Lake
            City metro area. In-depth neighborhood guides, local business
            recommendations, and lifestyle content based on firsthand knowledge.
          </p>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/45 mb-3.5">
            Communities
          </div>
          <Link
            href="/draper"
            className="block text-white/30 no-underline text-[13px] py-1 hover:text-white transition-colors"
          >
            Draper
          </Link>
          <Link
            href="/sandy"
            className="block text-white/30 no-underline text-[13px] py-1 hover:text-white transition-colors"
          >
            Sandy
          </Link>
          <Link
            href="/cottonwood-heights"
            className="block text-white/30 no-underline text-[13px] py-1 hover:text-white transition-colors"
          >
            Cottonwood Heights
          </Link>
          <Link
            href="/wasatch-back"
            className="block text-white/30 no-underline text-[13px] py-1 hover:text-white transition-colors"
          >
            Wasatch Back
          </Link>
          <Link
            href="/south-jordan"
            className="block text-white/30 no-underline text-[13px] py-1 hover:text-white transition-colors"
          >
            South Jordan
          </Link>
          <Link
            href="/holladay"
            className="block text-white/30 no-underline text-[13px] py-1 hover:text-white transition-colors"
          >
            Holladay
          </Link>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/45 mb-3.5">
            Topics
          </div>
          <span className="block text-white/30 text-[13px] py-1">
            Dining &amp; Restaurants
          </span>
          <span className="block text-white/30 text-[13px] py-1">
            Home Services
          </span>
          <span className="block text-white/30 text-[13px] py-1">
            Healthcare
          </span>
          <span className="block text-white/30 text-[13px] py-1">
            Outdoor Recreation
          </span>
          <span className="block text-white/30 text-[13px] py-1">
            Real Estate
          </span>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/45 mb-3.5">
            About
          </div>
          <Link
            href="/about"
            className="block text-white/30 no-underline text-[13px] py-1 hover:text-white transition-colors"
          >
            About the Guide
          </Link>
          <span className="block text-white/30 text-[13px] py-1">Contact</span>
          <span className="block text-white/30 text-[13px] py-1">
            Subscribe
          </span>
        </div>
      </div>
      <div className="border-t border-white/[.06] pt-5 flex flex-col md:flex-row justify-between text-[11px] text-white/20">
        <span>&copy; 2026 The Wasatch Guide. All rights reserved.</span>
        <span>Salt Lake City, Utah</span>
      </div>
    </footer>
  );
}
