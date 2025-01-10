"use client";
import React, { useState } from "react";
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

  const itemsPerPage = 2; // Antall prosjekter som vises samtidig
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
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        {visibleProjects.map((project, idx) => (
          <PhotoWindow key={idx} title={project.title}>
            <div className="relative w-[270px] h-[300px] overflow-hidden border mb-3">
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