const Footer = () => {
    return (
      <div className="w-full bg-gray-200 border-t border-black flex items-center justify-between px-4 py-2 font-pixel text-sm">
        {/* Knapper */}
        <div className="flex items-center gap-2">
          <div className="bg-gray-300 px-3 py-1 border border-black shadow-[2px_2px_0px_#ffffff,-2px_-2px_0px_#808080] cursor-pointer">
            Om denne siden
          </div>
          <div className="flex gap-1">
            <div className="bg-gray-300 px-2 py-1 border border-black shadow-[2px_2px_0px_#ffffff,-2px_-2px_0px_#808080]">
              Kontakt
            </div>
          </div>
        </div>
  
        {/* Klokke */}
        <div className="text-black">
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    );
  };
  
  export default Footer;