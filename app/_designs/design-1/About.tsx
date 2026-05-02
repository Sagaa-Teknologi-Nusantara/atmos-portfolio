import Image from "next/image";
import Reveal from "../../components/Reveal";
import { content } from "../../_lib/content";

export default function About() {
  const { about } = content;

  return (
    <section id="about" className="relative bg-ivory py-28 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <Reveal className="lg:col-span-5">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.5em] text-gold">
            <span className="h-px w-10 bg-gold" />
            {about.eyebrow}
          </p>
          <h2 className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-crimson md:text-5xl lg:text-[3.5rem]">
            {about.title}
            <span className="italic text-crimson/80"> {about.titleAccent}</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7 lg:pt-4">
          <div className="space-y-6 text-base leading-relaxed text-charcoal/80 md:text-lg">
            <p>
              <span className="font-medium tracking-[0.15em] text-crimson">
                {about.firmHighlight}
              </span>{" "}
              {about.openingBody}
            </p>
            <p>{about.body}</p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-hairline pt-10">
            {about.stats.map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl text-crimson md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-charcoal/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-24 grid max-w-7xl gap-6 px-6 lg:grid-cols-3 lg:px-10">
        <Reveal
          delay={0.05}
          className="relative aspect-[4/5] overflow-hidden lg:col-span-2 lg:aspect-[16/10]"
        >
          <Image
            src={about.images[0].src}
            alt={about.images[0].alt}
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div className="grid gap-6">
          <Reveal delay={0.15} className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={about.images[1].src}
              alt={about.images[1].alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.25} className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={about.images[2].src}
              alt={about.images[2].alt}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
