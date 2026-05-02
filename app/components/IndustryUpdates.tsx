import Image from "next/image";
import Reveal from "./Reveal";

const updates = [
  {
    category: "Recognition",
    title:
      "Dr. Yati Nurhayati, S.H., M.H., CIRP., CPM. Featured in Top 13 ALB Woman Lawyer of the Year 2026",
    date: "2026",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    category: "Insight",
    title:
      "AKSESABILITAS FASILITAS: ANTARA KEWAJIBAN HUKUM DAN REALITAS KORPORASI",
    date: "Advisory",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80",
  },
  {
    category: "Publication",
    title: "The Advisory Vol. 1 Issue 2 – 25/02",
    date: "25 / 02",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function IndustryUpdates() {
  return (
    <section id="updates" className="relative bg-ivory-soft py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.5em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Industry Updates
            </p>
            <h2 className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-crimson md:text-5xl lg:text-[3.5rem]">
              Perspectives from our <span className="italic">desk</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="text-base leading-relaxed text-charcoal/75 md:text-lg">
              Recognition, advisories, and considered commentary on the
              regulatory and commercial currents shaping our clients&rsquo;
              work.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-3">
          {updates.map((u, i) => (
            <Reveal key={u.title} delay={i * 0.08}>
              <a href="#" className="group block" aria-label={u.title}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={u.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-crimson-deep/40 via-transparent to-transparent"
                  />
                </div>
                <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.3em]">
                  <span className="text-gold">{u.category}</span>
                  <span className="text-charcoal/60">{u.date}</span>
                </div>
                <h3 className="mt-4 font-serif text-xl leading-snug text-crimson transition-colors group-hover:text-crimson-deep md:text-2xl">
                  {u.title}
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-crimson/70 transition-colors group-hover:text-gold">
                  Read More
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
