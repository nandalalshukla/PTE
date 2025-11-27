"use client";

import { useState } from "react";

//german language courses level data
const CourseData = [
  {
    imageSrc: "/courses/a1-course.jpg",
    title: "A1 Blended Intensive Course",
    description:
      "Begin your German learning journey with our A1 Blended Intensive Course, designed for absolute beginners. This course combines online and in-person learning to provide a comprehensive introduction to the German language, covering basic vocabulary, grammar, and conversational skills.",
    COurseDuration: "4 weeks",
    ClassDuration: "1 hours/day, 6 days/week",
    price: "रु 4000",
    demoVdo: "https://youtu.be/l0JC0Agyh3c?si=zTU4tkHaMeKXcMRf",
  },
  {
    imageSrc: "/courses/a2-course.jpg",
    title: "A2 Blended Intensive Course",
    description:
      "Continue your German language journey with our A2 Blended Intensive Course, perfect for those who have completed the A1 level. This course focuses on expanding your vocabulary, improving grammar skills, and enhancing conversational abilities through a mix of online and in-person sessions.",
    COurseDuration: "4 weeks",
    ClassDuration: "2 hours/day, 6 days/week",
    price: "रु 6000",
    demoVdo: "https://youtu.be/Hf0O1mGKFZg?si=99MXWbLT1zrs_Lli",
  },
  {
    imageSrc: "/courses/b1-course.jpg",
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
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7e5cf3]">
              Courses & Pricing
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              Find the plan that fits your German journey
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {CourseData.map((course, idx) => {
              const isPopular = idx === 1;
              return (
                <article
                  key={course.title}
                  className={`relative flex h-full flex-col rounded-3xl border bg-white/90 p-6 shadow-[0_25px_80px_rgba(82,39,255,0.08)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(82,39,255,0.15)] ${
                    isPopular ? "border-[#7E5CF3]" : "border-[#E3E0FF]"
                  }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3 right-6 rounded-full border border-[#7E5CF3] bg-[#F4EEFF] px-3 py-1 text-xs font-semibold text-[#7E5CF3]">
                      Most Popular
                    </span>
                  )}

                  <div className="mb-4 text-sm font-medium text-[#7E5CF3]">
                    {course.title}
                  </div>

                  <div className="text-3xl font-bold text-gray-900">
                    {course.price}
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    {course.description}
                  </p>

                  <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm text-gray-700">
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
                      className={`rounded-xl px-4 py-3 text-sm font-semibold text-white transition ${
                        isPopular
                          ? "bg-[#7E5CF3] hover:bg-[#6a4cd1]"
                          : "bg-[#A7A1FF] hover:bg-[#9088f0]"
                      }`}
                    >
                      Choose plan
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveDemoUrl(course.demoVdo)}
                      className="rounded-xl border border-[#d7d2ff] px-4 py-3 text-sm font-semibold text-[#6146d8] transition hover:border-[#7E5CF3] hover:text-[#492ac3]"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-3xl rounded-3xl bg-white p-4 shadow-2xl">
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setActiveDemoUrl(null)}
              className="absolute right-4 top-4 rounded-full bg-black/5 p-2 text-gray-600 transition hover:bg-black/10"
            >
              ✕
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
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
