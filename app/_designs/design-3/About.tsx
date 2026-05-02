import Image from "next/image";
import { content } from "../../_lib/content";

export default function About() {
  const { about } = content;

  return (
    <section id="about" className="bg-canvas py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 lg:mb-16">
          <span className="mb-4 block text-xs font-medium tracking-[0.25em] text-crimson">
            02 — ABOUT
          </span>
          <h2 className="max-w-2xl text-3xl font-medium tracking-tight text-slate md:text-4xl">
            {about.title}{" "}
            <span className="text-crimson">{about.titleAccent}</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-slate-soft">
              <span className="font-medium text-slate">
                {about.firmHighlight}
              </span>{" "}
              {about.openingBody}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-soft">
              {about.body}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-md border border-rule bg-white p-8">
              <h3 className="mb-8 text-sm font-medium tracking-[0.25em] text-slate">
                AT A GLANCE
              </h3>
              <div className="grid gap-8 sm:grid-cols-3">
                {about.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-4xl font-medium text-slate">{s.value}</p>
                    <p className="mt-1 text-sm text-slate-soft">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative aspect-[21/9] overflow-hidden rounded-md bg-beige/50">
            <Image
              src={about.images[0].src}
              alt={about.images[0].alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
