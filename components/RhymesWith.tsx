"use client";

import { useInView } from "@/hooks/useInView";

const cards = [
  {
    category: "FILM",
    title: "Interstellar",
    interpretation: "feels huge and engineered, like the idea is bigger than the room",
    accent: "var(--accent-secondary)",
    mdOffset: "0px",
  },
  {
    category: "ALBUM",
    title: "Blonde, Frank Ocean",
    interpretation: "worn-in, slightly unresolved. like wearing something borrowed",
    accent: "var(--accent-secondary)",
    mdOffset: "52px",
  },
  {
    category: "CITY",
    title: "Tokyo, Japan",
    interpretation: "layered without trying. every piece has history",
    accent: "var(--accent-secondary)",
    mdOffset: "28px",
  },
];

function Card({ card }: { card: typeof cards[0] }) {
  return (
    <div
      className="p-5 flex flex-col gap-3 h-full"
      style={{ border: "1px dashed var(--border)", borderRadius: "3px" }}
    >
      <span
        className="text-xs font-medium"
        style={{ fontFamily: "var(--font-space-mono)", color: card.accent, letterSpacing: "0.08em" }}
      >
        {card.category}
      </span>
      <p
        className="text-lg font-semibold leading-snug"
        style={{ color: "var(--text)", fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}
      >
        {card.title}
      </p>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)" }}
      >
        {card.interpretation}
      </p>
      <span
        className="text-xs mt-auto pt-2"
        style={{ fontFamily: "var(--font-space-mono)", color: card.accent, letterSpacing: "0.04em" }}
      >
        pieces that rhyme →
      </span>
    </div>
  );
}

export default function RhymesWith() {
  const { ref: headerRef, inView: headerInView } = useInView<HTMLDivElement>();
  const { ref: cardsRef, inView: cardsInView } = useInView<HTMLDivElement>();

  const fadeUp = (delay: number): React.CSSProperties => ({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
    transitionDelay: `${delay}s`,
  });

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24" style={{ background: "var(--bg)" }}>
      <div ref={headerRef}>
        <p
          className="text-xs uppercase tracking-widest mb-12"
          style={{ fontFamily: "var(--font-space-mono)", color: "var(--text-muted)", letterSpacing: "0.18em", ...fadeUp(0) }}
        >
          WHAT IT RHYMES WITH
        </p>

        <div className="max-w-5xl">
          <h2
            className="text-2xl md:text-3xl font-semibold mb-4 max-w-lg"
            style={{ color: "var(--text)", fontFamily: "var(--font-inter)", letterSpacing: "-0.02em", ...fadeUp(0.08) }}
          >
            your taste shows up in everything.
          </h2>
          <p
            className="text-base mb-12 max-w-md"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)", letterSpacing: "-0.01em", lineHeight: "1.7", ...fadeUp(0.16) }}
          >
            a film, an album, a city. closeted finds what they have in common
            with what you keep reaching for.
          </p>
        </div>
      </div>

      <div className="max-w-5xl">
        {/* mobile carousel */}
        <div
          className="md:hidden flex gap-4 -mx-6 px-6 pb-4"
          style={{ overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="shrink-0"
              style={{ width: "80vw", scrollSnapAlign: "start" }}
            >
              <Card card={card} />
            </div>
          ))}
        </div>

        {/* desktop staggered grid */}
        <div ref={cardsRef} className="hidden md:grid grid-cols-3 gap-4 md:items-start">
          {cards.map((card, i) => (
            <div
              key={card.title}
              style={{
                ["--md-offset" as string]: card.mdOffset,
                opacity: cardsInView ? 1 : 0,
                transform: cardsInView ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: `${i * 0.1}s`,
              }}
              className="md:[margin-top:var(--md-offset)]"
            >
              <Card card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
