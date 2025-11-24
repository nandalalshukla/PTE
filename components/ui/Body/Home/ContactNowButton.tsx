"use client";
import Image from "next/image";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
const ContactNowButton = () => {
  return (
    <Link
      href="/"
      aria-label="Contact now button"
      title="Contact now button"
      className="
        relative group flex items-center gap-3 justify-center
        bg-transparent 
        text-white p-2 rounded-full overflow-hidden
        border-[2px] border-[#5227FF] shadow-lg active:scale-95 hover:opacity-80
        transition-all duration-200
      "
    >
      {/* Infinite shimmer */}
      <div
        className="
          h-[170%] w-20
          bg-gradient-to-r from-white/5 via-white/40 to-white/5
          absolute blur-lg -rotate-135
          -left-20
          animate-[shimmerMove_1.6s_linear_infinite]
        "
      />

      {/* Text */}
      <div className="text-left z-10">
        <div className="text-lg flex flex-row justify-center items-center gap-2 py-2  px-8 font-bold text-[#5227FF]">
          Contact now <IoCall />
        </div>
      </div>

      {/* Inline keyframes (Tailwind v4 supported) */}
      <style jsx>{`
        @keyframes shimmerMove {
          0% {
            left: -20%;
          }
          100% {
            left: 120%;
          }
        }
      `}</style>
    </Link>
  );
};

export default ContactNowButton;
