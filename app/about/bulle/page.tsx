import Header from "@/components/Header";
import Window from "@/components/Window";
import Link from "next/link";
{/* import PhotoGallery from "@/components/PhotoGallery"; */}
import Footer from "@/components/Footer";

export default function Bulle() {
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
            bulle
          </p>
        </div>
      </div>

      {/* Top Section */}
      <div className="bg-slate-700 w-full py-2 pb-8 border-b border-black">
        <div className="flex flex-col items-center w-11/12 max-w-4xl mx-auto font-pixel text-center">
          {/* Navn */}
          <h1 className="text-3xl font-bold text-white mb-4">Mine saker</h1>

          {/* Beskrivelse */}
          <p className="mb-6 text-gray-50">
            Her er en oversikt over saker jeg har skrevet og jobbet med som journalist i K7 Bulletin. Oppdateres fortløpende! ✍🏼
          </p>

          <Window title="Om Bulle 📌" className="w-[90%] lg:w-[75%]">
            <div className="text-sm text-gray-800 mt-2">
                <p className="mb-4">
                K7 Bulletin er en uavhengig studentavis i Bergen, med kontor ved NHH. Bulle trykker saker bestående av nyhetsartikler, dypdykk innen økonomi og samfunn, og kultustoff. Avisen er forpliktet til å følge Vær Varsom-plakaten, noe som innebærer at avisen følger god presseskikk.
                </p>
                <p className="mb-4">
                Bulle har vært utgitt ved NHH siden april 1964. Etter to numre fikk avisen navnet K7 etter en konkurranse. Vinnerforslaget kom fra studentene Dag Tresselt og Christen Christensen, og er en forkortelse for Kåre Syvertsen, en stundentlegende som var etablert allerede på 60-tallet. Syvertsen er nemlig høyskolens fiktive evighetsstudent, og ble i en årekke meldt opp til eksamen, til studiadministrasjonens store fortvilelse.
                </p>
                <p className="mb-2">
                I 1968 kom også K7 Bulletin, først som et ukentlig supplement, deretter som den faste utgivelsen. Dersom du ønsker å lese eldre utgaver av K7 Bulletin, eller finne ut mer, kan du besøke det digitale arkivet til NHH Alumni på Issuu.
                </p>
            </div>
            </Window>

        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex-grow flex flex-col items-center w-full bg-indigo-200 py-8 pt-12">
        <Window title="Mine saker 📰" className="w-[90%] lg:w-[75%]">
          <div className="text-black space-y-4">
            <div>
              <div>
                <h3 className="font-bold text-lg font-pixel">Papirutgave, 2025</h3>
              </div>
              <ul className="list-disc pl-6 text-sm text-gray-800 mt-2">
                <li>Kjærlighet, klær og kontrovers</li>
                <li>Hans Geelmuyden: En Bølle med fire ben</li>
                <li>Lovgivningen for alkoholreklame fyller 50 år</li>
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
