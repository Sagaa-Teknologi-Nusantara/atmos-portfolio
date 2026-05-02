"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { content } from "../../_lib/content";

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight - 80;
      setDark(window.scrollY < threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "about", "practice", "attorneys", "updates", "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        dark
          ? "bg-transparent"
          : "bg-ivory/90 backdrop-blur-md border-b border-hairline"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#home"
          className="group flex items-center gap-2"
          aria-label={`${content.brand.name} — Home`}
        >
          <Image
            src={content.brand.logoMark}
            alt={content.brand.name}
            width={36}
            height={36}
            className="w-9 object-contain"
            style={{ height: "auto" }}
            priority
          />
          <span className="flex flex-col leading-none">
            <span
              className={`font-serif text-lg tracking-[0.35em] transition-colors duration-500 ${
                dark ? "text-ivory" : "text-crimson"
              }`}
            >
              ATMOS
            </span>
            <span
              className={`mt-1 text-[10px] tracking-[0.45em] transition-colors duration-500 ${
                dark ? "text-ivory/60" : "text-charcoal/70"
              }`}
            >
              LAW OFFICE
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {content.nav.map((l) => {
            const id = l.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm tracking-[0.18em] uppercase transition-colors duration-500 ${
                  dark
                    ? isActive
                      ? "text-ivory"
                      : "text-ivory/60 hover:text-ivory"
                    : isActive
                    ? "text-crimson"
                    : "text-charcoal/70 hover:text-crimson"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-gold transition-all duration-500 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
          <a
            href="#contact"
            className={`group relative inline-flex items-center gap-2 border px-5 py-2.5 text-xs uppercase tracking-[0.25em] transition-colors duration-500 ${
              dark
                ? "border-ivory/60 text-ivory hover:bg-ivory hover:text-ink"
                : "border-crimson text-crimson hover:bg-crimson hover:text-ivory"
            }`}
          >
            Contact Us
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 transition-all duration-300 ${
              dark ? "bg-ivory" : "bg-crimson"
            } ${open ? "translate-y-[6px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 transition-all duration-300 ${
              dark ? "bg-ivory" : "bg-crimson"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-6 transition-all duration-300 ${
              dark ? "bg-ivory" : "bg-crimson"
            } ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ivory md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-10 px-8">
              {content.nav.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                  className="font-serif text-4xl text-crimson"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
                className="mt-4 inline-flex items-center gap-2 border border-crimson px-8 py-3 text-xs uppercase tracking-[0.3em] text-crimson"
              >
                Contact Us →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
