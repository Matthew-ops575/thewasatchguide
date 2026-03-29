"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import type { SearchEntry } from "@/lib/search";

const typeLabels: Record<string, string> = {
  "neighborhood-guide": "Neighborhood",
  blog: "Blog",
  vertical: "Local Guide",
};

function scoreMatch(entry: SearchEntry, terms: string[]): number {
  let score = 0;
  const title = entry.title.toLowerCase();
  const desc = entry.description.toLowerCase();
  const area = (entry.area || "").toLowerCase().replace(/-/g, " ");
  const tags = entry.tags.join(" ").toLowerCase();

  for (const term of terms) {
    if (title.includes(term)) score += 10;
    if (area.includes(term)) score += 8;
    if (tags.includes(term)) score += 5;
    if (desc.includes(term)) score += 3;
    if (entry.excerpt.toLowerCase().includes(term)) score += 2;
  }

  return score;
}

export function Search({ entries }: { entries: SearchEntry[] }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 1);

  const results =
    terms.length > 0
      ? entries
          .map((entry) => ({ entry, score: scoreMatch(entry, terms) }))
          .filter((r) => r.score > 0)
          .sort((a, b) => b.score - a.score)
          .slice(0, 6)
          .map((r) => r.entry)
      : [];

  const showResults = focused && terms.length > 0;

  return (
    <div ref={containerRef} className="relative flex max-w-[480px]">
      <input
        type="text"
        placeholder="Search neighborhoods, topics..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        className="flex-1 min-w-0 py-3 md:py-4 px-4 md:px-5 bg-white/[.08] border border-white/[.12] border-r-0 rounded-l-[6px] text-white font-body text-sm outline-none placeholder:text-white/30"
      />
      <button
        onClick={() => setFocused(true)}
        className="py-3 md:py-4 px-5 md:px-7 bg-ridge text-white border border-ridge rounded-r-[6px] font-body text-[13px] font-semibold tracking-wide cursor-pointer hover:bg-ridge-light transition-colors shrink-0"
      >
        Explore
      </button>

      {showResults && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-slate-brand/[.98] backdrop-blur-[12px] border border-white/[.08] rounded-lg shadow-[0_12px_40px_rgba(0,0,0,0.4)] overflow-hidden z-10">
          {results.length > 0 ? (
            results.map((entry) => (
              <Link
                key={entry.slug}
                href={entry.href}
                onClick={() => {
                  setFocused(false);
                  setQuery("");
                }}
                className="block px-4 py-3 no-underline hover:bg-white/[.05] transition-colors border-b border-white/[.04] last:border-b-0"
              >
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-[14px] text-white font-medium">
                    {entry.title}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-sage uppercase tracking-wider font-semibold">
                    {typeLabels[entry.type] || entry.type}
                  </span>
                  {entry.area && (
                    <>
                      <span className="w-[3px] h-[3px] rounded-full bg-white/20" />
                      <span className="text-[11px] text-white/30 capitalize">
                        {entry.area.replace(/-/g, " ")}
                      </span>
                    </>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="px-4 py-4 text-[13px] text-white/30">
              No results for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
