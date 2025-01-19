"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";

const Footer: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [isStartMenuOpen, setIsStartMenuOpen] = useState<boolean>(false);
  const startMenuRef = useRef<HTMLDivElement>(null);
  const startButtonRef = useRef<HTMLDivElement>(null);

  // Oppdater klokkeslettet hvert minutt
  useEffect(() => {
    const updateClock = () => {
      setTime(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };

    updateClock();
    const intervalId = setInterval(updateClock, 60000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target as Node) &&
        startButtonRef.current &&
        !startButtonRef.current.contains(event.target as Node)
      ) {
        setIsStartMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleStartMenu = () => {
    setIsStartMenuOpen((prev) => !prev);
  };

  const pathname = usePathname(); // Henter nåværende path
  const isHomePage = pathname === "/"; // Sjekker om vi er på forsiden

  return (
    <div className="w-full bg-gray-200 border-black border-t flex items-center justify-between px-4 py-2 font-pixel text-sm relative">
      {/* Start-knapp + ikoner */}
      <div className="flex items-center gap-2">
      {isHomePage && (
        <div
          ref={startButtonRef}
          className={`bg-gray-300 px-3 py-1 border border-black shadow-[2px_2px_0px_#ffffff,-2px_-2px_0px_#808080] cursor-pointer relative
            ${isStartMenuOpen ? "shadow-[inset_2px_2px_0px_#808080,inset_-2px_-2px_0px_#ffffff]" : ""}`}
          onClick={toggleStartMenu}
        >
          Start
        </div>
        )}
      </div>

      {/* Start-meny */}
      {isStartMenuOpen && (
        <div
          ref={startMenuRef}
          className="absolute bottom-full left-0 w-48 bg-gray-200 border border-black "
        >
          <ul className="flex flex-col">
            <li className="px-4 py-2 border-b border-gray-400 hover:bg-blue-700 hover:text-white cursor-pointer">
              <Link href="/info" className="block w-full h-full">
                ℹ️ Om denne siden
              </Link>
            </li>
            <li className="px-4 py-2 border-b border-gray-400 hover:bg-blue-700 hover:text-white cursor-pointer">
              <Link href="/contact" className="block w-full h-full">
                ☎️ Kontakt
              </Link>
            </li>
            <li className="px-4 py-2 border-b border-gray-400 hover:bg-blue-700 hover:text-white cursor-pointer">
              <Link href="/settings" className="block w-full h-full">
                ⚙️ Innstillinger
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Klokke */}
      <div className="text-black px-3 py-1 border border-black bg-gray-300 shadow-[inset_2px_2px_0px_#808080,inset_-2px_-2px_0px_#ffffff] pointer-events-none">
        <div className="flex items-center gap-2">
          <span>🛜</span>
          <span>🔕</span>
          {time}
        </div>
      </div>
    </div>
  );
};

export default Footer;
