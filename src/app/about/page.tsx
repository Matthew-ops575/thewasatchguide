import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Wasatch Guide is a local editorial site covering neighborhoods along Utah's Wasatch Front.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-stone-900 mb-6">
        About The Wasatch Guide
      </h1>
      <div className="space-y-4 text-stone-700 leading-relaxed">
        <p>
          The Wasatch Guide is a local editorial site built to help people
          understand what it&apos;s actually like to live in the communities
          along Utah&apos;s Wasatch Front — from Ogden down to Provo and
          everywhere in between.
        </p>
        <p>
          Every neighborhood has a personality. We write in-depth guides that go
          beyond real estate listings to cover the things that matter: trail
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
  );
}
