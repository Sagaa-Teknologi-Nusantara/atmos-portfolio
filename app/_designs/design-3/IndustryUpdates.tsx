import Image from "next/image";
import { content } from "../../_lib/content";

export default function IndustryUpdates() {
  const { updates } = content;

  return (
    <section id="insights" className="border-b border-rule bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-col gap-4 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="mb-4 block text-xs font-medium tracking-[0.25em] text-crimson">
              05 — INSIGHTS
            </span>
            <h2 className="text-3xl font-medium tracking-tight text-slate md:text-4xl">
              {updates.title}{" "}
              <span className="text-crimson">{updates.titleAccent}</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-slate-soft transition-colors hover:text-crimson"
          >
            View all updates
            <span>→</span>
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {updates.list.map((u) => (
            <article key={u.title} className="group">
              <div className="relative mb-4 aspect-video overflow-hidden rounded-md bg-beige/50">
                <Image
                  src={u.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full border border-crimson px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] text-crimson">
                  {u.category}
                </span>
                <span className="text-xs text-slate-soft">{u.date}</span>
              </div>
              <h3 className="mb-3 text-lg font-medium tracking-tight text-slate transition-colors group-hover:text-crimson">
                {u.title}
              </h3>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-soft transition-colors hover:text-crimson"
              >
                Read article
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
