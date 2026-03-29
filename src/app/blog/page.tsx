import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Local insights, neighborhood comparisons, dining guides, and market updates from along the Wasatch Front.",
};

const categoryColors: Record<string, string> = {
  "neighborhood-guide": "bg-ridge",
  blog: "bg-rust",
  vertical: "bg-sky-brand",
  comparison: "bg-sand",
};

const categoryLabels: Record<string, string> = {
  "neighborhood-guide": "Neighborhood",
  blog: "Blog",
  vertical: "Local Guide",
  comparison: "Comparison",
};

function getCategoryFromTags(tags: string[]): string | null {
  if (tags.includes("dining") || tags.includes("restaurants")) return "Dining";
  if (tags.includes("healthcare") || tags.includes("dentist")) return "Healthcare";
  if (tags.includes("comparison")) return "Comparison";
  if (tags.includes("home services")) return "Home Services";
  if (tags.includes("outdoors")) return "Outdoors";
  if (tags.includes("real estate")) return "Real Estate";
  return null;
}

function getPostHref(post: { slug: string; type: string; area?: string }): string {
  if (post.type === "neighborhood-guide") return `/${post.slug}`;
  return `/blog/${post.slug}`;
}

export default function BlogPage() {
  const posts = getAllPosts();

  // Separate guides from blog/vertical content
  const guides = posts.filter((p) => p.type === "neighborhood-guide");
  const articles = posts.filter((p) => p.type !== "neighborhood-guide");

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[35vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-brand via-[#2A3540] to-ridge" />
        <div className="relative z-2 px-6 md:px-12 pb-12 pt-28">
          <h1 className="font-heading text-[28px] md:text-[44px] font-extrabold text-white leading-[1.08] mb-3">
            The Blog
          </h1>
          <p className="text-[15px] md:text-[16px] text-white/50 leading-[1.7] max-w-[600px]">
            Neighborhood comparisons, dining guides, service recommendations,
            and local insights from along the Wasatch Front.
          </p>
        </div>
      </section>

      {/* Articles */}
      {articles.length > 0 && (
        <section className="py-16 px-6 md:px-12">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-6 h-0.5 bg-ridge" />
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
                Latest
              </span>
            </div>
            <div className="font-heading text-[28px] md:text-4xl font-bold text-slate-brand leading-[1.1]">
              Articles &amp; Guides
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((post) => {
              const tagLabel = getCategoryFromTags(post.tags);
              const typeLabel = categoryLabels[post.type] || "Blog";
              const badge = tagLabel || typeLabel;
              const badgeColor = tagLabel
                ? post.tags.includes("dining")
                  ? "bg-rust"
                  : post.tags.includes("healthcare")
                  ? "bg-sky-brand"
                  : post.tags.includes("comparison")
                  ? "bg-sand"
                  : "bg-ridge"
                : categoryColors[post.type] || "bg-ridge";

              return (
                <Link
                  key={post.slug}
                  href={getPostHref(post)}
                  className="no-underline block"
                >
                  <div className="group bg-white rounded-xl overflow-hidden border border-black/[.04] transition-all hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
                    <div className="h-[180px] relative bg-gradient-to-br from-[#4A5568] to-[#2D3748]">
                      <span className="absolute inset-0 flex items-center justify-center text-[11px] text-white/20 tracking-wider uppercase">
                        Cover photo
                      </span>
                      <div
                        className={`absolute top-3.5 left-3.5 py-1 px-3 rounded-[4px] text-[10px] font-bold tracking-wide uppercase text-white ${badgeColor}`}
                      >
                        {badge}
                      </div>
                    </div>
                    <div className="p-[22px]">
                      <div className="font-heading text-[18px] font-bold text-slate-brand leading-[1.25] mb-2">
                        {post.title}
                      </div>
                      <div className="text-[13px] text-muted leading-[1.65] line-clamp-3">
                        {post.excerpt || post.description}
                      </div>
                      <div className="flex items-center gap-3 mt-3.5 text-[11px] text-muted">
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        {post.area && (
                          <>
                            <span className="w-[3px] h-[3px] rounded-full bg-muted" />
                            <span className="capitalize">{post.area.replace(/-/g, " ")}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Area Guides */}
      <section className="bg-warm py-16 px-6 md:px-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-ridge" />
            <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-ridge">
              Area Guides
            </span>
          </div>
          <div className="font-heading text-[28px] md:text-4xl font-bold text-slate-brand leading-[1.1]">
            Neighborhood Guides
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {guides.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}`}
              className="no-underline block"
            >
              <div className="group bg-white rounded-xl overflow-hidden border border-black/[.04] transition-all hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
                <div className="h-[160px] relative bg-gradient-to-br from-[#3D5A4C] to-[#2A3540]">
                  <span className="absolute inset-0 flex items-center justify-center text-[11px] text-white/20 tracking-wider uppercase">
                    Cover photo
                  </span>
                  <div className="absolute top-3.5 left-3.5 py-1 px-3 rounded-[4px] text-[10px] font-bold tracking-wide uppercase text-white bg-ridge">
                    Neighborhood
                  </div>
                </div>
                <div className="p-[22px]">
                  <div className="font-heading text-[18px] font-bold text-slate-brand leading-[1.25] mb-2">
                    {post.title}
                  </div>
                  <div className="text-[13px] text-muted leading-[1.65] line-clamp-2">
                    {post.excerpt || post.description}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <div className="bg-slate-brand rounded-2xl py-10 md:py-14 px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mx-4 md:mx-12 my-16">
        <div>
          <div className="font-heading text-[26px] md:text-[32px] font-bold text-white leading-[1.15] mb-3">
            Get the local<br />perspective, weekly.
          </div>
          <div className="text-sm text-white/45 leading-[1.7]">
            One email per week with new neighborhood guides, local business
            spotlights, and the updates that matter along the Wasatch Front.
          </div>
        </div>
        <div>
          <NewsletterForm id="blog-newsletter" />
        </div>
      </div>
    </div>
  );
}
