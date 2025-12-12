"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface OurCoursesButtonProps {
  text: string;
  imgSrc: string;
  href?: string;
}

const OurCoursesButton: React.FC<OurCoursesButtonProps> = ({
  text,
  imgSrc,
  href = "/",
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center gap-2 lg:gap-3 xl:gap-4",
        "pl-2 pr-12 py-1.5 lg:pl-3 lg:pr-14 lg:py-2 xl:pl-4 xl:pr-16 rounded-full",
        "bg-gradient-to-r from-[#5227FF] to-[#7C3AED]",
        "text-white",
        "shadow-[0_0_0_4px_rgba(82,39,255,0.1)]",
        "hover:shadow-[0_0_0_6px_rgba(82,39,255,0.2)] hover:-translate-y-0.5",
        "transition-all duration-300 ease-out",
        "border border-white/10"
      )}
    >
      {/* Visible Premium Pulse */}
      <div
        className="
    absolute inset-[-3px]
    rounded-full
    ring-1 ring-[#5227FF]/40 dark:ring-white/30
    shadow-[0_0_3px_rgba(82,39,255,0.35)]
    dark:shadow-[0_0_3px_rgba(255,255,255,0.25)]
    animate-premium-pulse
  "
      />

      {/* Visible Elegant Shimmer */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        <div
          className="
      absolute inset-y-0
      w-[105%]
      -translate-x-[130%]
      bg-gradient-to-r
      from-transparent
      via-[#5227FF]/35 dark:via-white/30
      to-transparent
      skew-x-12
      animate-premium-shimmer
    "
        />
      </div>

      {/* Avatar Container */}
      <div className="relative w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full overflow-hidden border-2 border-white/20 shrink-0 bg-white/10 shadow-inner z-10">
        <Image
          src={imgSrc}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="48px"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-start z-10">
        <span className="text-sm lg:text-base font-bold tracking-wide leading-none drop-shadow-md">
          {text}
        </span>
        <span className="text-[9px] lg:text-[10px] xl:text-xs text-indigo-100 font-medium mt-0.5 lg:mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
          Start Your Journey
        </span>
      </div>

      {/* Arrow Icon */}
      <div className="absolute right-1.5 lg:right-2 w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:translate-x-1 z-10">
        <FiArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
      </div>
    </Link>
  );
};

export default OurCoursesButton;
