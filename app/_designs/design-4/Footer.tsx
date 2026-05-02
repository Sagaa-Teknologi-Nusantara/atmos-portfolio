import { content } from "../../_lib/content";

export default function Footer() {
  const { footer, brand } = content;

  return (
    <footer id="contact" className="bg-swiss-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="border-t border-swiss-rule py-6">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-swiss-gray">
            § 0.6 — Contact
          </span>
        </div>

        <div className="border-b border-t border-swiss-black pb-10 pt-8">
          <p
            aria-label={brand.short}
            className="select-none text-[clamp(4rem,14vw,12rem)] font-semibold leading-none tracking-tight text-swiss-black"
          >
            ATMOS
          </p>
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-swiss-black">
              The Firm
            </p>
            <p className="mb-4 text-sm text-swiss-gray">{brand.tagline}</p>
            <a
              href="#home"
              className="text-xs font-medium uppercase tracking-[0.2em] text-crimson hover:underline"
            >
              Return to top →
            </a>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-swiss-black">
              {footer.address.label}
            </p>
            <address className="not-italic text-sm leading-relaxed text-swiss-gray">
              {footer.address.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < footer.address.lines.length - 1 && <br />}
                </span>
              ))}
            </address>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-swiss-black">
              {footer.contact.label}
            </p>
            <ul className="space-y-2 text-sm text-swiss-gray">
              {footer.contact.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-crimson hover:underline"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-swiss-black">
              {footer.partners.label}
            </p>
            <p className="mb-4 text-xs text-swiss-gray">
              {footer.partners.preface}
            </p>
            <div className="space-y-3">
              {footer.partners.list.map((p) => (
                <div key={p.name}>
                  <p className="text-sm font-semibold text-swiss-black">
                    {p.name}
                  </p>
                  {p.website && (
                    <a
                      href={p.website.href}
                      className="text-xs text-crimson hover:underline"
                    >
                      {p.website.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-swiss-rule py-6 md:flex-row md:items-center">
          <p className="text-xs text-swiss-gray">
            © {new Date().getFullYear()} {footer.rights} · All Rights Reserved
          </p>
          <div className="flex gap-6 text-xs text-swiss-gray">
            <a href="#" className="hover:text-swiss-black hover:underline">Privacy</a>
            <a href="#" className="hover:text-swiss-black hover:underline">Terms</a>
            <a href="#" className="hover:text-swiss-black hover:underline">Notices</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
