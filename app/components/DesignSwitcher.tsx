"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const designs = [
  { label: "01", href: "/" },
  { label: "02", href: "/design-2" },
  { label: "03", href: "/design-3" },
  { label: "04", href: "/design-4" },
];

type Surface = "dark" | "light";

export default function DesignSwitcher({
  surface = "dark",
}: {
  surface?: Surface;
}) {
  const pathname = usePathname();

  const isDark = surface === "dark";

  const pillCls = isDark
    ? "border-ivory/20 bg-ink/75"
    : "border-ink-editorial/20 bg-paper/90";
  const labelCls = isDark ? "text-ivory/40" : "text-ink-editorial/40";
  const sepCls = isDark ? "bg-ivory/20" : "bg-ink-editorial/20";
  const activeCls = isDark
    ? "bg-gold text-ink font-medium"
    : "bg-crimson text-ivory font-medium";
  const inactiveCls = isDark
    ? "text-ivory/55 hover:text-ivory"
    : "text-ink-editorial/55 hover:text-ink-editorial";

  return (
    <div className="fixed left-1/2 top-4 z-70 -translate-x-1/2">
      <div
        className={`flex items-center gap-0.5 rounded-full border px-1.5 py-1 backdrop-blur-md ${pillCls}`}
      >
        <span
          className={`px-2.5 text-[9px] uppercase tracking-[0.4em] ${labelCls}`}
        >
          Design
        </span>
        <span className={`mr-1 h-3 w-px ${sepCls}`} />
        {designs.map((d) => {
          const isActive =
            d.href === "/" ? pathname === "/" : pathname.startsWith(d.href);
          return (
            <Link
              key={d.href}
              href={d.href}
              className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.3em] transition-all duration-300 ${
                isActive ? activeCls : inactiveCls
              }`}
            >
              {d.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
