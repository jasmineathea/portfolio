"use client";
import React, { useState } from "react";
import PhotoWindow from "@/components/PhotoWindow";
import Image from "next/image";
import Link from "next/link";

const ProjectGallery = () => {
  const images = [
    { title: "linselus", src: "/linselus.png", link: "https://linselus.vercel.app", type: "nettside" },
    { title: "Jasmines jul", src: "/jul.png", link: "https://jasminesjul.vercel.app", type: "nettside" },
    { title: "Cat Fight", src: "/sc-fight.png", link: null, type: "kildekode" },
    { title: "Move Green", src: "/movegreen.png", link: "https://forwardedu.org/green_digitalization_course/NHH/2024/group1/home", type: "nettside" },
    { title: "Tetris", src: "/tetris.png", link: "https://github.com/jasmineathea/INF101/tree/main/tetris", type: "kildekode" },
    { title: "Snake", src: "/snake.png", link: "https://github.com/jasmineathea/INF101/tree/main/snake", type: "kildekode" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsPerPage = 2; // Antall bilder som vises samtidig
  const totalPages = Math.ceil(images.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalPages - 1));
  };

  const visibleImages = images.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div className="flex items-center gap-4">
      {/* Forrige-knapp */}
      <button
        onClick={handlePrev}
        className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] w-10 h-10 flex items-center justify-center text-lg font-pixel hover:bg-gray-300 active:shadow-inner disabled:opacity-50"
        disabled={currentIndex === 0}
      >
        ←
      </button>

      {/* Bilderutenett */}
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        {visibleImages.map((image, idx) => (
          <PhotoWindow key={idx} title={image.title}>
            <div className="relative w-[270px] h-[300px] overflow-hidden border mb-3">
              <Image
                src={image.src}
                alt={image.title}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                quality={80}
                priority={currentIndex === idx}
              />
            </div>
            {image.link && (
              <Link href={image.link} target="_blank">
                <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 text-sm font-pixel hover:bg-gray-300 active:shadow-inner">
                  {image.type === "kildekode" ? "til kildekode" : "til nettside"}
                </button>
              </Link>
            )}
          </PhotoWindow>
        ))}
      </div>

      {/* Neste-knapp */}
      <button
        onClick={handleNext}
        className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] w-10 h-10 flex items-center justify-center text-lg font-pixel hover:bg-gray-300 active:shadow-inner disabled:opacity-50"
        disabled={currentIndex === totalPages - 1}
      >
        →
      </button>
    </div>
  );
};

export default ProjectGallery;
