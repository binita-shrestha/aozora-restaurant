"use client";

import Link from "next/link";
import { useState } from "react";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About Us", href: "/#about" },
  { label: "Contact", href: "/#contact" },
  {
    label: "Order Online",
    href: "https://apps.pokharafooddelivery.com/restaurants/azora-japanese-restaurant-CbfoZ6BGZmyvZ0K",
  },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-aozora-dark/10 bg-aozora-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-aozora-dark">
          Aozora
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 md:flex"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.label === "Order Online" ? "_blank" : undefined}
              rel={link.label === "Order Online" ? "noopener noreferrer" : undefined}
              className="font-medium text-aozora-dark hover:text-aozora-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile navigation toggle */}
        <button
          type="button"
          className="text-2xl text-aozora-dark md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((previous) => !previous)}
        >
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="flex flex-col gap-4 border-t border-aozora-dark/10 px-6 py-4 md:hidden"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.label === "Order Online" ? "_blank" : undefined}
              rel={link.label === "Order Online" ? "noopener noreferrer" : undefined}
              className="text-aozora-dark hover:text-aozora-red"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
