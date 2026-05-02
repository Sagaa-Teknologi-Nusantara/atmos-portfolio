import { content, editorial } from "../../_lib/content";

export default function Colophon() {
  const { footer, brand } = content;

  return (
    <footer id="contact" className="border-t-2 border-ink-editorial bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-12 flex items-start justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink-editorial/45">
            Colophon &amp; Masthead
          </span>
          <div className="text-right">
            <p className="font-serif text-2xl tracking-[0.2em] text-ink-editorial">
              ATMOS
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-crimson">
              {brand.short.replace("ATMOS LAW OFFICE", "Law Office")} · {brand.suffix}
            </p>
          </div>
        </div>

        <h2 className="mb-4 max-w-2xl font-serif text-3xl font-light leading-snug text-ink-editorial md:text-4xl">
          {footer.headline}
        </h2>
        <div className="mb-14 h-px w-14 bg-crimson" />

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="mb-5 font-mono text-[10px] uppercase tracking-[0.4em] text-ink-editorial">
              {footer.address.label}
            </h3>
            <address className="not-italic font-sans text-sm leading-relaxed text-ink-editorial/65">
              {footer.address.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < footer.address.lines.length - 1 && <br />}
                </span>
              ))}
            </address>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-[10px] uppercase tracking-[0.4em] text-ink-editorial">
              {footer.contact.label}
            </h3>
            <ul className="space-y-2 text-sm text-ink-editorial/65">
              {footer.contact.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-crimson"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="mb-5 font-mono text-[10px] uppercase tracking-[0.4em] text-ink-editorial">
              {footer.partners.label}
            </h3>
            <p className="mb-4 font-sans text-xs text-ink-editorial/45">
              {footer.partners.preface}
            </p>
            <div className="space-y-4">
              {footer.partners.list.map((p) => (
                <div key={p.name}>
                  <p className="font-serif text-sm text-ink-editorial">{p.name}</p>
                  {p.website && (
                    <a
                      href={p.website.href}
                      className="font-mono text-[9px] uppercase tracking-[0.2em] text-crimson transition-colors hover:text-crimson/70"
                    >
                      {p.website.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-3 border-t border-ink-editorial/20 pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-ink-editorial/40">
            © {new Date().getFullYear()} {footer.rights} · All Rights Reserved
          </p>
          <p className="font-mono text-[9px] italic tracking-[0.1em] text-ink-editorial/30">
            {editorial.setIn}
          </p>
        </div>
      </div>
    </footer>
  );
}
