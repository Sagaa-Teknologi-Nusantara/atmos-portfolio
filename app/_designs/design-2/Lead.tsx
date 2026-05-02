import { content, editorial } from "../../_lib/content";

export default function Lead() {
  const { hero } = content;

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center bg-paper pt-11"
    >
      <div
        aria-hidden
        className="absolute top-11 inset-x-0 h-px bg-crimson/30"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute right-6 bottom-16 select-none font-serif text-[20vw] font-light leading-none text-ink-editorial/[0.04] lg:right-10"
      >
        01
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-16 lg:px-10 lg:pt-20">
        <div className="mb-10 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink-editorial/45">
            {editorial.sections.lead.n}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-ink-editorial/35 md:block">
            Issue {editorial.issueRoman} · {editorial.publicationYear} · {editorial.dateline}
          </span>
        </div>

        <div className="mb-10 h-px bg-ink-editorial/20" />

        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-[clamp(3rem,9vw,8rem)] font-light leading-[1.0] tracking-tight text-ink-editorial">
              {hero.title}
              <br />
              <span className="italic text-crimson">&amp;</span>{" "}
              <span className="italic">{hero.titleAccent}</span>
              <br />
              {hero.titleSuffix}.
            </h1>
          </div>

          <div className="space-y-8 lg:col-span-4 lg:pt-4">
            <p className="font-serif text-xl italic leading-relaxed text-ink-editorial/70">
              {hero.description}
            </p>

            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-ink-editorial/45">
              — by the Editors
            </p>

            <div className="h-px w-10 bg-crimson" />

            <div className="space-y-3">
              <a href="#about" className="group flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-editorial/40 transition-colors group-hover:text-ink-editorial/70">
                  Editor&rsquo;s Note →
                </span>
              </a>
              <a href="#practice" className="group flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-editorial/40 transition-colors group-hover:text-ink-editorial/70">
                  Contents →
                </span>
              </a>
              <a href="#contact" className="group flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson transition-colors group-hover:text-crimson/70">
                  Contact the Desk →
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center">
          <div className="h-px flex-1 bg-ink-editorial/15" />
          <span className="pl-6 font-mono text-[10px] uppercase tracking-[0.35em] text-ink-editorial/30">
            p. 01
          </span>
        </div>
      </div>
    </section>
  );
}
