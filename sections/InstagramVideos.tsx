"use client";

import { Instagram, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
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

function ReelCard({
  reel,
  index,
}: {
  reel: (typeof reels)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#111] border border-white/8 hover:border-[#FF2E2E]/30 transition-all duration-300"
    >
      <iframe
        src={reel.embedUrl}
        title={reel.caption}
        className="w-full h-full"
        allowFullScreen
        scrolling="no"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </motion.div>
  );
}

export default function InstagramVideos() {
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
                Real workouts. Real members. Real results - straight from our latest Instagram posts.
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
              <ExternalLink
                size={12}
                className="text-gray-600 group-hover:text-gray-400 transition-colors"
              />
            </a>
          </div>
        </AnimatedSection>

        <div className="-mx-4 overflow-x-auto px-4 no-scrollbar snap-x snap-mandatory sm:-mx-6 sm:px-6">
          <div className="flex gap-4">
            {reels.map((reel, index) => (
              <div key={reel.id} className="min-w-[82vw] max-w-[22rem] snap-center sm:min-w-[22rem] lg:min-w-[20rem] xl:min-w-[22rem]">
                <ReelCard reel={reel} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
