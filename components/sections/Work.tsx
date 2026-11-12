"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { Check, Clock, FileText, Rocket, Terminal, type LucideIcon } from "lucide-react";

type Phase = {
  title: string;
  short: string;
  days: string;
  icon: LucideIcon;
  span: string; // column span on the 9-day ruler
  tone: string; // ruler segment colors
  deliverables: string[];
  yourPart: string;
};

const phases: Phase[] = [
  {
    title: "Async brief and scoping",
    short: "Brief",
    days: "Days 1 to 2",
    icon: FileText,
    span: "col-span-2",
    tone: "bg-[#0EA5E9]/15 border-[#0EA5E9]/30 text-[#bae6fd]",
    deliverables: [
      "Written scope, page map, and conversion goals",
      "Fixed milestones and a launch date",
      "Content and asset checklist",
    ],
    yourPart: "About 10 minutes to send the brief, then a written approval",
  },
  {
    title: "Engineering sprint",
    short: "Sprint",
    days: "Days 3 to 6",
    icon: Terminal,
    span: "col-span-4",
    tone: "bg-[#0EA5E9]/30 border-[#0EA5E9]/50 text-white",
    deliverables: [
      "Design direction and reusable component system",
      "Responsive pages built in Next.js and TypeScript",
      "Working preview link at every milestone",
    ],
    yourPart: "Reply to previews in writing, whenever it suits you",
  },
  {
    title: "Final polish and edge launch",
    short: "Launch",
    days: "Days 7 to 9",
    icon: Rocket,
    span: "col-span-3",
    tone: "bg-gradient-to-r from-[#0EA5E9]/50 to-[#38bdf8]/60 border-[#38bdf8]/60 text-white",
    deliverables: [
      "Performance, accessibility, and cross-browser pass",
      "Revisions from your written feedback",
      "Deployed to the edge with analytics live",
      "Handoff notes and a launch checklist",
    ],
    yourPart: "Final approval, then we go live",
  },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};
const grow: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.7, ease } },
};
const viewport = { once: true, margin: "-80px" } as const;

const phaseOf = (day: number) => (day <= 2 ? 0 : day <= 6 ? 1 : 2);

export default function Work() {
  // Scroll through the phase cards to "play" the project: the playhead moves D1 to D9,
  // the day counter ticks, and the matching phase lights up.
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 60%", "end 70%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });
  const left = useTransform(smooth, [0, 1], ["5.55%", "94.45%"]);

  const [day, setDay] = useState(1);
  useMotionValueEvent(scrollYProgress, "change", (v) =>
    setDay(Math.min(9, Math.max(1, Math.floor(v * 9) + 1)))
  );
  const active = phaseOf(day);

  return (
    <section id="work" className="mx-auto w-full max-w-5xl px-6 py-24">
      <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
        Your site, live in 7 to 9 days.
      </h2>
      <p className="mt-4 max-w-xl text-lg text-zinc-400">
        This is the blueprint every project follows, from first brief to edge launch. Larger
        scopes get the same structure with a longer written milestone plan.
      </p>

      {/* Sticky day tracker (decorative; the cards carry the same information) */}
      <motion.div
        aria-hidden
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="sticky top-24 z-20 mt-12 rounded-2xl border border-white/10 bg-zinc-950/70 p-4 backdrop-blur-xl"
      >
        <div className="flex items-baseline justify-between gap-4">
          <p className="font-code text-sm text-zinc-400">
            Day{" "}
            <span className="relative inline-block w-5 text-center text-xl font-semibold text-white">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={day}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block"
                >
                  {day}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            of 9
          </p>
          <p className="text-sm text-[#bae6fd]">{phases[active].title}</p>
        </div>

        <div className="mt-4">
          <div className="font-code grid grid-cols-9 text-center text-[11px]">
            {Array.from({ length: 9 }, (_, i) => (
              <span
                key={i}
                className={`transition-colors duration-300 ${i + 1 === day ? "text-white" : "text-zinc-600"}`}
              >
                D{i + 1}
              </span>
            ))}
          </div>
          <div className="relative mt-2 grid grid-cols-9 gap-1.5">
            {phases.map((p, i) => (
              <motion.div
                key={p.title}
                variants={grow}
                style={{ originX: 0 }}
                className={`${p.span} rounded-lg border px-3 py-2 text-sm font-medium transition-opacity duration-300 ${p.tone} ${
                  active === i ? "opacity-100" : "opacity-45"
                }`}
              >
                {p.short}
              </motion.div>
            ))}
            <motion.span
              style={{ left }}
              className="absolute -bottom-1 -top-1 w-px -translate-x-1/2 bg-white shadow-[0_0_10px_2px_#38bdf8]"
            />
          </div>
        </div>
      </motion.div>

      <motion.ol
        ref={listRef}
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mt-6 space-y-4"
      >
        {phases.map((p, i) => {
          const Icon = p.icon;
          const isActive = active === i;
          return (
            <motion.li key={p.title} variants={fadeUp}>
              <div
                className={`grid gap-6 rounded-2xl border bg-black/40 p-6 backdrop-blur-xl transition-[border-color,box-shadow] duration-500 md:grid-cols-[240px_1fr] md:p-8 ${
                  isActive
                    ? "border-[#0EA5E9]/50 shadow-[0_0_48px_-18px_#0EA5E9]"
                    : "border-white/10"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors duration-500 ${
                        isActive
                          ? "border-[#38bdf8]/60 bg-[#0EA5E9]/25 text-white"
                          : "border-[#0EA5E9]/30 bg-[#0EA5E9]/10 text-[#38bdf8]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-code rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">
                      {p.days}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                </div>

                <div className="flex flex-col">
                  <ul className="space-y-2.5">
                    {p.deliverables.map((d) => (
                      <li key={d} className="flex gap-2.5 text-zinc-400">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-[#38bdf8]" aria-hidden />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 flex items-start gap-2 rounded-lg bg-white/5 px-3 py-2.5 text-sm text-zinc-300 md:mt-auto">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#38bdf8]" aria-hidden />
                    <span>
                      <span className="text-zinc-500">Your part: </span>
                      {p.yourPart}
                    </span>
                  </p>
                </div>
              </div>
            </motion.li>
          );
        })}
      </motion.ol>
    </section>
  );
}