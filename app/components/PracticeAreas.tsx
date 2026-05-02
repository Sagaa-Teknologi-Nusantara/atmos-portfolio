import Reveal from "./Reveal";

const areas = [
  {
    title: "Labor & Employment",
    description:
      "Workforce strategy, industrial relations, and compliance across jurisdictions.",
  },
  {
    title: "Antitrust & Competition",
    description:
      "Merger notifications, market conduct counsel, and regulator engagement.",
  },
  {
    title: "Insolvency & Bankruptcy",
    description:
      "Restructuring, PKPU, and creditor representation in complex proceedings.",
  },
  {
    title: "Corporate Restructuring, M&A",
    description:
      "Cross-border transactions, joint ventures, and corporate reorganization.",
  },
  {
    title: "Environment, Natural Resources, Oil & Gas",
    description:
      "Licensing, concessions, ESG compliance, and sector-specific regulation.",
  },
  {
    title: "Intellectual Property",
    description:
      "Portfolio protection, commercialization, and enforcement across markets.",
  },
  {
    title: "Public Policymaking & Corporate Regulatory",
    description:
      "Advocacy, policy shaping, and regulatory navigation for industry leaders.",
  },
  {
    title: "Dispute Resolution & Litigation",
    description:
      "Commercial arbitration, litigation, and cross-border dispute strategy.",
  },
];

function Roman({ n }: { n: number }) {
  const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];
  return (
    <span className="font-serif text-xs tracking-[0.3em] text-gold">
      {romans[n - 1] ?? n}
    </span>
  );
}

export default function PracticeAreas() {
  return (
    <section
      id="practice"
      className="relative bg-ink py-28 text-ivory lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-7">
            <p className="mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.5em] text-gold">
              <span className="h-px w-10 bg-gold" />
              Our Practice Area
            </p>
            <h2 className="font-serif text-4xl font-light leading-[1.1] tracking-tight md:text-5xl lg:text-[3.5rem]">
              Industry-focused counsel across
              <span className="italic text-gold-soft"> eight</span> core
              disciplines.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <p className="text-base leading-relaxed text-ivory/70 md:text-lg">
              Each practice is led by senior counsel with deep sector fluency,
              equipped to deliver considered, commercially grounded outcomes for
              every client engagement.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-px bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a, i) => (
            <Reveal
              key={a.title}
              delay={(i % 4) * 0.06}
              className="group relative flex flex-col justify-between bg-ink p-8 transition-colors duration-500 hover:bg-ink-soft lg:p-10"
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <Roman n={i + 1} />
                  <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
                </div>
                <h3 className="font-serif text-xl leading-snug text-ivory md:text-2xl">
                  {a.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/60">
                  {a.description}
                </p>
              </div>
              <span
                aria-hidden
                className="mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold/80 transition-colors group-hover:text-gold"
              >
                Learn More →
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
