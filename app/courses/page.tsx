"use client";

import { useState } from "react";
import Image from "next/image";

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
  },
];

const levels = ["All", "A1", "A2", "B1", "Custom"];

export default function Courses() {
  const [activeLevel, setActiveLevel] = useState("All");
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  const filteredCourses =
    activeLevel === "All"
      ? allCourses
      : allCourses.filter((c) => c.level === activeLevel);

  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5227FF]/10 via-transparent to-[#8A5CFF]/10 dark:from-[#5227FF]/5 dark:to-[#8A5CFF]/5" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium text-[#5227FF] bg-[#5227FF]/10 rounded-full">
            Our Programs
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-[#5227FF] to-[#8A5CFF] dark:from-white dark:via-[#a68bff] dark:to-[#c4b5fd] bg-clip-text text-transparent">
            German Language Courses
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From absolute beginner to advanced levels, find the perfect course
            to achieve your German language goals.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeLevel === level
                  ? "bg-[#5227FF] text-white shadow-lg shadow-[#5227FF]/30"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#5227FF]/10 hover:text-[#5227FF]"
              }`}
            >
              {level === "All" ? "All Courses" : `Level ${level}`}
            </button>
          ))}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
              className={`group relative rounded-3xl border bg-white dark:bg-gray-900 overflow-hidden transition-all duration-500 ${
                course.popular
                  ? "border-[#5227FF] shadow-xl shadow-[#5227FF]/10"
                  : "border-gray-200 dark:border-gray-700 hover:border-[#5227FF]"
              } hover:shadow-2xl hover:-translate-y-1`}
            >
              {course.popular && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#5227FF] text-white text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <div className="flex items-start gap-6">
                  {/* Image */}
                  <div className="relative w-32 h-32 flex-shrink-0 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className={`object-contain transition-transform duration-500 ${
                        hoveredCourse === course.id ? "scale-110" : ""
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-[#5227FF]/10 text-[#5227FF] text-xs font-bold rounded-full mb-3">
                      Level {course.level}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {course.title}
                    </h3>
                    <p className="text-3xl font-extrabold text-[#5227FF]">
                      {course.price}
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  {course.description}
                </p>

                {/* Duration & Schedule */}
                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-5 h-5 text-[#5227FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-5 h-5 text-[#5227FF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    {course.schedule}
                  </div>
                </div>

                {/* Features */}
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {course.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 text-[#5227FF] flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8 flex gap-4">
                  <button className="flex-1 py-3 px-6 bg-[#5227FF] text-white font-semibold rounded-xl hover:bg-[#4520d4] transition-all duration-300 hover:shadow-lg hover:shadow-[#5227FF]/30">
                    Enroll Now
                  </button>
                  <button className="py-3 px-6 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-[#5227FF] hover:text-[#5227FF] transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-[#5227FF] font-semibold uppercase tracking-wider text-sm">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
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
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                {faq.q}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#5227FF] to-[#8A5CFF] p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Course to Choose?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation and we&apos;ll help you find
              the perfect course for your goals.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5227FF] font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
