"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Mail } from "lucide-react";
import { fadeUp, stagger } from "./motion";

const EMAIL = "prism.edits@gmail.com";
const GITHUB = "https://github.com/buildflux";

const field =
  "w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-500 focus:border-[#0EA5E9]/60 focus:ring-2 focus:ring-[#0EA5E9]/30 [color-scheme:dark]";

const next = [
  "Send the brief once, no calls required",
  "Get a written reply with scope and next steps",
  "Watch working previews arrive at each milestone",
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const body = [
      `Name: ${d.name}`,
      `Email: ${d.email}`,
      `Business / site: ${d.site || "n/a"}`,
      `Project type: ${d.type}`,
      `Budget: ${d.budget}`,
      "",
      d.goal,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `New project brief from ${d.name}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <footer id="contact" className="relative overflow-hidden border-t border-white/10">
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -z-10 h-80 w-[720px] -translate-x-1/2 rounded-full bg-[#0EA5E9]/15 blur-[130px]"
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-10 pt-24 lg:grid-cols-2"
      >
        <div>
          <motion.h2
            variants={fadeUp}
            className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            Ready to scale your business?
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-md text-lg text-zinc-400">
            Share the basics and I&apos;ll reply in writing with next steps. No discovery call
            needed.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-8 space-y-3">
            {next.map((n) => (
              <li key={n} className="flex items-center gap-3 text-zinc-300">
                <Check className="h-4 w-4 text-[#38bdf8]" aria-hidden />
                {n}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl transition-colors hover:border-[#0EA5E9]/50 hover:bg-white/5"
            >
              <Mail className="h-4 w-4 text-[#38bdf8]" />
              {EMAIL}
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl transition-colors hover:border-[#0EA5E9]/50 hover:bg-white/5"
            >
              <svg className="h-4 w-4 fill-current text-[#38bdf8]" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </motion.div>
        </div>

        <motion.form
          variants={fadeUp}
          onSubmit={onSubmit}
          className="glow-border rounded-2xl border border-white/10 bg-black/40 p-6 shadow-[0_0_80px_-30px_#0EA5E9] backdrop-blur-xl"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-zinc-300">
              Name
              <input name="name" required autoComplete="name" placeholder="Jane Smith" className={`${field} mt-1.5`} />
            </label>
            <label className="text-sm text-zinc-300">
              Email
              <input name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={`${field} mt-1.5`} />
            </label>
            <label className="text-sm text-zinc-300 sm:col-span-2">
              Business or current website (optional)
              <input name="site" placeholder="company.com" className={`${field} mt-1.5`} />
            </label>
            <label className="text-sm text-zinc-300">
              Project type
              <select name="type" className={`${field} mt-1.5`}>
                <option>New website</option>
                <option>Redesign</option>
                <option>Web app</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="text-sm text-zinc-300">
              Budget
              <select name="budget" className={`${field} mt-1.5`}>
                <option>Under $3k</option>
                <option>$3k to $8k</option>
                <option>$8k to $20k</option>
                <option>$20k+</option>
              </select>
            </label>
            <label className="text-sm text-zinc-300 sm:col-span-2">
              What should the site achieve?
              <textarea
                name="goal"
                required
                rows={4}
                placeholder="More booked appointments, online sales, qualified leads..."
                className={`${field} mt-1.5 resize-none`}
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded-xl bg-[#0EA5E9] px-6 py-3.5 font-medium text-white transition-shadow hover:shadow-[0_0_36px_-4px_#0EA5E9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
          >
            Send brief
          </button>
          <p role="status" className="mt-3 min-h-5 text-center text-sm text-zinc-400">
            {sent && "Your email app should open with the brief ready to send."}
          </p>
        </motion.form>

        <motion.p variants={fadeUp} className="text-sm text-zinc-500 lg:col-span-2">
          © 2026 BuildFlux.
        </motion.p>
      </motion.div>
    </footer>
  );
}