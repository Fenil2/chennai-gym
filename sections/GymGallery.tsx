"use client";

import { motion } from "framer-motion";
import { Camera, ExternalLink, Instagram } from "lucide-react";
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

export default function GymGallery() {
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

        <div className="-mx-4 overflow-x-auto px-4 no-scrollbar snap-x snap-mandatory md:hidden sm:-mx-6 sm:px-6">
          <div className="flex gap-4">
            {images.map((img, index) => (
              <motion.div
                key={img.embedUrl}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.07, ease: "easeOut" }}
                className="group relative h-[430px] min-w-[calc(100vw-2.5rem)] snap-center overflow-hidden rounded-2xl border border-white/8 bg-[#111] transition-all duration-300 hover:border-[#FF2E2E]/30 sm:h-[540px] sm:min-w-[calc(100vw-3rem)]"
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
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF2E2E]/15 border border-[#FF2E2E]/25">
                      <Camera size={13} className="text-[#FF2E2E]" />
                    </div>
                    <span className="text-xs font-semibold">Instagram gallery</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {images.map((img, index) => (
            <motion.div
              key={img.embedUrl}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.07, ease: "easeOut" }}
              className="group relative h-[580px] md:h-[620px] rounded-2xl overflow-hidden bg-[#111] border border-white/8 hover:border-[#FF2E2E]/30 transition-all duration-300"
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
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FF2E2E]/15 border border-[#FF2E2E]/25">
                    <Camera size={13} className="text-[#FF2E2E]" />
                  </div>
                  <span className="text-xs font-semibold">Instagram gallery</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 text-center sm:mt-6">
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
