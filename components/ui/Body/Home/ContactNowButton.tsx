"use client";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface ContactNowButtonProps {
  text: string;
  icon: React.ReactNode;
  href?: string;
}

const ContactNowButton: React.FC<ContactNowButtonProps> = ({
  text,
  icon,
  href = "/",
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center gap-4",
        "pl-2 pr-16 py-2 rounded-full",
        "bg-white dark:bg-white/5",
        "text-[#5227FF] dark:text-white",
        "shadow-[0_0_0_2px_rgba(82,39,255,0.1)]",
        "hover:shadow-[0_0_0_4px_rgba(82,39,255,0.2)] hover:-translate-y-0.5",
        "transition-all duration-300 ease-out",
        "border border-[#5227FF]/20 dark:border-white/10",
        "backdrop-blur-md"
      )}
    >
      {/* Pulse Effect */}
      <div className="absolute inset-0 rounded-full ring-1 ring-[#5227FF]/20 dark:ring-white/20 animate-pulse" />

      {/* Shimmer Effect */}
      <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[100%] h-full bg-gradient-to-r from-transparent via-[#5227FF]/5 dark:via-white/10 to-transparent -translate-x-[100%] animate-[shimmerMove_3s_infinite]" />
      </div>

      {/* Icon Container (Left) */}
      <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#5227FF]/10 dark:border-white/10 shrink-0 bg-[#5227FF]/5 dark:bg-white/10 flex items-center justify-center shadow-inner z-10 text-[#5227FF] dark:text-white">
        <div className="text-xl group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-start z-10">
        <span className="text-base md:text-lg font-bold tracking-wide leading-none drop-shadow-sm">
          {text}
        </span>
        <span className="text-[10px] md:text-xs text-gray-500 dark:text-gray-300 font-medium mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
          We&apos;re here to help
        </span>
      </div>

      {/* Arrow Icon (Right) */}
      <div className="absolute right-2 w-11 h-11 rounded-full bg-[#5227FF]/5 dark:bg-white/10 flex items-center justify-center group-hover:bg-[#5227FF]/10 dark:group-hover:bg-white/20 transition-all duration-300 group-hover:translate-x-1 z-10">
        <FiArrowRight className="w-5 h-5 text-[#5227FF] dark:text-white" />
      </div>
    </Link>
  );
};

export default ContactNowButton;
