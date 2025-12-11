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
    <main className="flex w-full flex-col items-center px-4 md:px-24 py-6 md:py-24 ">
      <div className="w-full max-w-[1400px] ">
        {/* TOP SECTION */}
        <Landing />

        <CourseCards />
        <StatsSection />
        <Community />
        {/* PASS CARD SECTION */}
        <SwiperPass />
        <div className="mt-10">
          <h2 className="text-4xl font-bold text-center">Our Results Speak!</h2>
          <div className="width-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
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
          <h2 className="text-lg text-gray-600 text-center mt-3 p-2 ">+Many More</h2>
        </div>
      </div>
    </main>
  );
}
