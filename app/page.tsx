import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/field.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start w-full px-4">
        <SearchBar />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}