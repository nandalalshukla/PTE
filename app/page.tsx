import PASSCard from "@/components/ui/Body/Home/Card";
import TiltedCard from "../components/ui/Body/Home/TiltedCard";
import ContactNowButton from "@/components/ui/Body/Home/ContactNowButton";
import OurCoursesButton from "@/components/ui/Body/Home/OurCoursesButton";
// import SwiperPass from "@/components/ui/Body/Home/swiper";
// import CurvedLoop from "@/components/ui/Body/Home/CurvedLoop";
import "animate.css";

export default function Home() {
  return (
    <main className="flex w-full flex-col justify-between items-center md:p-24 border-2 border-amber-200">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mt-15 md:mt-6 px-4 w-full">
          {/* LEFT TEXT SECTION */}
          <div className="">
            {/* MAIN HEADING */}
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight tracking-tight group animate__animated animate__fadeInDown">
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
            <h2 className="text-lg md:text-2xl font-bold md:max-w-2xl animate__animated animate__fadeInDown">
              Nepal&apos;s Leading&nbsp;
              <span className="inline-block">
                Online German Language Institute
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className=" text-sm md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-semibold animate__animated animate__fadeInDown">
              Join us and be the part of Nepal&apos;s most interactive,
              effective and affordable Online German Language Classes.
            </p>
            <p className=" text-sm md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0 font-semibold animate__animated animate__fadeInDown">
              Join us and be the part of Nepal&apos;s most interactive,
              effective and affordable Online German Language Classes. Join us
              and be the part of Nepal&apos;s most interactive, effective and
              affordable
            </p>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center mt-4 px-8 animate__animated animate__fadeInLeft">
              <ContactNowButton />
              <OurCoursesButton />
            </div>
          </div>
          {/* RIGHT TILTED CARD SECTION */}
          <div className="flex justify-center items-center animate__animated animate__fadeInDown">
            <TiltedCard
              imageSrc="/tilt.png"
              altText="Learn German with Nandalal"
              captionText="⭐ Our Top Results"
              /* 🔥 Responsive container sizing */
              containerHeight="h-[420px] sm:h-[360px] md:h-[800px] lg:h-[520px]"
              containerWidth="w-[440px] sm:w-[340px] md:w-[800px] lg:w-[450px]"
              /* 🔥 Responsive image sizing */
              imageHeight="h-[400px] sm:h-[340px] md:h-[800px] lg:h-[500px]"
              imageWidth="w-[380px] sm:w-[320px] md:w-[800px] lg:w-[430px]"
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
        <PASSCard />
      </div>
      {/*         
        <CurvedLoop
          marqueeText="Teach & Learn ✦ Give & Get ✦"
          speed={3}
          curveAmount={300}

        /> */}
      {/* <div> <SwiperPass /> </div> */}
    </main>
  );
}
