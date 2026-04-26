"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

const trainers = [
  {
    name: "Rahul Sharma",
    role: "Head Trainer & Strength Coach",
    experience: "8 yrs",
    specialty: "Powerlifting · Hypertrophy",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
  },
  {
    name: "Priya Menon",
    role: "Nutrition & Fat Loss Expert",
    experience: "6 yrs",
    specialty: "Weight Management · Cardio",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&q=80",
  },
  {
    name: "Karthik Rajan",
    role: "Functional & Sports Trainer",
    experience: "5 yrs",
    specialty: "HIIT · Athletic Performance",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&q=80",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="bg-[#0B0B0B] px-4 py-24 sm:px-6 sm:py-28">
      <div className="container mx-auto max-w-7xl">
        <AnimatedSection>
          <SectionHeading
            label="Our Trainers"
            title="Learn From the"
            highlight="Best in Chennai"
            subtitle="Certified coaches who are obsessed with your results — not just your attendance."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
          {trainers.map((trainer, index) => (
            <AnimatedSection key={trainer.name} delay={index * 0.12}>
              <div className="group glass-card overflow-hidden hover:border-[#FF2E2E]/40 hover:shadow-[0_0_30px_rgba(255,46,46,0.06)] transition-all duration-300 h-full">
                {/* Photo */}
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs px-3 py-1.5 rounded-full bg-[#FF2E2E] text-white font-bold tracking-wide">
                      {trainer.experience}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-black mb-1">{trainer.name}</h3>
                  <p className="text-[#FF2E2E] text-sm font-semibold mb-2">
                    {trainer.role}
                  </p>
                  <p className="text-gray-500 text-xs tracking-wide mb-5">
                    {trainer.specialty}
                  </p>
                  <button className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors group/ig">
                    <Instagram
                      size={13}
                      className="group-hover/ig:text-[#FF2E2E] transition-colors"
                    />
                    View Profile
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
