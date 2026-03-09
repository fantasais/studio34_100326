import { useCallback, useEffect, useRef } from "react";

interface StackPanel {
  id: string;
  number: string;
  sectionLabel: string;
  titleEn: string;
  titleHi: string;
  descriptor: string;
  tagline: string;
  image: string;
  imageAlt: string;
}

const panels: StackPanel[] = [
  {
    id: "origin",
    number: "01",
    sectionLabel: "The Origin",
    titleEn: "ORIGIN",
    titleHi: "बिंदु",
    descriptor: "The singular point where all form begins.",
    tagline: "India · Automotive Design · OEM",
    image: "/assets/generated/bindu-origin.dim_1920x1080.jpg",
    imageAlt: "Bindu — Origin",
  },
  {
    id: "geometry",
    number: "02",
    sectionLabel: "The Grid",
    titleEn: "GEOMETRY",
    titleHi: "ज्यामिति",
    descriptor: "The invisible grid that governs every decision.",
    tagline: "Modular · Proportional · Resolved",
    image: "/assets/generated/geometry-grid.dim_1920x1080.jpg",
    imageAlt: "Geometry — Grid",
  },
  {
    id: "craft",
    number: "03",
    sectionLabel: "The Craft",
    titleEn: "CRAFT",
    titleHi: "सतह",
    descriptor: "Material intelligence that breathes life into form.",
    tagline: "Material · Tactile · Resolved",
    image: "/assets/generated/surface-craft.dim_1920x1080.jpg",
    imageAlt: "Surface — Craft",
  },
  {
    id: "balance",
    number: "04",
    sectionLabel: "The Stance",
    titleEn: "BALANCE",
    titleHi: "साम्य",
    descriptor: "Tectonic stance that makes heads turn.",
    tagline: "Tectonic · Composed · Commanding",
    image: "/assets/generated/balance-stance.dim_1920x1080.jpg",
    imageAlt: "Balance — Stance",
  },
  {
    id: "motion",
    number: "05",
    sectionLabel: "The Velocity",
    titleEn: "MOTION",
    titleHi: "गति",
    descriptor: "Decisive momentum from first mark to final form.",
    tagline: "Velocity · Decisive · Kinetic",
    image: "/assets/generated/motion-speed.dim_1920x1080.jpg",
    imageAlt: "Motion — Speed",
  },
];

const TOTAL_PANELS = panels.length;
const SCROLL_PER_CARD = 1 / (TOTAL_PANELS - 1);

/** Radiating dot for the ORIGIN panel */
function RadiatingDot() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: "38%",
        left: "52%",
        transform: "translate(-50%, -50%)",
        zIndex: 5,
      }}
    >
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: "80px",
            height: "80px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid oklch(0.72 0.13 76 / 0.35)",
            animation: "bindu-ring 3.5s ease-out infinite",
            animationDelay: `${i * 1.15}s`,
          }}
        />
      ))}
      <div
        className="relative rounded-full"
        style={{
          width: "6px",
          height: "6px",
          background: "oklch(0.72 0.13 76)",
          boxShadow: "0 0 8px 2px oklch(0.72 0.13 76 / 0.6)",
          animation: "bindu-pulse 3.5s ease-in-out infinite",
          position: "relative",
          zIndex: 10,
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: "5px",
          height: "5px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "oklch(0.98 0.005 80)",
          boxShadow:
            "0 0 6px 3px oklch(0.98 0.005 80 / 0.9), 0 0 14px 6px oklch(0.72 0.13 76 / 0.5)",
          zIndex: 20,
        }}
      />
    </div>
  );
}

