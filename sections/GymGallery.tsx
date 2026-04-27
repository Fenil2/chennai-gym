"use client";

import { Camera, ExternalLink, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const images = [
  {
    embedUrl: "https://www.instagram.com/p/DXcKJjIkTd4/embed",
    title: "Gym moments from Instagram",
  },
  {
    embedUrl: "https://www.instagram.com/p/DXUQcVtkZO9/embed",
    title: "Community training highlights",
  },
  {
    embedUrl: "https://www.instagram.com/p/DReYmcIj6PF-UIZ1i_AZed6vCuOvTq7yhHJrCg0/embed",
    title: "Fitness floor update",
  },
  {
    embedUrl: "https://www.instagram.com/p/DRH76n5iZxY/embed",
    title: "Strength training snapshot",
  },
  {
    embedUrl: "https://www.instagram.com/p/DRChb1TCWGn/embed",
    title: "Workout progress post",
  },
  {
    embedUrl: "https://www.instagram.com/p/DLDM1v6Jtz4/embed",
    title: "Inside the gym floor",
  },
  {
    embedUrl: "https://www.instagram.com/p/DIvwp5FzERi/embed",
    title: "Member energy in action",
  },
  {
    embedUrl: "https://www.instagram.com/p/DFqRZnJNpFo/embed",
    title: "Daily gym routine moments",
  },
  {
    embedUrl: "https://www.instagram.com/p/DFSlMrSzLqh/embed",
    title: "Facility and training highlights",
  },
] as const;

const navBtn =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-200 hover:border-[#FF2E2E]/50 hover:bg-[#FF2E2E]/10 hover:text-[#FF2E2E] disabled:cursor-not-allowed disabled:opacity-30";

export default function GymGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = useCallback(() => setActiveIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(
    () => setActiveIndex((i) => Math.min(images.length - 1, i + 1)),
    []
  );

  return (
    <section id="gallery" className="bg-[#0E0E0E] px-4 py-12 sm:px-6 sm:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            label="Instagram Gallery"
            title="See The"
            highlight="Vibe"
            subtitle="Real photos from our Instagram feed, featuring the space, sessions, and community that make FitElite Chennai special."
          />
        </AnimatedSection>

        {/* Carousel — buttons sit left & right, vertically centered on the card */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Left button */}
          <button onClick={prev} disabled={activeIndex === 0} className={navBtn}>
            <ChevronLeft size={20} />
          </button>

          {/* Single card — centered, 1 at a time */}
          <div className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-white/8">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {images.map((img) => (
                <div
                  key={img.embedUrl}
                  className="relative h-[420px] w-full shrink-0 sm:h-[560px] lg:h-[640px]"
                >
                  <iframe
                    src={img.embedUrl}
                    title={img.title}
                    className="h-full w-full"
                    scrolling="no"
                    allowTransparency={true}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-4">
                    <div className="flex items-center gap-2 text-white/90">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#FF2E2E]/25 bg-[#FF2E2E]/15">
                        <Camera size={13} className="text-[#FF2E2E]" />
                      </div>
                      <span className="text-xs font-semibold">Instagram gallery</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right button */}
          <button onClick={next} disabled={activeIndex === images.length - 1} className={navBtn}>
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-6 bg-[#FF2E2E]" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center">
            <p className="text-xs tracking-wide text-gray-600">
              Updated with real Instagram photo posts from FitElite Chennai
            </p>
            <a
              href="https://www.instagram.com/bolt_fitness_garage?igsh=MWRwOTAwbDY3ZGMxbA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 transition-colors duration-300 hover:text-white"
            >
              <Instagram size={14} className="text-[#FF2E2E]" />
              View more on Instagram
              <ExternalLink size={12} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
