"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Trainers", href: "#trainers" },
  { label: "Offers", href: "#offers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/8 bg-[#0B0B0B]/95 py-2.5 backdrop-blur-xl sm:py-3"
          : "bg-transparent py-3.5 sm:py-5"
      )}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="#home" className="flex items-center group">
          <div className="relative h-14 w-14 overflow-hidden sm:h-16 sm:w-16">
            <Image
              src="/gymlogonew.png"
              alt="FitElite Chennai logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button href="#contact" variant="primary" size="sm">
            Free Trial
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2.5 text-white transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-4 border-t border-white/10 bg-[#0B0B0B]/98 px-4 py-5 backdrop-blur-xl sm:px-6 sm:py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-gray-300 transition-colors hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button href="#contact" variant="primary" className="mt-2 self-start">
            Start Free Trial
          </Button>
        </div>
      </div>
    </nav>
  );
}
