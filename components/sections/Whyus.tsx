"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Spotlight from "@/components/ui/Spotlight";
import { fadeUp, stagger } from "./motion";

const rows = [
  {
    topic: "Communication",
    old: "Discovery calls, kickoff meetings, and weekly status calls.",
    next: "One short async brief. Every update and decision in writing.",
  },
  {
    topic: "Speed",
    old: "Months of back and forth before anything goes live.",
    next: "Clear milestones and working previews. Launch in a week.",
  },
  {
    topic: "Performance",
    old: "Bloated page builders, plugins, and slow load times.",
    next: "Custom Next.js on the edge. Fast on every device.",
  },
  {
    topic: "Execution",
    old: "Designers and developers passing files between teams.",
    next: "One engineer takes you from design straight to code.",
  },
  {
    topic: "Results",
    old: "A pretty site nobody can measure.",
    next: "Conversion-first layouts, tracked from day one.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="mx-auto w-full max-w-6xl px-6 py-24">
      <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
        Meetings don&apos;t ship websites.
      </h2>
      <p className="mt-4 max-w-xl text-lg text-zinc-400">
        Traditional agencies bill you for calls. We spend that time building. No unnecessary
        discovery calls, just a clear brief and fast execution.
      </p>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 space-y-3"
      >
        <div className="hidden gap-3 px-1 text-sm md:grid md:grid-cols-2">
          <p className="text-zinc-500">Typical agency</p>
          <p className="font-medium text-[#bae6fd]">BuildFlux</p>
        </div>

        {rows.map((r) => (
          <motion.div key={r.topic} variants={fadeUp} className="grid gap-3 md:grid-cols-2">
            <div className="flex gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/70" aria-hidden />
              <div>
                <p className="font-medium text-zinc-400">{r.topic}</p>
                <p className="mt-1 text-sm text-zinc-500">
                  <span className="sr-only">Typical agency: </span>
                  {r.old}
                </p>
              </div>
            </div>
            <Spotlight>
              <div className="flex gap-3 p-5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" aria-hidden />
                <div>
                  <p className="font-medium">{r.topic}</p>
                  <p className="mt-1 text-sm text-zinc-300">
                    <span className="sr-only">BuildFlux: </span>
                    {r.next}
                  </p>
                </div>
              </div>
            </Spotlight>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}