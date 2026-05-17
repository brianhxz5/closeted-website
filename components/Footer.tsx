export default function Footer() {
  return (
    <footer
      className="px-6 md:px-16 lg:px-24 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
      }}
    >
      <span
        className="text-sm font-semibold"
        style={{
          color: "var(--text-muted)",
          fontFamily: "var(--font-inter)",
          letterSpacing: "-0.01em",
        }}
      >
        closeted
      </span>

      <nav className="flex items-center gap-6">
        {[
          { label: "instagram", href: "https://instagram.com/closeted.app" },
          { label: "privacy", href: "/privacy" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-xs transition-colors hover:opacity-60"
            style={{
              fontFamily: "var(--font-space-mono)",
              color: "var(--text-muted)",
              letterSpacing: "0.04em",
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
