import Image from "next/image";
import { content } from "../../_lib/content";

export default function Attorneys() {
  const { attorneys } = content;

  return (
    <section id="team" className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 lg:mb-16">
          <span className="mb-4 block text-xs font-medium tracking-[0.25em] text-crimson">
            04 — TEAM
          </span>
          <h2 className="text-3xl font-medium tracking-tight text-slate md:text-4xl">
            {attorneys.title}{" "}
            <span className="text-crimson">{attorneys.titleAccent}</span>
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {attorneys.list.map((a) => (
            <div key={a.name} className="group">
              <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-md bg-beige/50">
                <Image
                  src={a.image}
                  alt={`Portrait of ${a.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-base font-medium text-slate">{a.name}</h3>
              <p className="text-sm text-crimson">{a.title}</p>
              <p className="text-xs text-slate-soft">{a.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
