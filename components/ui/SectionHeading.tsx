import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  highlight,
  subtitle,
  center = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 sm:mb-16", center && "text-center", className)}>
      {label && (
        <span className="mb-4 inline-block rounded-full border border-[#FF2E2E]/30 bg-[#FF2E2E]/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FF2E2E] sm:mb-5 sm:px-4 sm:text-xs sm:tracking-widest">
          {label}
        </span>
      )}
      <h2 className="text-[2rem] font-black leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-[#FF2E2E] to-[#FF6B35] bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:mt-5 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
