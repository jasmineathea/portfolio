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
            24 år gammel fra Jessheim. Teknologi- og økonomistudent i Bergen. Engasjert i studentmiljøet, likestilling i tech-bransjen, undervisning og læring 👩🏻‍💻
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
                <span className="text-sm text-gray-700 font-pixel">August 2014 -</span>
              </div>
              <p className="text-sm text-gray-800">
                Apotektekniker (tilkallingsvikar)
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
                <li>Arbeidsoppgaver innen kundeservice, samt rengjøring av lokalet</li>
                <li>Grunnleggende kunnskap om diverse legemidler; bruk og risiko</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg font-pixel">Universitetet i Bergen</h3>
                <span className="text-sm text-gray-700 font-pixel">August – desember 2024, 2023, 2022</span>
              </div>
              <p className="text-sm text-gray-800">
                Vitenskapelig assistent INF140: Introduksjon til datasikkerhet
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
                <li>Avholde gruppetimer i to timer per uke, veilede studentene med obligatoriske oppgaver</li>
                <li>Retting og evaluering av oppgaver</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Link href="https://www4.uib.no/en/courses/inf140" target="_blank">
                <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                  om INF140
                </button>
              </Link>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg font-pixel">Universitetet i Bergen</h3>
                <span className="text-sm text-gray-700 font-pixel">Januar – mai 2024</span>
              </div>
              <p className="text-sm text-gray-800">
                Studentassistent INF112: Innføring i systemutvikling
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
                <li>Avholde gruppetimer i to timer per uke, veilede studentene med obligatoriske oppgaver</li>
                <li>Retting og evaluering av oppgaver</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Link href="https://www4.uib.no/en/courses/inf112" target="_blank">
                <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                  om INF112
                </button>
              </Link>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg font-pixel">Universitetet i Bergen</h3>
                <span className="text-sm text-gray-700 font-pixel">2022 – 2023</span>
              </div>
              <p className="text-sm text-gray-800">
                Studentmentor
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
                <li>Følge opp studenter gjennom første studieår</li>
                <li>Bidra til et godt faglig og sosialt miljø blant studentene</li>
              </ul>
            </div>

            <div className="flex gap-3">
              <Link href="https://www.uib.no/nt/142180/mentorordningen-ved-fakultet-naturvitenskap-og-teknologi#:~:text=Hva%20er%20mentorordningen%20ved%20NT,ledet%20av%201%2D2%20mentorer" target="_blank">
                <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                  Mentorordningen v/UiB
                </button>
              </Link>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg font-pixel">Pon Power Norge AS</h3>
                <span className="text-sm text-gray-700 font-pixel">Juni – august 2023, 2022, 2021, 2020</span>
              </div>
              <p className="text-sm text-gray-800">
                Lageransatt (sommervikar)
              </p>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
                <li>Arbeidsoppgaver innen booking og logistikk</li>
                <li>Skrive proforma</li>
                <li>Kommunikasjon med selgere og transportører</li>
              </ul>
            </div>

          </div>
        </Window>

        <Window title="Verv og frivillig arbeid 🤝">
          <div className="text-black space-y-4">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg font-pixel">Jenter og Teknologi</h3>
              <span className="text-sm text-gray-700 font-pixel">2023 –</span>
            </div>
            <p className="text-sm text-gray-800">
              Rollemodell og foredragsholder
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
              <li>Foredragsholder på Norgesturné for å fremme kvinner i teknologi, for jenter på ungdomsskole og videregående skole</li>
              <li>Vant tur til NASA i Houston, Texas, grunnet sterk interesse for romfart og teknologi, samt engasjement rundt likestilling innen teknologibransjen</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Link href="https://jenterogteknologi.com" target="_blank">
              <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                Jenter og Teknologi
              </button>
            </Link>
            <Link href="" target="_blank">
                <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                  om NASA-turen 2023
                </button>
              </Link>
            </div>

          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg font-pixel">NHHI Cheer</h3>
              <span className="text-sm text-gray-700 font-pixel">Januar – desember 2024</span>
            </div>
            <p className="text-sm text-gray-800">
              Informasjonsansvarlig og styremedlem
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
              <li>Ansvar for sosiale medier og rekruttering av nye medlemmer til NHHI Cheer</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Link href="https://www.instagram.com/nhhicheer/?hl=en" target="_blank">
              <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                NHHI Cheer
              </button>
            </Link>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg font-pixel">echo Bedriftskomitéen, UiB</h3>
              <span className="text-sm text-gray-700 font-pixel">2021 – 2024</span>
            </div>
            <p className="text-sm text-gray-800">
              Leder og styremedlem
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
              <li>Ansvarlig for kontakt med næringslivet og bidrag til linjeforeningens økonomi</li>
              <li>Hovedansvar for planlegging og gjennomføring av bedriftspresentasjoner</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Link href="https://www.instagram.com/echo_bedkom/?hl=en" target="_blank">
              <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                echo bedkom
              </button>
            </Link>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg font-pixel">echo – Linjeforeningen for informatikk, UiB</h3>
              <span className="text-sm text-gray-700 font-pixel">2023 – 2024</span>
            </div>
            <p className="text-sm text-gray-800">
              Styremedlem
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
              <li>Ivareta og fremme studentenes studie- og arbeidsvilkår, både faglig og sosialt</li>
            </ul>
          </div>

          <div className="flex gap-3">
            <Link href="https://echo.uib.no/hjem" target="_blank">
              <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                echo – Linjeforeningen
              </button>
            </Link>
          </div>

          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg font-pixel">echos Bedriftsturkomité, UiB</h3>
              <span className="text-sm text-gray-700 font-pixel">Januar – september 2023</span>
            </div>
            <p className="text-sm text-gray-800">
              Styremedlem
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
              <li>Planlegging og gjennomføring av bedriftsekskursjon til Oslo for 60 informatikkstudenter ved Universitetet i Bergen</li>
              <li>Turen innebar at studentene fikk besøke åtte bedrifter i løpet av 3 dager</li>
            </ul>
          </div>

          <div className="flex gap-3">
              <Link href="" target="_blank">
                <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                  om bedriftsturen 2023
                </button>
              </Link>
            </div>

          <div>
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-lg font-pixel">UKEN i Bergen</h3>
              <span className="text-sm text-gray-700 font-pixel">2021 – 2022</span>
            </div>
            <p className="text-sm text-gray-800">
              Innkjøpssjef
            </p>
            <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
              <li>Ansvar for innkjøp og logistikkarbeid for UKEN, en festival drevet av studenter fra alle studiesteder i Bergen</li>
            </ul>
          </div>

            <div className="flex gap-3">
              <Link href="https://uken.no/info/" target="_blank">
                <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                  UKEN i Bergen
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
              <li> Lesing </li>
              <li> Gå fjellturer, løping, cheerleading </li>
              <li> Sying og hekling, foto, programmering </li>
            </ul>
          </div>

          <div className="flex gap-3 pt-3">
            <Link href="https://app.thestorygraph.com/profile/jasmineathea" target="_blank">
              <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                StoryGraph
              </button>
            </Link>
          </div>
        </Window>

        <Window title="Språk 💬">
          <ul className="list-disc pl-6 text-black">
            <li>Norsk 🇳🇴 morsmål</li>
            <li>Engelsk 🇺🇸 flytende skriftlig og muntlig</li>
            <li>Fransk 🇫🇷 grunnleggende skriftlig og muntlig</li>
          </ul>

          <div className="flex gap-3 pt-3">
            <Link href="https://www.duolingo.com/profile/jasmineathea" target="_blank">
              <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-3 py-1 font-pixel hover:bg-gray-300 active:shadow-inner">
                Duolingo
              </button>
            </Link>
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