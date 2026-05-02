import Image from "next/image";
import { content } from "../../_lib/content";

export default function Hero() {
  const { hero } = content;

  return (
    <section id="home" className="bg-swiss-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-swiss-gray">
            § 0.1 — Introduction
          </span>
          <div className="h-px flex-1 bg-swiss-rule" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-none tracking-tight text-swiss-black">
              {hero.title}
              <br />
              <span className="text-crimson">{hero.titleAccent}</span>
              <br />
              {hero.titleSuffix}.
            </h1>
          </div>

          <div className="space-y-6 lg:col-span-4 lg:pt-4">
            <span className="block text-xs font-medium uppercase tracking-[0.25em] text-swiss-gray">
              {hero.eyebrow}
            </span>
            <p className="text-base leading-relaxed text-swiss-gray">
              {hero.description}
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="#about"
                className="text-xs font-medium uppercase tracking-[0.2em] text-swiss-black hover:underline"
              >
                Begin reading →
              </a>
              <a
                href="#contact"
                className="text-xs font-medium uppercase tracking-[0.2em] text-crimson hover:underline"
              >
                Contact the firm →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-swiss-rule pt-10">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="relative lg:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden bg-beige/40">
                <Image
                  src={hero.image}
                  alt=""
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-end lg:col-span-5 lg:pb-1">
              <div className="border-t border-swiss-rule pt-4">
                <span className="block text-xs text-crimson">
                  Fig. 01
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-swiss-gray">
                  Institutional counsel · Jakarta
                </p>
              </div>
              <div className="mt-10">
                <p className="text-sm leading-relaxed text-swiss-gray">
                  {hero.description}
                </p>
                <a
                  href="#practice"
                  className="mt-4 block text-xs font-medium uppercase tracking-[0.2em] text-swiss-black hover:underline"
                >
                  View practice areas →
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 h-px bg-swiss-rule" />
        </div>
      </div>
    </section>
  );
}
