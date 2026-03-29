"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          data as unknown as Record<string, string>
        ).toString(),
      });
      setSubmitted(true);
    } catch {
      form.submit();
    }
  };

  if (submitted) {
    return (
      <div className="bg-warm border border-ridge/20 rounded-xl p-8 text-center">
        <div className="font-heading text-[22px] font-bold text-slate-brand mb-2">
          Message sent.
        </div>
        <p className="text-[15px] text-muted leading-[1.7]">
          Thanks for reaching out. We&apos;ll get back to you as soon as we can.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-[12px] font-semibold text-slate-brand uppercase tracking-wider mb-1.5"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-white border border-black/[.08] rounded-lg text-[15px] text-slate-brand font-body outline-none transition-colors focus:border-ridge"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[12px] font-semibold text-slate-brand uppercase tracking-wider mb-1.5"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full py-3 px-4 bg-white border border-black/[.08] rounded-lg text-[15px] text-slate-brand font-body outline-none transition-colors focus:border-ridge"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-[12px] font-semibold text-slate-brand uppercase tracking-wider mb-1.5"
        >
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="w-full py-3 px-4 bg-white border border-black/[.08] rounded-lg text-[15px] text-slate-brand font-body outline-none transition-colors focus:border-ridge appearance-none"
        >
          <option value="">Select a topic</option>
          <option value="General inquiry">General inquiry</option>
          <option value="Content suggestion">Suggest a topic or community</option>
          <option value="Correction">Report a correction</option>
          <option value="Business inquiry">Business inquiry</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[12px] font-semibold text-slate-brand uppercase tracking-wider mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="w-full py-3 px-4 bg-white border border-black/[.08] rounded-lg text-[15px] text-slate-brand font-body outline-none transition-colors focus:border-ridge resize-y"
        />
      </div>

      <button
        type="submit"
        className="py-3.5 px-8 bg-ridge text-white border-none rounded-lg font-body text-[14px] font-semibold cursor-pointer hover:bg-ridge-light transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
