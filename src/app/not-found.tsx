import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold text-stone-900 mb-4">404</h1>
      <p className="text-stone-600 mb-6">
        This page doesn&apos;t exist — maybe the trail got washed out.
      </p>
      <Link
        href="/"
        className="text-sky-700 underline hover:text-sky-900 transition-colors"
      >
        Back to all guides
      </Link>
    </div>
  );
}
