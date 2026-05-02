import { content, editorial } from "../../_lib/content";

export default function Masthead() {
  const { brand } = content;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-11 items-center border-b border-ink-editorial/15 bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#home"
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-crimson transition-opacity hover:opacity-70"
          aria-label={`${brand.name} — Home`}
        >
          {brand.short} · {brand.suffix}
        </a>

        <p className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-ink-editorial/45 md:block">
          {editorial.dateline}
        </p>

        <nav className="hidden items-center gap-6 lg:flex">
          {[
            { href: "#about",        label: "Editor's Note" },
            { href: "#practice",     label: "Contents" },
            { href: "#contributors", label: "Contributors" },
            { href: "#updates",      label: "On the Desk" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-editorial/55 transition-colors hover:text-ink-editorial"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-[10px] uppercase tracking-[0.25em] text-crimson transition-colors hover:text-crimson/70"
          >
            Contact →
          </a>
        </nav>

        <a
          href="#contact"
          className="font-mono text-[10px] uppercase tracking-[0.25em] text-crimson transition-colors hover:text-crimson/70 lg:hidden"
        >
          Contact →
        </a>
      </div>
    </header>
  );
}
