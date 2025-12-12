import PASSCard from "@/components/ui/Body/Home/Card";
import Landing from "@/components/ui/Body/Home/Landing";
import StatsSection from "@/components/ui/Body/Home/Stats";
import Community from "@/components/ui/Body/Home/Community";
import CourseCards from "@/components/ui/Body/Home/Courses";
import SwiperPass from "@/components/ui/Body/Home/swiper";
import ResultCard from "@/components/ui/Body/Home/ResultCard";
import "animate.css";

export default function Home() {
  return (
    <main className="relative flex w-full flex-col items-center px-3 sm:px-4 md:px-8 lg:px-16 xl:px-24 py-6 md:py-12 lg:py-16 xl:py-24 bg-gradient-to-b from-white via-[#faf9ff] to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="w-full max-w-[1400px] ">
        {/* TOP SECTION */}
        <Landing />

        <CourseCards />
        <StatsSection />
        <Community />
        {/* PASS CARD SECTION */}
        <SwiperPass />
        <div className="relative mt-10 py-10 overflow-hidden">
          {/* Background for results section */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-gradient-to-r from-[#5227FF]/5 via-purple-400/5 to-[#5227FF]/5 blur-3xl rounded-full" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Our Results Speak!
          </h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10 place-items-center">
            <ResultCard
              imageSrc="/narayan.png"
              altText="Top score screenshot"
              captionText="Our recent results"
              displayOverlayContent
              overlayContent={<span>⭐ B1 Passed</span>}
            />
            <ResultCard
              imageSrc="/nirajan.png"
              altText="Top score screenshot"
              captionText="Our recent results"
              displayOverlayContent
              overlayContent={<span>⭐ B2 Passed</span>}
            />
            <ResultCard
              imageSrc="/prakash.png"
              altText="Top score screenshot"
              captionText="Our recent results"
              displayOverlayContent
              overlayContent={<span>⭐ B1 Passed</span>}
            />
          </div>
          <h2 className="text-lg text-gray-600 text-center mt-3 p-2 ">
            +Many More
          </h2>
        </div>
      </div>
    </main>
  );
}
