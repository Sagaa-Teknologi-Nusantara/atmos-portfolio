import { content } from "../../_lib/content";

export default function Footer() {
  const { footer, brand } = content;

  return (
    <footer id="contact" className="bg-stone-100">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-4 text-2xl font-medium tracking-tight text-slate">
              {brand.short}
            </p>
            <p className="mb-6 text-sm text-slate-soft">
              {brand.tagline}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-crimson-deep"
            >
              Schedule a consultation
              <span>→</span>
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-medium tracking-[0.25em] text-slate">
              {footer.address.label}
            </h3>
            <address className="not-italic text-sm leading-relaxed text-slate-soft">
              {footer.address.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < footer.address.lines.length - 1 && <br />}
                </span>
              ))}
            </address>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-medium tracking-[0.25em] text-slate">
              {footer.contact.label}
            </h3>
            <ul className="space-y-2 text-sm text-slate-soft">
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

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-medium tracking-[0.25em] text-slate">
              {footer.partners.label}
            </h3>
            <p className="mb-4 text-xs text-slate-soft">
              {footer.partners.preface}
            </p>
            <div className="space-y-3">
              {footer.partners.list.map((p) => (
                <div key={p.name}>
                  <p className="text-sm font-medium text-slate">{p.name}</p>
                  {p.website && (
                    <a
                      href={p.website.href}
                      className="text-xs text-crimson transition-colors hover:text-crimson-deep"
                    >
                      {p.website.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-rule pt-8 md:flex-row md:items-center">
          <p className="text-xs text-slate-soft">
            © {new Date().getFullYear()} {footer.rights} · All Rights Reserved
          </p>
          <div className="flex gap-6 text-xs text-slate-soft">
            <a href="#" className="transition-colors hover:text-crimson">Privacy</a>
            <a href="#" className="transition-colors hover:text-crimson">Terms</a>
            <a href="#" className="transition-colors hover:text-crimson">Notices</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
