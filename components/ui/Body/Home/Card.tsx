"use client";
import "animate.css";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CardData = [
  {
    title: "Access to free quality education",
    tags: ["Bachelors", "Masters"],
    description:
      "Explore a wide range of courses designed to help you excel in your academic journey.",
    icon: "🎓",
    accentFrom: "#4F46E5",
    accentTo: "#7C3AED",
    glow: "from-[#4F46E5]/35 via-[#7C3AED]/15 to-transparent",
  },
  {
    title: "Ausbildung/Aupair",
    tags: ["Vocational", "Practical"],
    description:
      "Gain hands-on experience and practical skills and experience a different culture.",
    icon: "🧑‍🔧",
    accentFrom: "#8B5CF6",
    accentTo: "#C084FC",
    glow: "from-[#8B5CF6]/30 via-[#C084FC]/15 to-transparent",
  },
  {
    title: "Gateway to European Opportunities",
    tags: ["Europe", "Opportunities"],
    description:
      "Unlock access to educational and career opportunities across Europe.",
    icon: "🌍",
    accentFrom: "#F59E0B",
    accentTo: "#F97316",
    glow: "from-[#F59E0B]/30 via-[#F97316]/15 to-transparent",
  },
  {
    title: "Explore and Travel",
    tags: ["Adventure", "Culture"],
    description:
      "Discover new places, cultures, and experiences while expanding your horizons.",
    icon: "✈️",
    accentFrom: "#EF4444",
    accentTo: "#F97316",
    glow: "from-[#EF4444]/30 via-[#F97316]/15 to-transparent",
  },
  {
    title: "High-Demand Global Language",
    tags: ["Career Growth", "International"],
    description:
      "German is one of the most in-demand languages worldwide, opening doors to global job markets.",
    icon: "🌐",
    accentFrom: "#10B981",
    accentTo: "#34D399",
    glow: "from-[#10B981]/30 via-[#34D399]/15 to-transparent",
  },
  {
    title: "Access to Scholarships & Study Abroad",
    tags: ["Scholarships", "Education"],
    description:
      "Learning German significantly increases your chances of securing scholarships and funding.",
    icon: "🎒",
    accentFrom: "#EC4899",
    accentTo: "#F472B6",
    glow: "from-[#EC4899]/30 via-[#F472B6]/15 to-transparent",
  },
];

export default function PASSCard() {
  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-[#5227FF]/10 text-[#5227FF] font-semibold text-sm mb-4"
          >
            Why Choose German?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Unlock Your <span className="text-[#5227FF]">Potential</span>
          </motion.h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Learning German opens doors to world-class education, career
            opportunities, and cultural experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {CardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              <div className="relative h-full rounded-[2rem] p-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="relative h-full bg-white dark:bg-[#121212] rounded-[1.8rem] p-8 flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                      style={{
                        backgroundColor: card.accentFrom,
                        boxShadow: `0 10px 20px -5px ${card.accentFrom}50`,
                      }}
                    >
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-[#5227FF] transition-colors">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg text-xs font-semibold border border-white/20"
                        style={{
                          backgroundColor: `${card.accentFrom}15`,
                          color: card.accentFrom,
                          borderColor: `${card.accentFrom}30`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-auto">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
