import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-ivory py-28 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-20 lg:px-10">
        <Reveal className="lg:col-span-5">
          <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.5em] text-gold">
            <span className="h-px w-10 bg-gold" />
            About Us
          </p>
          <h2 className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-crimson md:text-5xl lg:text-[3.5rem]">
            A forward-thinking firm built on
            <span className="italic text-crimson/80"> institutional trust</span>
            .
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7 lg:pt-4">
          <div className="space-y-6 text-base leading-relaxed text-charcoal/80 md:text-lg">
            <p>
              <span className="font-medium tracking-[0.15em] text-crimson">
                ATMOS LAW OFFICE (ATMOS L.L.P.)
              </span>{" "}
              is a dynamic and forward-thinking law firm committed to providing
              exceptional legal services to individuals, businesses, and
              organizations.
            </p>
            <p>
              We provide a wide range of legal services to domestic and
              multinational clients in all significant business sectors,
              covering all aspects necessary for the establishment and operation
              of business in compliance with national and international law.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-hairline pt-10">
            {[
              { value: "12+", label: "Practice Sectors" },
              { value: "50+", label: "Landmark Matters" },
              { value: "Global", label: "Client Reach" },
            ].map((s) => (
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
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Modern corporate interior with marble and brass accents"
            fill
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover"
          />
        </Reveal>
        <div className="grid gap-6">
          <Reveal
            delay={0.15}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80"
              alt="Attorneys reviewing documents in a firm library"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal
            delay={0.25}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1400&q=80"
              alt="Jakarta skyline at dusk"
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
