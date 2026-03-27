import Link from "next/link";
import { getAllGuides } from "@/lib/guides";

export default function HomePage() {
  const guides = getAllGuides();

  return (
    <div>
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-stone-900 mb-3">
          Neighborhood Guides
        </h1>
        <p className="text-lg text-stone-600 max-w-2xl">
          Honest, in-depth guides to the communities along Utah&apos;s Wasatch
          Front — written by locals, for locals (and future locals).
        </p>
      </section>

      <div className="space-y-8">
        {guides.map((guide) => (
          <article
            key={guide.slug}
            className="group rounded-lg border border-stone-200 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <Link href={`/guides/${guide.slug}`}>
              <h2 className="text-2xl font-bold text-stone-900 group-hover:text-sky-700 transition-colors mb-2">
                {guide.title}
              </h2>
              <p className="text-stone-600 mb-3 leading-relaxed">
                {guide.description}
              </p>
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
            </Link>
          </article>
        ))}
      </div>

      {guides.length === 0 && (
        <p className="text-stone-500 text-center py-12">
          No guides published yet. Check back soon.
        </p>
      )}
    </div>
  );
}
