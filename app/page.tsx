import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div
      className="h-screen w-screen flex flex-col"
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
      <div className="flex-grow flex flex-col items-center justify-start">
        <SearchBar />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}