import Image from "next/image";
import { content } from "../../_lib/content";

export default function Attorneys() {
  const { attorneys } = content;

  return (
    <section id="team" className="bg-swiss-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-swiss-gray">
            § 0.4 — Counsel
          </span>
          <div className="h-px flex-1 bg-swiss-rule" />
        </div>

        <div className="mb-12 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-semibold tracking-tight text-swiss-black">
              {attorneys.title}{" "}
              <span className="text-crimson">{attorneys.titleAccent}</span>
            </h2>
          </div>
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {attorneys.list.map((a, i) => (
            <div key={a.name}>
              <div className="relative mb-0 aspect-[4/5] overflow-hidden bg-beige/40">
                <Image
                  src={a.image}
                  alt={`Portrait of ${a.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-swiss-rule pt-3">
                <span className="block text-xs text-crimson">
                  Fig. 0{i + 3}
                </span>
                <h3 className="mt-1 text-base font-semibold tracking-tight text-swiss-black">
                  {a.name}
                </h3>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-swiss-gray">
                  {a.title}
                </p>
                <p className="mt-0.5 text-xs text-swiss-gray">{a.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
