import About from "../_designs/design-3/About";
import Attorneys from "../_designs/design-3/Attorneys";
import Footer from "../_designs/design-3/Footer";
import Hero from "../_designs/design-3/Hero";
import IndustryUpdates from "../_designs/design-3/IndustryUpdates";
import NavBar from "../_designs/design-3/NavBar";
import PracticeAreas from "../_designs/design-3/PracticeAreas";
import DesignSwitcher from "../components/DesignSwitcher";

export const metadata = {
  title: "Design 03 — Atmos Law Office · Corporate Confidence",
};

export default function Design3() {
  return (
    <div className="bg-canvas">
      <DesignSwitcher surface="light" />
      <NavBar />
      <main className="flex w-full flex-1 flex-col">
        <Hero />
        <About />
        <PracticeAreas />
        <Attorneys />
        <IndustryUpdates />
      </main>
      <Footer />
    </div>
  );
}
