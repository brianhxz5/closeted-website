/*
 * Shows the "WHAT IT RHYMES WITH" feature — the most differentiated part of
 * the product. A film, album, or city gets a companion interpretation, then
 * surfaces garments that share that feeling. Shown here as a static mockup
 * using real app UI patterns.
 *
 * Drop real screenshots into public/screenshots/ when ready:
 *   rhymes-with.png   — the Interstellar card + product grid from the app
 */

const cards = [
  {
    category: "FILM",
    title: "Interstellar",
    interpretation: "feels huge and engineered, like the idea is bigger than the room",
    accent: "var(--accent-secondary)",
  },
  {
    category: "ALBUM",
    title: "Blonde, Frank Ocean",
    interpretation: "worn-in, slightly unresolved. like wearing something borrowed",
    accent: "var(--accent-secondary)",
  },
  {
    category: "CITY",
    title: "Tokyo, Japan",
    interpretation: "layered without trying. every piece has history",
    accent: "var(--accent-secondary)",
  },
];

export default function RhymesWith() {
  return (
    <section
      className="py-24 px-6 md:px-16 lg:px-24"
      style={{ background: "var(--bg)" }}
    >
      {/* section label */}
      <p
        className="text-xs uppercase tracking-widest mb-12"
        style={{
          fontFamily: "var(--font-space-mono)",
          color: "var(--text-muted)",
          letterSpacing: "0.18em",
        }}
      >
        WHAT IT RHYMES WITH
      </p>

      <div className="max-w-5xl">
        {/* headline */}
        <h2
          className="text-2xl md:text-3xl font-semibold mb-4 max-w-lg"
          style={{
            color: "var(--text)",
            fontFamily: "var(--font-inter)",
            letterSpacing: "-0.02em",
          }}
        >
          your taste shows up in everything.
        </h2>
        <p
          className="text-base mb-16 max-w-md"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-inter)",
            letterSpacing: "-0.01em",
            lineHeight: "1.7",
          }}
        >
          a film, an album, a city. closeted finds what they have in common
          with what you keep reaching for.
        </p>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-5 flex flex-col gap-3"
              style={{
                border: "1px dashed var(--border)",
                borderRadius: "3px",
                background: "var(--card)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                className="text-xs font-medium"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  color: card.accent,
                  letterSpacing: "0.08em",
                }}
              >
                {card.category}
              </span>
              <p
                className="text-lg font-semibold leading-snug"
                style={{
                  color: "var(--text)",
                  fontFamily: "var(--font-inter)",
                  letterSpacing: "-0.01em",
                }}
              >
                {card.title}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {card.interpretation}
              </p>
              <span
                className="text-xs mt-auto pt-2"
                style={{
                  fontFamily: "var(--font-space-mono)",
                  color: card.accent,
                  letterSpacing: "0.04em",
                }}
              >
                pieces that rhyme →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
