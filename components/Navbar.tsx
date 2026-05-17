"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10"
      style={{
        background: scrolled ? "rgba(245,241,232,0.95)" : "transparent",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease",
      }}
    >
      <a href="/" className="relative flex items-center gap-2.5" aria-label="closeted home">
        <Image src="/logo.png" width={28} height={28} alt="" aria-hidden="true" />
        <span
          className="text-base font-semibold tracking-tight"
          style={{ color: "var(--text)", fontFamily: "var(--font-inter)" }}
        >
          closeted
        </span>
      </a>

      <button
        onClick={onOpenModal}
        className="hidden sm:inline-flex items-center text-xs px-4 py-2 transition-colors hover:bg-[var(--accent)] hover:text-white whitespace-nowrap"
        style={{
          fontFamily: "var(--font-space-mono)",
          color: "var(--accent)",
          border: "1px dashed var(--accent)",
          borderRadius: "3px",
          letterSpacing: "0.04em",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        get early access →
      </button>
    </nav>
  );
}
