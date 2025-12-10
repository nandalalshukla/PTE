import TiltedCard from "./TiltedCard";
import ContactNowButton from "@/components/ui/Body/Home/ContactNowButton";
import OurCoursesButton from "@/components/ui/Body/Home/OurCoursesButton";
import { IoCall } from "react-icons/io5";

function Landing() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mt-15 lg:mt-10  w-full">
      {/* LEFT TEXT SECTION */}
      <div className="w-full md:w-1/2 text-center md:text-left px-2 md:px-0">
        {/* MAIN HEADING */}
        <div>
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
            Join us and be the part of Nepal&apos;s most interactive, effective
            and affordable Online German Language Classes.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start items-center mt-6 animate__animated animate__fadeInLeft">
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

      {/* RIGHT TILTED CARD SECTION */}
      <div className="w-full mt-8 md:w-1/2 flex justify-center md:justify-end animate__animated animate__fadeInDown">
        <div
          className="
    relative 
    w-full
    max-w-lg
    md:max-w-xl
    lg:max-w-2xl
    xl:max-w-3xl
    aspect-video 
    rounded-xl 
    overflow-hidden 
    shadow-lg"
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/41n_ogE64Xs"
            title="YouTube video player"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
