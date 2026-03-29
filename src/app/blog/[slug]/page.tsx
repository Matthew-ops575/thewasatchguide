import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlugWithHtml, getAllPublishedPosts } from "@/lib/api";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPublishedPosts().filter(
    (p) => p.type !== "neighborhood-guide"
  );
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlugWithHtml(slug);
  } catch {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      ...(post.author?.name && { authors: [post.author.name] }),
      images: [{ url: post.ogImage.url }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlugWithHtml(slug);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  const areaName = post.area
    ? post.area.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : null;

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
    mainEntityOfPage: `https://thewasatchguide.com/blog/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://thewasatchguide.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://thewasatchguide.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://thewasatchguide.com/blog/${slug}` },
    ],
  };

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

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A3540] via-ridge to-slate-brand" />
        <div className="relative z-2 px-6 md:px-12 max-w-[700px] pt-24 md:pt-0 pb-12">
          <div className="text-[12px] text-white/35 mb-4">
            <Link href="/" className="text-sage no-underline hover:text-sage/80">
              Home
            </Link>
            {" / "}
            <Link href="/blog" className="text-sage no-underline hover:text-sage/80">
              Blog
            </Link>
            {" / "}
            <span className="text-white/50">
              {post.title.length > 40 ? post.title.slice(0, 40) + "..." : post.title}
            </span>
          </div>
          <h1 className="font-heading text-[26px] md:text-[42px] font-extrabold text-white leading-[1.08] mb-3">
            {post.title}
          </h1>
          <p className="text-[15px] md:text-[16px] text-white/50 leading-[1.7]">
            {post.description}
          </p>
          <div className="flex items-center gap-3 mt-4 text-[12px] text-white/30">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            {areaName && (
              <>
                <span className="w-[3px] h-[3px] rounded-full bg-white/30" />
                <span>{areaName}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-[800px] mx-auto py-14 px-6 md:px-12">
        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>

      {/* Back to blog */}
      <div className="max-w-[800px] mx-auto px-6 md:px-12 pb-16">
        <Link
          href="/blog"
          className="text-ridge no-underline text-[14px] font-medium hover:text-ridge-light transition-colors"
        >
          &larr; Back to all posts
        </Link>
      </div>
    </div>
  );
}
