"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { OPEN_LEAD_POPUP_EVENT } from "@/components/ui/LeadPopup";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-bold tracking-wide rounded-full transition-all duration-300 active:scale-95 cursor-pointer";

  const variants = {
    primary:
      "bg-[#FF2E2E] text-white hover:bg-[#CC1A1A] shadow-[0_0_20px_rgba(255,46,46,0.25)] hover:shadow-[0_0_35px_rgba(255,46,46,0.45)]",
    ghost:
      "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20",
    outline:
      "bg-transparent text-white border-2 border-white/30 hover:border-[#FF2E2E] hover:text-[#FF2E2E]",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const openLeadPopup = () => {
    window.dispatchEvent(new Event(OPEN_LEAD_POPUP_EVENT));
  };

  if (href === "#contact") {
    return (
      <button type="button" onClick={openLeadPopup} className={classes}>
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
