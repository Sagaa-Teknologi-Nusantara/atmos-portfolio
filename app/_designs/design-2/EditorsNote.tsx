import { content, editorial } from "../../_lib/content";

export default function EditorsNote() {
  const { about } = content;
  const sec = editorial.sections.editorsNote;

  return (
    <section id="about" className="bg-paper py-24 lg:py-32">
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

        <h2 className="mb-16 max-w-xl font-serif text-4xl font-light italic leading-snug text-ink-editorial">
          From the Editor&rsquo;s Desk.
        </h2>

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-serif text-lg leading-relaxed text-ink-editorial/85 [&::first-letter]:float-left [&::first-letter]:mr-2 [&::first-letter]:font-serif [&::first-letter]:text-[5rem] [&::first-letter]:font-light [&::first-letter]:leading-[0.8] [&::first-letter]:text-crimson">
              <span className="font-medium tracking-[0.1em] text-crimson">
                {about.firmHighlight}
              </span>{" "}
              {about.openingBody}
            </p>
            <p className="mt-6 font-serif text-lg leading-relaxed text-ink-editorial/85">
              {about.body}
            </p>
          </div>

          <div className="border-ink-editorial/15 lg:col-span-5 lg:border-l lg:pl-10">
            <div className="mb-10">
              <div className="mb-6 h-px bg-crimson" />
              <p className="font-serif text-2xl italic leading-snug text-ink-editorial">
                &ldquo;Every client&rsquo;s situation is unique. We listen,
                understand their goals, and develop tailored strategies to meet
                their needs.&rdquo;
              </p>
              <div className="mt-6 h-px bg-crimson" />
            </div>

            <div className="space-y-5 pt-2">
              {about.stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-4">
                  <span className="font-serif text-3xl text-crimson">
                    {s.value}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-editorial/55">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center">
          <div className="h-px flex-1 bg-ink-editorial/15" />
          <span className="pl-6 font-mono text-[10px] uppercase tracking-[0.35em] text-ink-editorial/30">
            p. 06
          </span>
        </div>
      </div>
    </section>
  );
}
