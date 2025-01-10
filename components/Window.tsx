import React from "react";

const Window = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string; // Legg til støtte for valgfri className-prop
}) => {
  return (
    <div
      className={`bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] w-full max-w-4xl mb-4 ${className ?? ""}`} // Legger til className
      style={{ minWidth: "320px", maxWidth: "640px" }} // Definer breddegrenser
    >
      {/* Vinduets header */}
      <div className="bg-blue-800 text-white font-bold font-pixel flex justify-between items-center h-8">
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

export default Window;
