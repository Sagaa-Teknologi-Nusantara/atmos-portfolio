"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const designs = [
  { label: "01", href: "/" },
  { label: "02", href: "/design-2" },
  { label: "03", href: "/design-3" },
];

export default function DesignSwitcher() {
  const pathname = usePathname();

  return (
    <div className="fixed left-1/2 top-4 z-[70] -translate-x-1/2">
      <div className="flex items-center gap-0.5 rounded-full border border-ivory/20 bg-ink/75 px-1.5 py-1 backdrop-blur-md">
        <span className="px-2.5 text-[9px] uppercase tracking-[0.4em] text-ivory/40">
          Design
        </span>
        <span className="mr-1 h-3 w-px bg-ivory/20" />
        {designs.map((d) => {
          const isActive =
            d.href === "/"
              ? pathname === "/"
              : pathname.startsWith(d.href);
          return (
            <Link
              key={d.href}
              href={d.href}
              className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.3em] transition-all duration-300 ${
                isActive
                  ? "bg-gold text-ink font-medium"
                  : "text-ivory/55 hover:text-ivory"
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
