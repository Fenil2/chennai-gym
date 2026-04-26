"use client";

import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const bullets = [
  "Personalized training programs tailored to your body",
  "Nutrition guidance included at no extra cost",
  "Monthly progress tracking with measurable milestones",
  "Group classes & private sessions available",
];

const images = [
  {
    src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&q=80",
    alt: "Intense workout",
  },
  {
    src: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=500&q=80",
    alt: "Weight training",
  },
  {
    src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&q=80",
    alt: "Gym equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&q=80",
    alt: "Barbell training",
  },
] as const;

export default function Transformation() {
  return (
    <section
      id="transformation"
      className="overflow-hidden bg-[#0E0E0E] px-4 py-12 sm:px-6 sm:py-24 lg:py-28"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection direction="left">
            <span className="mb-5 inline-block rounded-full border border-[#FF2E2E]/30 bg-[#FF2E2E]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF2E2E] sm:mb-6 sm:text-xs sm:tracking-widest">
              Real Transformations
            </span>
            <h2 className="mb-5 text-[2rem] font-black leading-[1.08] tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Your Transformation{" "}
              <span className="bg-gradient-to-r from-[#FF2E2E] to-[#FF6B35] bg-clip-text text-transparent">
                Starts Here
              </span>
            </h2>
            <p className="mb-7 text-sm leading-relaxed text-gray-400 sm:mb-8 sm:text-lg">
              Every champion has a beginning. Whether you&apos;re shedding fat,
              building muscle, or rediscovering your energy - we have the
              programs, coaches, and community to take you all the way.
            </p>
            <ul className="mb-8 space-y-3 sm:mb-10 sm:space-y-3.5">
              {bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-gray-300"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#FF2E2E]/30 bg-[#FF2E2E]/15">
                    <div className="h-2 w-2 rounded-full bg-[#FF2E2E]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button
              href="#contact"
              variant="primary"
              size="lg"
            >
              Begin Your Journey
            </Button>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <div className="relative grid grid-cols-2 gap-2.5 sm:gap-3">
              <div className="space-y-3">
                <div className="relative h-32 overflow-hidden rounded-2xl sm:h-44">
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="relative h-44 overflow-hidden rounded-2xl sm:h-60">
                  <Image
                    src={images[1].src}
                    alt={images[1].alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-3 space-y-3 sm:mt-8">
                <div className="relative h-44 overflow-hidden rounded-2xl sm:h-60">
                  <Image
                    src={images[2].src}
                    alt={images[2].alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="relative h-32 overflow-hidden rounded-2xl sm:h-44">
                  <Image
                    src={images[3].src}
                    alt={images[3].alt}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>

              <div className="glass-card absolute bottom-2 left-2 px-3 py-2.5 text-center sm:-left-2 sm:bottom-auto sm:px-5 sm:py-4">
                <div className="text-xl font-black text-[#FF2E2E] sm:text-3xl">
                  100+
                </div>
                <div className="mt-0.5 text-[11px] text-gray-400 sm:text-xs">
                  Real Transformations
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
