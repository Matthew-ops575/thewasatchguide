"use client";

import { useState } from "react";

export function NewsletterForm({ id = "newsletter" }: { id?: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
      setEmail("");
    } catch {
      // Fallback: let the form submit normally
      form.submit();
    }
  };

  if (submitted) {
    return (
      <div id={id}>
        <div className="text-[15px] text-white/60 leading-[1.7]">
          You&apos;re in. We&apos;ll be in touch.
        </div>
      </div>
    );
  }

  return (
    <form
      id={id}
      name="newsletter"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>
      <div className="flex">
        <input
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 py-4 px-5 bg-white/[.07] border border-white/10 border-r-0 rounded-l-lg text-white font-body text-sm outline-none placeholder:text-white/30"
        />
        <button
          type="submit"
          className="py-4 px-8 bg-ridge text-white border-none rounded-r-lg font-body text-sm font-semibold cursor-pointer whitespace-nowrap hover:bg-ridge-light transition-colors"
        >
          Subscribe
        </button>
      </div>
      <div className="text-[11px] text-white/25 mt-2">
        No spam. Unsubscribe anytime. We&apos;re local too.
      </div>
    </form>
  );
}
