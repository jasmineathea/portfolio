"use client";
import { Typewriter } from "react-simple-typewriter";
interface SearchBarProps {
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="flex flex-col items-center mt-10 sm:mt-16">
      {/* Søkebar */}
      <div className="bg-blue-800 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] flex items-stretch py-1 px-2 h-12 w-[290px] sm:w-[350px] md:w-[420px] mb-4">
        <div className="bg-gray-100 text-lg md:text-2xl px-2 text-black focus:outline-none cursor-default flex items-center w-full h-full font-pixel">
          <Typewriter
            words={["Jasmine Athea Næss"]}
            loop={1}
            typeSpeed={150}
            cursor
            cursorStyle="_"
          />
        </div>
        <button
          className="bg-gray-200 border border-gray-400 flex items-center justify-center w-12 ml-2 h-full hover:bg-gray-300 active:shadow-inner active:border-gray-600"
          onClick={onSearch}
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
    </div>
  );
};

export default SearchBar;
