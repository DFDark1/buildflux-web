"use client";

import { MotionConfig } from "framer-motion";

// Respects the user's "reduce motion" OS setting across every animation.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}