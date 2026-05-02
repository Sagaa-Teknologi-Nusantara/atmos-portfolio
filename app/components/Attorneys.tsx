import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Placeholder attorney roster — names and credentials below are dummy data
 * intended only to illustrate the card layout. Replace with real partners
 * and headshots before go-live.
 */
const attorneys = [
  {
    name: "Dr. Andreas Wiratama, S.H., M.H.",
    title: "Managing Partner",
    focus: "Corporate · M&A",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Prof. Sarah Halim, S.H., LL.M.",
    title: "Senior Partner",
    focus: "Dispute Resolution",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Raka Mahendra, S.H., M.Kn.",
    title: "Partner",
    focus: "Antitrust & Regulatory",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Citra Ananda, S.H., LL.M.",
    title: "Partner",
    focus: "Intellectual Property",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Attorneys() {
  return (
    <section id="attorneys" className="relative bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.5em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Leadership
            </p>
            <h2 className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-crimson md:text-5xl lg:text-[3.5rem]">
              Meet Our{" "}
              <span className="italic text-crimson/80">Lead Attorneys</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="text-base leading-relaxed text-charcoal/75 md:text-lg">
              Our leading attorneys have advised some of the largest domestic
              and international companies, creating effective, industry-focused
              solutions for business needs.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {attorneys.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.08} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-beige/40">
                <Image
                  src={a.image}
                  alt={`Portrait of ${a.name}`}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover grayscale transition-all duration-[900ms] group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-4 bottom-4 h-px bg-gold/70 transition-all duration-500 group-hover:inset-x-2"
                />
              </div>
              <div className="mt-6">
                <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
                  {a.focus}
                </p>
                <h3 className="mt-3 font-serif text-xl leading-snug text-crimson">
                  {a.name}
                </h3>
                <p className="mt-1 text-sm text-charcoal/70">{a.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
