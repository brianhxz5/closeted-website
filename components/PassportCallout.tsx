"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function PassportCallout({ onOpenModal }: { onOpenModal: () => void }) {
  const { ref, inView } = useInView<HTMLElement>();

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
    transitionDelay: `${delay}s`,
  });

  return (
    <section
      ref={ref}
      className="py-24 px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:items-center"
      style={{ background: "var(--dark-bg)" }}
    >
      {/* left — copy */}
      <div className="flex-1 max-w-md">
        <p
          className="text-xs uppercase tracking-widest mb-8"
          style={{
            fontFamily: "var(--font-space-mono)",
            color: "#8C8C8C",
            letterSpacing: "0.18em",
            ...fadeUp(0),
          }}
        >
          STYLE PASSPORT
        </p>
        <h2
          className="text-2xl md:text-3xl font-semibold leading-snug mb-6"
          style={{
            color: "#fff",
            fontFamily: "var(--font-inter)",
            letterSpacing: "-0.02em",
            ...fadeUp(0.1),
          }}
        >
          your style, made legible.
        </h2>
        <p
          className="text-sm leading-relaxed mb-10"
          style={{
            color: "#8C8C8C",
            fontFamily: "var(--font-inter)",
            lineHeight: "1.75",
            ...fadeUp(0.18),
          }}
        >
          after a while, closeted knows enough to give you a style passport. a
          single card that names what keeps pulling you in. yours to keep,
          yours to share.
        </p>
        <button
          onClick={onOpenModal}
          className="inline-flex items-center gap-2 text-xs px-5 py-3 transition-opacity hover:opacity-70"
          style={{
            fontFamily: "var(--font-space-mono)",
            color: "var(--accent-secondary)",
            border: "1px dashed var(--accent-secondary)",
            borderRadius: "3px",
            letterSpacing: "0.04em",
            background: "transparent",
            cursor: "pointer",
            ...fadeUp(0.26),
          }}
        >
          get yours →
        </button>
      </div>

      {/* right — screenshot */}
      <div
        className="w-full lg:flex-1 flex justify-center"
        style={fadeUp(0.15)}
      >
        <div
          className="overflow-hidden shadow-2xl"
          style={{ borderRadius: "36px", width: 260 }}
        >
          <Image
            src="/screenshots/style-passport.jpg"
            alt="Style Passport"
            width={919}
            height={2000}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
