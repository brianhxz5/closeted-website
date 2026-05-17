import Image from "next/image";

const screens = [
  { src: "/screenshots/right-now.jpg", label: "right now" },
  { src: "/screenshots/mixed-media.jpg", label: "what it rhymes with" },
  { src: "/screenshots/my-closet.jpg", label: "my closet" },
];

export default function AppScreenshots() {
  return (
    <section
      className="py-20 px-6 md:px-16 lg:px-24"
      style={{ background: "var(--bg)" }}
    >
      <div className="flex flex-col sm:flex-row items-end gap-6 sm:gap-8 justify-center">
        {screens.map((screen, i) => (
          <div
            key={screen.src}
            className="flex flex-col items-center gap-3"
            style={{
              transform: `translateY(${i === 0 ? "0px" : i === 1 ? "40px" : "20px"})`,
            }}
          >
            <div
              className="overflow-hidden shadow-xl"
              style={{
                borderRadius: "32px",
                width: i === 1 ? 200 : 175,
                border: "1px solid var(--border)",
              }}
            >
              <Image
                src={screen.src}
                alt={screen.label}
                width={919}
                height={1908}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <span
              className="text-xs"
              style={{
                fontFamily: "var(--font-space-mono)",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
              }}
            >
              {screen.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
