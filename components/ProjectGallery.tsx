"use client";
import React, { useState } from "react";
import PhotoWindow from "@/components/PhotoWindow";
import Link from "next/link";

const ProjectGallery = () => {
  const images = [
    { title: "linselus", src: "/path-to-image1.jpg", link: "https://linselus.vercel.app", type: "nettside" },
    { title: "Jasmines jul", src: "/path-to-image2.jpg", link: "https://jasminesjul.vercel.app", type: "nettside" },
    { title: "Cat Fight", src: "/path-to-image4.jpg", link: null, type: "kildekode" },
    { title: "Move Green", src: "/path-to-image5.jpg", link: "https://forwardedu.org/green_digitalization_course/NHH/2024/group1/home", type: "nettside" },
    { title: "Tetris", src: "/path-to-image3.jpg", link: "https://github.com/jasmineathea/INF101/tree/main/tetris", type: "kildekode" },
    { title: "Snake", src: "/path-to-image3.jpg", link: "https://github.com/jasmineathea/INF101/tree/main/snake", type: "kildekode" },
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
            <img
              src={image.src}
              alt={image.title}
              className="object-cover w-full h-full"
            />
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