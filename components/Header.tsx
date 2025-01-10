"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    // ha kontroll på nåværende path
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    
    return (
        <div className="bg-blue-700 text-white font-bold font-pixel flex justify-between items-center px-4 py-2 border-b border-black">
        
        {isHomePage ? ( // navn i header skal navigere tilbake til hovedsiden *kun* om man ikke allerede er der:)
            <span className="font-bold">@jasmineathea</span>
        ) : (
            <Link href="/">
            <span className="font-bold hover:underline cursor-pointer">@jasmineathea</span>
            </Link>
        )}

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
  