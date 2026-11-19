"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const links = [
  { label: "Why BuildFlux", href: "#why" },
  { label: "Demos", href: "#demos" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
];

function Logo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M4 7l8-4 8 4-8 4-8-4Z" fill="#0EA5E9" />
      <path
        d="M4 12l8 4 8-4M4 17l8 4 8-4"
        stroke="#7dd3fc"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  // Page scroll progress, drawn as a hairline along the bottom edge of the bar.
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav className="relative mx-auto flex max-w-5xl items-center justify-between overflow-hidden rounded-2xl border border-white/10 bg-black/40 px-4 py-2.5 backdrop-blur-xl">
        <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
          <Logo />
          BuildFlux
        </a>
        <ul className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-lg bg-[#0EA5E9] px-4 py-2 text-sm font-semibold text-zinc-950 transition-shadow hover:shadow-[0_0_24px_-4px_#0EA5E9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7dd3fc]"
        >
          Start a project
        </a>
        <motion.span
          aria-hidden
          style={{ scaleX }}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-[#0EA5E9] to-[#7dd3fc]"
        />
      </nav>
    </motion.header>
  );
}