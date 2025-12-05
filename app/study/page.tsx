"use client";

import { useState } from "react";

const studyResources = [
  {
    category: "Grammar Guides",
    icon: "📖",
    items: [
      {
        title: "German Sentence Structure",
        level: "Beginner",
        duration: "15 min",
        free: true,
      },
      {
        title: "Verb Conjugation Mastery",
        level: "Beginner",
        duration: "20 min",
        free: true,
      },
      {
        title: "Der, Die, Das - Article Guide",
        level: "Beginner",
        duration: "25 min",
        free: true,
      },
      {
        title: "German Cases Explained",
        level: "Intermediate",
        duration: "30 min",
        free: false,
      },
      {
        title: "Passive Voice in German",
        level: "Advanced",
        duration: "35 min",
        free: false,
      },
    ],
  },
  {
    category: "Vocabulary Sets",
    icon: "📚",
    items: [
      {
        title: "500 Most Common Words",
        level: "Beginner",
        duration: "Flashcards",
        free: true,
      },
      {
        title: "Daily Conversation Phrases",
        level: "Beginner",
        duration: "100+ phrases",
        free: true,
      },
      {
        title: "Business German Vocabulary",
        level: "Intermediate",
        duration: "200+ words",
        free: false,
      },
      {
        title: "Medical German Terms",
        level: "Advanced",
        duration: "300+ terms",
        free: false,
      },
    ],
  },
  {
    category: "Practice Tests",
    icon: "✍️",
    items: [
      {
        title: "A1 Mock Exam",
        level: "Beginner",
        duration: "60 min",
        free: true,
      },
      {
        title: "A2 Practice Test",
        level: "Beginner",
        duration: "75 min",
        free: true,
      },
      {
        title: "B1 Sample Questions",
        level: "Intermediate",
        duration: "90 min",
        free: false,
      },
      {
        title: "B2 Full Mock Test",
        level: "Advanced",
        duration: "120 min",
        free: false,
      },
    ],
  },
  {
    category: "Audio Lessons",
    icon: "🎧",
    items: [
      {
        title: "German Pronunciation Guide",
        level: "Beginner",
        duration: "30 min",
        free: true,
      },
      {
        title: "Listening Comprehension A1",
        level: "Beginner",
        duration: "45 min",
        free: true,
      },
      {
        title: "Native Speaker Dialogues",
        level: "Intermediate",
        duration: "60 min",
        free: false,
      },
      {
        title: "Podcast Transcripts",
        level: "Advanced",
        duration: "Various",
        free: false,
      },
    ],
  },
];

const studyTips = [
  {
    title: "Study Daily, Even If Just 15 Minutes",
    description:
      "Consistency beats intensity. Short daily sessions are more effective than long irregular ones.",
    icon: "⏰",
  },
  {
    title: "Immerse Yourself in German",
    description:
      "Change your phone language, watch German shows, listen to German music and podcasts.",
    icon: "🎬",
  },
  {
    title: "Practice Speaking From Day One",
    description:
      "Don't wait until you're 'ready'. Start speaking German immediately, even with mistakes.",
    icon: "🗣️",
  },
  {
    title: "Use Spaced Repetition",
    description:
      "Review vocabulary at increasing intervals to move words into long-term memory.",
    icon: "🔄",
  },
  {
    title: "Focus on High-Frequency Words",
    description:
      "The 1000 most common words cover 80% of everyday German conversation.",
    icon: "📊",
  },
  {
    title: "Make Mistakes Fearlessly",
    description:
      "Errors are part of learning. Native speakers appreciate your effort to learn their language.",
    icon: "💪",
  },
];

const downloadables = [
  { title: "German Alphabet Chart", type: "PDF", size: "2.5 MB", icon: "🔤" },
  { title: "Verb Conjugation Tables", type: "PDF", size: "4.2 MB", icon: "📋" },
  {
    title: "German-Nepali Phrasebook",
    type: "PDF",
    size: "8.1 MB",
    icon: "📖",
  },
  { title: "A1 Vocabulary List", type: "PDF", size: "1.8 MB", icon: "📝" },
  {
    title: "Practice Worksheets Bundle",
    type: "ZIP",
    size: "15.3 MB",
    icon: "📁",
  },
  {
    title: "Audio Pronunciation Guide",
    type: "MP3",
    size: "45 MB",
    icon: "🎵",
  },
];

export default function Study() {
  const [activeCategory, setActiveCategory] = useState("Grammar Guides");
  const [activeFilter, setActiveFilter] = useState("all");

  const activeResource = studyResources.find(
    (r) => r.category === activeCategory
  );

  const filteredItems = activeResource?.items.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "free") return item.free;
    if (activeFilter === "beginner") return item.level === "Beginner";
    if (activeFilter === "intermediate") return item.level === "Intermediate";
    if (activeFilter === "advanced") return item.level === "Advanced";
    return true;
  });

  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5227FF]/10 via-transparent to-[#8A5CFF]/10 dark:from-[#5227FF]/5 dark:to-[#8A5CFF]/5" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium text-[#5227FF] bg-[#5227FF]/10 rounded-full">
            Study Resources
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-[#5227FF] to-[#8A5CFF] dark:from-white dark:via-[#a68bff] dark:to-[#c4b5fd] bg-clip-text text-transparent">
            Study German Effectively
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive library of study materials, practice tests,
            and resources to accelerate your German learning journey.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {studyResources.map((resource) => (
            <button
              key={resource.category}
              onClick={() => setActiveCategory(resource.category)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === resource.category
                  ? "bg-[#5227FF] text-white shadow-lg shadow-[#5227FF]/30"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-[#5227FF]"
              }`}
            >
              <span className="text-xl">{resource.icon}</span>
              <span>{resource.category}</span>
            </button>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["all", "free", "beginner", "intermediate", "advanced"].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#5227FF]/10 text-[#5227FF]"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {filter === "all" ? "All Resources" : filter}
              </button>
            )
          )}
        </div>

        {/* Resource Items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems?.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-[#5227FF] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    item.level === "Beginner"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : item.level === "Intermediate"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  }`}
                >
                  {item.level}
                </span>
                {item.free && (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#5227FF]/10 text-[#5227FF]">
                    FREE
                  </span>
                )}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#5227FF] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {item.duration}
              </p>
              <button
                className={`w-full py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  item.free
                    ? "bg-[#5227FF] text-white hover:bg-[#4520d4]"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#5227FF] hover:text-white"
                }`}
              >
                {item.free ? "Start Learning" : "Unlock with Premium"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Study Tips Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Tips for Effective Learning
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Follow these proven strategies to maximize your German learning
            progress.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studyTips.map((tip, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#5227FF]/5 to-[#8A5CFF]/10 dark:from-[#5227FF]/10 dark:to-[#8A5CFF]/5 border border-[#5227FF]/20 hover:border-[#5227FF]/40 transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{tip.icon}</span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Free Downloads
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Download these free resources to study offline and boost your
            learning.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloadables.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-[#5227FF] transition-all duration-300 cursor-pointer hover:shadow-lg"
            >
              <div className="w-14 h-14 flex-shrink-0 rounded-xl bg-[#5227FF]/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-900 dark:text-white truncate group-hover:text-[#5227FF] transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.type} • {item.size}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#5227FF] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                ↓
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#5227FF] to-[#8A5CFF] p-12 text-white text-center">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Get full access to all study materials, practice tests, and
              exclusive content with our premium membership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/courses"
                className="px-8 py-4 bg-white text-[#5227FF] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                View Courses
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
