"use client";

import { motion } from "framer-motion";
import { ease } from "./motion";

const links = [
  { label: "Why BuildFlux", href: "#why" },
  { label: "Timeline", href: "#work" },
  { label: "Process", href: "#process" },
];

function Logo() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M4 7l8-4 8 4-8 4-8-4Z" fill="#0EA5E9" />
      <path
        d="M4 12l8 4 8-4M4 17l8 4 8-4"
        stroke="#38bdf8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-2.5 backdrop-blur-xl">
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
          className="rounded-lg bg-[#0EA5E9] px-4 py-2 text-sm font-medium text-white transition-shadow hover:shadow-[0_0_24px_-4px_#0EA5E9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
        >
          Start a project
        </a>
      </nav>
    </motion.header>
  );
}