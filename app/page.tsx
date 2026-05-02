import About from "./components/About";
import Attorneys from "./components/Attorneys";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import IndustryUpdates from "./components/IndustryUpdates";
import Navbar from "./components/Navbar";
import PracticeAreas from "./components/PracticeAreas";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex w-full flex-1 flex-col">
        <Hero />
        <About />
        <PracticeAreas />
        <Attorneys />
        <IndustryUpdates />
      </main>
      <Footer />
    </>
  );
}
