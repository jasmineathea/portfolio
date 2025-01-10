"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import Window from "@/components/Window";
import Link from "next/link";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true); // Vis vinduer automatisk etter en gitt periode
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearchClick = () => {
    setShowContent(true); // Vis vinduer når brukeren klikker på søkeknappen
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/field.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-grow flex flex-col items-center justify-start w-full px-4">
        <SearchBar onSearch={handleSearchClick} />

        {/* Seksjoner */}
        {showContent && (
          <div className="w-full max-w-4xl flex flex-col items-center px-4">
            <p className="text-gray-50 font-pixel font-bold text-sm text-center italic mb-4 sm:mb-8">
              Viser resultater for &quot;Jasmine Athea Næss&quot;:
            </p>

            {/* Vinduer */}
            <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
              <Window title="Prosjekter 🧠">
                <p className="text-black mb-2">
                  Utforsk mine tidligere kodeprosjekter.
                </p>
                <Link href="/projects">
                  <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                    Se mer
                  </button>
                </Link>
              </Window>

              <Window title="Om meg 👩🏻‍💻">
                <p className="text-black mb-2">
                  Bli bedre kjent med meg; studier, jobb, verv og fritid :)
                </p>
                <Link href="/about">
                  <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                    Se mer
                  </button>
                </Link>
              </Window>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
