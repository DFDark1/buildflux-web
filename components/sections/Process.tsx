"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Clock } from "lucide-react";

type Step = { title: string; body: string; chip: string };

const steps: Step[] = [
  {
    title: "Send a quick async brief",
    body: "Fill in a short form or send a voice note. No calendar invites, no two-hour kickoff meeting.",
    chip: "About 10 minutes of your time",
  },
  {
    title: "Rapid design and engineering sprints",
    body: "You get working previews at every milestone and reply in writing, whenever it suits you.",
    chip: "Clear milestones, no surprises",
  },
  {
    title: "Launch and grow revenue",
    body: "We ship to a global edge network, set up analytics, and keep improving what converts.",
    chip: "Live and measurable",
  },
];

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="process" className="mx-auto w-full max-w-4xl px-6 py-24">
      <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
        How we work without wasting your time.
      </h2>
      <p className="mt-4 max-w-xl text-lg text-zinc-400">
        Three steps from idea to live site. Your calendar stays free.
      </p>

      <ol ref={ref} className="relative mt-14 space-y-6">
        <div aria-hidden className="absolute bottom-0 left-5 top-0 w-px bg-white/10">
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="h-full w-full bg-gradient-to-b from-[#0EA5E9] to-[#38bdf8] shadow-[0_0_12px_#0EA5E9]"
          />
        </div>

        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease }}
            className="relative pl-16"
          >
            <span className="font-code absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#0EA5E9]/50 bg-zinc-950 text-sm text-[#bae6fd] shadow-[0_0_20px_-4px_#0EA5E9]">
              {i + 1}
            </span>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl transition-colors hover:border-[#0EA5E9]/40">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-zinc-400">{s.body}</p>
              <p className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-sm text-zinc-300">
                <Clock className="h-3.5 w-3.5 text-[#38bdf8]" aria-hidden />
                {s.chip}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}