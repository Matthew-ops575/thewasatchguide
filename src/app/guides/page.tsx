import { Metadata } from "next";
import Link from "next/link";
import { getPostsByType } from "@/lib/api";

export const metadata: Metadata = {
  title: "Wasatch Front Neighborhood Guides",
  description:
    "In-depth guides to Sandy, Draper, Cottonwood Heights, Holladay, South Jordan, Sugar House, and the Wasatch Back. Schools, home prices, and local life.",
  alternates: {
    canonical: "https://thewasatchguide.com/guides",
  },
};

const guideExtras: Record<
  string,
  { tag: string; gradient: string; coverImage?: string }
> = {
  draper: {
    tag: "Salt Lake County",
    gradient: "from-[#3D5A4C] to-[#2A3540]",
    coverImage: "/images/living-in-draper.jpg",
  },
  sandy: {
    tag: "South Valley",
    gradient: "from-[#4A5568] to-[#2D3748]",
  },
  "cottonwood-heights": {
    tag: "Canyon Communities",
    gradient: "from-[#553C3C] to-[#3D2A2A]",
  },
  "wasatch-back": {
    tag: "Mountain & Resort",
    gradient: "from-[#4A5D6B] to-[#2C3E50]",
    coverImage: "/images/park-city-snow.jpg",
  },
  "south-jordan": {
    tag: "South Salt Lake County",
    gradient: "from-[#5A4E3C] to-[#3D3628]",
  },
  holladay: {
    tag: "East Bench",
    gradient: "from-[#4C5A5A] to-[#2E3A3A]",
  },
  "sugar-house": {
    tag: "Salt Lake City",
    gradient: "from-[#5A4C5A] to-[#3A2E3A]",
  },
};

export default function GuidesPage() {
  const guides = getPostsByType("neighborhood-guide");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://thewasatchguide.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Area Guides",
        item: "https://thewasatchguide.com/guides",
      },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Wasatch Front Area Guides",
    description:
      "In-depth guides to living in neighborhoods along Utah's Wasatch Front.",
    url: "https://thewasatchguide.com/guides",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: guides.map((guide, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: guide.title,
        url: `https://thewasatchguide.com/${guide.slug}`,
      })),
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* HERO */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-brand via-[#2A3540] to-ridge" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-2 px-6 md:px-12 max-w-[760px]">
          <div className="text-[12px] text-white/35 mb-6">
            <Link
              href="/"
              className="text-sage no-underline hover:text-sage/80"
            >
              Home
            </Link>
            {" / "}
            <span className="text-white/60">Area Guides</span>
          </div>
          <h1 className="font-heading text-[28px] md:text-[48px] font-extrabold text-white leading-[1.08] mb-4">
            Wasatch Front Area Guides
          </h1>
          <p className="text-[15px] md:text-[17px] text-white/50 leading-[1.8] max-w-[560px]">
            In-depth, neighborhood-level guides to the communities that make up
            the Salt Lake metro. Schools, home prices, commute times, and the
            local details that matter.
          </p>
        </div>
      </section>

      {/* GUIDE GRID */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
          {guides.map((guide) => {
            const extras = guideExtras[guide.slug] || {
              tag: "Area Guide",
              gradient: "from-[#4A5568] to-[#2D3748]",
            };
            return (
              <Link
                key={guide.slug}
                href={`/${guide.slug}`}
                className="no-underline block"
              >
                <div className="group relative rounded-xl overflow-hidden h-[300px] cursor-pointer">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${extras.gradient} transition-transform duration-500 group-hover:scale-[1.04]`}
                  />
                  {extras.coverImage && (
                    <img
                      src={extras.coverImage}
                      alt={guide.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-brand/[.92] via-slate-brand/30 via-45% to-slate-brand/15" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-2">
                    <div className="text-[10px] text-sage tracking-[0.12em] uppercase font-bold mb-1.5">
                      {extras.tag}
                    </div>
                    <div className="font-heading text-xl font-bold text-white mb-1.5">
                      {guide.title}
                    </div>
                    <div className="text-[13px] text-white/50 leading-[1.6] line-clamp-2 max-h-0 overflow-hidden opacity-0 group-hover:max-h-[60px] group-hover:opacity-100 transition-all duration-300">
                      {guide.description}
                    </div>
                    <div className="inline-flex items-center gap-1.5 mt-2 text-[11px] text-sand font-medium">
                      Read guide →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
