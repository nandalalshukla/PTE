import PASSCard from "@/components/ui/Body/Home/Card";
import TiltedCard from "../components/ui/Body/Home/TiltedCard";
import ContactNowButton from "@/components/ui/Body/Home/ContactNowButton";
import OurCoursesButton from "@/components/ui/Body/Home/OurCoursesButton";
import StatsSection from "@/components/ui/Body/Home/Stats";
import Community from "@/components/ui/Body/Home/Community";
import CourseCards from "@/components/ui/Body/Home/Courses";
import "animate.css";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center px-4 md:px-24 py-6 md:py-24 ">
      {/* FULL WIDTH WRAPPER */}
      <div className="w-full max-w-[1400px] ">
        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mt-15 lg:mt-10  w-full">
          {/* LEFT TEXT SECTION */}
          <div className="w-full md:w-1/2 text-center md:text-left px-2 md:px-0">
            {/* MAIN HEADING */}
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight animate__animated animate__fadeInDown group">
              <span className="inline-block p-2 mb-3">
                Welcome to{" "}
                <span className="inline-block origin-[75%_75%] hover:animate-wave animate-on-parent-hover">
                  👋
                </span>
              </span>
              <br />
              <span className="inline-block bg-gradient-to-r from-[#5227FF] to-[#8A5CFF] text-white px-4 py-2 rounded-md shadow-md">
                Pass The Excellence!
              </span>
            </h1>

            {/* SUB HEADING */}
            <h2 className="text-lg md:text-2xl font-bold md:max-w-2xl animate__animated animate__fadeInDown mt-3">
              Nepal&apos;s Leading Online German Language Institute
            </h2>

            {/* DESCRIPTION */}
            <p className="text-sm md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-semibold animate__animated animate__fadeInDown mt-3">
              Join us and be the part of Nepal&apos;s most interactive,
              effective and affordable Online German Language Classes.
            </p>

            <p className="text-sm md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-semibold animate__animated animate__fadeInDown mt-2">
              Join us and be the part of Nepal&apos;s most interactive,
              effective and affordable Online German Language Classes.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start items-center mt-6 animate__animated animate__fadeInLeft">
              <ContactNowButton />
              <OurCoursesButton />
            </div>
          </div>

          {/* RIGHT TILTED CARD SECTION */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end animate__animated animate__fadeInDown px-2 md:px-0">
            <TiltedCard
              imageSrc="/tilt.png"
              altText="Learn German with Nandalal"
              captionText="⭐ Our Top Results"
              containerHeight="h-[420px] sm:h-[360px] md:h-[430px] lg:h-[520px]"
              containerWidth="w-[440px] sm:w-[340px] md:w-[360px] lg:w-[450px]"
              imageHeight="h-[400px] sm:h-[340px] md:h-[410px] lg:h-[500px]"
              imageWidth="w-[380px] sm:w-[320px] md:w-[340px] lg:w-[430px]"
              rotateAmplitude={10}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="font-bold text-xs md:text-sm">
                  ⭐ Our top results
                </p>
              }
            />
          </div>
        </div>
   
          <CourseCards />

        {/* STATS SECTION */}
        <StatsSection />
        <Community />
        {/* PASS CARD SECTION */}
        <div className="mt-14">
          <PASSCard />
        </div>
      </div>
    </main>
  );
}
