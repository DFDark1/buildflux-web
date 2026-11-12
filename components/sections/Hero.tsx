"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, FileText, Rocket, Zap, type LucideIcon } from "lucide-react";
import { fadeUp } from "./motion";

const feed: { icon: LucideIcon; title: string; time: string; note: string }[] = [
  { icon: FileText, title: "Brief received", time: "Mon 09:12", note: "Sent in 8 minutes. No call needed." },
  { icon: Eye, title: "Design preview ready", time: "Tue 16:40", note: "Reply in writing, on your schedule." },
  { icon: Rocket, title: "Live on the edge", time: "Fri 11:05", note: "Lighthouse 100. Conversion tracking on." },
];

const metrics = [
  ["0", "discovery calls"],
  ["100", "Lighthouse score"],
  ["1", "engineer, design to deploy"],
];

const root = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const feedList = { hidden: {}, show: { transition: { staggerChildren: 0.2, delayChildren: 0.6 } } };

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-32">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[#0EA5E9]/15 blur-[140px]"
      />
      <motion.div
        variants={root}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.15fr_0.85fr]"
      >
        <div className="flex flex-col items-start text-left">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 px-4 py-1.5 text-sm text-[#bae6fd] backdrop-blur-xl">
              <Zap className="h-3.5 w-3.5 fill-[#38bdf8] text-[#38bdf8]" />
              No useless calls. Pure execution.
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl xl:text-7xl"
          >
            Custom websites that{" "}
            <span className="bg-gradient-to-r from-[#0EA5E9] via-[#38bdf8] to-white bg-clip-text text-transparent">
              turn visitors into revenue.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            BuildFlux designs and engineers fast, conversion-first websites for founders and
            business owners. Send one short brief, skip the discovery calls, and launch a site
            that sells around the clock.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className={`group inline-flex items-center gap-2 rounded-xl bg-[#0EA5E9] px-6 py-3.5 font-medium text-white transition-shadow hover:shadow-[0_0_36px_-4px_#0EA5E9] ${focusRing}`}
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#work"
              className={`inline-flex items-center rounded-xl border border-white/10 bg-black/40 px-6 py-3.5 font-medium backdrop-blur-xl transition-colors hover:border-[#0EA5E9]/50 hover:bg-white/5 ${focusRing}`}
            >
              Timeline Overview
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          className="glow-border rounded-2xl border border-white/10 bg-black/40 p-5 shadow-[0_0_80px_-30px_#0EA5E9] backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <p className="text-sm font-medium">Example project timeline</p>
            <span className="font-code text-xs text-zinc-500">4 days, async</span>
          </div>

          <motion.ol variants={feedList} className="mt-5 space-y-5">
            {feed.map(({ icon: Icon, title, time, note }) => (
              <motion.li key={title} variants={fadeUp} className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#0EA5E9]/30 bg-[#0EA5E9]/10 text-[#38bdf8]">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="flex items-baseline justify-between gap-3 text-sm font-medium">
                    {title}
                    <span className="font-code text-xs font-normal text-zinc-500">{time}</span>
                  </p>
                  <p className="mt-0.5 text-sm text-zinc-400">{note}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          <dl className="mt-6 grid grid-cols-3 gap-2 border-t border-white/10 pt-5">
            {metrics.map(([value, label]) => (
              <div key={label} className="rounded-lg bg-white/5 px-3 py-2.5">
                <dt className="sr-only">{label}</dt>
                <dd className="text-xl font-semibold text-white">{value}</dd>
                <p className="mt-0.5 text-[11px] leading-tight text-zinc-500">{label}</p>
              </div>
            ))}
          </dl>
        </motion.div>
      </motion.div>
    </section>
  );
}