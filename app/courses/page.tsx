"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Calendar,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";

const allCourses = [
  {
    id: 1,
    level: "A1",
    title: "A1 Blended Intensive Course",
    description:
      "Begin your German learning journey with our A1 Blended Intensive Course, designed for absolute beginners. This course provides a comprehensive introduction to German vocabulary, grammar, and conversational skills.",
    duration: "4 weeks",
    schedule: "1 hour/day, 6 days/week",
    price: "रु 4000",
    features: [
      "Basic vocabulary & grammar",
      "Conversational foundations",
      "Online + in-person sessions",
      "24/7 recorded access",
      "Dedicated mentor support",
    ],
    image: "/1pte.png",
    popular: true,
    color: "from-blue-400 to-purple-500",
  },
  {
    id: 2,
    level: "A2",
    title: "A2 Blended Intensive Course",
    description:
      "Continue your German language journey with our A2 course, perfect for those who have completed A1. Focus on expanding vocabulary, improving grammar, and enhancing conversational abilities.",
    duration: "4 weeks",
    schedule: "2 hours/day, 6 days/week",
    price: "रु 6000",
    features: [
      "Advanced vocabulary",
      "Complex grammar structures",
      "Interactive conversations",
      "Exam preparation",
      "Personal follow-up",
    ],
    image: "/2pte.png",
    popular: false,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    level: "B1",
    title: "B1 Blended Intensive Course",
    description:
      "Advance your German skills with our B1 course for intermediate learners. Emphasizes practical communication, complex grammar, and cultural understanding.",
    duration: "8 weeks",
    schedule: "2 hours/day, 6 days/week",
    price: "रु 8000",
    features: [
      "Professional communication",
      "Cultural immersion",
      "Business German basics",
      "Certification prep",
      "Interview preparation",
    ],
    image: "/3pte.png",
    popular: false,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 4,
    level: "Custom",
    title: "Personalized Tutoring",
    description:
      "Tailored tutoring according to your time and needs. Perfect for students abroad wanting to learn German for studies and work.",
    duration: "Flexible",
    schedule: "As per your availability",
    price: "Custom pricing",
    features: [
      "1-on-1 sessions",
      "Flexible scheduling",
      "Custom curriculum",
      "Progress tracking",
      "Intensive practice",
    ],
    image: "/1pte.png",
    popular: false,
    color: "from-orange-400 to-red-500",
  },
];

const levels = ["All", "A1", "A2", "B1", "Custom"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
} as const;

export default function Courses() {
  const [activeLevel, setActiveLevel] = useState("All");
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  const filteredCourses =
    activeLevel === "All"
      ? allCourses
      : allCourses.filter((c) => c.level === activeLevel);

  return (
    <main className="min-h-screen relative overflow-hidden bg-gray-50 dark:bg-[#0a0a0a] selection:bg-[#5227FF] selection:text-white">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-400/20 dark:bg-purple-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-blue-400/20 dark:bg-blue-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[45rem] h-[45rem] bg-pink-400/20 dark:bg-pink-600/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-white/20 backdrop-blur-md text-sm font-medium text-[#5227FF] dark:text-purple-300 shadow-sm mb-6">
            <Sparkles className="w-4 h-4" />
            World-Class German Education
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Choose Your <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#5227FF] via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Learning Path
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Master the German language with our structured courses designed for
            every level. From basics to business fluency.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`relative px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 overflow-hidden group ${
                activeLevel === level
                  ? "text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/40 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-white/10 border border-white/20"
              }`}
            >
              {activeLevel === level && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#5227FF] to-purple-600"
                />
              )}
              <span className="relative z-10">
                {level === "All" ? "All Courses" : `Level ${level}`}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                onMouseEnter={() => setHoveredCourse(course.id)}
                onMouseLeave={() => setHoveredCourse(null)}
                className="group relative rounded-[2.5rem] p-1 bg-gradient-to-br from-white/40 to-white/10 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative h-full bg-white/50 dark:bg-[#121212]/80 rounded-[2.3rem] p-8 overflow-hidden">
                  {/* Popular Badge */}
                  {course.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-bl from-[#5227FF] to-purple-600 text-white text-xs font-bold px-6 py-3 rounded-bl-3xl shadow-lg z-20">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Image Container */}
                    <div className="relative w-full md:w-40 aspect-square rounded-3xl overflow-hidden shadow-lg group-hover:shadow-purple-500/20 transition-all duration-500">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                      />
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    {/* Content Header */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${course.color} bg-clip-text text-transparent bg-opacity-10 border border-purple-200 dark:border-purple-800`}
                        >
                          LEVEL {course.level}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#5227FF] dark:group-hover:text-purple-400 transition-colors duration-300">
                        {course.title}
                      </h3>

                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold bg-gradient-to-r from-[#5227FF] to-purple-600 bg-clip-text text-transparent">
                          {course.price}
                        </span>
                        {course.price !== "Custom pricing" && (
                          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                            / course
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Specs */}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Clock className="w-4 h-4 text-[#5227FF]" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 text-sm font-medium text-gray-700 dark:text-gray-300">
                      <Calendar className="w-4 h-4 text-[#5227FF]" />
                      {course.schedule}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-8 space-y-3">
                    {course.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 group/item"
                      >
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover/item:bg-[#5227FF]/10 transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600 dark:text-green-400 group-hover/item:text-[#5227FF] transition-colors" />
                        </div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 flex gap-4">
                    <button className="flex-1 py-3.5 px-6 bg-gradient-to-r from-[#5227FF] to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      Enroll Now
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                    <button className="py-3.5 px-6 bg-white dark:bg-white/5 text-gray-700 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 hover:border-[#5227FF]/30 transition-all duration-300">
                      Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Common Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need to know about our courses
            </p>
          </div>

          <div className="grid gap-4">
            {[
              {
                q: "Do I need any prior German knowledge?",
                a: "No! Our A1 course is designed for absolute beginners with zero German knowledge.",
              },
              {
                q: "How are classes conducted?",
                a: "Classes are conducted online via Zoom/Google Meet. You also get access to recorded sessions.",
              },
              {
                q: "What if I miss a class?",
                a: "All sessions are recorded and shared. You can watch them anytime at your convenience.",
              },
              {
                q: "Do you provide certificates?",
                a: "Yes, we provide course completion certificates for all levels.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white/40 dark:bg-white/5 border border-white/20 backdrop-blur-sm hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300"
              >
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-[#5227FF]/10 flex items-center justify-center text-[#5227FF] font-bold text-sm">
                    Q
                  </span>
                  {faq.q}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm pl-11">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#5227FF] to-purple-600 p-12 text-center text-white shadow-2xl shadow-purple-500/30"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-black/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Still Unsure? Let&apos;s Talk.
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Schedule a free consultation with our academic counselors to find
              the perfect path for your goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5227FF] font-bold rounded-xl hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
