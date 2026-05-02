import About from "./_designs/design-1/About";
import Attorneys from "./_designs/design-1/Attorneys";
import Footer from "./_designs/design-1/Footer";
import Hero from "./_designs/design-1/Hero";
import IndustryUpdates from "./_designs/design-1/IndustryUpdates";
import Navbar from "./_designs/design-1/Navbar";
import PracticeAreas from "./_designs/design-1/PracticeAreas";
import DesignSwitcher from "./components/DesignSwitcher";

export default function Home() {
  return (
    <>
      <DesignSwitcher />
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
