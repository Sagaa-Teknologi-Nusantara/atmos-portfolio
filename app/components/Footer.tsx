import Image from "next/image";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-ink text-ivory">
      <div aria-hidden className="hairline" />
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal className="max-w-3xl">
          <div className="mb-8 inline-block bg-ivory px-6 py-5">
            <Image
              src="/logo/atmos-text-logo.png"
              alt="Atmos Law Office"
              width={130}
              height={175}
              className="w-[130px] object-contain"
              style={{ height: "auto" }}
            />
          </div>
          <h2 className="font-serif text-3xl font-light leading-snug text-ivory md:text-4xl">
            Building strong, collaborative relationships with every client we
            serve.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ivory/70">
            ATMOS LAW OFFICE (ATMOS L.L.P) is committed to building strong and
            collaborative relationships with our clients. We understand that
            every client&rsquo;s situation is unique, and we take the time to
            listen, understand their goals, and develop tailored strategies to
            meet their needs.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ivory/70">
            We prioritize responsiveness, professionalism, and a results-driven
            approach to ensure the best possible outcomes for our clients.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 border-t border-ivory/10 pt-16 md:grid-cols-2 lg:grid-cols-3">
          <Reveal delay={0.05}>
            <h3 className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
              Address
            </h3>
            <address className="not-italic text-sm leading-relaxed text-ivory/75">
              Pondok Indah Office Tower 2, 17th Floor, Suite 1710
              <br />
              Jl. Sultan Iskandar Muda, Kav. V-TA
              <br />
              Pondok Indah, Jakarta Selatan 12310
            </address>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm leading-relaxed text-ivory/75">
              <li>
                <a
                  href="tel:+62217592820"
                  className="transition-colors hover:text-gold"
                >
                  (021) 7592 2820
                </a>
              </li>
              <li>
                <a
                  href="mailto:office@atmos.law"
                  className="transition-colors hover:text-gold"
                >
                  office@atmos.law
                </a>
              </li>
              <li>
                <a
                  href="tel:+62217592821"
                  className="transition-colors hover:text-gold"
                >
                  (021) 7592 2821
                </a>
              </li>
              <li>
                <a
                  href="https://www.atmos.law"
                  className="transition-colors hover:text-gold"
                >
                  www.atmos.law
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="md:col-span-2 lg:col-span-1">
            <h3 className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold">
              Strategic Cooperation
            </h3>
            <p className="mb-6 text-sm text-ivory/70">
              Our attorneys are members of:
            </p>
            <div className="space-y-6 text-sm leading-relaxed text-ivory/75">
              <div>
                <p className="font-serif text-base text-ivory">
                  International Bar Association
                </p>
                <p className="mt-1 text-ivory/70">
                  Chancery House 53-64 Chancery Lane
                  <br />
                  London WC2A 1QS
                  <br />
                  +44 (0) 20 7842 0090
                  <br />
                  <a
                    href="https://www.ibanet.org"
                    className="transition-colors hover:text-gold"
                  >
                    www.ibanet.org
                  </a>
                </p>
              </div>
              <div>
                <p className="font-serif text-base text-ivory">
                  Asian Law &amp; Society Association (ALSA)
                </p>
                <p className="mt-1 text-ivory/70">
                  ALSA Executive Office
                  <br />
                  8-901 Waseda Law School
                  <br />
                  1-6-1 Nishi Waseda, Shinjuku, Tokyo
                  <br />
                  JAPAN 169 – 8050
                </p>
              </div>
              <div>
                <p className="font-serif text-base text-ivory">
                  Employment Lawyers Association
                </p>
                <p className="mt-1 text-ivory/70">
                  ELA Administration Office
                  <br />
                  PO Box 1609
                  <br />
                  High Wycombe
                  <br />
                  HP11 9NG
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-[10px] uppercase tracking-[0.3em] text-ivory/50 md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Atmos Law Office — All Rights Reserved
          </p>
          <p className="text-gold/80">
            Utmost Good Faith · Utmost Excellent Service
          </p>
        </div>
      </div>
    </footer>
  );
}
