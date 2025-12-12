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
    <section className="w-full py-10 sm:py-12 lg:py-16 px-2 sm:px-4">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#5227FF]/10 text-[#5227FF] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
          Why Choose German?
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 sm:mb-4">
          Unlock Your Potential
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Learning German opens doors to world-class education, career
          opportunities, and cultural experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl mx-auto">
        {CardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-full"
          >
            <div className="relative rounded-2xl p-[1px] bg-white/60 dark:bg-white/10">
              <div className="h-full rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-md transition-transform duration-200 group-hover:-translate-y-1 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl text-white"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${card.accentFrom}, ${card.accentTo})`,
                    }}
                  >
                    {card.icon}
                  </div>
                  <div className="inline-block max-w-full space-y-1">
                    <h3
                      className="
    inline text-lg font-bold text-gray-900 dark:text-white leading-tight
    whitespace-normal break-words

    bg-no-repeat
    [background-size:0%_2px]
    [background-position:0%_100%]

    group-hover:[background-size:100%_2px]
    group-hover:[background-position:0%_100%]

    transition-[background-size,background-position]
    duration-1000
    ease-[cubic-bezier(0.22,1,0.36,1)]

    [box-decoration-break:clone]
    [-webkit-box-decoration-break:clone]
  "
                      style={{
                        backgroundImage: `linear-gradient(90deg, ${card.accentFrom}, ${card.accentTo})`,
                      }}
                    >
                      {card.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {card.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full text-xs font-semibold text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700"
                      style={{
                        backgroundColor: `${card.accentFrom}10`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
