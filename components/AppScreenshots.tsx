import Image from "next/image";

const screens = [
  {
    src: "/screenshots/right-now.jpg",
    label: "right now",
    description: "ten pieces, curated fresh to your taste.",
    w: 1206, h: 2461,
  },
  {
    src: "/screenshots/mixed-media.jpg",
    label: "what it rhymes with",
    description: "find what your references have in common.",
    w: 1206, h: 2461,
  },
  {
    src: "/screenshots/my-closet.jpg",
    label: "my closet",
    description: "your style, made legible over time.",
    w: 919, h: 1808,
  },
];

function PhoneFrame({ screen, size = 175 }: { screen: typeof screens[0]; size?: number }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="overflow-hidden shadow-xl"
        style={{ borderRadius: "32px", width: size, border: "1px solid var(--border)" }}
      >
        <Image
          src={screen.src}
          alt={screen.label}
          width={screen.w}
          height={screen.h}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <span
          className="text-xs"
          style={{ fontFamily: "var(--font-space-mono)", color: "var(--text-muted)", letterSpacing: "0.08em" }}
        >
          {screen.label}
        </span>
        <span
          className="text-xs"
          style={{ fontFamily: "var(--font-inter)", color: "var(--text-muted)", opacity: 0.7, maxWidth: size }}
        >
          {screen.description}
        </span>
      </div>
    </div>
  );
}

export default function AppScreenshots() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24" style={{ background: "var(--bg)" }}>
      {/* mobile carousel */}
      <div
        className="md:hidden flex gap-8 -mx-6 px-6 pb-4"
        style={{ overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
      >
        {screens.map((screen) => (
          <div key={screen.src} className="shrink-0" style={{ scrollSnapAlign: "center" }}>
            <PhoneFrame screen={screen} size={200} />
          </div>
        ))}
      </div>

      {/* desktop staggered */}
      <div className="hidden md:flex items-end gap-8 justify-center">
        {screens.map((screen, i) => (
          <div
            key={screen.src}
            style={{ transform: `translateY(${i === 0 ? "0px" : i === 1 ? "40px" : "20px"})` }}
          >
            <PhoneFrame screen={screen} size={i === 1 ? 200 : 175} />
          </div>
        ))}
      </div>
    </section>
  );
}
