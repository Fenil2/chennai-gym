"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

const trustBadges = [
  "3 Days Trial",
  "10% Discount",
  "12+1 Months Yearly",
  "Free Gym Bag + Outdoor Bootcamp",
];

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0E0E0E] px-4 py-12 sm:px-6 sm:py-24 lg:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_100%)]" />
      <div className="pointer-events-none absolute inset-x-4 bottom-4 top-4 rounded-[1.5rem] border border-white/6 sm:inset-x-6 sm:bottom-10 sm:top-10 sm:rounded-[2rem]" />

      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="mb-5 inline-block rounded-full border border-[#FF2E2E]/30 bg-[#FF2E2E]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF2E2E] sm:mb-7 sm:text-xs sm:tracking-widest">
            Start Today
          </span>

          <h2 className="mb-5 text-[2.45rem] font-black leading-[1.08] tracking-tight sm:mb-6 sm:text-5xl md:text-7xl">
            Stop Waiting.{" "}
            <span className="bg-gradient-to-r from-[#FF2E2E] to-[#FF6B35] bg-clip-text text-transparent">
              Start Training.
            </span>
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-sm leading-relaxed text-gray-400 sm:mb-12 sm:text-xl">
            Your best body is waiting. Take the first step today - no commitment,
            no risk. Just 3 days to experience why Chennai trains at FitElite.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:mb-14 sm:flex-row">
            <Button
              href="#contact"
              variant="primary"
              size="lg"
              className="shadow-none hover:shadow-none"
            >
              Book 3 Days Trial
            </Button>
            <a
              href="tel:+919940404546"
              className="text-sm font-medium text-gray-400 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
            >
              9940404546 / 9840755413
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-8">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-600"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#FF2E2E]" />
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
