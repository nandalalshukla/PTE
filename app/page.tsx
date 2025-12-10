import PASSCard from "@/components/ui/Body/Home/Card";
import Landing from "@/components/ui/Body/Home/Landing";
import StatsSection from "@/components/ui/Body/Home/Stats";
import Community from "@/components/ui/Body/Home/Community";
import CourseCards from "@/components/ui/Body/Home/Courses";
import SwiperPass from "@/components/ui/Body/Home/swiper";
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
      </div>
    </main>
  );
}
