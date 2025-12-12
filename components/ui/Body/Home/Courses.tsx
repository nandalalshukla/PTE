"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import OurCoursesButton from "./OurCoursesButton";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiPlay, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";

// German language courses level data
const CourseData = [
  {
    imageSrc: "/1pte.png",
    title: "A1 Blended Intensive Course",
    description:
      "Begin your German learning journey with our A1 Blended Intensive Course, designed for absolute beginners. This course combines online and in-person learning to provide a comprehensive introduction to the German language.",
    COurseDuration: "4 weeks",
    ClassDuration: "1 hours/day, 6 days/week",
    price: "रु 4000",
    demoVdo: "https://youtu.be/l0JC0Agyh3c?si=zTU4tkHaMeKXcMRf",
    popular: true,
  },
  {
    imageSrc: "/2pte.png",
    title: "A2 Blended Intensive Course",
    description:
      "Continue your German language journey with our A2 Blended Intensive Course, perfect for those who have completed the A1 level. This course focuses on expanding your vocabulary and improving grammar skills.",
    COurseDuration: "4 weeks",
    ClassDuration: "2 hours/day, 6 days/week",
    price: "रु 6000",
    demoVdo: "https://youtu.be/Hf0O1mGKFZg?si=99MXWbLT1zrs_Lli",
    popular: false,
  },
  {
    imageSrc: "/3pte.png",
    title: "B1 Blended Intensive Course",
    description:
      "Advance your German skills with our B1 Blended Intensive Course, designed for intermediate learners. This course emphasizes practical communication, complex grammar structures, and cultural understanding.",
    COurseDuration: "8 weeks",
    ClassDuration: "2 hours/day, 6 days/week",
    price: "रु 8000",
    demoVdo: "https://youtu.be/UY4H0zujVpA?si=7c3WZcvAEeFltmzC",
    popular: false,
  },
];

// Extract YouTube embed URL
const buildYouTubeEmbedUrl = (url: string) => {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.toLowerCase();
    let videoId: string | null = null;

    if (host.includes("youtu.be")) {
      videoId = parsed.pathname.replace("/", "");
    } else if (host.includes("youtube.com")) {
      if (parsed.pathname === "/watch") {
        videoId = parsed.searchParams.get("v");
      } else if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.split("/").pop() ?? null;
      } else if (parsed.pathname.startsWith("/shorts/")) {
        videoId = parsed.pathname.split("/")[2] ?? null;
      }
    }

    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : url;
  } catch {
    return url;
  }
};

export default function CourseCards() {
  const [activeDemoUrl, setActiveDemoUrl] = useState<string | null>(null);
  const embedUrl = activeDemoUrl ? buildYouTubeEmbedUrl(activeDemoUrl) : null;

  // Lock Body Scroll When Modal Opens
  useEffect(() => {
    if (activeDemoUrl) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDemoUrl]);

  // ESC to close modal
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveDemoUrl(null);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      <section className="w-full py-10 sm:py-12 lg:py-16 px-2 sm:px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[#5227FF]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto w-full max-w-7xl flex flex-col gap-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto px-2">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-[#5227FF]/10 text-[#5227FF] font-semibold text-xs sm:text-sm mb-3 sm:mb-4">
              Our Courses
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Choose Your <span className="text-gradient">Learning Path</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
              Comprehensive German language courses designed to take you from
              beginner to advanced levels with expert guidance.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {CourseData.map((course, idx) => (
              <motion.article
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "group relative flex flex-col h-full rounded-3xl p-1",
                  course.popular
                    ? "bg-gradient-to-b from-[#5227FF] to-purple-600"
                    : "bg-gray-200 dark:bg-gray-800"
                )}
              >
                <div className="flex flex-col h-full w-full rounded-[22px] bg-white dark:bg-gray-900 p-6 relative overflow-hidden">
                  {/* Badge */}
                  {course.popular && (
                    <div className="absolute top-0 right-0 bg-[#5227FF] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                      MOST POPULAR
                    </div>
                  )}

                  {/* Image */}
                  <div className="mx-auto mb-6 relative w-full h-48 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 dark:to-black/10 rounded-xl" />
                    <Image
                      src={course.imageSrc}
                      alt={course.title}
                      width={220}
                      height={220}
                      className="object-contain h-full w-auto drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {course.title}
                    </h3>

                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-3xl font-bold text-[#5227FF]">
                        {course.price}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        / course
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                      {course.description}
                    </p>

                    <div className="space-y-3 mb-8 flex-1">
                      <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-6 h-6 rounded-full bg-[#5227FF]/10 flex items-center justify-center text-[#5227FF]">
                          <FiCheck size={14} />
                        </div>
                        <span>Duration: {course.COurseDuration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-6 h-6 rounded-full bg-[#5227FF]/10 flex items-center justify-center text-[#5227FF]">
                          <FiCheck size={14} />
                        </div>
                        <span>{course.ClassDuration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                        <div className="w-6 h-6 rounded-full bg-[#5227FF]/10 flex items-center justify-center text-[#5227FF]">
                          <FiCheck size={14} />
                        </div>
                        <span>Blended Learning</span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-3 mt-auto">
                      <button
                        type="button"
                        className={cn(
                          "rounded-xl px-4 py-3 text-sm font-semibold text-white",
                          "bg-[#5227FF] hover:bg-[#4018dd]",
                          "shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40",
                          "transition-all active:scale-95"
                        )}
                      >
                        Enroll Now
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveDemoUrl(course.demoVdo)}
                        className={cn(
                          "flex items-center justify-center gap-2",
                          "rounded-xl px-4 py-3 text-sm font-semibold",
                          "border border-gray-200 dark:border-gray-700",
                          "text-gray-700 dark:text-gray-200",
                          "hover:border-[#5227FF] hover:text-[#5227FF]",
                          "hover:bg-[#5227FF]/5",
                          "transition-all active:scale-95"
                        )}
                      >
                        <FiPlay size={16} /> Demo
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="flex justify-center mt-8">
            <OurCoursesButton
              text="View All Courses"
              imgSrc="/a1.jpg"
              href="/courses"
            />
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {embedUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
            onClick={() => setActiveDemoUrl(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveDemoUrl(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors"
              >
                <FiX size={24} />
              </button>

              <div className="aspect-video w-full">
                <iframe
                  src={embedUrl}
                  title="Course demo video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
