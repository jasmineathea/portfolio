"use client";
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Window from "@/components/Window";

const SearchBar = () => {
  const [showContent, setShowContent] = useState(false);

  const handleSearchClick = () => {
    setShowContent(true);
  };

  return (
    <div className="flex flex-col items-center mt-20">
      {/* Søkebar */}
      <div
        className="bg-blue-800 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] flex items-stretch py-1 px-2 h-12 mb-6"
      >
        <div
          className="bg-gray-100 text-lg md:text-2xl px-2 text-black focus:outline-none cursor-default flex items-center w-full h-full font-pixel"
          style={{ width: "calc(1ch * 23)" }}
        >
          <Typewriter
            words={["Jasmine Athea Næss"]}
            loop={1}
            typeSpeed={150}
            deleteSpeed={50}
            cursor
            cursorStyle="_"
          />
        </div>

        <button
          className="bg-gray-200 border border-gray-400 flex items-center justify-center w-12 ml-2 h-full hover:bg-gray-300 active:shadow-inner active:border-gray-600"
          onClick={handleSearchClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.35-6.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
            />
          </svg>
        </button>
      </div>

      {/* Seksjoner */}
      {showContent && (
        <div className="w-full max-w-4xl flex flex-col items-center">
          <p className="text-gray-50 font-pixel font-bold text-sm text-center mb-6">
            Viser resultater for &quot;Jasmine Athea Næss&quot;:
          </p>

          {/* Ekstra mellomrom */}
          <div className="mb-8"></div>

          {/* Vinduer */}
          <Window title="Prosjekter 🧠">
            <p className="text-black mb-2">Utforsk mine tidligere kodeprosjekter.</p>
            <Link href="/projects">
              <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                Se mer
              </button>
            </Link>
          </Window>

          <Window title="Om meg 👩🏻‍💻">
            <p className="text-black mb-2">Bli bedre kjent med meg; studier, jobb, verv og fritid:)</p>
            <Link href="/about">
              <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                Se mer
              </button>
            </Link>
          </Window>
        </div>
      )}
    </div>
  );
};

export default SearchBar;