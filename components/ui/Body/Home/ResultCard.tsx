"use client";

interface ResultCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  altText?: string;
  captionText?: string;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}

export default function ResultCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  showTooltip = false,
  overlayContent = null,
  displayOverlayContent = false,
}: ResultCardProps) {
  return (
    <figure className="relative flex flex-col items-center justify-center w-full max-w-[320px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[340px] xl:max-w-[360px]">
      <div className="relative w-full aspect-[4/5] bg-[linear-gradient(135deg,#e5d4ff,#c8a6ff,#9f7bff,#7fa5ff)] dark:bg-[linear-gradient(135deg,#2a2256,#3F3E81,#635F9C)] border-[2px] p-3 sm:p-4 rounded-2xl shadow-lg drop-shadow-2xl transition-transform duration-600 hover:scale-103 ease-in-out">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover rounded-xl"
        />

        {displayOverlayContent && overlayContent && (
          <div className="absolute text-white top-1 left-1 p-1 border-3 border-gray-600 rounded-[8px] bg-gradient-to-r from-[#5227FF] to-[#7440f8] shadow-[0_8px_32px_rgba(118,70,255,0.55)] dark:border-[#635F9C] z-[2]">
            {overlayContent}
          </div>
        )}
      </div>

      {showTooltip && captionText && (
        <figcaption className="mt-2 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] shadow-sm">
          {captionText}
        </figcaption>
      )}
    </figure>
  );
}
