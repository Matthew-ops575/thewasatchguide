import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlugWithHtml, getGuideSlugs } from "@/lib/api";

interface PageProps {
  params: Promise<{ area: string }>;
}

export async function generateStaticParams() {
  const slugs = getGuideSlugs();
  return slugs.map((slug) => ({ area: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { area } = await params;
  const post = await getPostBySlugWithHtml(area);

  if (!post) {
    return { title: "Guide Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://thewasatchguide.com/${area}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      ...(post.author?.name && { authors: [post.author.name] }),
      ...(post.ogImage?.url && { images: [{ url: post.ogImage.url }] }),
    },
  };
}

// Per-area data keyed by slug
const areaData: Record<string, {
  areaName: string;
  stats: { num: string; label: string }[];
  callout: string;
  exploreCards: { icon: string; title: string; desc: string }[];
  geo: { lat: number; lng: number };
  faq: { question: string; answer: string };
}> = {
  "draper": {
    areaName: "Draper",
    stats: [
      { num: "$585K", label: "Median Home Price" },
      { num: "51,000", label: "Population" },
      { num: "A+", label: "School Rating" },
      { num: "22 min", label: "to Downtown SLC" },
      { num: "15 min", label: "to Ski Resorts" },
    ],
    callout: "The lots east of 1300 East tend to have unobstructed mountain views, but you\u2019ll pay a 15\u201320% premium over the west side of I-15. If school ratings are your top priority, look at the Corner Canyon High School boundary neighborhoods in the southern pocket \u2014 they consistently rank among the highest in the state.",
    exploreCards: [
      { icon: "\ud83c\udf7d", title: "Where to Eat", desc: "The local favorites, hidden gems, and date-night spots Draper residents actually recommend." },
      { icon: "\ud83d\udd27", title: "Home Services", desc: "Trusted HVAC, plumbing, and electrical companies serving the Draper area \u2014 rated by locals." },
      { icon: "\ud83c\udfe5", title: "Healthcare", desc: "Top-rated doctors, dentists, and specialists near Draper with honest patient perspectives." },
      { icon: "\u26f0\ufe0f", title: "Outdoor Guide", desc: "Corner Canyon trails, canyon access, ski proximity, and the outdoor life that defines Draper." },
    ],
    geo: { lat: 40.5247, lng: -111.8638 },
    faq: { question: "Why move to Draper, Utah?", answer: "Draper offers a unique combination of Silicon Slopes tech employment, top-rated Canyons School District schools, and immediate access to Corner Canyon's 450+ miles of trails. The western half provides TRAX-connected suburban convenience while the eastern foothills offer mountain views and larger lots — all within 25 minutes of downtown Salt Lake City." },
  },
  "sandy": {
    areaName: "Sandy",
    stats: [
      { num: "$550K", label: "Median Home Price" },
      { num: "96,000", label: "Population" },
      { num: "A", label: "School Rating" },
      { num: "18 min", label: "to Downtown SLC" },
      { num: "25 min", label: "to Ski Resorts" },
    ],
    callout: "Sandy is split between two school districts \u2014 Granite (north of about 9400 South) and Canyons (south). The difference matters. Always verify which district a home falls in before making an offer. For canyon access, homes east of 1300 East put you minutes from the mouths of Big and Little Cottonwood.",
    exploreCards: [
      { icon: "\ud83c\udf7d", title: "Where to Eat", desc: "From the State Street corridor to hidden spots off 10600 South \u2014 where Sandy locals actually go for dinner." },
      { icon: "\ud83d\udd27", title: "Home Services", desc: "The HVAC, plumbing, and electrical companies Sandy homeowners trust and recommend." },
      { icon: "\ud83c\udfe5", title: "Healthcare", desc: "Family doctors, dentists, and specialists serving Sandy \u2014 with honest local perspectives." },
      { icon: "\u26f0\ufe0f", title: "Outdoor Guide", desc: "Dimple Dell trails, canyon access, and the outdoor life that makes Sandy\u2019s location unbeatable." },
    ],
    geo: { lat: 40.5650, lng: -111.8590 },
    faq: { question: "Why move to Sandy, Utah?", answer: "Sandy offers genuine centrality in the Salt Lake Valley — equidistant from downtown SLC, four ski resorts, and major employment centers. With TRAX light rail access, a maturing dining scene along State Street, and home prices significantly lower than Draper or the east bench, Sandy delivers more city for less money without sacrificing school quality in the Canyons District half." },
  },
  "cottonwood-heights": {
    areaName: "Cottonwood Heights",
    stats: [
      { num: "$725K", label: "Median Home Price" },
      { num: "34,000", label: "Population" },
      { num: "A", label: "School Rating" },
      { num: "15 min", label: "to Downtown SLC" },
      { num: "10 min", label: "to Ski Resorts" },
    ],
    callout: "Inventory in Cottonwood Heights is chronically low \u2014 people who move here tend to stay. Homes near Wasatch Boulevard command a premium for canyon proximity, but you\u2019ll also hear more traffic noise in ski season. The sweet spot for many families is the area between Fort Union and 6200 South, east of 2300 East \u2014 close to everything, slightly more affordable, and walkable to Brighton High.",
    exploreCards: [
      { icon: "\ud83c\udf7d", title: "Where to Eat", desc: "The best restaurants and local favorites along Fort Union and 6200 South that Cottonwood Heights residents love." },
      { icon: "\ud83d\udd27", title: "Home Services", desc: "Reliable HVAC, plumbing, and contractors trusted by Cottonwood Heights homeowners." },
      { icon: "\ud83c\udfe5", title: "Healthcare", desc: "Top doctors, dentists, and specialists near Cottonwood Heights with real patient perspectives." },
      { icon: "\u26f0\ufe0f", title: "Outdoor Guide", desc: "Big Cottonwood Canyon, Mt. Olympus, Pipeline Trail \u2014 the outdoor access that defines life here." },
    ],
    geo: { lat: 40.6163, lng: -111.8102 },
    faq: { question: "Why move to Cottonwood Heights, Utah?", answer: "Cottonwood Heights offers the best ski canyon access in the Salt Lake Valley — four world-class resorts within 25 minutes. The city has mature, established neighborhoods with real tree canopy, strong Canyons School District schools, and a 15-minute commute to downtown SLC. Low turnover means people who move here tend to stay." },
  },
  "wasatch-back": {
    areaName: "Wasatch Back",
    stats: [
      { num: "$1.2M", label: "Median (Park City)" },
      { num: "$650K", label: "Median (Heber)" },
      { num: "34,000", label: "Combined Pop." },
      { num: "35 min", label: "to Downtown SLC" },
      { num: "5 min", label: "to Ski Resorts" },
    ],
    callout: "Park City and Heber Valley are two very different markets separated by fifteen minutes of highway. If you want resort-town walkability and world-class skiing out your door, Park City delivers \u2014 at $3M+ for a proper house. If you want a real yard, a normal grocery store, and ski resorts within twenty minutes, Heber City offers that at a third of the price. Most people who end up in the Wasatch Back looked at both before deciding.",
    exploreCards: [
      { icon: "\ud83c\udf7d", title: "Where to Eat", desc: "From Park City\u2019s Main Street dining scene to Heber\u2019s growing restaurant corridor \u2014 where locals actually go." },
      { icon: "\ud83d\udd27", title: "Home Services", desc: "Trusted contractors, HVAC, and home service providers across the Wasatch Back." },
      { icon: "\ud83c\udfe5", title: "Healthcare", desc: "Doctors, dentists, and specialists serving Park City and Heber Valley residents." },
      { icon: "\u26f0\ufe0f", title: "Outdoor Guide", desc: "Deer Valley, Park City Mountain, 350+ miles of trails, and the outdoor life that defines the Wasatch Back." },
    ],
    geo: { lat: 40.6461, lng: -111.4980 },
    faq: { question: "Why move to the Wasatch Back?", answer: "The Wasatch Back offers mountain-town living just 35 minutes from Salt Lake City. Park City has world-class skiing at Park City Mountain and Deer Valley, 350+ miles of mountain biking trails, and a vibrant Main Street dining scene. Heber City provides a more affordable alternative with strong schools (named Utah's 2025 Best of State district) and real acreage at a fraction of Park City prices." },
  },
  "south-jordan": {
    areaName: "South Jordan",
    stats: [
      { num: "$640K", label: "Median Home Price" },
      { num: "88,000", label: "Population" },
      { num: "A", label: "School Rating" },
      { num: "30 min", label: "to Downtown SLC" },
      { num: "35 min", label: "to Ski Resorts" },
    ],
    callout: "South Jordan is really two cities in one. Traditional South Jordan east of Bangerter has larger lots, established neighborhoods, and a quieter suburban feel. Daybreak, on the west side, is a master-planned new-urbanist community with its own lake, TRAX access, and walkable town center. The two sides share a school district and city government but not much else in terms of daily life. Know which one you\u2019re buying into before you start shopping.",
    exploreCards: [
      { icon: "\ud83c\udf7d", title: "Where to Eat", desc: "SoDa Row favorites, The District dining, and the local spots South Jordan residents keep going back to." },
      { icon: "\ud83d\udd27", title: "Home Services", desc: "Trusted HVAC, plumbing, and contractors serving South Jordan and Daybreak homeowners." },
      { icon: "\ud83c\udfe5", title: "Healthcare", desc: "Family doctors, dentists, and specialists near South Jordan with real patient perspectives." },
      { icon: "\u26f0\ufe0f", title: "Outdoor Guide", desc: "Oquirrh Lake, Jordan River Parkway, and the outdoor amenities that make Daybreak and South Jordan unique." },
    ],
    geo: { lat: 40.5622, lng: -111.9297 },
    faq: { question: "Why move to South Jordan or Daybreak?", answer: "South Jordan offers two distinct lifestyles in one city. Traditional South Jordan east of Bangerter has larger lots, strong Jordan School District schools (including top-ranked Bingham High), and a quieter suburban feel. Daybreak on the west side is Utah's most successful walkable community — with Oquirrh Lake, TRAX light rail to downtown, SoDa Row dining, and the new Salt Lake Bees ballpark." },
  },
  "holladay": {
    areaName: "Holladay & Millcreek",
    stats: [
      { num: "$750K", label: "Median (Holladay)" },
      { num: "$600K", label: "Median (Millcreek)" },
      { num: "67,000", label: "Combined Pop." },
      { num: "12 min", label: "to Downtown SLC" },
      { num: "20 min", label: "to Ski Resorts" },
    ],
    callout: "Holladay and Millcreek straddle two school districts \u2014 Canyons (south/east) and Granite (north/west). The boundary runs roughly along 3900 South and varies by neighborhood. This is the single most important thing to verify before making an offer, because homes on opposite sides of the same street can fall in different districts. Check the district boundary maps directly rather than trusting real estate listing data.",
    exploreCards: [
      { icon: "\ud83c\udf7d", title: "Where to Eat", desc: "Holladay Village dining, 3300 South eats, and the east bench restaurants locals love." },
      { icon: "\ud83d\udd27", title: "Home Services", desc: "Reliable contractors and home service providers trusted by Holladay and Millcreek homeowners." },
      { icon: "\ud83c\udfe5", title: "Healthcare", desc: "Top doctors, dentists, and specialists on the east bench with honest local perspectives." },
      { icon: "\u26f0\ufe0f", title: "Outdoor Guide", desc: "Millcreek Canyon, Mt. Olympus, and the trail access that defines east bench living." },
    ],
    geo: { lat: 40.6605, lng: -111.8246 },
    faq: { question: "Why move to Holladay or Millcreek, Utah?", answer: "Holladay and Millcreek offer mature east bench neighborhoods with sixty years of tree canopy, a 10-15 minute commute to downtown SLC, and direct Millcreek Canyon access for hiking and biking. The area provides a broader price range than Cottonwood Heights — from $450K condos in Millcreek to $1M+ foothills homes in Holladay — with strong schools at Skyline and Olympus High." },
  },
  "sugar-house": {
    areaName: "Sugar House",
    stats: [
      { num: "$665K", label: "Median Home Price" },
      { num: "~20,000", label: "Population" },
      { num: "A-", label: "School Rating" },
      { num: "8 min", label: "to Downtown SLC" },
      { num: "30 min", label: "to Ski Resorts" },
    ],
    callout: "Sugar House is changing fast. New condo and apartment buildings are going up along 2100 South and Highland Drive, and longtime residents have strong opinions about the pace of development. If you\u2019re buying a historic bungalow, check whether adjacent lots are zoned for multi-family \u2014 your quiet side yard could become a four-story building. The walkability is real, but so is the construction.",
    exploreCards: [
      { icon: "\ud83c\udf7d", title: "Where to Eat", desc: "Coffee shops, independent restaurants, and the bars that make Sugar House\u2019s dining scene one of the best in Salt Lake." },
      { icon: "\ud83d\udd27", title: "Home Services", desc: "Contractors, handymen, and home service providers Sugar House homeowners trust." },
      { icon: "\ud83c\udfe5", title: "Healthcare", desc: "Doctors, dentists, and specialists near Sugar House with honest local perspectives." },
      { icon: "\u26f0\ufe0f", title: "Outdoor Guide", desc: "Sugar House Park, Parley\u2019s Trail, Hidden Hollow, and the green spaces that anchor the neighborhood." },
    ],
    geo: { lat: 40.7223, lng: -111.8585 },
    faq: { question: "Why move to Sugar House, Salt Lake City?", answer: "Sugar House is the most walkable neighborhood along the Wasatch Front — with independent shops, restaurants, and Sugar House Park all reachable on foot. The S-Line streetcar connects to TRAX, downtown is 8 minutes away, and Parley's Trail provides a bike corridor to the canyons. It's Salt Lake City's best option for people who want genuine urban neighborhood life without sacrificing mountain access." },
  },
};

export default async function AreaPage({ params }: PageProps) {
  const { area } = await params;

  let post;
  try {
    post = await getPostBySlugWithHtml(area);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  const areaInfo = areaData[area];
  const areaName = areaInfo?.areaName || post.title.replace("Living in ", "").split(",")[0];

  // Extract hero image (if the content starts with an <img> inside a <p>)
  const heroImageMatch = post.contentHtml.match(/^<p><img\s+src="([^"]+)"\s+alt="([^"]*)"[^>]*><\/p>/);
  const heroImage = heroImageMatch ? { src: heroImageMatch[1], alt: heroImageMatch[2] } : null;
  const contentAfterImage = heroImageMatch
    ? post.contentHtml.slice(heroImageMatch[0].length)
    : post.contentHtml;

  // Extract "At a Glance" section first (before lead paragraph extraction)
  const atAGlanceMatch = contentAfterImage.match(/<h2>At a Glance<\/h2>\s*<ul>([\s\S]*?)<\/ul>/);
  const atAGlanceItems: { label: string; value: string }[] = [];
  if (atAGlanceMatch) {
    const listHtml = atAGlanceMatch[1];
    const liRegex = /<li>\s*<strong>(.*?)<\/strong>\s*(.*?)\s*<\/li>/g;
    let match;
    while ((match = liRegex.exec(listHtml)) !== null) {
      atAGlanceItems.push({ label: match[1].replace(/:$/, ""), value: match[2] });
    }
  }
  const contentWithoutGlance = atAGlanceMatch
    ? contentAfterImage.replace(atAGlanceMatch[0], "")
    : contentAfterImage;

  // Extract the first paragraph as a lead paragraph
  const firstParagraphMatch = contentWithoutGlance.match(/<p>([\s\S]*?)<\/p>/);
  const firstParagraphHtml = firstParagraphMatch ? firstParagraphMatch[1] : "";
  const firstParagraph = firstParagraphHtml
    .replace(/<[^>]+>/g, "")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(parseInt(dec, 10)))
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
  const restContent = firstParagraphMatch
    ? contentWithoutGlance.replace(firstParagraphMatch[0], "")
    : contentWithoutGlance;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    ...(post.author?.name && {
      author: { "@type": "Person", name: post.author.name },
    }),
    publisher: {
      "@type": "Organization",
      name: "The Wasatch Guide",
      url: "https://thewasatchguide.com",
    },
    datePublished: post.date,
    mainEntityOfPage: `https://thewasatchguide.com/${area}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://thewasatchguide.com" },
      { "@type": "ListItem", position: 2, name: "Area Guides", item: "https://thewasatchguide.com/guides" },
      { "@type": "ListItem", position: 3, name: areaName, item: `https://thewasatchguide.com/${area}` },
    ],
  };

  const placeSchema = areaInfo?.geo ? {
    "@context": "https://schema.org",
    "@type": "Place",
    name: areaName,
    description: post.description,
    geo: {
      "@type": "GeoCoordinates",
      latitude: areaInfo.geo.lat,
      longitude: areaInfo.geo.lng,
    },
    url: `https://thewasatchguide.com/${area}`,
  } : null;

  const faqSchema = areaInfo?.faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: areaInfo.faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: areaInfo.faq.answer,
        },
      },
    ],
  } : null;

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {placeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* GUIDE HERO */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        {heroImage ? (
          <>
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2A3540] via-[#2A3540]/60 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#2A3540] via-ridge to-slate-brand" />
        )}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-2 px-6 md:px-12 max-w-[700px] pt-28 md:pt-32 pb-24 md:pb-28">
          <div className="text-[12px] text-white/35 mb-4">
            <Link href="/" className="text-sage no-underline hover:text-sage/80">
              Home
            </Link>
            {" / "}
            <Link href="/guides" className="text-sage no-underline hover:text-sage/80">Area Guides</Link>
            {" / "}
            {areaName}
          </div>
          <h1 className="font-heading text-[28px] md:text-[48px] font-extrabold text-white leading-[1.08] mb-3">
            {post.title}
          </h1>
          <p className="text-[15px] md:text-[16px] text-white/50 leading-[1.7]">
            {post.description}
          </p>
        </div>

        {/* Stats bar */}
        {areaInfo?.stats && (
          <div className="absolute bottom-0 left-0 right-0 bg-slate-brand/80 backdrop-blur-[8px] border-t border-white/[.06]">
            <div className="flex overflow-x-auto md:overflow-visible">
              {areaInfo.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-none w-[40%] md:w-auto md:flex-1 py-3 md:py-[18px] px-5 md:px-8 text-center border-r border-white/[.06] last:border-r-0 shrink-0"
                >
                  <div className="font-heading text-[18px] md:text-[22px] font-bold text-sand">
                    {stat.num}
                  </div>
                  <div className="text-[9px] md:text-[10px] text-white/35 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* GUIDE BODY */}
      <div className="max-w-[800px] mx-auto py-14 px-6 md:px-12">
        {/* Lead paragraph */}
        <p className="text-[18px] text-slate-brand leading-[1.8] font-normal mb-5">
          {firstParagraph}
        </p>

        {/* At a Glance card */}
        {atAGlanceItems.length > 0 && (
          <div className="bg-warm rounded-[12px] border border-black/[.06] p-6 md:p-8 my-8">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-5 h-0.5 bg-ridge" />
              <h2 className="font-heading text-[20px] md:text-[22px] font-bold text-slate-brand m-0">
                At a Glance
              </h2>
            </div>
            <ul className="list-none m-0 p-0 space-y-3">
              {atAGlanceItems.map((item) => (
                <li key={item.label} className="flex gap-2.5 text-[15px] leading-[1.6]">
                  <span className="w-1.5 h-1.5 rounded-full bg-ridge flex-shrink-0 mt-[9px]" />
                  <div>
                    <strong className="text-slate-brand">{item.label}:</strong>{" "}
                    <span className="text-text" dangerouslySetInnerHTML={{ __html: item.value }} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Callout box */}
        {areaInfo?.callout && (
          <div className="bg-warm border-l-[3px] border-ridge rounded-r-[10px] py-5 px-6 my-7 text-sm leading-[1.7] text-text">
            <strong className="text-ridge">Local insight:</strong> {areaInfo.callout}
          </div>
        )}

        {/* Rest of content */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: restContent }}
        />
      </div>

      {/* EXPLORE MORE */}
      {areaInfo?.exploreCards && (
        <div className="bg-warm py-14 px-6 md:px-12">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-6 h-0.5 bg-ridge" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                Explore {areaName}
              </span>
            </div>
            <div className="font-heading text-[28px] md:text-4xl font-bold text-slate-brand leading-[1.1] mb-2">
              More About Life in {areaName}
            </div>
            <div className="text-[15px] text-muted leading-[1.7] max-w-[520px]">
              Dive deeper into the topics that matter when you&apos;re considering
              a move &mdash; or just looking for the best local spots.
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {areaInfo.exploreCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-[10px] p-[22px] border border-black/[.04] transition-all hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.05)]"
              >
                <div className="text-2xl mb-2.5">{card.icon}</div>
                <div className="font-heading text-[16px] font-bold text-slate-brand mb-1">
                  {card.title}
                </div>
                <div className="text-[12px] text-muted leading-[1.55]">
                  {card.desc}
                </div>
                <div className="inline-block mt-2 text-[10px] font-bold tracking-wide uppercase py-[3px] px-2.5 rounded-[4px] bg-sand-light text-sand">
                  Coming Soon
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
