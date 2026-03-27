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

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <article>
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-stone-500 hover:text-stone-700 transition-colors"
        >
          &larr; All Guides
        </Link>
      </div>

      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-stone-900 mb-4">
          {guide.title}
        </h1>
        <p className="text-lg text-stone-600 mb-4">{guide.description}</p>
        <div className="flex items-center gap-4 text-sm text-stone-400">
          <time dateTime={guide.date}>
            {new Date(guide.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span>&middot;</span>
          <span>{guide.author}</span>
        </div>
        {guide.tags && (
          <div className="flex gap-2 mt-4 flex-wrap">
            {guide.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: guide.contentHtml }}
      />
    </article>
  );
}
