"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

// Swiper styles (must be imported for slider to work correctly)
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

const testimonials = [
  {
    name: "Maya Ojha",
    text: "Awanish provided me guidance with some stuff I had with my insurance. With his assistance and my professor's help, I got through it. I am really glad that it worked out.",
  },
  {
    name: "Jenisha",
    text: "He was very helpful during the process of application. He guided me and cleared any doubts that arose during the process. I am very thankful to him.",
  },
  {
    name: "Yosha",
    text: "I wanted to take a moment to thank the German team for their invaluable support and quick responses.",
  },
  {
    name: "Anar Thakur",
    text: "Helped throughout my process. I got quick replies whenever I had a query. Very supportive and reliable guidance.",
  },
];

export default function SwiperPass() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-10 text-center text-4xl font-bold text-slate-900">
          Success Stories
        </h2>

        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          className="!overflow-hidden"
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000, // auto-slide every 2s
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          grabCursor={true}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="flex h-full flex-col items-center rounded-3xl border border-slate-100 bg-white px-8 py-10 text-center shadow-md">
                {/* Avatar circle */}
                <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-slate-100">
                  <div className="h-16 w-16 rounded-full bg-slate-300" />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
