import { content, editorial } from "../../_lib/content";

export default function Contents() {
  const { practiceAreas } = content;
  const sec = editorial.sections.contents;

  return (
    <section id="practice" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-8 flex items-baseline justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-crimson">
            {sec.n}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-editorial/40">
            {sec.title}
          </span>
        </div>
        <div className="mb-14 h-px bg-ink-editorial/20" />

        <div className="mb-16 flex items-end justify-between gap-8">
          <h2 className="max-w-lg font-serif text-4xl font-light leading-snug text-ink-editorial">
            {practiceAreas.title}{" "}
            <span className="italic">{practiceAreas.titleAccent}</span>{" "}
            {practiceAreas.titleSuffix}
          </h2>
          <p className="hidden max-w-xs text-right font-serif text-base italic leading-relaxed text-ink-editorial/55 lg:block">
            {practiceAreas.description}
          </p>
        </div>

        <div>
          {practiceAreas.areas.map((area, i) => {
            const pageNum = 14 + i * 8;
            const sectionNum = String(i + 1).padStart(2, "0");

            return (
              <div
                key={area.title}
                className="group border-t border-ink-editorial/15 py-5 transition-colors hover:bg-ink-editorial/[0.025] cursor-default"
              >
                <div className="grid grid-cols-[2.5rem_1fr] gap-5 items-start">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-crimson pt-1">
                    § {sectionNum}
                  </span>

                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif text-xl text-ink-editorial transition-all group-hover:italic">
                        {area.title}
                      </span>
                      <span className="mb-0.5 min-w-[24px] flex-1 self-end border-b border-dotted border-ink-editorial/25" />
                      <span className="flex-shrink-0 font-mono text-[10px] tracking-[0.2em] text-ink-editorial/45">
                        p. {pageNum}
                      </span>
                    </div>
                    <p className="max-h-0 overflow-hidden font-sans text-sm leading-relaxed text-ink-editorial/50 transition-all duration-500 group-hover:mt-1.5 group-hover:max-h-16">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-t border-ink-editorial/15" />
        </div>

        <div className="mt-12 flex items-center">
          <div className="h-px flex-1 bg-ink-editorial/15" />
          <span className="pl-6 font-mono text-[10px] uppercase tracking-[0.35em] text-ink-editorial/30">
            p. 14
          </span>
        </div>
      </div>
    </section>
  );
}
