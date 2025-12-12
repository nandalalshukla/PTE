"use client";

import Image from "next/image";

const teamMembers = [
  {
    name: "Purushottam Shukla",
    role: "Founder & Lead Instructor",
    image: "/purushottam.jpg",
    bio: "Passionate German language educator with years of experience helping Nepali students achieve their language goals.",
  },
  {
    name: "Unish Timsina",
    role: "Senior Instructor",
    image: "/unish.jpg",
    bio: "Specialized in A1-B1 curriculum development and interactive teaching methodologies.",
  },
  {
    name: "Sushant Acharya",
    role: "Instructor",
    image: "/sushant.jpg",
    bio: "Expert in conversational German and exam preparation strategies.",
  },
  {
    name: "Aarushi Singh",
    role: "Instructor",
    image: "/aarushi.jpg",
    bio: "Specialized in A1-B1 curriculum development and interactive teaching methodologies.",
  },
  {
    name: "Subekshya",
    role: "Instructor",
    image: "/subekshya.jpg",
    bio: "Expert in conversational German and exam preparation strategies.",
  },
  {
    name: "Nirajan Dahal",
    role: "Instructor",
    image: "/sushant.jpg",
    bio: "Expert in conversational German and exam preparation strategies.",
  },
];

const milestones = [
  { year: "2022", event: "Pass The Excellence founded" },
  { year: "2023", event: "500+ students enrolled" },
  { year: "2024", event: "Launched B1 intensive program" },
  { year: "2025", event: "1000+ success stories" },
];

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#5227FF]/10 via-transparent to-[#8A5CFF]/10 dark:from-[#5227FF]/5 dark:to-[#8A5CFF]/5" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium text-[#5227FF] bg-[#5227FF]/10 rounded-full animate-fade-in">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-[#5227FF] to-[#8A5CFF] dark:from-white dark:via-[#a68bff] dark:to-[#c4b5fd] bg-clip-text text-transparent animate-fade-in">
            About Pass The Excellence
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Nepal&apos;s most affordable and effective online German language
            institute, dedicated to helping students achieve their dreams of
            studying and working in Germany.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="group p-8 rounded-3xl bg-gradient-to-br from-[#5227FF]/5 to-[#8A5CFF]/10 dark:from-[#5227FF]/10 dark:to-[#8A5CFF]/5 border border-[#5227FF]/20 hover:border-[#5227FF]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#5227FF]/10">
            <div className="w-14 h-14 mb-6 rounded-2xl bg-[#5227FF] flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">
              🎯
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To make quality German language education accessible and
              affordable for every Nepali student, breaking barriers and opening
              doors to international opportunities through innovative online
              learning.
            </p>
          </div>
          <div className="group p-8 rounded-3xl bg-gradient-to-br from-[#8A5CFF]/5 to-[#5227FF]/10 dark:from-[#8A5CFF]/10 dark:to-[#5227FF]/5 border border-[#8A5CFF]/20 hover:border-[#8A5CFF]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#8A5CFF]/10">
            <div className="w-14 h-14 mb-6 rounded-2xl bg-[#8A5CFF] flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform duration-300">
              🚀
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To become Nepal&apos;s leading German language institute, known
              for producing confident, fluent German speakers who successfully
              pursue education and careers in German-speaking countries.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <span className="text-[#5227FF] font-semibold uppercase tracking-wider text-sm">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
              What Makes Us Different
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💰",
                title: "Affordable",
                desc: "Most competitive prices in Nepal",
              },
              {
                icon: "🎓",
                title: "Expert Teachers",
                desc: "Certified & experienced instructors",
              },
              {
                icon: "🌐",
                title: "100% Online",
                desc: "Learn from anywhere in Nepal",
              },
              {
                icon: "📚",
                title: "Quality Content",
                desc: "Comprehensive curriculum",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#5227FF] transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </span>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-[#5227FF] font-semibold uppercase tracking-wider text-sm">
            Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
            Our Milestones
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#5227FF] to-[#8A5CFF]" />
          <div className="space-y-12">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-8 ${
                  idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    idx % 2 === 0 ? "text-right" : "text-left"
                  }`}
                >
                  <div className="inline-block p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <span className="text-[#5227FF] font-bold text-xl">
                      {m.year}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">
                      {m.event}
                    </p>
                  </div>
                </div>
                <div className="w-4 h-4 rounded-full bg-[#5227FF] border-4 border-white dark:border-gray-900 shadow-lg z-10" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <span className="text-[#5227FF] font-semibold uppercase tracking-wider text-sm">
              Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900 dark:text-white">
              Meet Our Experts
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center hover:border-[#5227FF] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-[#5227FF]/20 group-hover:ring-[#5227FF]/50 transition-all duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-[#5227FF] font-medium mt-1">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-4 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#5227FF] to-[#8A5CFF] p-12 text-center text-white">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their lives with
              German language skills.
            </p>
            <a
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5227FF] font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Explore Courses
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
