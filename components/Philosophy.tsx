const beats = [
  {
    label: "NOT A FEED",
    headline: "ten pieces, not ten thousand.",
    body: "every session is finite by design. no endless scroll, no dopamine loop. just a curated set that rotates — and asks you to actually look.",
    mdOffset: "0px",
  },
  {
    label: "NOT SHOPPING",
    headline: "style is cumulative.",
    body: "the films you rewatch, the textures you keep touching, the music you return to — they're already telling you something. closeted listens.",
    mdOffset: "64px",
  },
  {
    label: "NOT A LABEL",
    headline: "taste is discovered, not assigned.",
    body: "the app doesn't tell you who you are on day one. it helps you notice what keeps pulling you in, and makes that legible over time.",
    mdOffset: "32px",
  },
];

function Beat({ beat }: { beat: typeof beats[0] }) {
  return (
    <div className="flex flex-col gap-3">
      <span
        className="text-xs uppercase tracking-widest"
        style={{ fontFamily: "var(--font-space-mono)", color: "var(--text-muted)", letterSpacing: "0.18em" }}
      >
        {beat.label}
      </span>
      <h3
        className="text-lg font-semibold leading-snug"
        style={{ color: "var(--text)", fontFamily: "var(--font-inter)", letterSpacing: "-0.02em" }}
      >
        {beat.headline}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-muted)", fontFamily: "var(--font-inter)", lineHeight: "1.75" }}
      >
        {beat.body}
      </p>
    </div>
  );
}

export default function Philosophy() {
  return (
    <section
      className="py-24 px-6 md:px-16 lg:px-24"
      style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}
    >
      {/* mobile carousel */}
      <div
        className="md:hidden flex gap-8 -mx-6 px-6 pb-4"
        style={{ overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
      >
        {beats.map((beat) => (
          <div
            key={beat.label}
            className="shrink-0"
            style={{ width: "80vw", scrollSnapAlign: "start" }}
          >
            <Beat beat={beat} />
          </div>
        ))}
      </div>

      {/* desktop staggered grid */}
      <div className="hidden md:grid grid-cols-3 gap-12 md:gap-8 md:items-start max-w-5xl">
        {beats.map((beat) => (
          <div
            key={beat.label}
            style={{ ["--md-offset" as string]: beat.mdOffset }}
            className="md:[margin-top:var(--md-offset)]"
          >
            <Beat beat={beat} />
          </div>
        ))}
      </div>
    </section>
  );
}
