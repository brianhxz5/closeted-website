const tones = [
  "#C8C0B0","#BEB6A8","#D0C8B8","#C4BAA8","#B8B098",
  "#CCB89A","#C0BAA4","#D4CAB8","#B4ACA0","#CAC0AC",
  "#BCA898","#C8BEA8","#B8B2A2","#D2C8B4","#BEB4A0",
  "#C2BAA6","#B0A898","#CCB8A0","#C6BEAA","#BAB0A0",
];

const layout: [number, number, number, number][] = [
  [1,1,1,2],[2,1,1,1],[3,1,1,2],[4,1,1,1],[5,1,1,2],
  [2,1,2,2],[4,1,2,2],
  [1,1,3,1],[3,1,3,2],[5,1,3,1],
  [1,1,4,2],[2,1,4,1],[4,1,4,1],[5,1,4,2],
  [2,1,5,2],[3,1,5,1],[4,1,5,2],
  [1,1,6,1],[3,1,6,1],[5,1,6,1],
];

function WardrobeMosaic() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "repeat(6, 1fr)",
          gap: "2px",
          width: "100%",
          height: "100%",
          opacity: 0.17,
          mixBlendMode: "multiply",
        }}
      >
        {layout.map(([col, colSpan, row, rowSpan], i) => (
          <div
            key={i}
            style={{
              gridColumn: `${col} / span ${colSpan}`,
              gridRow: `${row} / span ${rowSpan}`,
              background: tones[i % tones.length],
              borderRadius: "2px",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{ background: "var(--bg)", minHeight: "100svh" }}
    >
      <WardrobeMosaic />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-6 md:px-16 lg:px-24 pt-24 pb-12 md:pt-32 md:pb-16">
        {/* copy */}
        <div className="flex-1 max-w-xl w-full">
          <p
            className="text-xs uppercase tracking-widest mb-8"
            style={{ fontFamily: "var(--font-space-mono)", color: "var(--text-muted)", letterSpacing: "0.18em" }}
          >
            EARLY ACCESS
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
            style={{ color: "var(--text)", letterSpacing: "-0.02em", fontFamily: "var(--font-inter)" }}
          >
            you know what you like.
            <br />
            you just don&apos;t know it yet.
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed mb-10 max-w-md"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)", letterSpacing: "-0.01em" }}
          >
            closeted finds your taste in the films you rewatch, the textures you
            keep noticing, the fits you screenshot and forget. it connects the
            dots and makes your style legible. without the gatekeeping.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={onOpenModal}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--font-inter)",
                background: "var(--accent)",
                color: "#fff",
                borderRadius: "3px",
                letterSpacing: "-0.01em",
                border: "none",
                cursor: "pointer",
              }}
            >
              get early access <span aria-hidden="true">→</span>
            </button>
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-space-mono)", color: "var(--text-muted)", letterSpacing: "0.04em" }}
            >
              iOS · free · testflight
            </span>
          </div>
        </div>

        {/* phone video — stacked below on mobile, right column on desktop */}
        <div className="flex flex-1 justify-center lg:justify-end items-center w-full lg:w-auto">
          <div className="overflow-hidden shadow-2xl" style={{ borderRadius: "44px", width: 220 }}>
            <video autoPlay muted loop playsInline style={{ width: "100%", display: "block" }}>
              <source src="/onboarding-cropped.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg))" }}
      />
    </section>
  );
}