function PanelContent({ panel }: { panel: StackPanel }) {
  return (
    <div className="relative z-10 flex flex-col justify-end items-start text-left h-full pb-12 md:pb-20 px-6 md:px-16 lg:px-20">
      {/* Section index */}
      <div className="flex items-center gap-3 mb-4 md:mb-5 justify-start">
        <span
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 100,
            fontSize: "0.55rem",
            letterSpacing: "0.3em",
            color: "oklch(0.72 0.13 76 / 0.7)",
          }}
        >
          {panel.number}
        </span>
        <div
          className="h-px w-8"
          style={{ background: "oklch(0.72 0.13 76 / 0.4)" }}
        />
        <span
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 100,
            fontSize: "0.6rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "oklch(0.72 0.13 76)",
          }}
        >
          {panel.sectionLabel}
        </span>
      </div>

      {/* Main heading */}
      <div className="mb-3 md:mb-4">
        <h2
          style={{
            fontFamily: "Barlow, sans-serif",
            fontWeight: 200,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            lineHeight: "0.85",
            fontSize: "clamp(2.8rem, 8vw, 8rem)",
            color: "oklch(0.97 0.006 80)",
            textShadow: "0 2px 20px oklch(0.08 0.006 60 / 0.6)",
          }}
        >
          {panel.titleEn}
        </h2>
        <div className="flex items-baseline gap-3 mt-2 justify-start">
          <span
            style={{
              fontFamily: "Noto Sans Devanagari, sans-serif",
              fontWeight: 200,
              letterSpacing: "0.02em",
              lineHeight: "1.1",
              fontSize: "clamp(1.2rem, 4vw, 3.5rem)",
              color: "oklch(0.72 0.13 76)",
              textShadow: "0 1px 12px oklch(0.08 0.006 60 / 0.5)",
            }}
          >
            {panel.titleHi}
          </span>
          <div
            className="h-px w-16 self-center"
            style={{ background: "oklch(0.72 0.13 76 / 0.3)" }}
          />
        </div>
      </div>

      {/* Hairline */}
      <div
        className="h-px w-12 mb-4 md:mb-5"
        style={{ background: "oklch(0.72 0.13 76 / 0.45)" }}
      />

      {/* Descriptor */}
      <p
        style={{
          fontFamily: "Barlow, sans-serif",
          fontWeight: 300,
          letterSpacing: "0.06em",
          lineHeight: "1.7",
          fontSize: "0.82rem",
          color: "oklch(0.82 0.006 70)",
          maxWidth: "28ch",
          textShadow: "0 1px 8px oklch(0.08 0.006 60 / 0.4)",
        }}
      >
        {panel.descriptor}
      </p>

      {/* Tagline */}
      <p
        className="mt-3 md:mt-4"
        style={{
          fontFamily: "Barlow, sans-serif",
          fontWeight: 200,
          letterSpacing: "0.3em",
          fontSize: "0.55rem",
          textTransform: "uppercase",
          color: "oklch(0.60 0.008 65)",
        }}
      >
        {panel.tagline}
      </p>
    </div>
  );
}

