import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-heading text-6xl font-bold text-slate-brand mb-4">404</h1>
        <p className="text-muted mb-6 text-lg">
          This page doesn&apos;t exist &mdash; maybe the trail got washed out.
        </p>
        <Link
          href="/"
          className="text-ridge underline hover:text-ridge-light transition-colors"
        >
          Back to all guides
        </Link>
      </div>
    </div>
  );
}
