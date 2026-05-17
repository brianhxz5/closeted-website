/*
 * Dark section — showcases the Style Passport, which is the virality hook.
 * Uses the design language from the dark closet screen (#2A2622 bg).
 *
 * The passport card is rendered as a faithful HTML/CSS recreation of the
 * in-app shared card. When real screenshots are available, swap the
 * mock card for an <Image> from public/screenshots/passport-share.png.
 */

const swatchColors = ["#4A5B6B", "#6B7E8C", "#7BA4B5"];

const aesthetics = [
  { label: "techwear", style: { fontStyle: "italic", fontWeight: 600 } },
  { label: "streetwear", style: { fontStyle: "italic", fontWeight: 600 } },
  { label: "y2k", style: { fontWeight: 400 } },
];

export default function PassportCallout({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section
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
          }}
        >
          after a while, closeted knows enough to give you a style passport — a
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
          }}
        >
          get yours →
        </button>
      </div>

      {/* right — passport card mockup */}
      <div className="flex-1 flex justify-center lg:justify-end">
        <PassportCard />
      </div>
    </section>
  );
}

function PassportCard() {
  /* 3×3 texture grid — placeholders until real user photos are available */
  const gridSwatches = [
    "var(--accent)",
    "#3A3530",
    "#4A5568",
    "#8B7355",
    "#2D5016",
    "#1A1A2E",
    "#2C3E50",
    "#4A3728",
    "#6B7A8D",
  ];

  return (
    <div
      className="w-full max-w-sm overflow-hidden shadow-2xl"
      style={{ borderRadius: "6px", background: "var(--dark-card)" }}
    >
      {/* 3×3 texture grid */}
      <div className="grid grid-cols-3" style={{ height: "180px" }}>
        {gridSwatches.map((color, i) => (
          <div
            key={i}
            style={{ background: color, opacity: 0.85 }}
          />
        ))}
      </div>

      {/* card content */}
      <div className="p-5 flex flex-col gap-3">
        {/* color palette dots */}
        <div className="flex gap-2">
          {swatchColors.map((c) => (
            <div
              key={c}
              className="rounded-full"
              style={{ width: 20, height: 20, background: c }}
            />
          ))}
        </div>

        {/* passport headline */}
        <p
          className="text-2xl font-bold leading-tight"
          style={{
            color: "#fff",
            fontFamily: "var(--font-inter)",
            letterSpacing: "-0.02em",
          }}
        >
          pockets are a personality
        </p>

        {/* aesthetics */}
        <div className="flex flex-col gap-0.5">
          {aesthetics.map((a) => (
            <span
              key={a.label}
              className="text-base leading-snug"
              style={{
                fontFamily: "var(--font-newsreader)",
                color: "#fff",
                ...a.style,
              }}
            >
              {a.label}
            </span>
          ))}
        </div>

        {/* descriptor */}
        <p
          className="text-sm"
          style={{ color: "#8C8C8C", fontFamily: "var(--font-inter)" }}
        >
          pulled toward hard, precise, sharp.
        </p>

        {/* share row */}
        <div className="flex items-center justify-between pt-2 mt-1" style={{ borderTop: "1px solid #3A3530" }}>
          <span
            className="text-xs"
            style={{
              fontFamily: "var(--font-space-mono)",
              color: "#555",
              letterSpacing: "0.04em",
            }}
          >
            updated may 2026
          </span>
          <span
            className="text-xs font-semibold"
            style={{ color: "var(--accent-secondary)", fontFamily: "var(--font-inter)" }}
          >
            closeted
          </span>
        </div>
      </div>
    </div>
  );
}
