import { content } from "../../_lib/content";

export default function PracticeAreas() {
  const { practiceAreas } = content;

  return (
    <section id="practice" className="bg-swiss-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-swiss-gray">
            § 0.3 — Practice
          </span>
          <div className="h-px flex-1 bg-swiss-rule" />
        </div>

        <div className="mb-12 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-semibold tracking-tight text-swiss-black">
              {practiceAreas.title}{" "}
              <span className="text-crimson">{practiceAreas.titleAccent}</span>{" "}
              {practiceAreas.titleSuffix}
            </h2>
          </div>
          <div className="flex items-end lg:col-span-6">
            <p className="text-sm text-swiss-gray">
              {practiceAreas.description}
            </p>
          </div>
        </div>

        <div className="border-t border-swiss-rule">
          {practiceAreas.areas.map((area, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={area.title}
                className="group relative border-b border-swiss-rule"
              >
                <div className="absolute bottom-0 left-0 h-px w-0 bg-crimson transition-all duration-500 group-hover:w-full" />
                <div className="grid items-center py-6 lg:grid-cols-12">
                  <span className="text-4xl font-semibold tracking-tight text-swiss-black lg:col-span-2">
                    {num}
                  </span>
                  <h3 className="text-xl font-semibold tracking-tight text-swiss-black lg:col-span-5">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm text-swiss-gray lg:col-span-4 lg:mt-0">
                    {area.description}
                  </p>
                  <div className="hidden items-center justify-end lg:col-span-1 lg:flex">
                    <span className="text-sm text-swiss-gray transition-colors group-hover:text-crimson">
                      →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
