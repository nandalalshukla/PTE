"use client";
import { IoCall } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import { Link } from "lucide-react";
import OurCoursesButton from "./OurCoursesButton";
import ContactNowButton from "./ContactNowButton";

//german language courses level data
const CourseData = [
  {
    imageSrc: "/1pte.png",
    title: "A1 Blended Intensive Course",
    description:
      "Begin your German learning journey with our A1 Blended Intensive Course, designed for absolute beginners. This course combines online and in-person learning to provide a comprehensive introduction to the German language, covering basic vocabulary, grammar, and conversational skills.",
    COurseDuration: "4 weeks",
    ClassDuration: "1 hours/day, 6 days/week",
    price: "रु 4000",
    demoVdo: "https://youtu.be/l0JC0Agyh3c?si=zTU4tkHaMeKXcMRf",
  },
  {
    imageSrc: "/2pte.png",
    title: "A2 Blended Intensive Course",
    description:
      "Continue your German language journey with our A2 Blended Intensive Course, perfect for those who have completed the A1 level. This course focuses on expanding your vocabulary, improving grammar skills, and enhancing conversational abilities through a mix of online and in-person sessions.",
    COurseDuration: "4 weeks",
    ClassDuration: "2 hours/day, 6 days/week",
    price: "रु 6000",
    demoVdo: "https://youtu.be/Hf0O1mGKFZg?si=99MXWbLT1zrs_Lli",
  },
  {
    imageSrc: "/3pte.png",
    title: "B1 Blended Intensive Course",
    description:
      "Advance your German skills with our B1 Blended Intensive Course, designed for intermediate learners. This course emphasizes practical communication, complex grammar structures, and cultural understanding through a combination of online and face-to-face learning.",
    COurseDuration: "8 weeks",
    ClassDuration: "2 hours/day, 6 days/week",
    price: "रु 8000",
    demoVdo: "https://youtu.be/UY4H0zujVpA?si=7c3WZcvAEeFltmzC",
  },
];

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

    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  } catch {
    return url;
  }
};

export default function CourseCards() {
  const [activeDemoUrl, setActiveDemoUrl] = useState<string | null>(null);
  const embedUrl = activeDemoUrl ? buildYouTubeEmbedUrl(activeDemoUrl) : null;

  return (
    <>
      <section className="w-full py-16">
        <div className="mx-auto w-full max-w-6xl flex flex-col gap-10 px-4 mt-5">
          {/* Header */}
          <div className="text-center">
            <p className="text-xl font-semibold uppercase tracking-[0.2em] text-[#7e5cf3]">
              Courses & Pricing
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            {CourseData.map((course, idx) => {
              const isPopular = idx === 0;

              return (
                <article
                  key={course.title}
                  className="
                    group relative flex h-full flex-col
                    rounded-2xl p-7 border transition-all duration-300 
                    bg-gray-100 dark:bg-gray-900/80
                    border-gray-400 dark:border-gray-700
                    hover:shadow-xl hover:border-[#7E5CF3]
                    backdrop-blur-sm
                  "
                >
                  {/* Badge */}
                  {isPopular && (
                    <span
                      className="
                      absolute -top-3 right-6 px-3 py-1 text-xs font-semibold
                      rounded-full border bg-[#f5f0ff] text-[#6136ed]
                      border-[#7E5CF3]
                      dark:bg-[#2b2250] dark:text-[#d7c8ff]
                    "
                    >
                      Start Here
                    </span>
                  )}

                  {/* Image */}
                  <div className="mx-auto mb-4 flex h-48 w-full max-w-[220px] items-center justify-center overflow-hidden">
                    <Image
                      src={course.imageSrc}
                      alt={course.title}
                      width={220}
                      height={220}
                      className="
                        h-full w-full object-contain 
                        transition-transform duration-300 
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Title */}
                  <p className="mt-3 text-lg font-semibold dark:text-gray-100">
                    {course.title}
                  </p>

                  {/* Price */}
                  <p className="text-3xl py-2 text-gray-900 dark:text-gray-200">
                    {course.price}
                  </p>

                  <hr className="my-3 border-gray-500 dark:border-gray-700" />

                  {/* Description */}
                  <p className="mt-2 text-sm text-gray-800 dark:text-gray-200">
                    {course.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm  text-gray-800  dark:text-gray-200">
                    <li className="flex items-start gap-2">
                      <span className="text-[#7E5CF3]">✓</span>
                      Course duration: {course.COurseDuration}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7E5CF3]">✓</span>
                      Class schedule: {course.ClassDuration}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7E5CF3]">✓</span>
                      Blended online + in-person sessions
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#7E5CF3]">✓</span>
                      Dedicated mentor support
                    </li>
                  </ul>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      className="
                        rounded-xl px-4 py-3 text-sm font-semibold text-white
                        bg-[#7E5CF3] hover:bg-[#6a4cd1]
                        shadow-sm hover:shadow-md transition
                      "
                    >
                      Choose Plan
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveDemoUrl(course.demoVdo)}
                      className="
                        rounded-xl px-4 py-3 text-sm font-semibold
                        border border-gray-300 dark:border-gray-600
                        text-gray-800 dark:text-gray-200
                        hover:border-[#7E5CF3] hover:text-[#7E5CF3]
                        transition
                      "
                    >
                      Watch Demo
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="flex flex-row justify-center items-center">
            <OurCoursesButton
              text="Know More About Our Courses"
              imgSrc="/1pte.jpg"
              href="/courses"
            />

          </div>
        </div>
      </section>

      {/* Modal */}
      {embedUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveDemoUrl(null)}
        >
          {/* Fixed Close Button */}
          <button
            onClick={() => setActiveDemoUrl(null)}
            aria-label="Close video"
            className="
        fixed top-4 right-4 z-[60]
        h-10 w-10 flex items-center justify-center
        rounded-full
        bg-white/40 dark:bg-gray-800/60
        text-black dark:text-white
        text-2xl font-semibold leading-none
        shadow-lg backdrop-blur
        hover:bg-white/60 dark:hover:bg-gray-700
        transition
      "
          >
            ✕
          </button>

          {/* Modal Box */}
          <div
            className="
        w-full max-w-4xl p-2 rounded-3xl
        border border-white/10
        bg-white dark:bg-gray-900
        shadow-[0_35px_120px_rgba(0,0,0,0.55)]
      "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
              <iframe
                src={embedUrl}
                title="Course demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
