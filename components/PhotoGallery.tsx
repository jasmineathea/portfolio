"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PhotoWindow from "@/components/PhotoWindow";

const PhotoGallery = () => {
  const images = [
    { title: "portrett.jpg", src: "/portrett.jpg" },
    { title: "bedkom.jpg", src: "/bedkom.jpg" },
    { title: "hovedstyret.jpg", src: "/hovedstyret.jpg" },
    { title: "nasa.jpg", src: "/nasa.jpg" },
    { title: "nhhi-cheer.jpg", src: "/cheer.jpg" },
    { title: "j&t.jpg", src: "/jt.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 640 ? 1 : 2);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="flex items-center justify-center w-full max-w-[700px] mx-auto">
      {/* Forrige-knapp */}
      <button
        onClick={handlePrev}
        className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] w-10 h-10 flex items-center justify-center text-lg font-pixel hover:bg-gray-300 active:shadow-inner disabled:opacity-50"
        disabled={currentIndex === 0}
      >
        ←
      </button>

      {/* Bilderutenett */}
      <div
        className={`grid gap-4 ${
          itemsPerPage === 1 ? "grid-cols-1" : "grid-cols-2"
        } justify-items-center mx-4`}
      >
        {visibleImages.map((image, idx) => (
          <PhotoWindow key={idx} title={image.title}>
            <div className="relative w-full max-w-[250px] h-[300px] overflow-hidden border">
              <Image
                src={image.src}
                alt={image.title}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                quality={80}
                priority={currentIndex === idx}
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