export default function HeroStackedCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const activeIndexRef = useRef<number>(0);
  const dotsRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const lastScrollRef = useRef<number>(-1);

  const updateCards = useCallback(() => {
    const easeInOut = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrolled = -rect.top;
    const scrollRange = sectionHeight - viewportHeight;
    const rawProgress =
      scrollRange > 0 ? Math.max(0, Math.min(1, scrolled / scrollRange)) : 0;

    if (Math.abs(rawProgress - lastScrollRef.current) < 0.0001) return;
    lastScrollRef.current = rawProgress;

    let newActiveIndex = 0;

    for (let i = 0; i < TOTAL_PANELS - 1; i++) {
      const segStart = i * SCROLL_PER_CARD;
      const segEnd = (i + 1) * SCROLL_PER_CARD;
      const segProgress = Math.max(
        0,
        Math.min(1, (rawProgress - segStart) / (segEnd - segStart)),
      );
      const easedProgress = easeInOut(segProgress);

      const card = cardRefs.current[i];
      if (!card) continue;

      if (segProgress >= 1) {
        card.style.transform = "translateY(-100%)";
        card.style.opacity = "0";
        card.style.pointerEvents = "none";
        newActiveIndex = i + 1;
      } else if (segProgress > 0) {
        const translateY = -easedProgress * 100;
        const scale = 1 - easedProgress * 0.04;
        card.style.transform = `translateY(${translateY}%) scale(${scale})`;
        card.style.opacity = `${1 - easedProgress * 0.3}`;
        card.style.pointerEvents = "none";
        newActiveIndex = i;
      } else {
        card.style.transform = "translateY(0%) scale(1)";
        card.style.opacity = "1";
        card.style.pointerEvents = "auto";
      }
    }

    const lastCard = cardRefs.current[TOTAL_PANELS - 1];
    if (lastCard) {
      lastCard.style.transform = "translateY(0%) scale(1)";
      lastCard.style.opacity = "1";
    }

    activeIndexRef.current = newActiveIndex;

    if (dotsRef.current) {
      const dotEls =
        dotsRef.current.querySelectorAll<HTMLDivElement>("[data-dot]");
      dotEls.forEach((dot, i) => {
        if (i === newActiveIndex) {
          dot.style.width = "20px";
          dot.style.background = "oklch(0.72 0.13 76)";
        } else {
          dot.style.width = "4px";
          dot.style.background = "oklch(0.72 0.13 76 / 0.3)";
        }
      });
    }
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateCards);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateCards();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateCards]);

  const sectionHeight = `${TOTAL_PANELS * 100}vh`;

  return (
    <div
      ref={sectionRef}
      id="hero"
      style={{ height: sectionHeight, position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "oklch(0.08 0.006 60)",
        }}
      >
        {panels.map((panel, i) => (
          <div
            key={panel.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: TOTAL_PANELS - i,
              willChange: "transform, opacity",
              transformOrigin: "center bottom",
              transition: "none",
            }}
          >
            <img
              src={panel.image}
              alt={panel.imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 0.5 }}
              draggable={false}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, oklch(0.06 0.006 60 / 0.92) 0%, oklch(0.08 0.006 60 / 0.65) 40%, oklch(0.10 0.006 60 / 0.45) 70%, oklch(0.08 0.006 60 / 0.55) 100%)",
              }}
            />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, oklch(0.06 0.006 60 / 0.72) 0%, oklch(0.06 0.006 60 / 0.32) 50%, transparent 80%)",
              }}
            />

            {panel.id === "origin" && <RadiatingDot />}

            <PanelContent panel={panel} />

            {i < TOTAL_PANELS - 1 && (
              <div
                className="absolute bottom-0 left-0 right-0 pointer-events-none"
                style={{
                  height: "80px",
                  background:
                    "linear-gradient(to top, oklch(0.04 0.006 60 / 0.6), transparent)",
                  zIndex: 2,
                }}
              />
            )}
          </div>
        ))}

        <div
          className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.06 0.006 60 / 0.6), transparent)",
            zIndex: TOTAL_PANELS + 2,
          }}
        />

        <div
          className="absolute bottom-8 right-8 md:right-16 flex flex-col items-end gap-1 pointer-events-none"
          style={{ zIndex: TOTAL_PANELS + 2 }}
        >
          <span
            style={{
              fontFamily: "Barlow, sans-serif",
              fontWeight: 100,
              fontSize: "0.5rem",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "oklch(0.55 0.008 65)",
            }}
          >
            Studio34
          </span>
          <div
            className="h-px w-6"
            style={{ background: "oklch(0.72 0.13 76 / 0.3)" }}
          />
        </div>

        <div
          ref={dotsRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 pointer-events-none"
          style={{ zIndex: TOTAL_PANELS + 2 }}
        >
          {panels.map((panel, i) => (
            <div
              key={panel.id}
              data-dot
              style={{
                width: i === 0 ? "20px" : "4px",
                height: "2px",
                background:
                  i === 0 ? "oklch(0.72 0.13 76)" : "oklch(0.72 0.13 76 / 0.3)",
                transition: "all 0.4s ease",
                borderRadius: "1px",
              }}
            />
          ))}
        </div>

        <div
          className="absolute flex flex-col items-center gap-2 pointer-events-none"
          style={{
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: TOTAL_PANELS + 3,
            marginBottom: "1.5rem",
          }}
        >
          <div
            className="w-px h-10"
            style={{
              background:
                "linear-gradient(to bottom, transparent, oklch(0.72 0.13 76 / 0.5))",
              animation: "scroll-line 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </div>
  );
}
