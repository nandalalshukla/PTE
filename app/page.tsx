"use client";

import TiltedCard from "../components/ui/Body/Home/TiltedCard";
import ContactNowButton from "@/components/ui/Body/Home/ContactNowButton";
import OurCoursesButton from "@/components/ui/Body/Home/OurCoursesButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-15 md:mt-6 px-4">
        {/* LEFT TEXT SECTION */}
        <div className="text-center md:text-left space-y-6">
          {/* MAIN HEADING */}
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight group">
            <span className="inline-block p-2 mb-3">
              Welcome to
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
          <h2 className="text-lg md:text-2xl font-bold md:max-w-2xl">
            Nepal&apos;s Leading&nbsp;
            <span className="inline-block">
              Online German Language Institute
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className=" text-sm md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-semibold">
            Join us and be the part of Nepal&apos;s most interactive, effective
            and affordable Online German Language Classes.
          </p>
          <p className=" text-sm md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-semibold">
            Join us and be the part of Nepal&apos;s most interactive, effective
            and affordable Online German Language Classes. Join us and be the
            part of Nepal&apos;s most interactive, effective and affordable
           
          </p>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center mt-4 px-8">
            <ContactNowButton />
            <OurCoursesButton />
          </div>
        </div>
        {/* RIGHT TILTED CARD SECTION */}
        <div className="flex justify-center items-center">
          <TiltedCard
            imageSrc="/tilt.png"
            altText="Learn German with Nandalal"
            captionText="⭐ Our Top Results"
            /* 🔥 Responsive container sizing */
            containerHeight="h-[480px] sm:h-[360px] md:h-[800px] lg:h-[570px]"
            containerWidth="w-[400px] sm:w-[340px] md:w-[800px] lg:w-[500px]"
            /* 🔥 Responsive image sizing */
            imageHeight="h-[460px] sm:h-[340px] md:h-[800px] lg:h-[550px]"
            imageWidth="w-[380px] sm:w-[320px] md:w-[800px] lg:w-[470px]"
            rotateAmplitude={10}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="font-bold text-xs md:text-sm">⭐ Our top results</p>
            }
          />
        </div>
      </div>
    </main>
  );
}
