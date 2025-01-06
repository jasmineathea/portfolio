import React from "react";

const PhotoWindow = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] w-full max-w-xs mb-4"
      style={{ minWidth: "250px", maxWidth: "320px" }} // Breddegrenser for PhotoWindow
    >
      {/* Vinduets header */}
      <div className="bg-blue-500 text-white font-bold font-pixel flex justify-between items-center h-8">
        <span className="ml-2">{title}</span>
        <div className="flex gap-1 mr-2">
          <div className="bg-gray-200 w-4 h-4 border border-black shadow-[1px_1px_0px_#808080] flex items-center justify-center pointer-events-none">
            <span className="text-black">-</span>
          </div>
          <div className="bg-gray-200 w-4 h-4 border border-black shadow-[1px_1px_0px_#808080] flex items-center justify-center pointer-events-none">
            <span className="text-black">□</span>
          </div>
          <div className="bg-gray-200 w-4 h-4 border border-black shadow-[1px_1px_0px_#808080] flex items-center justify-center pointer-events-none">
            <span className="text-black">X</span>
          </div>
        </div>
      </div>
      {/* Vinduets innhold */}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default PhotoWindow;