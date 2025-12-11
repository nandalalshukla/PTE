import TiltedCard from "./TiltedCard";
import ContactNowButton from "@/components/ui/Body/Home/ContactNowButton";
import OurCoursesButton from "@/components/ui/Body/Home/OurCoursesButton";
import { IoCall } from "react-icons/io5";
import LandingVdo from "./LandingVdo";

function Landing() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mt-15 lg:mt-10  w-full">
      {/* LEFT TEXT SECTION */}
      <div className="w-full text-center md:text-left px-2 md:px-0">
        {/* MAIN HEADING */}
        <div className="flex flex-col lg:flex-row md:flex-row">
          <div className="md:basis[46%] lg:basis-[46%]">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight animate__animated animate__fadeInDown group">
              <span className="inline-block p-2 mb-1">
                Welcome to{" "}
                <span className="inline-block origin-[75%_75%] hover:animate-wave animate-on-parent-hover">
                  👋
                </span>
              </span>
              <br />
              <div className="w-full lg:w-[95%] md:w-[95%]">
                <span
                  className="block w-full bg-gradient-to-r from-[#5227FF] to-[#8A5CFF] text-white 
    text-center rounded-lg px-2 py-2"
                >
                  Pass The Excellence!
                </span>
              </div>
            </h1>
            {/* SUB HEADING */}
            <h2 className="text-lg md:text-2xl font-bold md:max-w-2xl animate__animated animate__fadeInDown mt-3 p-2">
              Nepal&apos;s Leading Online German Language Institute
            </h2>
            {/* DESCRIPTION */}
            <p className="text-sm md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-semibold animate__animated animate__fadeInDown  p-2">
              Join us and be the part of Nepal&apos;s most interactive,
              effective and affordable Online German Language Classes.
            </p>
            <div className="flex flex-col lg:flex-row md:flex-row gap-4 justify-center md:justify-start items-center mt-4 animate__animated animate__fadeInLeft">
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

          <div className="w-full  flex justify-center md:justify-end lg:justify-end animate__animated animate__fadeInDown md:basis-[54%] lg:basis-[54%] mt-4">
            <LandingVdo videoId="41n_ogE64Xs" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
