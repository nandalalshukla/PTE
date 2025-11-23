import TiltedCard from "../components/ui/Body/Home/TiltedCard";
import tilt from "../public/tilt.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col md:flex-row mt-5">
        <div>
          <h1 className="text-6xl font-bold">
            Welcome to 👋
            <br />
            Pass The Excellence!
          </h1>
          <h2 className="text-2xl font-bold">
            Nepal&apos;s Leading Online German Language Institute
          </h2>
          <p>
            Join us and be the part of Nepal&apos;s largest and most vibrant
            German Language Learners Community. We provide the most interactive
            and engaging way to learn German online at a very affordable price.
          </p>
        </div>
        <div>
          <TiltedCard
            imageSrc="tilt.png"
            altText="Learn German with Nandalal"
            captionText="Our top results"
            containerHeight="550px"
            containerWidth="450px"
            imageHeight="450px"
            imageWidth="350px"
            rotateAmplitude={10}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text text-red-800">
                Our top results
              </p>
            }
          />
        </div>
      </div>
    </main>
  );
}
