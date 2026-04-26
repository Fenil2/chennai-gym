"use client";

import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const testimonials = [
  {
    name: "Vikram S.",
    initials: "VS",
    result: "Lost 18 kg in 4 months",
    location: "Anna Nagar, Chennai",
    stars: 5,
    text: "I had tried multiple gyms before FitElite and nothing worked. The trainers here actually care — they adjusted my program every week based on my progress. Best investment I've ever made in myself.",
  },
  {
    name: "Deepika R.",
    initials: "DR",
    result: "Gained muscle & confidence",
    location: "T. Nagar, Chennai",
    stars: 5,
    text: "As a woman who was intimidated by the gym, FitElite's community changed everything for me. Priya's fat loss program is incredible — I feel stronger and healthier than I ever have in my life.",
  },
  {
    name: "Arun K.",
    initials: "AK",
    result: "First pull-up at 35",
    location: "Velachery, Chennai",
    stars: 5,
    text: "Started as a complete beginner with zero gym experience. Karthik's functional training built a foundation I didn't know was possible. 6 months in and I'm hitting weights I never imagined.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0B0B0B] px-4 py-12 sm:px-6 sm:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            label="Success Stories"
            title="Real People."
            highlight="Real Results."
            subtitle="Don't take our word for it — hear directly from members who've transformed their lives at FitElite Chennai."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <AnimatedSection key={t.name} delay={index * 0.1}>
              <div className="glass-card p-8 hover:border-[#FF2E2E]/25 transition-all duration-300 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="#FF2E2E"
                      className="text-[#FF2E2E]"
                    />
                  ))}
                </div>

                <Quote size={26} className="text-[#FF2E2E]/25 mb-3" />

                <p className="text-gray-300 text-sm leading-7 flex-1 mb-7">
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="border-t border-white/8 pt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FF2E2E]/15 border border-[#FF2E2E]/25 flex items-center justify-center text-[#FF2E2E] font-black text-xs shrink-0">
                    {t.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-sm text-white">{t.name}</div>
                    <div className="text-xs text-gray-500 truncate">
                      {t.location}
                    </div>
                  </div>
                  <div className="ml-auto shrink-0">
                    <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#FF2E2E]/10 text-[#FF2E2E] font-bold border border-[#FF2E2E]/20 whitespace-nowrap">
                      {t.result}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
