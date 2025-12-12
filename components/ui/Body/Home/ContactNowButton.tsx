"use client";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "@/lib/utils";

interface ContactNowButtonProps {
  text: string;
  icon: React.ReactNode;
  href?: string;
  className?: string;
}

const ContactNowButton: React.FC<ContactNowButtonProps> = ({
  text,
  icon,
  href = "/",
  className,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center gap-2 lg:gap-3 xl:gap-4",
        "pl-1.5 pr-12 py-1.5 lg:pl-2 lg:pr-14 lg:py-2 xl:pr-16 rounded-full",
        "bg-white dark:bg-white/5",
        "text-[#5227FF] dark:text-white",
        "shadow-sm hover:shadow-md",
        "transition-all duration-300 ease-out",
        "border border-[#5227FF]/20 dark:border-white/10",
        className
      )}
    >
      {/* Icon Container (Left) */}
      <div className="relative w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full overflow-hidden border border-[#5227FF]/10 dark:border-white/10 shrink-0 bg-[#5227FF]/5 dark:bg-white/10 flex items-center justify-center shadow-inner z-10 text-[#5227FF] dark:text-white">
        <div className="text-lg lg:text-xl group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-start z-10">
        <span className="text-sm lg:text-base font-bold tracking-wide leading-none drop-shadow-sm">
          {text}
        </span>
        <span className="text-[9px] lg:text-[10px] xl:text-xs text-gray-500 dark:text-gray-300 font-medium mt-0.5 lg:mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
          We&apos;re here to help
        </span>
      </div>

      {/* Arrow Icon (Right) */}
      <div className="absolute right-1.5 lg:right-2 w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full bg-[#5227FF]/5 dark:bg-white/10 flex items-center justify-center group-hover:bg-[#5227FF]/10 dark:group-hover:bg-white/20 transition-all duration-300 group-hover:translate-x-1 z-10">
        <FiArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-[#5227FF] dark:text-white" />
      </div>
    </Link>
  );
};

export default ContactNowButton;
