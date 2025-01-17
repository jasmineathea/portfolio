import Header from "@/components/Header";
import Window from "@/components/Window";
import Link from "next/link";

export default function Info() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Innholdsområde */}
      <div className="bg-indigo-300 w-full py-8 border-b border-black flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center w-11/12 max-w-4xl mx-auto font-pixel text-center">
          {/* Tittel */}
          <h1 className="text-3xl font-bold text-black mb-4">Om denne siden</h1>

          {/* Beskrivelse */}
          <p className="text-gray-900 text-center mb-6">
            Du må være over middels interessert dersom du har klart å rote deg borti dette hjørnet! Koselig å ha deg her uansett 🤎 Velkommen til nettsiden min! Her kan du bli litt bedre kjent med meg og hva slags prosjekter jeg har drevet med.
          </p>
          <p className="text-gray-900 text-center mb-6">
            Som veldig mange andre IT-studenter har jeg et behov for å vise hva jeg kan. Hvis du som leser dette også har vært IT-student en gang, har du sikkert sett ganske mange portfolio-nettsider. I mitt bidrag har jeg prøvd å balansere en retro Windows 98-vibe med noen moderne preg, for eksempel ved å bruke emojier. Jeg er langt ifra en desginer, men jeg har virkelig brukt tid på detaljer her. Håper det faller i smak - personlig er jeg veldig fornøyd 🤓
          </p>
          <p className="text-gray-900 text-center mb-6">
            Denne nettsiden består i all hovedsak av TypeScript. Kildekoden kan du finne ved å trykke 
            <Link href="https://github.com/jasmineathea/portfolio"> HER.</Link>
          </p>
        </div>

        {/* "Lukk"-knappen midtstilt nederst */}
        <div className="flex-1 flex items-end pb-8">
          <Link href="/">
            <button className="bg-gray-200 border border-black shadow-[2px_2px_0px_#808080,-2px_-2px_0px_#ffffff] px-4 py-2 font-pixel hover:bg-gray-300 active:shadow-inner">
              Lukk
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}