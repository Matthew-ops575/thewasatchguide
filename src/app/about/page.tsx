import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Local Wasatch Front Editorial",
  description:
    "The Wasatch Guide is an independent editorial site covering neighborhoods, schools, real estate, and daily life along Utah's Wasatch Front. Written by locals.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-brand via-[#2A3540] to-ridge" />
        <div className="relative z-2 px-6 md:px-12 pb-16 pt-32">
          <h1 className="font-heading text-[32px] md:text-[48px] font-extrabold text-white leading-[1.08] mb-3">
            About The Wasatch Guide
          </h1>
          <p className="text-[16px] text-white/50 leading-[1.7] max-w-[600px]">
            An independent editorial resource for life along Utah&apos;s Wasatch
            Front.
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-[700px] mx-auto py-14 px-6 md:px-12">
        <div className="space-y-5 text-[16px] text-text leading-[1.85]">
          <p>
            The Wasatch Guide is built to help people understand what it&apos;s
            actually like to live in the communities along Utah&apos;s Wasatch
            Front &mdash; from Ogden down to Provo and everywhere in between.
          </p>
          <p>
            Every neighborhood has a personality. We write in-depth guides that
            go beyond real estate listings to cover the things that matter: trail
            access, school quality, commute times, local culture, and the little
            details that make a place feel like home.
          </p>
          <p>
            Whether you&apos;re relocating to Utah, moving across the valley, or
            just curious about what&apos;s happening in the next town over, we
            hope these guides help you find your spot along the mountains.
          </p>
        </div>
      </div>
    </div>
  );
}
