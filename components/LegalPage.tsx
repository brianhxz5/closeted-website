import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

/* shared shell for text pages like /privacy and /support */
export default function LegalPage({
  label,
  title,
  effectiveDate,
  children,
}: {
  label: string;
  title: string;
  effectiveDate?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header
        className="flex items-center justify-between px-6 py-4 md:px-10"
        style={{ borderBottom: "1px solid var(--border)" }}
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="closeted home">
          <Image src="/logo.png" width={28} height={28} alt="" aria-hidden="true" />
          <span
            className="text-base font-semibold tracking-tight"
            style={{ color: "var(--text)", fontFamily: "var(--font-inter)" }}
          >
            closeted
          </span>
        </Link>
        <Link
          href="/"
          className="text-xs transition-opacity hover:opacity-60"
          style={{ fontFamily: "var(--font-space-mono)", color: "var(--text-muted)", letterSpacing: "0.04em" }}
        >
          ← back
        </Link>
      </header>

      <main className="px-6 md:px-16 lg:px-24 pt-16 pb-24">
        <article className="legal max-w-2xl">
          <p
            className="text-xs uppercase mb-6"
            style={{ fontFamily: "var(--font-space-mono)", color: "var(--text-muted)", letterSpacing: "0.18em" }}
          >
            {label}
          </p>
          <h1
            className="text-3xl md:text-4xl font-semibold leading-tight mb-4"
            style={{ color: "var(--text)", fontFamily: "var(--font-inter)", letterSpacing: "-0.02em" }}
          >
            {title}
          </h1>
          {effectiveDate && (
            <p
              className="text-xs mb-12"
              style={{ fontFamily: "var(--font-space-mono)", color: "var(--text-muted)", letterSpacing: "0.04em" }}
            >
              Effective {effectiveDate}
            </p>
          )}
          {children}
        </article>
      </main>

      <Footer />
    </>
  );
}
