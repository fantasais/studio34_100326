export default function StudioStorySection() {
  const milestones = [
    "Concept-to-prototype delivery for leading OEMs and global startups",
    "Zimmermann FZP27 CNC machine — precision at industrial scale",
    "End-to-end capability: concept development through to functional prototypes",
  ];

  return (
    <section
      data-ocid="story.section"
      className="relative"
      style={{ background: "oklch(0.97 0.006 80)" }}
    >
      {/* Top hairline separator */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, oklch(0.62 0.10 72 / 0.25), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-24 py-16 md:py-32">
        {/* Full-width shared anchor */}
        <div className="mb-10 md:mb-16">
          <p
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 400,
              letterSpacing: "0.28em",
              fontSize: "0.62rem",
              textTransform: "uppercase",
              color: "oklch(0.62 0.10 72)",
              marginBottom: "0.75rem",
            }}
          >
            34, Via San Quintino → IMT, Manesar
          </p>
          <h2
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 200,
              letterSpacing: "0.22em",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              textTransform: "uppercase",
              color: "oklch(0.12 0.006 60)",
              lineHeight: "1.1",
            }}
          >
            Our Journey
          </h2>

          <div
            style={{
              marginTop: "1.25rem",
              height: "1px",
              background:
                "linear-gradient(to right, oklch(0.62 0.10 72 / 0.35), transparent)",
              width: "min(320px, 60%)",
            }}
          />
        </div>

        {/* Asymmetric body: mobile stacked (video above text), desktop side-by-side */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-14 items-start">
          {/* Text column — full width on mobile, 40% on desktop */}
          <div className="w-full lg:w-[40%] lg:flex-none flex flex-col gap-6 lg:gap-7">
            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
                lineHeight: "1.85",
                color: "oklch(0.12 0.006 60)",
              }}
            >
              Studio34 was founded with a single ambition — to build an
              automotive design and development studio in India that could
              operate at global standards. From a residential address in Turin
              to a state-of-the-art facility in Manesar, every step has been
              intentional.
            </p>

            <div className="flex flex-col gap-4">
              <p
                style={{
                  fontFamily: "Barlow, sans-serif",
                  fontWeight: 400,
                  letterSpacing: "0.25em",
                  fontSize: "0.62rem",
                  textTransform: "uppercase",
                  color: "oklch(0.45 0.008 65)",
                }}
              >
                Milestones
              </p>

              <ul className="flex flex-col gap-3">
                {milestones.map((milestone) => (
                  <li
                    key={milestone}
                    className="flex items-start gap-4"
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 300,
                      fontSize: "clamp(0.8rem, 1.3vw, 0.85rem)",
                      lineHeight: "1.7",
                      color: "oklch(0.30 0.006 62)",
                    }}
                  >
                    <span
                      className="mt-[0.45em] shrink-0"
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "oklch(0.62 0.10 72)",
                        display: "inline-block",
                      }}
                    />
                    {milestone}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Video column — full width on mobile, 58% on desktop */}
          <div className="w-full lg:flex-1 flex flex-col gap-3">
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: "4px",
                border: "1px solid oklch(0.62 0.10 72 / 0.18)",
                boxShadow:
                  "0 8px 32px oklch(0.12 0.006 60 / 0.10), 0 2px 8px oklch(0.62 0.10 72 / 0.08)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/CCLdolupH1Y"
                title="Studio34 Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  borderRadius: "4px",
                }}
              />
            </div>

            <p
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 200,
                letterSpacing: "0.2em",
                fontSize: "0.6rem",
                textTransform: "uppercase",
                color: "oklch(0.55 0.008 65)",
                textAlign: "left",
              }}
            >
              Studio34 · The Story
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
