"use client";

import { Instagram, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const reels = [
  {
    id: 1,
    embedUrl: "https://www.instagram.com/p/DXj2dJtCSl4/embed",
    caption: "Strength and conditioning highlights",
  },
  {
    id: 2,
    embedUrl: "https://www.instagram.com/p/DXhRYnQCW4-/embed",
    caption: "Fresh training energy from the floor",
  },
  {
    id: 3,
    embedUrl: "https://www.instagram.com/p/DT0a_iQiQK-/embed",
    caption: "Member progress and motivation",
  },
  {
    id: 4,
    embedUrl: "https://www.instagram.com/p/DTxzT2BCkeg/embed",
    caption: "Coaching moments that build consistency",
  },
  {
    id: 5,
    embedUrl: "https://www.instagram.com/p/DXWolPsEYRV/embed",
    caption: "High-intensity session snapshots",
  },
  {
    id: 6,
    embedUrl: "https://www.instagram.com/p/DXPR73sCYXl/embed",
    caption: "Community, form, and momentum in motion",
  },
] as const;

const navBtn =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-200 hover:border-[#FF2E2E]/50 hover:bg-[#FF2E2E]/10 hover:text-[#FF2E2E] disabled:cursor-not-allowed disabled:opacity-30";

export default function InstagramVideos() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = useCallback(() => setActiveIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(
    () => setActiveIndex((i) => Math.min(reels.length - 1, i + 1)),
    []
  );

  return (
    <section id="instagram" className="bg-[#0B0B0B] px-4 py-12 sm:px-6 sm:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between md:gap-6">
            <div>
              <span className="mb-4 inline-block rounded-full border border-[#FF2E2E]/30 bg-[#FF2E2E]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF2E2E] sm:mb-5 sm:px-4 sm:text-xs sm:tracking-widest">
                @bolt_fitness_garage
              </span>
              <h2 className="text-[2rem] font-black leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Follow Our{" "}
                <span className="bg-gradient-to-r from-[#FF2E2E] to-[#FF6B35] bg-clip-text text-transparent">
                  Journey
                </span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-500 sm:text-base">
                Real workouts. Real members. Real results — straight from our latest Instagram posts.
              </p>
            </div>

            <a
              href="https://www.instagram.com/bolt_fitness_garage?igsh=MWRwOTAwbDY3ZGMxbA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex self-start items-center gap-3 rounded-full border border-white/12 px-5 py-3 text-sm font-semibold text-gray-400 transition-all duration-300 hover:border-[#ee2a7b]/60 hover:bg-[#ee2a7b]/5 hover:text-white md:self-end"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                <Instagram size={13} className="text-white" />
              </div>
              Follow on Instagram
              <ExternalLink size={12} className="text-gray-600 transition-colors group-hover:text-gray-400" />
            </a>
          </div>
        </AnimatedSection>

        {/* Carousel — buttons sit left & right, vertically centered on the card */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Left button */}
          <button onClick={prev} disabled={activeIndex === 0} className={navBtn}>
            <ChevronLeft size={20} />
          </button>

          {/* Single card — centered, 1 at a time */}
          <div className="min-w-0 flex-1 overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reels.map((reel) => (
                <div key={reel.id} className="aspect-[9/16] w-full shrink-0">
                  <iframe
                    src={reel.embedUrl}
                    title={reel.caption}
                    className="h-full w-full"
                    allowFullScreen
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right button */}
          <button onClick={next} disabled={activeIndex === reels.length - 1} className={navBtn}>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {reels.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-[#FF2E2E]" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
