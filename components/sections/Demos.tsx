"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

type Demo = {
  title: string;
  kind: string;
  href: string; // static file in /public/demos, served from this same domain
  blurb: string;
  features: string[];
  tags: string[];
  bg: string; // thumbnail colors
  accent: string;
  soft: string;
};

const demos: Demo[] = [
  {
    title: "Slow Clay Studio",
    kind: "Pottery classes, Asheville NC",
    href: "/demos/slow-clay.html",
    blurb: "A playful class-booking site built around a pottery wheel you can actually shape.",
    features: [
      "Drag-to-shape pottery wheel with glaze picker",
      "Class accordion with a clear sign-up flow",
      "Scroll-driven process timeline",
    ],
    tags: ["HTML", "CSS", "Vanilla JS"],
    bg: "#2236b4",
    accent: "#f7c9d0",
    soft: "#bfd9c8",
  },
  {
    title: "Tidewater Oyster Co.",
    kind: "Raw bar and kitchen, Charleston SC",
    href: "/demos/tidewater-oyster.html",
    blurb: "A moody harbor restaurant site with a rising-tide hero and a reservation flow.",
    features: [
      "Live tide board driven by the visitor's clock",
      "Keyboard-friendly tabbed menu",
      "Reservation form with animated confirmation",
    ],
    tags: ["HTML", "CSS", "Vanilla JS"],
    bg: "linear-gradient(180deg,#06303a,#0e5a66)",
    accent: "#f4d23c",
    soft: "#1e7f8c",
  },
  {
    title: "Northbound Coffee Roasters",
    kind: "Specialty roaster and subscriptions, Portland OR",
    href: "/demos/northbound-coffee.html",
    blurb: "A subscription storefront where a roast slider re-themes the whole hero.",
    features: [
      "Roast slider that recolors the page",
      "Pour-over timer with step-by-step guidance",
      "Subscription builder with live pricing",
    ],
    tags: ["HTML", "CSS", "Vanilla JS"],
    bg: "#17120f",
    accent: "#ff6a2b",
    soft: "#4a2c1a",
  },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

// Drawn thumbnail by default. On first hover the real page loads inside, scaled down to fit.
function Preview({ demo, armed }: { demo: Demo; armed: boolean }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-zinc-900">
      <div
        className="absolute inset-3 overflow-hidden rounded-lg border border-white/10"
        style={{ background: demo.bg }}
      >
        <div className="flex items-center gap-1 border-b border-white/10 bg-black/30 px-2.5 py-1.5">
          <i className="h-1.5 w-1.5 rounded-full bg-white/30" />
          <i className="h-1.5 w-1.5 rounded-full bg-white/30" />
          <i className="h-1.5 w-1.5 rounded-full bg-white/30" />
        </div>
        <div className="relative p-4">
          <div className="h-2.5 w-2/3 rounded bg-white/70" />
          <div className="mt-2 h-2.5 w-1/2 rounded" style={{ background: demo.accent }} />
          <div className="mt-4 h-5 w-16 rounded-full" style={{ background: demo.accent }} />
          <div
            className="absolute -right-6 -top-2 h-28 w-28 rounded-full opacity-80"
            style={{ background: demo.soft }}
          />
        </div>
      </div>

      {armed && (
        <div
          className={`absolute inset-3 overflow-hidden rounded-lg transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <iframe
            src={demo.href}
            title={`${demo.title} preview`}
            tabIndex={-1}
            aria-hidden="true"
            loading="lazy"
            sandbox="allow-scripts"
            onLoad={() => setLoaded(true)}
            className="pointer-events-none border-0 bg-white"
            style={{ width: "400%", height: "400%", transform: "scale(0.25)", transformOrigin: "0 0" }}
          />
        </div>
      )}
    </div>
  );
}

function DemoCard({ demo }: { demo: Demo }) {
  const [armed, setArmed] = useState(false);
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      onMouseEnter={() => setArmed(true)}
      onFocusCapture={() => setArmed(true)}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl transition-[border-color,box-shadow] hover:border-[#0EA5E9]/40 hover:shadow-[0_0_48px_-18px_#0EA5E9]"
    >
      <Preview demo={demo} armed={armed} />

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm text-zinc-500">{demo.kind}</p>
        <h3 className="mt-1 text-xl font-semibold">{demo.title}</h3>
        <p className="mt-2 text-zinc-400">{demo.blurb}</p>

        <ul className="mt-5 space-y-2">
          {demo.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-sm text-zinc-300">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" aria-hidden />
              {f}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-2">
          {demo.tags.map((t) => (
            <li
              key={t}
              className="font-code rounded-md border border-[#0EA5E9]/25 bg-[#0EA5E9]/10 px-2.5 py-1 text-xs text-[#bae6fd]"
            >
              {t}
            </li>
          ))}
        </ul>

        <a
          href={demo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 font-medium text-[#7dd3fc] after:absolute after:inset-0 after:content-[''] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#7dd3fc] md:mt-auto md:pt-6"
        >
          Open live demo
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden
          />
          <span className="sr-only"> of {demo.title} (opens in a new tab)</span>
        </a>
      </div>
    </motion.article>
  );
}

export default function Demos() {
  return (
    <section id="demos" className="mx-auto w-full max-w-6xl px-6 py-24">
      <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
        Sample builds you can open right now.
      </h2>
      <p className="mt-4 max-w-2xl text-lg text-zinc-400">
        Three fictional businesses, built as real, working sites. Click through the full
        experience: the animations, the forms, and the details that make visitors take action.
      </p>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 grid gap-5 lg:grid-cols-3"
      >
        {demos.map((d) => (
          <DemoCard key={d.href} demo={d} />
        ))}
      </motion.div>

      <p className="mt-8 text-sm text-zinc-500">
        Each demo is a single HTML file served from this site, so it opens instantly with no
        framework and no separate domain. Hover a card to preview it live.
      </p>
    </section>
  );
}