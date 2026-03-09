const SERVICE_PILLARS = [
  {
    title: "Design",
    hindi: "रचना",
    description:
      "Concept Ideation / Form Language Development / Brand Identity and Design Language for vehicles and mobility products",
  },
  {
    title: "Sculpting",
    hindi: "संरचना",
    description:
      "Clay Modelling / Class A Sculpting / CAD Design / Precision CNC Milling to bring ideas to physical reality.",
  },
  {
    title: "Prototyping",
    hindi: "खाका",
    description:
      "Early concept bucks for DESIGN VERIFICATION to pre production FULLY FUNCTIONAL validation models",
  },
  {
    title: "CMF",
    hindi: "रूप-रंग-बनावट",
    description:
      "Colour, Material and Finish strategy that translates brand identity into tactile, market-ready surface specifications.",
  },
];

export default function ServicesSection() {
  return (
    <section
      data-ocid="services.section"
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

      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 py-16 md:py-32">
        {/* Section header */}
        <div className="mb-12 md:mb-20 flex flex-col items-center text-center gap-4">
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
            सेवाएँ — What we do
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
            From Line to Life
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

        {/* Pillars grid — 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-[5vw] items-start justify-items-center w-full">
          {SERVICE_PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center text-center w-full"
            >
              {/* Accent dot */}
              <div
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: "oklch(0.62 0.10 72)",
                  marginBottom: "1.25rem",
                }}
              />

              {/* English title */}
              <span
                style={{
                  fontFamily: "Barlow, sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.28em",
                  fontSize: "clamp(0.85rem, 1.6vw, 1rem)",
                  textTransform: "uppercase",
                  color: "oklch(0.12 0.006 60)",
                  display: "block",
                  marginBottom: "0.4rem",
                }}
              >
                {pillar.title}
              </span>

              {/* Hindi name */}
              <span
                style={{
                  fontFamily: "Noto Sans Devanagari, sans-serif",
                  fontWeight: 200,
                  fontSize: "clamp(0.75rem, 1.3vw, 0.85rem)",
                  color: "oklch(0.62 0.10 72)",
                  display: "block",
                  marginBottom: "1rem",
                  letterSpacing: "0.04em",
                }}
              >
                {pillar.hindi}
              </span>

              {/* Thin rule */}
              <div
                style={{
                  height: "1px",
                  width: "32px",
                  background: "oklch(0.62 0.10 72 / 0.35)",
                  marginBottom: "1rem",
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontFamily: "Barlow, sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(0.7rem, 1.1vw, 0.78rem)",
                  lineHeight: "1.75",
                  color: "oklch(0.40 0.006 62)",
                  textAlign: "center",
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
