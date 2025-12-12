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
    <section className="relative w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5227FF] mb-2">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300 group-hover:text-[#5227FF] dark:group-hover:text-purple-300 transition-colors">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
