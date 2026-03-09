export default function CtaSection() {
  return (
    <section
      data-ocid="cta.section"
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

      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 py-16 md:py-32 flex flex-col items-center text-center gap-8 md:gap-10">
        {/* Tagline */}
        <div className="flex flex-col items-center gap-4">
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
            स्वप्न — Studio34
          </p>

          <h2
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 100,
              letterSpacing: "0.18em",
              fontSize: "clamp(1.4rem, 4vw, 3.2rem)",
              textTransform: "uppercase",
              color: "oklch(0.12 0.006 60)",
              lineHeight: "1.3",
              textAlign: "center",
            }}
          >
            <div>
              <span style={{ fontWeight: 600 }}>DREAM</span>{" "}
              <span style={{ fontWeight: 100 }}>big</span>{" "}
              <span
                style={{
                  color: "oklch(0.62 0.10 72)",
                  fontWeight: 200,
                  margin: "0 0.4em",
                }}
              >
                |
              </span>{" "}
              <span style={{ fontWeight: 600 }}>DESIGN</span>{" "}
              <span style={{ fontWeight: 100 }}>better</span>
            </div>
            <div>
              <span style={{ fontWeight: 600 }}>DEVELOP</span>{" "}
              <span style={{ fontWeight: 100 }}>faster</span>
            </div>
          </h2>
        </div>

        {/* Thin rule */}
        <div
          style={{
            height: "1px",
            width: "min(120px, 30%)",
            background:
              "linear-gradient(to right, transparent, oklch(0.62 0.10 72 / 0.4), transparent)",
          }}
        />

        {/* Sub-copy — two lines on all screens */}
        <p
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
            lineHeight: "1.85",
            color: "oklch(0.40 0.006 62)",
            maxWidth: "540px",
            letterSpacing: "0.03em",
          }}
        >
          Every vehicle that moves the world began as a single point of
          intention.
          <br />
          If you have a vision, Studio34 has the process to bring it to life.
        </p>

        {/* CTA button */}
        <a
          href="mailto:studio@studio34.in"
          data-ocid="cta.primary_button"
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 300,
            letterSpacing: "0.28em",
            fontSize: "clamp(0.65rem, 1.2vw, 0.78rem)",
            textTransform: "uppercase",
            color: "oklch(0.97 0.006 80)",
            background: "oklch(0.12 0.006 60)",
            padding: "1rem 2.75rem",
            border: "1px solid oklch(0.12 0.006 60)",
            borderRadius: "2px",
            textDecoration: "none",
            display: "inline-block",
            transition: "background 0.25s ease, color 0.25s ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "oklch(0.62 0.10 72)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "oklch(0.62 0.10 72)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background =
              "oklch(0.12 0.006 60)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor =
              "oklch(0.12 0.006 60)";
          }}
        >
          Collaborate with Studio34
        </a>
      </div>
    </section>
  );
}
