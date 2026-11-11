"use client";

import { motion } from "framer-motion";

export default function Spotlight({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
        e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl transition-colors hover:border-[#0EA5E9]/40 ${className}`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--x, 50%) var(--y, 50%), rgb(14 165 233 / 0.18), transparent 60%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}