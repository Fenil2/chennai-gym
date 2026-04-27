"use client";

import { Check, Flame, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

const offers = [
  {
    icon: Star,
    tag: "Most Popular",
    title: "3 Days Trial",
    price: "Rs 0",
    period: "for 3 days",
    description:
      "Start with a 3 days trial and unlock our best-value joining benefits.",
    features: [
      "10% Discount",
      "12+1 Months Yearly",
      "Free Gym Bag + Outdoor Bootcamp",
      "100+ Real Transformations",
    ],
    cta: "Claim 3 Days Trial",
    variant: "primary" as const,
    highlighted: true,
  },
  {
    icon: Flame,
    tag: "Elite",
    title: "Personal Training",
    price: "Rs 2,999",
    period: "/month",
    description:
      "Dedicated 1-on-1 coaching with certified trainers who focus on your goals.",
    features: [
      "12 personal sessions/month",
      "Custom workout structure",
      "Nutrition programming",
      "Weekly progress tracking",
    ],
    cta: "Get Started",
    variant: "outline" as const,
    highlighted: false,
  },
  {
    icon: Check,
    tag: "Best Value",
    title: "Membership Plan",
    price: "Rs 999",
    period: "/month",
    description:
      "Unlimited access to all gym facilities at a strong monthly value.",
    features: [
      "Unlimited gym access",
      "All group classes included",
      "Locker room access",
      "Monthly trainer check-in",
    ],
    cta: "Join Now",
    variant: "ghost" as const,
    highlighted: false,
  },
] as const;

export default function Offers() {
  return (
    <section
      id="offers"
      className="relative overflow-hidden bg-[#0E0E0E] px-4 py-12 sm:px-6 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0)_100%)]" />
      <div className="pointer-events-none absolute hidden sm:block sm:inset-x-6 sm:bottom-8 sm:top-8 sm:rounded-[2rem] border border-white/6" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            label="Offers & Plans"
            title="Pricing Built for"
            highlight="Every Goal"
            subtitle="Whether you're just starting or going all-in, there is a plan that fits your life, routine, and budget."
          />
        </AnimatedSection>

        <div className="mt-6 grid grid-cols-1 gap-8 md:mt-8 md:grid-cols-3 md:gap-6">
          {offers.map((offer, index) => (
            <AnimatedSection key={offer.title} delay={index * 0.1} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 sm:p-8 ${
                  offer.highlighted
                    ? "border border-[#FF2E2E]/35 bg-[#151515] ring-1 ring-[#FF2E2E]/20"
                    : "border-0 bg-white/[0.05] hover:bg-white/[0.08] sm:border sm:border-white/10 sm:hover:border-[#FF2E2E]/25"
                }`}
              >
                {offer.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[#FF2E2E] px-5 py-1.5 text-[10px] font-black uppercase tracking-widest text-white">
                      {offer.tag}
                    </span>
                  </div>
                )}

                {!offer.highlighted && (
                  <div className="mb-4 sm:mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      {offer.tag}
                    </span>
                  </div>
                )}

                <div className="mb-7 sm:mb-8">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#FF2E2E]/20 bg-[#FF2E2E]/10 sm:mb-5 sm:h-12 sm:w-12">
                    <offer.icon size={20} className="text-[#FF2E2E]" />
                  </div>
                  <h3 className="mb-2 text-xl font-black sm:text-2xl">
                    {offer.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-400 sm:mb-5">
                    {offer.description}
                  </p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-black sm:text-4xl">
                      {offer.price}
                    </span>
                    <span className="text-sm text-gray-500">{offer.period}</span>
                  </div>
                </div>

                <ul className="mb-7 flex-1 space-y-3 sm:mb-8">
                  {offer.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FF2E2E]/15">
                        <Check size={10} className="text-[#FF2E2E]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={offer.variant}
                  className={`w-full sm:w-auto ${
                    offer.variant === "primary" ? "shadow-none hover:shadow-none" : ""
                  }`}
                >
                  {offer.cta}
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
