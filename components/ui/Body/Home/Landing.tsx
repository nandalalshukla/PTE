import ContactNowButton from "@/components/ui/Body/Home/ContactNowButton";
import OurCoursesButton from "@/components/ui/Body/Home/OurCoursesButton";
import { IoCall } from "react-icons/io5";
import LandingVdo from "./LandingVdo";

function Landing() {
  return (
    <div className="relative w-full px-3 sm:px-4 md:px-6 mt-16 sm:mt-12 md:mt-10">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#5227FF]/10 blur-3xl animate-blob" />
        <div className="absolute top-1/2 -right-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-purple-400/10 blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-64 sm:w-72 h-64 sm:h-72 rounded-full bg-blue-400/10 blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Main container - stacks on mobile/tablet, side-by-side on xl+ */}
      <div className="mx-auto max-w-7xl flex flex-col xl:flex-row xl:items-center gap-6 md:gap-8 xl:gap-12">
        {/* LEFT TEXT SECTION */}
        <div className="w-full xl:w-1/2 text-center xl:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight animate__animated animate__fadeInDown group">
            <span className="inline-block p-2 mb-1">
              Welcome to{" "}
              <span className="inline-block origin-[75%_75%] hover:animate-wave animate-on-parent-hover">
                👋
              </span>
            </span>
            <br />
            <span className="inline-block w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-lg mx-auto xl:mx-0">
              <span className="block w-full bg-gradient-to-r from-[#5227FF] to-[#8A5CFF] text-white text-center rounded-lg px-3 py-2 whitespace-nowrap">
                Pass The Excellence!
              </span>
            </span>
          </h1>

          {/* SUB HEADING */}
          <h2 className="text-base sm:text-lg md:text-xl xl:text-2xl font-bold max-w-xl mx-auto xl:mx-0 animate__animated animate__fadeInDown mt-3 px-2">
            Nepal&apos;s Leading Online German Language Institute
          </h2>

          {/* DESCRIPTION */}
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto xl:mx-0 font-semibold animate__animated animate__fadeInDown mt-2 px-2">
            Join us and be the part of Nepal&apos;s most interactive, effective
            and affordable Online German Language Classes.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center xl:justify-start items-center mt-4 sm:mt-5 animate__animated animate__fadeInLeft">
            <ContactNowButton
              text="Contact Now"
              icon={<IoCall />}
              href="/contact"
            />
            <OurCoursesButton
              text="Our Courses"
              imgSrc="/a1.jpg"
              href="/course"
            />
          </div>
        </div>

        {/* RIGHT VIDEO SECTION */}
        <div className="w-full xl:w-1/2 flex justify-center xl:justify-end animate__animated animate__fadeInDown mt-4 xl:mt-0">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg xl:max-w-xl">
            <LandingVdo videoId="41n_ogE64Xs" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
