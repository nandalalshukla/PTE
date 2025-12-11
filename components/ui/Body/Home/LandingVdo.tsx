"use client";

import { useState } from "react";
import { FaPlay } from "react-icons/fa6";

interface Props {
  videoId: string;
}

export default function LandingVdo({ videoId }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-md lg:rounded-xl group p-2 bg-gray-500">
      {/* Thumbnail Layer */}
      {!isPlaying && (
        <button
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/50"
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            className="w-full h-full object-cover"
            alt="Video thumbnail"
          />

          {/* Custom Play Button */}
          <div className="absolute flex items-center justify-center w-12 h-12 bg-gray-400 rounded-full backdrop-blur-md shadow-xl">
            <FaPlay />
          </div>
        </button>
      )}

      {/* Actual Video Iframe (no overlays) */}
      {isPlaying && (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
