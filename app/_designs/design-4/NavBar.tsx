import { content } from "../../_lib/content";

export default function NavBar() {
  const { brand } = content;

  return (
    <header className="h-12 border-b border-swiss-rule bg-swiss-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-swiss-black hover:underline"
        >
          {brand.short}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {[
            { href: "#about",        label: "Introduction" },
            { href: "#practice",     label: "Practice" },
            { href: "#team",         label: "Counsel" },
            { href: "#insights",     label: "Journal" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-swiss-black hover:underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="text-xs font-medium uppercase tracking-[0.2em] text-crimson hover:underline"
        >
          Contact →
        </a>
      </div>
    </header>
  );
}
