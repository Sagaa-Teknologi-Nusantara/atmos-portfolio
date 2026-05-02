import Image from "next/image";
import Reveal from "../../components/Reveal";
import { content } from "../../_lib/content";

export default function Footer() {
  const { footer, brand } = content;

  return (
    <footer id="contact" className="relative bg-ink text-ivory">
      <div aria-hidden className="hairline" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-3xl">
          <div className="mb-8 inline-block bg-ivory px-6 py-5">
            <Image
              src={brand.logoText}
              alt={brand.name}
              width={130}
              height={175}
              className="w-[130px] object-contain"
              style={{ height: "auto" }}
            />
          </div>
          <h2 className="font-serif text-3xl font-light leading-snug text-ivory md:text-4xl">
            {footer.headline}
          </h2>
          {footer.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`${i === 0 ? "mt-6" : "mt-4"} text-base leading-relaxed text-ivory/70`}
            >
              {p}
            </p>
          ))}
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-ivory/10 pt-16 md:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.05}>
            <h3 className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
              {footer.address.label}
            </h3>
            <address className="not-italic text-sm leading-relaxed text-ivory/75">
              {footer.address.lines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < footer.address.lines.length - 1 && <br />}
                </span>
              ))}
            </address>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
              {footer.contact.label}
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed text-ivory/75">
              {footer.contact.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-gold"
                  >
                    {item.value}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-2 lg:col-span-1">
            <h3 className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
              {footer.partners.label}
            </h3>
            <p className="mb-6 text-sm text-ivory/70">{footer.partners.preface}</p>
            <div className="space-y-6 text-sm leading-relaxed text-ivory/75">
              {footer.partners.list.map((partner) => (
                <div key={partner.name}>
                  <p className="font-serif text-base text-ivory">{partner.name}</p>
                  <p className="mt-1 text-ivory/70">
                    {partner.address.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < partner.address.length - 1 && <br />}
                      </span>
                    ))}
                    {partner.phone && (
                      <>
                        <br />
                        {partner.phone}
                      </>
                    )}
                    {partner.website && (
                      <>
                        <br />
                        <a
                          href={partner.website.href}
                          className="transition-colors hover:text-gold"
                        >
                          {partner.website.label}
                        </a>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-[10px] uppercase tracking-[0.3em] text-ivory/50 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {footer.rights} — All Rights Reserved
          </p>
          <p className="text-gold/80">{footer.motto}</p>
        </div>
      </div>
    </footer>
  );
}
