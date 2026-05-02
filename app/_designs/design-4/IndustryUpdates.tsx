import Image from "next/image";
import { content } from "../../_lib/content";

export default function IndustryUpdates() {
  const { updates } = content;
  const [lead, ...rest] = updates.list;

  return (
    <section id="insights" className="bg-swiss-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-swiss-gray">
            § 0.5 — Journal
          </span>
          <div className="h-px flex-1 bg-swiss-rule" />
          <a
            href="#"
            className="text-xs font-medium uppercase tracking-[0.2em] text-swiss-black hover:underline"
          >
            All entries →
          </a>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-swiss-black">
            {updates.title}{" "}
            <span className="text-crimson">{updates.titleAccent}</span>
          </h2>
        </div>

        <div className="mb-10 grid items-start gap-8 border-b border-swiss-rule pb-10 lg:grid-cols-12">
          <div className="relative lg:col-span-5">
            <div className="relative aspect-video overflow-hidden bg-beige/40">
              <Image
                src={lead.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex items-center gap-3">
              <span className="text-xs text-crimson">Fig. 07</span>
              <span className="text-xs uppercase tracking-[0.15em] text-swiss-gray">
                {lead.category}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="mb-3 block text-xs uppercase tracking-[0.2em] text-swiss-gray">
              {lead.date}
            </span>
            <h3 className="mb-4 text-2xl font-semibold tracking-tight text-swiss-black">
              {lead.title}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-swiss-gray">
              {updates.description}
            </p>
            <a
              href="#"
              className="text-xs font-medium uppercase tracking-[0.2em] text-swiss-black hover:underline"
            >
              Read article →
            </a>
          </div>
        </div>

        <div className="border-t border-swiss-rule">
          {rest.map((u) => (
            <div
              key={u.title}
              className="group grid items-center border-b border-swiss-rule py-5 lg:grid-cols-12"
            >
              <span className="text-xs text-swiss-gray lg:col-span-2">
                {u.date}
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-crimson lg:col-span-2">
                {u.category}
              </span>
              <h3 className="text-base font-semibold tracking-tight text-swiss-black transition-colors group-hover:text-crimson lg:col-span-7">
                {u.title}
              </h3>
              <div className="flex justify-end lg:col-span-1">
                <span className="text-sm text-swiss-gray transition-colors group-hover:text-crimson">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
