"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import Spotlight from "@/components/ui/Spotlight";
import { fadeUp, stagger } from "./motion";

const projects = [
  {
    title: "Northwind Coffee",
    blurb: "Headless e-commerce storefront with a streamlined, one-page checkout.",
    result: "+38% checkout conversion",
    tags: ["Next.js", "Stripe", "Tailwind"],
    url: "https://example.com",
    wide: true,
    className: "md:col-span-2",
  },
  {
    title: "Lumen Dental",
    blurb: "Local services site built around instant online booking.",
    result: "3x booking requests",
    tags: ["Next.js", "Cloudflare"],
    url: "https://example.com",
    className: "md:col-span-1",
  },
  {
    title: "Apex Legal",
    blurb: "Lead-generation site for a law firm, optimized for mobile search.",
    result: "Lighthouse 100 on mobile",
    tags: ["Next.js", "TypeScript"],
    url: "https://example.com",
    className: "md:col-span-1",
  },
  {
    title: "Stackly",
    blurb: "SaaS landing page and pricing flow tuned for trial signups.",
    result: "+27% trial signups",
    tags: ["Next.js", "Framer Motion", "Analytics"],
    url: "https://example.com",
    wide: true,
    className: "md:col-span-2",
  },
];

function Preview({ url, wide }: { url: string; wide?: boolean }) {
  return (
    <div className="h-44 overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#0EA5E9]/15 to-transparent p-4">
      <div className="rounded-lg border border-white/10 bg-zinc-950/80 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.03]">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
          <i className="h-2 w-2 rounded-full bg-white/20" />
          <i className="h-2 w-2 rounded-full bg-white/20" />
          <i className="h-2 w-2 rounded-full bg-white/20" />
          <span className="font-code ml-2 truncate text-[10px] text-zinc-500">{url}</span>
        </div>
        <div className={`grid items-center gap-4 p-4 ${wide ? "grid-cols-2" : ""}`}>
          <div className="space-y-2">
            <div className="h-2.5 w-3/4 rounded bg-white/25" />
            <div className="h-2.5 w-1/2 rounded bg-white/15" />
            <div className="mt-3 h-6 w-20 rounded-md bg-[#0EA5E9]" />
          </div>
          {wide && <div className="h-20 rounded-md bg-gradient-to-br from-[#0EA5E9]/40 to-[#38bdf8]/10" />}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto w-full max-w-6xl px-6 py-24">
      <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
        Recent work
      </h2>
      <p className="mt-4 max-w-xl text-lg text-zinc-400">
        Custom builds focused on speed and measurable results.
      </p>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 grid gap-4 md:grid-cols-3"
      >
        {projects.map((p) => (
          <motion.div key={p.title} variants={fadeUp} className={p.className}>
            <Spotlight className="h-full">
              <Preview url={p.url.replace("https://", "")} wide={p.wide} />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${p.title} live site`}
                    className="rounded-lg border border-white/10 p-2 text-zinc-400 transition-colors hover:border-[#0EA5E9]/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#38bdf8]"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-2 text-zinc-400">{p.blurb}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-emerald-400/10 px-2.5 py-1 text-sm text-emerald-300">
                  <TrendingUp className="h-3.5 w-3.5" />
                  {p.result}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className="font-code rounded-md border border-[#0EA5E9]/25 bg-[#0EA5E9]/10 px-2.5 py-1 text-xs text-[#bae6fd]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Spotlight>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}