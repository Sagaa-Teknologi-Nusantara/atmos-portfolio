import Image from "next/image";
import { content } from "../../_lib/content";

export default function Hero() {
  const { hero } = content;

  const stats = [
    { value: "15+", label: "Years" },
    { value: "200+", label: "Clients" },
    { value: "8", label: "Industries" },
    { value: "100%", label: "Commitment" },
  ];

  return (
    <section id="home" className="border-b border-rule bg-canvas">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="mb-6 block text-xs font-medium tracking-[0.25em] text-slate-soft">
              01 — {hero.eyebrow}
            </span>

            <h1 className="mb-6 text-5xl/[1.05] font-medium tracking-tight text-slate md:text-7xl/[1.0]">
              {hero.title}{" "}
              <span className="text-crimson">{hero.titleAccent}</span>{" "}
              {hero.titleSuffix}
            </h1>

            <p className="mb-8 max-w-md text-lg text-slate-soft">
              {hero.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="rounded-full bg-crimson px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-crimson-deep"
              >
                Schedule Consultation
              </a>
              <a
                href="#practice"
                className="group inline-flex items-center gap-2 text-sm font-medium text-slate-soft transition-colors hover:text-slate"
              >
                Explore Services
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-beige/50">
              <Image
                src={hero.image}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-rule pt-8">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-8">
              <div>
                <p className="text-3xl font-medium text-slate">{s.value}</p>
                <p className="text-sm text-slate-soft">{s.label}</p>
              </div>
              {i < stats.length - 1 && (
                <span className="hidden h-10 w-px bg-rule md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
