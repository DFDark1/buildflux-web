import type { Variants } from "framer-motion";

export const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};