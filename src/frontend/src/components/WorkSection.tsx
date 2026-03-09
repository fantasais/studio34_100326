const WORK_ITEMS = [
  { id: 1, label: "Project 01" },
  { id: 2, label: "Project 02" },
  { id: 3, label: "Project 03" },
  { id: 4, label: "Project 04" },
];

export default function WorkSection() {
  return (
    <section
      data-ocid="work.section"
      className="relative"
      style={{ background: "oklch(0.97 0.006 80)" }}
    >
      {/* Top hairline */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, oklch(0.62 0.10 72 / 0.25), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 py-24 md:py-32">
        {/* Section header */}
        <div className="mb-16 md:mb-20 flex flex-col items-center text-center gap-4">
          <p
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 400,
              letterSpacing: "0.35em",
              fontSize: "clamp(0.55rem, 1.2vw, 0.7rem)",
              textTransform: "uppercase",
              color: "oklch(0.62 0.10 72)",
            }}
          >
            काम — Selected Work
          </p>
          <h2
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 200,
              letterSpacing: "0.22em",
              fontSize: "clamp(1.8rem, 4.5vw, 3rem)",
              textTransform: "uppercase",
              color: "oklch(0.12 0.006 60)",
              lineHeight: "1.1",
            }}
          >
            Our Projects
          </h2>
          <div
            style={{
              height: "1px",
              width: "min(200px, 40%)",
              background:
                "linear-gradient(to right, transparent, oklch(0.62 0.10 72 / 0.4), transparent)",
            }}
          />
        </div>

        {/* Project grid — 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {WORK_ITEMS.map((item) => (
            <div
              key={item.id}
              data-ocid={`work.item.${item.id}`}
              className="relative overflow-hidden"
              style={{
                aspectRatio: "4/3",
                background: "oklch(0.88 0.010 72 / 0.45)",
                border: "1px solid oklch(0.62 0.10 72 / 0.12)",
              }}
            >
              {/* Placeholder grid lines */}
              <svg
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="100%"
                  stroke="oklch(0.62 0.10 72 / 0.15)"
                  strokeWidth="1"
                />
                <line
                  x1="100%"
                  y1="0"
                  x2="0"
                  y2="100%"
                  stroke="oklch(0.62 0.10 72 / 0.15)"
                  strokeWidth="1"
                />
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="none"
                  stroke="oklch(0.62 0.10 72 / 0.12)"
                  strokeWidth="1"
                />
              </svg>

              {/* Centre crosshair */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  style={{
                    position: "relative",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      right: 0,
                      height: "1px",
                      background: "oklch(0.62 0.10 72 / 0.4)",
                      transform: "translateY(-50%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: 0,
                      bottom: 0,
                      width: "1px",
                      background: "oklch(0.62 0.10 72 / 0.4)",
                      transform: "translateX(-50%)",
                    }}
                  />
                </div>
              </div>

              {/* Label bottom-left */}
              <div
                className="absolute bottom-0 left-0 right-0 px-5 py-4 flex items-end justify-between"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.94 0.010 72 / 0.9) 0%, transparent 100%)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Barlow, sans-serif",
                    fontWeight: 300,
                    letterSpacing: "0.22em",
                    fontSize: "clamp(0.6rem, 1vw, 0.72rem)",
                    textTransform: "uppercase",
                    color: "oklch(0.35 0.006 60)",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontFamily: "Barlow, sans-serif",
                    fontWeight: 200,
                    letterSpacing: "0.1em",
                    fontSize: "clamp(0.55rem, 0.9vw, 0.65rem)",
                    color: "oklch(0.62 0.10 72 / 0.7)",
                    textTransform: "uppercase",
                  }}
                >
                  Image coming soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
