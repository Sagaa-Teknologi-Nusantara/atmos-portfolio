import About from "../_designs/design-4/About";
import Attorneys from "../_designs/design-4/Attorneys";
import Footer from "../_designs/design-4/Footer";
import Hero from "../_designs/design-4/Hero";
import IndustryUpdates from "../_designs/design-4/IndustryUpdates";
import NavBar from "../_designs/design-4/NavBar";
import PracticeAreas from "../_designs/design-4/PracticeAreas";
import DesignSwitcher from "../components/DesignSwitcher";

export const metadata = {
  title: "Design 04 — Atmos Law Office · Swiss Museum Grid",
};

export default function Design4() {
  return (
    <div className="bg-swiss-white">
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
