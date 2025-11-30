"use client";
import "animate.css";
import { motion } from "framer-motion";

// import { color } from "motion";

// import Image from "next/image";

const CardData = [
  {
    title: "Access to free quality education",
    tags: ["Bachelors", "Masters"],
    description:
      "Explore a wide range of courses designed to help you excel in your academic journey.",
    iconSrc: "/neet-icon.png",
    color: "#c4e4f0",
    emoji: "🎓",
  },
  {
    title: "Ausbildung/Aupair",
    tags: ["Vocational", "Practical"],
    description:
      "Gain hands-on experience and practical skills and experience a different culture.",
    iconSrc: "/ausbildung-icon.png",
    color: "#d8d8fb",
    emoji: "🧑‍🔧",
  },
  {
    title: "Gateway to European Opportunities",
    tags: ["Europe", "Opportunities"],
    description:
      "Unlock access to educational and career opportunities across Europe.",
    iconSrc: "/europe-icon.png",
    color: "#fbe4bf",
    emoji: "🌍",
  },
  {
    title: "Explore and Travel",
    tags: ["Adventure", "Culture"],
    description:
      "Discover new places, cultures, and experiences while expanding your horizons.",
    iconSrc: "/travel-icon.png",
    color: "#fcd3d3",
    emoji: "✈️",
  },

  // ⭐ New Objects
  {
    title: "High-Demand Global Language",
    tags: ["Career Growth", "International"],
    description:
      "German is one of the most in-demand languages worldwide, opening doors to global job .",
    iconSrc: "/german-career.png",
    color: "#e0f4d9",
    emoji: "🌐",
  },
  {
    title: "Access to Scholarships & Study Abroad",
    tags: ["Scholarships", "Education"],
    description:
      "Learning German significantly increases your chances of securing scholarships and .",
    iconSrc: "/german-education.png",
    color: "#fde2f5",
    emoji: "🎒",
  },
];

export default function PASSCard() {
  return (
    <div className="w-full flex flex-col bg-gray-100 dark:bg-gray-900 mt-9 rounded-2xl justify-center items-center p-5 ">
      <h1 className="text-4xl font-extrabold mb-5 text-gray-900 dark:text-white p-4 text-center">
        Why Learn German❓
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {CardData.map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-full p-6 rounded-xl bg-white dark:bg-gray-800 border-3 border-gray-900 dark:shadow-lg dark:shadow-gray-600 relative dark:hover:bg-gray-900 hover:border-[#8A5CFF] transition-all duration-300 group"
          >
            {/* Left Area */}
            <div className="z-10 pr-4 w-[65%]">
              <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {card.title}
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-gray-200 dark:bg-fuchsia-800 text-gray-700 dark:text-gray-100 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-900 dark:text-gray-100 mb-4">
                {card.description}
              </p>

              <button className="flex items-center gap-2 text-gray-800 dark:text-gray-200 font-medium group">
                Explore Category
                <span className="p-1 bg-gray-100 dark:bg-gray-700 rounded-full group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition">
                  ➜
                </span>
              </button>
            </div>

            {/* Curved Color Section */}
            <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none rounded-r-xl">
              <div
                className="h-full w-full rounded-l-[80px] overflow-hidden rounded-r-xl"
                style={{ backgroundColor: card.color }}
              >
                <div className="w-full h-full flex items-center justify-center text-7xl group-hover:scale-145 transition-all duration-300">
                  {card.emoji}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
