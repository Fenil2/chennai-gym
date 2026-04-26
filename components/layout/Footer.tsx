import Link from "next/link";
import Image from "next/image";
import { Instagram, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Real Transformations", href: "#transformation" },
  { label: "Instagram Gallery", href: "#gallery" },
  { label: "Our Trainers", href: "#trainers" },
];

const instagramUrl =
  "https://www.instagram.com/bolt_fitness_garage?igsh=MWRwOTAwbDY3ZGMxbA%3D%3D";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#080808] pb-8 pt-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
          <div>
            <div className="mb-5">
              <div className="relative h-16 w-16 overflow-hidden sm:h-20 sm:w-20">
                <Image
                  src="/gymlogonew.png"
                  alt="FitElite Chennai logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
              Chennai&apos;s premier fitness destination. Transform your body
              with expert guidance, modern equipment, and a community that
              pushes you forward every single day.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors hover:border-[#FF2E2E]/30 hover:bg-[#FF2E2E]/20"
              >
                <Instagram size={15} className="text-gray-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#FF2E2E]" />
                <span className="text-sm text-gray-500">
                  7, 25, 7th St, Vinoboji Nagar, Vinobaji Nagar, Hasthinapuram,
                  Chromepet, Chennai, Tamil Nadu 600064
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 shrink-0 text-[#FF2E2E]" />
                <div className="text-sm text-gray-500">
                  <a
                    href="tel:+919940404546"
                    className="transition-colors hover:text-white"
                  >
                    9940404546
                  </a>
                  {" | "}
                  <a
                    href="tel:+919840755413"
                    className="transition-colors hover:text-white"
                  >
                    9840755413
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 shrink-0 text-[#FF2E2E]" />
                <span className="text-sm text-gray-500">
                  5:30AM TO 10:00AM | 5:30PM TO 10:00PM
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={15} className="shrink-0 text-[#FF2E2E]" />
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  @bolt_fitness_garage
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-8 text-center text-xs text-gray-600 md:flex-row md:text-left">
          <p>&copy; 2025 FitElite Chennai. All rights reserved.</p>
          <p>Built for Chennai&apos;s fitness community.</p>
        </div>
      </div>
    </footer>
  );
}
