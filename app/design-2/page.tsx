import Colophon from "../_designs/design-2/Colophon";
import Contributors from "../_designs/design-2/Contributors";
import Contents from "../_designs/design-2/Contents";
import EditorsNote from "../_designs/design-2/EditorsNote";
import Features from "../_designs/design-2/Features";
import Lead from "../_designs/design-2/Lead";
import Masthead from "../_designs/design-2/Masthead";
import DesignSwitcher from "../components/DesignSwitcher";

export const metadata = {
  title: "Design 02 — Atmos Law Office · Editorial Monograph",
};

export default function Design2() {
  return (
    <div className="bg-paper">
      <DesignSwitcher surface="light" />
      <Masthead />
      <main className="flex w-full flex-1 flex-col">
        <Lead />
        <EditorsNote />
        <Contents />
        <Contributors />
        <Features />
      </main>
      <Colophon />
    </div>
  );
}
