"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatBoxProps {
  value: number;
  label: string;
  subLabel: string;
  bgColor: string;
  imgSrc?: string;
}

function useCountAnimation(target: number, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1500; // ms
    const stepTime = 10;
    const totalSteps = duration / stepTime;

    const counter = setInterval(() => {
      start++;
      const progress = start / totalSteps;
      setCount(Math.floor(progress * target));

      if (start >= totalSteps) clearInterval(counter);
    }, stepTime);

    return () => clearInterval(counter);
  }, [trigger, target]);

  return count;
}

const StatBox = ({ value, label, subLabel, bgColor, imgSrc }: StatBoxProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });
  const count = useCountAnimation(value, inView);

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col justify-center items-center rounded-3xl p-10 w-full h-56 transition-all hover:shadow-xl cursor-default"
      style={{ backgroundColor: bgColor }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Count Number */}
      <h2 className="text-4xl font-extrabold text-gray-800">{count}+</h2>
      <p className="text-lg font-semibold text-gray-700">{label}</p>
      <p className="text-sm text-gray-500">{subLabel}</p>

      {/* Hover Image */}
      {imgSrc && (
        <motion.img
          src={imgSrc}
          alt="icon"
          className="absolute bottom-4 right-4 w-16 opacity-0 group-hover:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}
        />
      )}
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center py-16 px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center">
        A Platform Trusted by Students
      </h1>
      <p className="text-gray-600 text-center max-w-2xl mt-2">
        We aim to transform not just through words, but provide results with
        numbers!
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 w-full max-w-6xl">
        <StatBox
          value={1000}
          label="Happy Students"
          subLabel=""
          bgColor="#FDEEDC"
        />

        <StatBox
          value={2000}
          label="Hours of Teaching"
          subLabel=""
          bgColor="#FFE4E8"
          imgSrc="/notebook.png"
        />

        <StatBox
          value={3000}
          label="Video Lectures"
          subLabel=""
          bgColor="#DDF6FF"
        />

        <StatBox
          value={10}
          label="Teachers Team"
          subLabel=""
          bgColor="#E8E1FF"
        />
      </div>
    </section>
  );
}
