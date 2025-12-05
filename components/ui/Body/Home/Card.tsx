"use client";
import "animate.css";
import { motion } from "framer-motion";

const CardData = [
  {
    title: "Access to free quality education",
    tags: ["Bachelors", "Masters"],
    description:
      "Explore a wide range of courses designed to help you excel in your academic journey.",
    icon: "🎓",
    color: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    title: "Ausbildung/Aupair",
    tags: ["Vocational", "Practical"],
    description:
      "Gain hands-on experience and practical skills and experience a different culture.",
    icon: "🧑‍🔧",
    color:
      "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
    borderColor: "border-purple-200 dark:border-purple-800",
  },
  {
    title: "Gateway to European Opportunities",
    tags: ["Europe", "Opportunities"],
    description:
      "Unlock access to educational and career opportunities across Europe.",
    icon: "🌍",
    color:
      "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
    borderColor: "border-orange-200 dark:border-orange-800",
  },
  {
    title: "Explore and Travel",
    tags: ["Adventure", "Culture"],
    description:
      "Discover new places, cultures, and experiences while expanding your horizons.",
    icon: "✈️",
    color: "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20",
    borderColor: "border-red-200 dark:border-red-800",
  },
  {
    title: "High-Demand Global Language",
    tags: ["Career Growth", "International"],
    description:
      "German is one of the most in-demand languages worldwide, opening doors to global job markets.",
    icon: "🌐",
    color:
      "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
    borderColor: "border-green-200 dark:border-green-800",
  },
  {
    title: "Access to Scholarships & Study Abroad",
    tags: ["Scholarships", "Education"],
    description:
      "Learning German significantly increases your chances of securing scholarships and funding.",
    icon: "🎒",
    color: "from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20",
    borderColor: "border-pink-200 dark:border-pink-800",
  },
];

export default function PASSCard() {
  return (
    <section className="w-full py-16 px-4">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#5227FF]/10 text-[#5227FF] font-semibold text-sm mb-4">
          Why Choose German?
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Unlock Your Potential
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Learning German opens doors to world-class education, career
          opportunities, and cultural experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
        {CardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative p-6 rounded-2xl bg-gradient-to-br ${card.color} border ${card.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group overflow-hidden`}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
              {card.icon}
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-[#5227FF] transition-colors">
                {card.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-full bg-white/60 dark:bg-black/20 text-gray-700 dark:text-gray-300 text-xs font-medium backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
