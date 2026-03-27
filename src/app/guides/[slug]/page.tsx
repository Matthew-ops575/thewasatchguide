import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getGuideBySlug, getAllGuideSlugs } from "@/lib/guides";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllGuideSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      publishedTime: guide.date,
      authors: [guide.author],
      ...(guide.image && { images: [{ url: guide.image }] }),
    },
  };
}

const exploreCards = [
  { icon: "\ud83c\udf7d", title: "Where to Eat", desc: "The local favorites, hidden gems, and date-night spots Draper residents actually recommend." },
  { icon: "\ud83d\udd27", title: "Home Services", desc: "Trusted HVAC, plumbing, and electrical companies serving the Draper area \u2014 rated by locals." },
  { icon: "\ud83c\udfe5", title: "Healthcare", desc: "Top-rated doctors, dentists, and specialists near Draper with honest patient perspectives." },
  { icon: "\u26f0", title: "Outdoor Guide", desc: "Corner Canyon trails, canyon access, ski proximity, and the outdoor life that defines Draper." },
];

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  // Extract the first paragraph as a lead paragraph
  const contentParts = guide.contentHtml.split("</p>");
  const firstParagraph = contentParts[0]?.replace(/<p>/, "") || "";
  const restContent = contentParts.slice(1).join("</p>");

  return (
    <div>
      {/* GUIDE HERO */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A3540] via-ridge to-slate-brand" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-2 px-6 md:px-12 max-w-[700px] pb-16">
          <div className="text-[12px] text-white/35 mb-4">
            <Link href="/" className="text-sage no-underline hover:text-sage/80">
              Home
            </Link>
            {" / "}
            <span className="text-sage">Area Guides</span>
            {" / "}
            {guide.title.split(",")[0]?.replace("Living in ", "") || guide.title}
          </div>
          <h1 className="font-heading text-[32px] md:text-[48px] font-extrabold text-white leading-[1.08] mb-3">
            {guide.title}
          </h1>
          <p className="text-[16px] text-white/50 leading-[1.7]">
            {guide.description}
          </p>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-wrap bg-slate-brand/80 backdrop-blur-[8px] border-t border-white/[.06]">
          {[
            { num: "$585K", label: "Median Home Price" },
            { num: "51,000", label: "Population" },
            { num: "A+", label: "School Rating" },
            { num: "22 min", label: "to Downtown SLC" },
            { num: "15 min", label: "to Ski Resorts" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex-1 min-w-[50%] md:min-w-0 py-[18px] px-8 text-center border-r border-white/[.06] last:border-r-0"
            >
              <div className="font-heading text-[22px] font-bold text-sand">
                {stat.num}
              </div>
              <div className="text-[10px] text-white/35 uppercase tracking-wider mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GUIDE BODY */}
      <div className="max-w-[800px] mx-auto py-14 px-6 md:px-12">
        {/* Lead paragraph */}
        <p className="text-[18px] text-slate-brand leading-[1.8] font-normal mb-5">
          {firstParagraph.replace(/<[^>]+>/g, "")}
        </p>

        {/* Callout box */}
        <div className="bg-warm border-l-[3px] border-ridge rounded-r-[10px] py-5 px-6 my-7 text-sm leading-[1.7] text-text">
          <strong className="text-ridge">Local insight:</strong> The lots east of 1300 East tend to have unobstructed mountain views, but you&apos;ll pay a 15&ndash;20% premium over the west side of I-15. If school ratings are your top priority, look at the Corner Canyon High School boundary neighborhoods in the southern pocket &mdash; they consistently rank among the highest in the state.
        </div>

        {/* Rest of content */}
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: restContent }}
        />
      </div>

      {/* EXPLORE MORE */}
      <div className="bg-warm py-14 px-6 md:px-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-ridge" />
            <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
              Explore Draper
            </span>
          </div>
          <div className="font-heading text-4xl font-bold text-slate-brand leading-[1.1] mb-2">
            More About Life in Draper
          </div>
          <div className="text-[15px] text-muted leading-[1.7] max-w-[520px]">
            Dive deeper into the topics that matter when you&apos;re considering
            a move &mdash; or just looking for the best local spots.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {exploreCards.map((card) => (
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
    </div>
  );
}
