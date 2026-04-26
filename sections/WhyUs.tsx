"use client";

import {
  BadgeCheck,
  Dumbbell,
  Scale,
  Clock3,
  Users2,
  HeartPulse,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: BadgeCheck,
    title: "Certified Trainers",
    description:
      "Every coach holds NSCA or ACE certification. Your goals, their expertise - a combination that gets results.",
  },
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    description:
      "State-of-the-art machines, free weights, and dedicated functional training zones updated annually.",
  },
  {
    icon: Scale,
    title: "Fat Loss Programs",
    description:
      "Science-backed nutrition and periodized training protocols engineered for maximum, sustainable fat burn.",
  },
  {
    icon: Clock3,
    title: "Flexible Timings",
    description:
      "We are open from 5:30AM to 10:00AM and 5:30PM to 10:00PM. Fit us into your daily routine.",
  },
  {
    icon: Users2,
    title: "Community Support",
    description:
      "100+ real transformations and a motivating community that keeps you consistent every step of the way.",
  },
  {
    icon: HeartPulse,
    title: "Holistic Wellness",
    description:
      "Beyond lifting - we integrate strength, cardio, mobility, and recovery for lasting health.",
  },
] as const;

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#0B0B0B] px-4 py-12 sm:px-6 sm:py-24 lg:py-28">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            label="Why Choose Us"
            title="Built for"
            highlight="Real Results"
            subtitle="We combine elite coaching with Chennai's best facilities to help you achieve the body and health you deserve."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} delay={index * 0.08}>
              <div className="group h-full rounded-2xl border border-white/10 bg-[#121212] p-5 transition-all duration-300 hover:border-[#FF2E2E]/25 hover:bg-[#171717] sm:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#FF2E2E]/30 bg-[#FF2E2E]/10 transition-colors duration-300 group-hover:border-[#FF2E2E]/45 group-hover:bg-[#FF2E2E]/18 sm:mb-6 sm:h-14 sm:w-14">
                  <feature.icon size={24} className="text-[#FF2E2E]" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-white sm:mb-3 sm:text-xl">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
