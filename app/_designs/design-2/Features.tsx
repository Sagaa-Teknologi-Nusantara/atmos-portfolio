import Image from "next/image";
import { content, editorial } from "../../_lib/content";

export default function Features() {
  const { updates } = content;
  const sec = editorial.sections.features;
  const [lead, ...sidebars] = updates.list;

  return (
    <section id="updates" className="bg-paper py-24 lg:py-32">
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

        <h2 className="mb-16 font-serif text-4xl font-light text-ink-editorial">
          {updates.title}{" "}
          <span className="italic">{updates.titleAccent}</span>.
        </h2>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="border-ink-editorial/15 lg:col-span-7 lg:border-r lg:pr-12">
            <div className="relative mb-6 aspect-[16/9] overflow-hidden bg-beige/40">
              <Image
                src={lead.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover grayscale opacity-75"
              />
            </div>
            <div className="mb-4 flex items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson">
                {lead.category}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-editorial/40">
                {lead.date}
              </span>
            </div>
            <h3 className="mb-4 font-serif text-2xl leading-snug text-ink-editorial md:text-3xl">
              {lead.title}
            </h3>
            <p className="mb-6 font-serif text-base italic leading-relaxed text-ink-editorial/65">
              {updates.description}
            </p>
            <a
              href="#"
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson transition-colors hover:text-crimson/70"
            >
              Read the Feature →
            </a>
          </div>

          <div className="space-y-10 lg:col-span-5">
            {sidebars.map((u) => (
              <div key={u.title} className="group border-t border-ink-editorial/15 pt-8">
                <div className="mb-3 flex items-center gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-crimson">
                    {u.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-editorial/40">
                    {u.date}
                  </span>
                </div>
                <h3 className="mb-3 font-serif text-lg leading-snug text-ink-editorial transition-all group-hover:italic">
                  {u.title}
                </h3>
                <a
                  href="#"
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-editorial/45 transition-colors hover:text-crimson"
                >
                  Continue Reading →
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex items-center">
          <div className="h-px flex-1 bg-ink-editorial/15" />
          <span className="pl-6 font-mono text-[10px] uppercase tracking-[0.35em] text-ink-editorial/30">
            p. 72
          </span>
        </div>
      </div>
    </section>
  );
}
