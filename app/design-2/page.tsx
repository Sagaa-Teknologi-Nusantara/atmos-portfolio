import DesignSwitcher from "../components/DesignSwitcher";

export const metadata = { title: "Design 02 — Atmos Law Office" };

export default function Design2() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-ink text-ivory">
      <DesignSwitcher />
      <div className="px-6 text-center">
        <p className="mb-4 text-[11px] uppercase tracking-[0.5em] text-gold">
          Design 02
        </p>
        <h1 className="font-serif text-5xl font-light text-ivory md:text-6xl">
          In Progress
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ivory/60">
          This variant is currently being developed. Return to Design 01 to
          preview the current direction.
        </p>
        <a
          href="/"
          className="mt-10 inline-flex items-center gap-2 border border-ivory/30 px-8 py-3 text-xs uppercase tracking-[0.3em] text-ivory/70 transition-colors hover:border-gold hover:text-gold"
        >
          ← Design 01
        </a>
      </div>
    </div>
  );
}
