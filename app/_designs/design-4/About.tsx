import Image from "next/image";
import { content } from "../../_lib/content";

export default function About() {
  const { about } = content;

  return (
    <section id="about" className="bg-swiss-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-swiss-gray">
            § 0.2 — On the Firm
          </span>
          <div className="h-px flex-1 bg-swiss-rule" />
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-swiss-black">
              On the Firm
            </h2>
          </div>
          <div className="space-y-6 lg:col-span-8">
            <p className="text-2xl font-semibold leading-snug tracking-tight text-swiss-black">
              <span className="text-crimson">{about.firmHighlight}</span>{" "}
              {about.openingBody}
            </p>
            <p className="text-base leading-relaxed text-swiss-gray">
              {about.body}
            </p>
            <a
              href="#practice"
              className="block text-xs font-medium uppercase tracking-[0.2em] text-swiss-black hover:underline"
            >
              View practice areas →
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-swiss-rule" />

        <div className="grid grid-cols-3 divide-x divide-swiss-rule border-b border-swiss-rule">
          {about.stats.map((s) => (
            <div key={s.label} className="px-6 py-10 first:pl-0 last:pr-0">
              <p className="text-6xl font-semibold tracking-tight text-swiss-black">
                {s.value}
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.25em] text-swiss-gray">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="relative aspect-[3/1] overflow-hidden bg-beige/40">
            <Image
              src={about.images[0].src}
              alt={about.images[0].alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-3 flex items-center gap-4">
            <span className="text-xs text-crimson">Fig. 02</span>
            <span className="text-xs uppercase tracking-[0.2em] text-swiss-gray">
              Practice environment · Atmos L.L.P.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
