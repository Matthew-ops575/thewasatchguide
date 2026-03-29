import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Wasatch Guide — questions, corrections, content suggestions, or business inquiries.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-brand via-[#2A3540] to-ridge" />
        <div className="relative z-2 px-6 md:px-12 pb-16 pt-32">
          <h1 className="font-heading text-[32px] md:text-[48px] font-extrabold text-white leading-[1.08] mb-3">
            Get in Touch
          </h1>
          <p className="text-[16px] text-white/50 leading-[1.7] max-w-[600px]">
            Have a question, a correction, or a story we should know about?
            We&apos;d like to hear from you.
          </p>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-[700px] mx-auto py-14 px-6 md:px-12">
        <ContactForm />
      </div>
    </div>
  );
}
