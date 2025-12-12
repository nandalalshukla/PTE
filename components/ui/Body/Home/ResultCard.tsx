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
      <div className="relative w-full aspect-[4/5] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-3 sm:p-4 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ease-in-out group">
        <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {displayOverlayContent && overlayContent && (
          <div className="absolute text-white top-0 left-0 p-2 rounded-xl bg-[#5227FF] shadow-lg z-[2]">
            {overlayContent}
          </div>
        )}
      </div>

      {showTooltip && captionText && (
        <figcaption className="mt-4 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-xs font-medium text-gray-800 dark:text-gray-200 shadow-lg">
          {captionText}
        </figcaption>
      )}
    </figure>
  );
}
