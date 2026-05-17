import Image from "next/image";

const TESTFLIGHT = "https://testflight.apple.com/join/yC9xaTwD";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-10">
      {/* faint backdrop so nav stays readable over hero imagery */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(245,241,232,0.92) 0%, rgba(245,241,232,0) 100%)",
        }}
      />

      {/* logo — swap to <img src="/logo.png"> once file is in public/ */}
      <a href="/" className="relative flex items-center gap-2.5" aria-label="closeted home">
        <Image src="/logo.svg" width={28} height={28} alt="" aria-hidden="true" />
        <span
          className="text-base font-semibold tracking-tight"
          style={{ color: "var(--text)", fontFamily: "var(--font-inter)" }}
        >
          closeted
        </span>
      </a>

      {/* CTA — hidden on xs to avoid overlap with wordmark */}
      <a
        href={TESTFLIGHT}
        target="_blank"
        rel="noopener noreferrer"
        className="relative hidden sm:inline-flex items-center text-xs px-4 py-2 transition-colors hover:bg-[var(--accent)] hover:text-white whitespace-nowrap"
        style={{
          fontFamily: "var(--font-space-mono)",
          color: "var(--accent)",
          border: "1px dashed var(--accent)",
          borderRadius: "3px",
          letterSpacing: "0.04em",
        }}
      >
        get early access →
      </a>
    </nav>
  );
}

