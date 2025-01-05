"use client";
import React, { useState } from "react";
import PhotoWindow from "@/components/PhotoWindow";

const PhotoGallery = () => {
  const images = [
    { title: "portrett.jpg", src: "portrett.jpg" },
    { title: "bedkom.jpg", src: "bedkom.jpg" },
    { title: "hovedstyret.jpg", src: "hovedstyret.jpg" },
    { title: "nasa.jpg", src: "nasa.jpg" },
    { title: "nhhi-cheer.jpg", src: "cheer.jpg" },
    { title: "j&t.jpg", src: "jt.jpg" },
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
            <div className="w-[270px] h-[300px]">
              <img
                src={image.src}
                alt={image.title}
                className="object-cover w-full h-full border"
              />
            </div>
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

export default PhotoGallery;