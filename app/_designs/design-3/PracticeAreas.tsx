import { content } from "../../_lib/content";

export default function PracticeAreas() {
  const { practiceAreas } = content;

  return (
    <section id="practice" className="border-b border-rule bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 lg:mb-16">
          <span className="mb-4 block text-xs font-medium tracking-[0.25em] text-crimson">
            03 — PRACTICE
          </span>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl text-3xl font-medium tracking-tight text-slate md:text-4xl">
              {practiceAreas.title}{" "}
              <span className="text-crimson">{practiceAreas.titleAccent}</span>{" "}
              {practiceAreas.titleSuffix}
            </h2>
            <p className="max-w-sm text-slate-soft">
              {practiceAreas.description}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.areas.map((area, i) => (
            <div
              key={area.title}
              className="group rounded-md border border-rule bg-white p-8 transition-all duration-300 hover:border-crimson hover:shadow-sm"
            >
              <span className="mb-4 block text-xs font-medium tracking-[0.25em] text-crimson">
                {String(i + 1).padStart(2, "0")} — {area.title.split(" ")[0]}
              </span>
              <h3 className="mb-3 text-xl font-medium text-slate">
                {area.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-slate-soft">
                {area.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-soft transition-colors group-hover:text-crimson"
              >
                Learn more
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
