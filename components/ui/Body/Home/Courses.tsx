"use client";

import { useState } from "react";
import Image from "next/image";

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
      <section className="w-full py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 mt-5">
          <div className="text-center">
            <p className="text-xl font-semibold uppercase tracking-[0.2em] text-[#7e5cf3]">
              Courses & Pricing
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
            {CourseData.map((course, idx) => {
              const isPopular = idx === 0;
              return (
                <article
                  key={course.title}
                  className="border-1 hover:border-[#7E5CF3] p-7 rounded-2xl  dark:bg-gray-800 dark:hover:bg-gray-900 transition-transform duration-300 relative flex h-full flex-col group"
                >
                  {isPopular && (
                    <span className="absolute -top-3 right-6 rounded-full border border-[#7E5CF3] bg-[#F4EEFF] px-3 py-1 text-xs font-semibold text-[#6136ed]">
                      Start Here
                    </span>
                  )}

                  <div className="flex items-center justify-center rounded-xl border-1 border-[#7E5CF3] dark:bg-gray-900">
                    <Image
                      src={course.imageSrc}
                      alt={course.title}
                      width={170}
                      height={130}
                      className="h-full w-full object-cover rounded-lg group:hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  <div className="mb-4 text-sm font-medium">{course.title}</div>

                  <div className="text-3xl font-bold ">{course.price}</div>
                  <p className="mt-4 text-sm">{course.description}</p>

                  <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm ">
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

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      className={
                        "rounded-xl px-4 py-3 text-sm font-semibold text-white transition bg-[#7E5CF3] hover:bg-[#6a4cd1]"
                      }
                    >
                      Choose plan
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveDemoUrl(course.demoVdo)}
                      className="rounded-xl border border-[#d7d2ff] px-4 py-3 text-sm font-semibold transition hover:border-[#7E5CF3]"
                    >
                      Watch demo
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {embedUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveDemoUrl(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-linear-to-br from-slate-950/95 via-slate-900 to-slate-900/95 p-6 shadow-[0_35px_120px_rgba(0,0,0,0.55)] text-white"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setActiveDemoUrl(null)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            >
              ✕
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-black">
              <iframe
                src={embedUrl}
                title="Course demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
