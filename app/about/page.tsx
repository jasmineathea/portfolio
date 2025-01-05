import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Window from "@/components/Window";
import Link from "next/link";
import PhotoGallery from "@/components/PhotoGallery";

export default function About() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Top Section */}
      <div className="bg-slate-700 w-full py-8 border-b border-black">
        <div className="flex flex-col items-center w-11/12 max-w-4xl mx-auto font-pixel text-center">
          {/* Navn */}
          <h1 className="text-3xl font-bold text-white mb-4">Jasmine Athea Næss</h1>

          {/* Bilde og sosiale medier */}
          <div className="flex flex-col items-center gap-4">
            <PhotoGallery />

            {/* Sosiale medier */}
            <div className="flex gap-3">
              <Link href="https://github.com/jasmineathea" target="_blank">
                <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                  GitHub
                </button>
              </Link>
              <Link href="https://linkedin.com/in/jasmineathea" target="_blank">
                <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                  LinkedIn
                </button>
              </Link>
              <Link href="https://instagram.com/jasmineathea" target="_blank">
                <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                  Instagram
                </button>
              </Link>
            </div>
          </div>

          {/* Beskrivelse */}
          <p className="mt-6 text-gray-50">
            Live | Laugh | Love | Likestilling i teknologibransjen
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex-grow flex flex-col items-center w-full bg-blue-200 py-8 pt-12">
        {/* Utdanning */}
        <Window title="Utdanning 📚">
          <div className="text-black space-y-4">
            {/* Bachelor i Informatikk */}
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg font-pixel">Norges Handelshøyskole</h3>
                <span className="text-sm text-gray-700 font-pixel">2023-2026</span>
              </div>
              <p className="text-sm text-gray-800">
                Bachelor i økonomi og administrasjon
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg font-pixel">Universitetet i Bergen</h3>
                <span className="text-sm text-gray-700 font-pixel">2021-2024</span>
              </div>
              <p className="text-sm text-gray-800">
                Bachelor i informatikk: datateknologi
              </p>
            </div>

            {/* Videregående */}
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg font-pixel">Jessheim Videregående Skole</h3>
                <span className="text-sm text-gray-700 font-pixel">2016-2019</span>
              </div>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
                <li>Studiespesialisering og oppnådd generell studiekompetanse</li>
                <li>Fordypning i språk, samfunnsfag og økonomi</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg font-pixel">Tahoma Senior High School</h3>
                <span className="text-sm text-gray-700 font-pixel">2017-2018</span>
              </div>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
                <li>Utvekslingsår på videregående skole i Maple Valley, Washington, USA</li>
              </ul>
            </div>

          </div>
        </Window>

        <Window title="Jobberfaring 💼">
          <div className="text-black space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg font-pixel">Boots Apotek</h3>
                <span className="text-sm text-gray-700 font-pixel">2014 - Nå</span>
              </div>
              <p className="text-sm text-gray-800">
                Apotektekniker (tilkallingsvikar): Kundeservice, grunnleggende kunnskap om legemidler.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg font-pixel">Pon Power Norge AS</h3>
                <span className="text-sm text-gray-700 font-pixel">Juni - August (2020-2023)</span>
              </div>
              <p className="text-sm text-gray-800">
                Lageransatt (sommervikar): Booking og logistikk, kommunikasjon med selgere og transportører.
              </p>
            </div>

            <div className="flex gap-3">
            <Link href="https://www.uib.no/nt/142180/mentorordningen-ved-fakultet-naturvitenskap-og-teknologi#:~:text=Hva%20er%20mentorordningen%20ved%20NT,ledet%20av%201%2D2%20mentorer" target="_blank">
              <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                Mentorordningen v/UiB
              </button>
            </Link>
            </div>
          </div>
        </Window>

        <Window title="Verv og frivillig arbeid 🤝">
          <div className="text-black space-y-4">
            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg font-pixel">Jenter og Teknologi</h3>
                <span className="text-sm text-gray-700 font-pixel">2023</span>
              </div>
              <p className="text-sm text-gray-800">
                Rollemodell og foredragsholder: Promotering av kvinner i teknologi, vant tur til NASA for engasjement.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg font-pixel">NHHI Cheer</h3>
                <span className="text-sm text-gray-700 font-pixel">2024</span>
              </div>
              <p className="text-sm text-gray-800">
                Informasjonsansvarlig og styremedlem: Rekruttering og sosiale medier.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg font-pixel">echo Bedriftskomitéen, UiB</h3>
                <span className="text-sm text-gray-700 font-pixel">2021 - 2024</span>
              </div>
              <p className="text-sm text-gray-800">
                Leder og styremedlem: Kontakt med næringslivet og organisering av bedriftsarrangementer.
              </p>
            </div>

            <div className="flex gap-3">
              <Link href="https://echo.uib.no" target="_blank">
                <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                  echo
                </button>
              </Link>
              <Link href="https://jenterogteknologi.com" target="_blank">
                <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                  Jenter og Teknologi
                </button>
              </Link>
              <Link href="" target="_blank">
                <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                  om NASA-turen
                </button>
              </Link>
            </div>

          </div>
        </Window>

        <Window title="Teknisk kompetanse 💻">
          <div className="text-black space-y-4">
            <ul className="list-disc pl-6 text-gray-800">
              <li><strong>Programmeringsspråk:</strong> Python og Java (objektorientert programmering), Haskell (funksjonell programmering), SQL, HTML, CSS, TypeScript</li>
              <li><strong>Operativsystemer:</strong> MacOS, Linux</li>
              <li><strong>Verktøy:</strong> Git, VirtualBox, Microsoft Office (inkludert Excel, PowerPivot, PowerBI, Power Apps)</li>
            </ul>
          </div>
        </Window>

        <Window title="Hobbyer og interesser 🎨">
          <div className="text-black space-y-4">
            <ul className="list-disc pl-6 text-gray-800">
              <li>Lesing og kreativ skriving</li>
              <li>Friluftsliv: fjellturer og løping</li>
              <li>Sying, hekling og fotografering</li>
              <li>Reising og oppdagelse av nye kulturer</li>
            </ul>
          </div>
        </Window>

        <Window title="Språk 💬">
          <ul className="list-disc pl-6 text-black">
            <li>Norsk 🇳🇴 morsmål</li>
            <li>Engelsk 🇺🇸 flytende skriftlig og muntlig</li>
            <li>Fransk 🇫🇷 grunnleggende skriftlig og muntlig</li>
          </ul>
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