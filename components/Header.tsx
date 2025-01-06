const Header = () => {
    return (
    //   <div className="w-full bg-blue-700 text-white text-sm flex items-center justify-between px-4 py-2 border-b border-black font-pixel">
    //     <span className="font-bold">@jasmineathea</span>
    //   </div>
        <div className="bg-blue-700 text-white font-bold font-pixel flex justify-between items-center px-4 py-2 border-b border-black">
        <span className="font-bold">@jasmineathea</span>
        <div className="flex gap-1 mr-1">
            <div className="bg-gray-200 w-5 h-5 border border-black shadow-[1px_1px_0px_#808080] flex items-center justify-center pointer-events-none">
            <span className="text-black">-</span>
            </div>
            <div className="bg-gray-200 w-5 h-5 border border-black shadow-[1px_1px_0px_#808080] flex items-center justify-center pointer-events-none">
            <span className="text-black">□</span>
            </div>
            <div className="bg-gray-200 w-5 h-5 border border-black shadow-[1px_1px_0px_#808080] flex items-center justify-center pointer-events-none">
            <span className="text-black">X</span>
            </div>
        </div>
        </div>
    );
  };
  
  export default Header;