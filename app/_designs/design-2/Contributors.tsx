import Image from "next/image";
import { content, editorial } from "../../_lib/content";

export default function Contributors() {
  const { attorneys } = content;
  const sec = editorial.sections.contributors;

  return (
    <section id="contributors" className="bg-paper py-24 lg:py-32">
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

        <h2 className="mb-16 font-serif text-4xl font-light leading-snug text-ink-editorial">
          {attorneys.title}{" "}
          <span className="italic">{attorneys.titleAccent}</span>
        </h2>

        <div>
          {attorneys.list.map((a) => (
            <div
              key={a.name}
              className="group border-t border-ink-editorial/15 py-8"
            >
              <div className="grid grid-cols-[4rem_1fr] gap-8 items-start lg:grid-cols-[4rem_1fr_1fr]">
                <div className="relative h-14 w-14 overflow-hidden rounded-full bg-beige/60">
                  <Image
                    src={a.image}
                    alt={`Portrait of ${a.name}`}
                    fill
                    sizes="56px"
                    className="object-cover grayscale"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-xl text-ink-editorial">
                    {a.name}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-crimson">
                    {a.title}
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.25em] text-ink-editorial/45">
                    {a.focus}
                  </p>
                </div>

                <div className="hidden lg:block">
                  <p className="font-serif text-sm italic leading-relaxed text-ink-editorial/65">
                    <span className="not-italic font-mono text-[9px] uppercase tracking-[0.25em] text-ink-editorial/40">
                      {editorial.contributorBlurbPrefix}
                    </span>{" "}
                    Industry-focused legal strategy and institutional counsel
                    across {a.focus.toLowerCase()} matters.
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="border-t border-ink-editorial/15" />
        </div>

        <div className="mt-12 flex items-center">
          <div className="h-px flex-1 bg-ink-editorial/15" />
          <span className="pl-6 font-mono text-[10px] uppercase tracking-[0.35em] text-ink-editorial/30">
            p. 56
          </span>
        </div>
      </div>
    </section>
  );
}
