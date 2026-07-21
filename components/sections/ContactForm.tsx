"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl bg-white p-10 text-center shadow-card"
      >
        <CheckCircle2 className="text-primary" size={40} />
        <h3 className="mt-4 font-heading text-xl text-ink">Message Sent</h3>
        <p className="mt-2 max-w-sm font-body text-sm text-ink/60">
          Thank you for reaching out. Our concierge team will get back to you
          within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 rounded-2xl bg-white p-7 shadow-card sm:grid-cols-2 sm:p-9"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-body text-xs font-medium text-ink/70">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-xl border border-secondary bg-neutral px-4 py-3 font-body text-sm text-ink focus:border-primary focus:outline-none"
          placeholder="Jane Doe"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-body text-xs font-medium text-ink/70">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-xl border border-secondary bg-neutral px-4 py-3 font-body text-sm text-ink focus:border-primary focus:outline-none"
          placeholder="jane@email.com"
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="subject" className="font-body text-xs font-medium text-ink/70">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="rounded-xl border border-secondary bg-neutral px-4 py-3 font-body text-sm text-ink focus:border-primary focus:outline-none"
          placeholder="Order enquiry, sizing help, press…"
        />
      </div>
      <div className="flex flex-col gap-2 sm:col-span-2">
        <label htmlFor="message" className="font-body text-xs font-medium text-ink/70">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="resize-none rounded-xl border border-secondary bg-neutral px-4 py-3 font-body text-sm text-ink focus:border-primary focus:outline-none"
          placeholder="Tell us how we can help…"
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" icon={<Send size={16} />} className="w-full sm:w-auto">
          Send Message
        </Button>
      </div>
    </form>
  );
}
