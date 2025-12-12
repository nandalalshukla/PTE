"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Active Students", value: 500, suffix: "+" },
  { label: "Success Stories", value: 1000, suffix: "+" },
  { label: "Expert Instructors", value: 15, suffix: "+" },
  { label: "Years of Excellence", value: 5, suffix: "+" },
];

const CountUp = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-bold">
      {count}
      {suffix}
    </span>
  );
};

export default function Stats() {
  return (
    <section className="w-full py-8 sm:py-10 lg:py-12 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#5227FF] mb-1 sm:mb-2">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
