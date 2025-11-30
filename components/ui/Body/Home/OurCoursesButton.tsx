"use client";
import Image from "next/image";
import Link from "next/link";

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
      aria-label={text}
      title={text}
      className="relative group flex items-center gap-3 justify-center bg-linear-to-br from-[#5227FF] to-[#7440f8] text-white p-2 rounded-full overflow-hidden border border-white/20 shadow-lg active:scale-95 hover:opacity-80 transition-all duration-200"
    >
      {/* Infinite shimmer */}
      <div className="h-[170%] w-20 bg-linear-to-r from-white/5 via-white/40 to-white/5 absolute blur-lg -rotate-135 -left-20 animate-[shimmerMove_1.6s_linear_infinite]" />

      {/* Avatar */}
      <div className="relative size-10 md:size-12 rounded-full overflow-hidden bg-white/20 z-10 px-6 py-6">
        <Image src={imgSrc} alt={text} fill sizes="40px" />
      </div>

      {/* Text */}
      <div className="text-left z-10">
        <div className="text-lg font-semibold">{text}</div>
      </div>

      {/* Arrow */}
      <svg
        className="w-6 h-6 z-10 transition-transform group-hover:translate-x-2 duration-300"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9 5l7 7-7 7"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
};

export default OurCoursesButton;
