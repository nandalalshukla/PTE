"use client";

import { useState } from "react";
import Image from "next/image";

const instructors = [
  {
    name: "Dr. Sarah Mueller",
    role: "Head of German Department",
    image: "/instructors/instructor1.jpg",
    bio: "Native German speaker with 15+ years of teaching experience. PhD in Germanic Languages from University of Munich.",
    specialties: ["Advanced Grammar", "Business German", "Exam Preparation"],
    languages: ["German (Native)", "English", "Nepali"],
    experience: "15+ years",
    students: "5000+",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Ram Krishna Sharma",
    role: "Senior German Instructor",
    image: "/instructors/instructor2.jpg",
    bio: "Certified Goethe Institute instructor with extensive experience preparing students for A1-B2 exams.",
    specialties: [
      "Beginner German",
      "Goethe Exam Prep",
      "Conversational German",
    ],
    languages: ["German (C2)", "Nepali (Native)", "English"],
    experience: "10+ years",
    students: "3500+",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Anna Weber",
    role: "Language Coach",
    image: "/instructors/instructor3.jpg",
    bio: "Passionate language coach from Berlin, specializing in immersive learning methods and cultural integration.",
    specialties: ["Cultural Studies", "Pronunciation", "Living in Germany"],
    languages: ["German (Native)", "English", "Hindi"],
    experience: "8 years",
    students: "2000+",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Priya Adhikari",
    role: "German Instructor",
    image: "/instructors/instructor4.jpg",
    bio: "Former student who became a teacher. Understands the challenges Nepali students face learning German.",
    specialties: ["A1-A2 Courses", "Speaking Practice", "Vocabulary Building"],
    languages: ["German (B2)", "Nepali (Native)", "English"],
    experience: "5 years",
    students: "1500+",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Thomas Becker",
    role: "TestDaF Specialist",
    image: "/instructors/instructor5.jpg",
    bio: "Expert in academic German and university preparation with connections to German universities.",
    specialties: [
      "TestDaF Preparation",
      "Academic Writing",
      "University Guidance",
    ],
    languages: ["German (Native)", "English"],
    experience: "12 years",
    students: "2500+",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
  {
    name: "Sita Gurung",
    role: "Online Course Coordinator",
    image: "/instructors/instructor6.jpg",
    bio: "Tech-savvy instructor specializing in online education and interactive learning methods.",
    specialties: ["Online Teaching", "Interactive Learning", "Group Sessions"],
    languages: ["German (C1)", "Nepali (Native)", "English"],
    experience: "6 years",
    students: "3000+",
    social: { facebook: "#", instagram: "#", linkedin: "#" },
  },
];

const achievements = [
  { icon: "🎓", value: "50+", label: "Certified Instructors" },
  { icon: "🌍", value: "15+", label: "Countries Represented" },
  { icon: "⭐", value: "4.9", label: "Average Rating" },
  { icon: "📚", value: "20K+", label: "Students Taught" },
];

export default function Instructors() {
  const [selectedInstructor, setSelectedInstructor] = useState<number | null>(
    null
  );

  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5227FF]/10 via-transparent to-[#8A5CFF]/10 dark:from-[#5227FF]/5 dark:to-[#8A5CFF]/5" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium text-[#5227FF] bg-[#5227FF]/10 rounded-full">
            Learn From The Best
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-[#5227FF] to-[#8A5CFF] dark:from-white dark:via-[#a68bff] dark:to-[#c4b5fd] bg-clip-text text-transparent">
            Meet Our Instructors
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our team of certified German language experts combines native
            fluency with proven teaching methodologies to ensure your success.
          </p>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#5227FF] transition-all duration-300"
            >
              <span className="text-4xl mb-3 block">{stat.icon}</span>
              <p className="text-3xl font-bold text-[#5227FF] mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Featured Instructors
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, idx) => (
            <div
              key={idx}
              className="group relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-[#5227FF] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Area */}
              <div className="relative h-64 bg-gradient-to-br from-[#5227FF]/20 to-[#8A5CFF]/30 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#5227FF] to-[#8A5CFF] flex items-center justify-center text-white text-4xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-500">
                  {instructor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-[#5227FF] transition-colors">
                  {instructor.name}
                </h3>
                <p className="text-[#5227FF] font-medium text-sm mb-3">
                  {instructor.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {instructor.bio}
                </p>

                {/* Stats Row */}
                <div className="flex gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <span>⏱️</span>
                    <span>{instructor.experience}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                    <span>👥</span>
                    <span>{instructor.students}</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {instructor.specialties.slice(0, 2).map((specialty, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-[#5227FF]/10 text-[#5227FF] font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                  {instructor.specialties.length > 2 && (
                    <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                      +{instructor.specialties.length - 2} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      setSelectedInstructor(
                        selectedInstructor === idx ? null : idx
                      )
                    }
                    className="flex-1 py-2.5 bg-[#5227FF] text-white text-sm font-semibold rounded-xl hover:bg-[#4520d4] transition-all duration-300"
                  >
                    View Profile
                  </button>
                  <div className="flex gap-2">
                    <a
                      href={instructor.social.facebook}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-[#5227FF]/10 transition-colors"
                    >
                      📘
                    </a>
                    <a
                      href={instructor.social.linkedin}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-[#5227FF]/10 transition-colors"
                    >
                      💼
                    </a>
                  </div>
                </div>
              </div>

              {/* Expanded Profile */}
              {selectedInstructor === idx && (
                <div className="absolute inset-0 bg-white dark:bg-gray-900 p-6 overflow-auto animate-in fade-in duration-300">
                  <button
                    onClick={() => setSelectedInstructor(null)}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors"
                  >
                    ✕
                  </button>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#5227FF] to-[#8A5CFF] flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {instructor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {instructor.name}
                  </h3>
                  <p className="text-[#5227FF] font-medium text-sm mb-4">
                    {instructor.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {instructor.bio}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                        Specialties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {instructor.specialties.map((s, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-[#5227FF]/10 text-[#5227FF] font-medium"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">
                        Languages
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {instructor.languages.map((l, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                          >
                            {l}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#5227FF] to-[#8A5CFF] p-12 text-white text-center">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Become an Instructor
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Are you passionate about teaching German? Join our team of expert
              instructors and help students achieve their language goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-[#5227FF] font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Apply Now
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-white/20 text-white font-bold rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
