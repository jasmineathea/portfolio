import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Window from "@/components/Window";
import ProjectGallery from "@/components/ProjectGallery";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Top Section */}
      <div className="bg-slate-700 w-full py-8 border-b border-black">
        <div className="flex flex-col items-center w-11/12 max-w-4xl mx-auto font-pixel text-center">
          {/* Tittel */}
          <h1 className="text-3xl font-bold text-white mb-4">Prosjekter</h1>

          {/* Beskrivelse */}
          <p className="text-gray-50 text-center mb-6">
            Her er en oversikt over tidligere (tekniske) prosjekter, både gjennom studiene og hobbyprosjekter :)
          </p>

          {/* Bilder */}
          <div className="w-full flex justify-center">
            <ProjectGallery />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex-grow flex flex-col items-center w-full bg-blue-200 py-8 pt-12 space-y-8">
        {/* Hobbyprosjekter */}
        <Window title="Hobbyprosjekter 🚀" className="w-[90%] lg:w-[75%]">
          <div className="text-black space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-base sm:text-lg font-pixel">Portfolio</h3>
                <span className="text-sm text-gray-700 font-pixel">2025</span>
              </div>
              <p className="text-sm text-gray-800">
                Nettsiden du befinner deg i akkurat nå ;)
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-base sm:text-lg font-pixel">Jasmines jul</h3>
                <span className="text-sm text-gray-700 font-pixel">Høst 2024</span>
              </div>
              <p className="text-sm text-gray-800">
                En nettside for julegaveønsker
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-1">
                <li>Next.js, TypeScript</li>
                <li>Sanity for å legge inn nye ønsker: bilde, link, info</li>
                <li>Vercel for distribusjon</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-base sm:text-lg font-pixel">Linselus</h3>
                <span className="text-sm text-gray-700 font-pixel">Vår 2024</span>
              </div>
              <p className="text-sm text-gray-800">
                Digitale fotoalbum. Mitt første hobbyprosjekt!
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-1">
                <li>Next.js, TypeScript</li>
                <li>Sanity for bildeopplasting</li>
                <li>Vercel for distribusjon</li>
              </ul>
            </div>
          </div>
        </Window>

        <Window title="Informatikk 🤓" className="w-[90%] lg:w-[75%]">
          <div className="text-black space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-base sm:text-lg font-pixel">Cat Fight</h3>
                <span className="text-sm text-gray-700 font-pixel">Vår 2023</span>
              </div>
              <p className="text-sm text-gray-800">
                INF112 innføring i systemutvikling
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-1">
                <li>Java, libGDX</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-base sm:text-lg font-pixel">Tetris, Snake</h3>
                <span className="text-sm text-gray-700 font-pixel">Vår 2022</span>
              </div>
              <p className="text-sm text-gray-800">
                INF101 objektorientert programmering
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-1">
                <li>Java</li>
              </ul>
            </div>
          </div>
        </Window>

        <Window title="NHH 👔" className="w-[90%] lg:w-[75%]">
          <div className="text-black space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-base sm:text-lg font-pixel">Karbonkalkulator</h3>
                <span className="text-sm text-gray-700 font-pixel">Vår 2024</span>
              </div>
              <p className="text-sm text-gray-800">
                FOR19: Green digitalization and App Development
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-1">
                <li>Python, flask, HTML, CSS, AWS, MySQL</li>
              </ul>
            </div>
          </div>
        </Window>

        {/* Tilbake-knapp */}
        <div className="mt-5 pb-5">
          <Link href="/">
            <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-4 py-2 font-pixel hover:bg-gray-300 active:shadow-inner">
              Tilbake
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
