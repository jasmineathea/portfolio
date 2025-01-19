import Header from "@/components/Header";
import Window from "@/components/Window";
import Link from "next/link";
{/* import PhotoGallery from "@/components/PhotoGallery"; */}
import Footer from "@/components/Footer";

export default function Bedriftstur() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      {/* Header */}
      <Header />

        {/* Breadcrumbs */}
        <div className="w-full px-4 py-2 text-sm font-bold font-pixel text-blue-500 bg-slate-700">
        <div className="flex gap-1 px-1 py-1">
          <Link href="/" className="rounded-sm hover:underline hover:text-blue-200">
            desktop
          </Link>
          <span className="mx-1">/</span>
          <Link href="/about" className="rounded-sm hover:underline hover:text-blue-200">
            about
          </Link>
          <span className="mx-1">/</span>
          <p className="text-blue-200">
            bedriftstur
          </p>
        </div>
      </div>

      {/* Top Section */}
      <div className="bg-slate-700 w-full py-2 pb-8 border-b border-black">
        <div className="flex flex-col items-center w-11/12 max-w-4xl mx-auto font-pixel text-center">
          {/* Navn */}
          <h1 className="text-3xl font-bold text-white mb-4">Bedriftsturen 2023</h1>

          {/* Beskrivelse */}
          <p className="mb-4 text-gray-50">
            Oppdateres!
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex-grow flex flex-col items-center w-full bg-indigo-300 py-8 pt-12">
        <Window title="På programmet 👔" className="w-[90%] lg:w-[75%]">
          <div className="text-black space-y-4">
            <div>
              <div>
                <h3 className="font-bold text-lg font-pixel">Dag 1:</h3>
              </div>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
                <li>oppdateres fortløpende!!</li>
              </ul>
            </div>

            <div>
              <div>
                <h3 className="font-bold text-lg font-pixel">Dag 2:</h3>
              </div>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
                <li>bla bla bla</li>
                <li>bla bla</li>
              </ul>
            </div>

            <div>
              <div>
                <h3 className="font-bold text-lg font-pixel">Dag 3:</h3>
              </div>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
                <li>bla bla bla</li>
                <li>bla bla</li>
              </ul>
            </div>

          </div>
        </Window>

        {/* Tilbake-knapp */}
        <div className="flex gap-3 mt-5 pb-5">
          <Link href="/about">
            <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-4 py-2 font-pixel hover:bg-gray-300 active:shadow-inner">
              Tilbake
            </button>
          </Link>
          <Link href="/">
            <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-4 py-2 font-pixel hover:bg-gray-300 active:shadow-inner">
              Hjem
            </button>
          </Link>
        </div>
      </div>
    
    {/* Footer */}
    <Footer />
    </div>
  );
}
