import Header from "@/components/Header";
import Window from "@/components/Window";
import Link from "next/link";

export default function Settings() {
  return (
    <div className="min-h-screen w-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Innholdsområde */}
      <div className="bg-indigo-300 w-full py-8 border-b border-black flex-1 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center w-11/12 max-w-4xl mx-auto font-pixel text-center">
          {/* Tittel */}
          <h1 className="text-3xl font-bold text-black mb-4">Instillinger</h1>

          {/* Beskrivelse */}
          <p className="text-gray-900 text-center mb-6">
            Legger inn funksjonalitet her senere! Stay tuned 🤓
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