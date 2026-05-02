import { content } from "../../_lib/content";

export default function NavBar() {
  const { brand } = content;

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-rule bg-canvas">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="font-medium tracking-tight text-slate">
          {brand.short}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {[
            { href: "#about", label: "About" },
            { href: "#practice", label: "Practice" },
            { href: "#team", label: "Team" },
            { href: "#insights", label: "Insights" },
            { href: "#contact", label: "Contact" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-soft transition-colors hover:text-slate"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-crimson px-5 py-2 text-sm font-medium text-ivory transition-colors hover:bg-crimson-deep"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
