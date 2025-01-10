"use client";
import React, { useState, useEffect } from "react";
import PhotoWindow from "@/components/PhotoWindow";
import Link from "next/link";

const ProjectGallery = () => {
  const projects = [
    { title: "Linselus", src: "/linselus.mp4", link: "https://linselus.vercel.app", type: "nettside", isVideo: true },
    { title: "Jasmines jul", src: "/jasminesjul.mp4", link: "https://jasminesjul.vercel.app", type: "nettside", isVideo: true },
    { title: "Cat Fight", src: "/catfight.mp4", link: "https://github.com/jasmineathea/INF112", type: "kildekode", isVideo: true },
    { title: "Move Green", src: "/movegreen.mp4", link: "https://forwardedu.org/green_digitalization_course/NHH/2024/group1/home", type: "nettside", isVideo: true },
    { title: "Tetris", src: "/tetris.mp4", link: "https://github.com/jasmineathea/INF101/tree/main/tetris", type: "kildekode", isVideo: true },
    { title: "Snake", src: "/snake.mp4", link: "https://github.com/jasmineathea/INF101/tree/main/snake", type: "kildekode", isVideo: true },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2); // Default er 2 for desktop

  useEffect(() => {
    // Oppdater antall elementer per side basert på skjermstørrelse
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 640 ? 1 : 2); // 1 for mobil (sm), 2 for større skjermer
    };

    handleResize(); // Kjør en gang ved første rendering
    window.addEventListener("resize", handleResize); // Lytt til vindusstørrelse

    return () => window.removeEventListener("resize", handleResize); // Fjern event-lytter
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalPages - 1));
  };

  const visibleProjects = projects.slice(
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

      {/* Prosjektrutenett */}
      <div
        className={`grid gap-4 justify-items-center ${
          itemsPerPage === 1 ? "grid-cols-1" : "grid-cols-2"
        }`}
      >
        {visibleProjects.map((project, idx) => (
          <PhotoWindow key={idx} title={project.title}>
            <div className="relative w-full max-w-[270px] h-[300px] sm:w-[270px] overflow-hidden border mb-3">
              {project.isVideo ? (
                <video
                  src={project.src}
                  className="object-cover w-full h-full"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={project.src}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              )}
          </div>
            {project.link && (
              <Link href={project.link} target="_blank">
                <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 text-sm font-pixel hover:bg-gray-300 active:shadow-inner">
                  {project.type === "kildekode" ? "til kildekode" : "til nettside"}
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
