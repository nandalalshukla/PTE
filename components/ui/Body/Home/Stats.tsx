"use client";
import { MdGroups } from "react-icons/md";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatBoxProps {
  value: number;
  label: string;
  subLabel: string;
  bgColor: string;
  imgSrc?: string;
}

/* COUNT-UP ANIMATION HOOK */
function useCountAnimation(target: number, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 900;
    const stepTime = 10;
    const totalSteps = duration / stepTime;

    const interval = setInterval(() => {
      start++;
      const progress = start / totalSteps;
      setCount(Math.floor(progress * target));

      if (start >= totalSteps) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [trigger, target]);

  return count;
}

/* SINGLE STAT BOX COMPONENT */
const StatBox = ({ value, label, subLabel, bgColor, imgSrc }: StatBoxProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.4 });
  const count = useCountAnimation(value, inView);

  return (
    <motion.div
      ref={ref}
      className="relative group flex flex-col justify-center items-center rounded-xl p-10 w-full h-56 transition-all hover:shadow-2xl cursor-default"
      style={{ backgroundColor: bgColor }}
      initial={{ opacity: 0, translateY: "50px" }}
      whileInView={{ opacity: 1, translateY: "0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Count Number */}
      <h2 className="text-4xl font-extrabold text-gray-800">{count}+</h2>

      <p className="text-lg font-semibold text-gray-700 mt-1">{label}</p>
      {subLabel && <p className="text-sm text-gray-500">{subLabel}</p>}

      <div className="transition-scale duration-300 text-7xl p-2 text-center group-hover:scale-120">
        {imgSrc}
      </div>
    </motion.div>
  );
};

/* MAIN STATS SECTION */
export default function StatsSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center py-8 px-4 border-2 rounded-2xl border-gray-200 bg-gray-200 dark:bg-gray-800 mt-12 ">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center">
        A Platform Trusted by Students
      </h1>

      <p className="text-center max-w-2xl mt-2">
        We aim to transform not just through words, but with the quality we
        provide!
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-6xl">
        <StatBox
          value={1000}
          label="Happy Students"
          subLabel=""
          bgColor="#FDEEDC"
          imgSrc="🧑‍🎓"
        />

        <StatBox
          value={2000}
          label="Hours of Teaching"
          subLabel=""
          bgColor="#FFE4E8"
          imgSrc="⏱️"
        />

        <StatBox
          value={3000}
          label="Video Lectures"
          subLabel=""
          bgColor="#DDF6FF"
          imgSrc="🎥"
        />

        <StatBox
          value={10}
          label="Teachers Team"
          subLabel=""
          bgColor="#E8E1FF"
          imgSrc="👥"
        />
      </div>
    </section>
  );
}
