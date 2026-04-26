"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85"
          alt="FitElite Gym interior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[#0B0B0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 dot-pattern opacity-40" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_60%,rgba(255,46,46,0.09)_0%,transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF2E2E]/40 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-5xl px-4 pb-24 pt-24 text-center sm:px-6 sm:pt-28 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:px-4 sm:text-xs sm:tracking-widest">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF2E2E]" />
            Chennai&apos;s Premier Fitness Hub
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mb-6 text-4xl font-black leading-[1.06] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl"
        >
          Transform Your Body.{" "}
          <span className="bg-gradient-to-r from-[#FF2E2E] to-[#FF6B35] bg-clip-text text-transparent">
            Transform Your Life.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl"
        >
          The ultimate fitness destination in Chennai - elite certified trainers,
          cutting-edge equipment, and programs engineered to deliver real results, fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Button href="#contact" variant="primary" size="lg" className="w-full sm:w-auto">
            Start Your Free Trial
          </Button>
          <Button href="#why-us" variant="ghost" size="lg" className="w-full sm:w-auto">
            Explore Programs
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] text-gray-600">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-white/15 pt-1.5"
        >
          <div className="h-2 w-1 rounded-full bg-[#FF2E2E]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
