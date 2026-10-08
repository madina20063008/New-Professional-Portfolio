"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Résumé" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header shell">
      <Link href="/" className="brand" aria-label="Madina Batoshova home">
        <span className="brand-mark">MB</span>
        <span>Madina Batoshova</span>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => {
          const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
          return <a key={item.href} href={item.href} className={active ? "is-active" : undefined} aria-current={active ? "page" : undefined}>{item.label}</a>;
        })}
      </nav>
      <a href="/contact" className={`header-cta desktop-cta ${pathname === "/contact" ? "is-active" : ""}`} aria-current={pathname === "/contact" ? "page" : undefined}>Let&apos;s talk <span>↗</span></a>
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <button type="button" className="mobile-menu-toggle" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)}><span/><span/><span/></button>
        {menuOpen && <div className="mobile-menu-panel">
          <nav aria-label="Mobile navigation">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return <a key={item.href} href={item.href} className={active ? "is-active" : undefined} aria-current={active ? "page" : undefined}>{item.label}<span>→</span></a>;
            })}
          </nav>
          <a href="/contact" className={`mobile-contact ${pathname === "/contact" ? "is-active" : ""}`}>Let&apos;s talk <span>↗</span></a>
        </div>}
      </div>
    </header>
  );
}
