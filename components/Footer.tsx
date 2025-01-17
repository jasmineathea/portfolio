"use client";

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

    updateClock(); // Initial call
    const intervalId = setInterval(updateClock, 60000); // Update every minute
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(event.target as Node) &&
        startButtonRef.current &&
        !startButtonRef.current.contains(event.target as Node) // Ignorer Start-knappen
      ) {
        setIsStartMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle funksjon for Start-knappen
  const toggleStartMenu = () => {
    setIsStartMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full bg-gray-200 border-t border-black flex items-center justify-between px-4 py-2 font-pixel text-sm relative">
      {/* Start-knapp + ikoner */}
      <div className="flex items-center gap-2">
        {/* Start-knappen */}
        <div
          ref={startButtonRef}
          className={`bg-gray-300 px-3 py-1 border border-black shadow-[2px_2px_0px_#ffffff,-2px_-2px_0px_#808080] cursor-pointer relative
            ${isStartMenuOpen ? "shadow-[inset_2px_2px_0px_#808080,inset_-2px_-2px_0px_#ffffff]" : ""}`}
          onClick={toggleStartMenu}
        >
          Start
        </div>

        {/* Ikoner for det visuelle */}
        <div className="flex items-center gap-2">
          <span>📁</span>
          <span>🔇</span>
          <span>🗑️</span>
        </div>
      </div>

      {/* Start-meny */}
      {isStartMenuOpen && (
        <div
          ref={startMenuRef}
          className="absolute bottom-full left-0 w-48 bg-gray-200 border border-black "
        >
          <ul className="flex flex-col">
            <li className="px-4 py-2 border-b border-gray-400 hover:bg-blue-700 hover:text-white cursor-pointer">
              ℹ️ Om denne siden
            </li>
            <li className="px-4 py-2 border-b border-gray-400 hover:bg-blue-700 hover:text-white cursor-pointer">
              ☎️ Kontakt
            </li>
            <li className="px-4 py-2 border-b border-gray-400 hover:bg-blue-700 hover:text-white cursor-pointer">
              ⚙️ Innstillinger
            </li>
          </ul>
        </div>
      )}

      {/* Klokke */}
      <div className="text-black">{time}</div>
    </div>
  );
};

export default Footer;
