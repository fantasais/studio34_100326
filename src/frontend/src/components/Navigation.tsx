import { useEffect, useState } from "react";

const navItems = [
  { label: "बिंदु", sublabel: "Bindu", href: "#origin" },
  { label: "ज्यामिति", sublabel: "Geometry", href: "#structure" },
  { label: "सतह", sublabel: "Surface", href: "#surface" },
  { label: "साम्य", sublabel: "Balance", href: "#balance" },
  { label: "गति", sublabel: "Motion", href: "#motion" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("origin");
  const [menuOpen, setMenuOpen] = useState(false);
  // Controls whether the logo should render in dark (ink) mode vs white mode
  const [logoIsDark, setLogoIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 60);

      // Detect when the nav bar is over the light gradient zone at the top of CountdownSection.
      // The hero section (#hero) is 5×100vh tall. Once we scroll past it, the
      // CountdownSection's 420px dark→light gradient begins. The gradient becomes
      // noticeably light around 180px into it, so we switch the logo at heroHeight + 180.
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        const heroHeight = heroEl.offsetHeight;
        // Start transitioning logo to dark once we're ~180px into the gradient band
        const threshold = heroHeight + 180;
        setLogoIsDark(scrollY > threshold);
      }

      const sections = ["origin", "structure", "surface", "balance", "motion"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-paper/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-16">
          {/* Wordmark */}
          <button
            type="button"
            onClick={() => handleNavClick("#origin")}
            className="flex items-center gap-3 group bg-transparent border-0 p-0 cursor-pointer"
          >
            <img
              src="/assets/new34_wordmark_white_nobar.png"
              alt="Studio34"
              className="h-7 w-auto object-contain"
              style={{
                maxHeight: "28px",
                // Smoothly transition between white (hero) and dark ink (light sections).
                // When logoIsDark: invert the white PNG to near-black ink.
                // CSS filter transition gives a smooth cross-fade effect.
                filter: logoIsDark
                  ? "invert(1) sepia(0.15) saturate(0.5) brightness(0.12)"
                  : "none",
                transition: "filter 0.5s ease",
              }}
            />
            <div
              className="w-px h-4 hidden md:block"
              style={{
                background: logoIsDark
                  ? "oklch(0.62 0.10 72 / 0.4)"
                  : "oklch(0.72 0.13 76 / 0.30)",
                transition: "background 0.5s ease",
              }}
            />
            <span
              className="hidden md:block font-barlow text-xs tracking-widest uppercase"
              style={{
                fontWeight: 200,
                letterSpacing: "0.3em",
                fontSize: "0.6rem",
                color: logoIsDark
                  ? "oklch(0.45 0.008 65)"
                  : "oklch(0.55 0.008 65)",
                transition: "color 0.5s ease",
              }}
            >
              Automotive Design
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`group flex flex-col items-center gap-0.5 transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-40 hover:opacity-80"
                  }`}
                >
                  <span
                    className="font-devanagari text-xs"
                    style={{
                      fontWeight: 300,
                      fontSize: "0.75rem",
                      color: logoIsDark
                        ? "oklch(0.12 0.006 60)"
                        : "oklch(0.88 0.006 70)",
                      transition: "color 0.5s ease",
                    }}
                  >
                    {item.label}
                  </span>
                  <div
                    className={`h-px w-full transition-all duration-300 ${
                      isActive
                        ? "bg-gold"
                        : "bg-transparent group-hover:bg-gold/40"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-5 h-px transition-all duration-300 ${
                  i === 0 && menuOpen
                    ? "rotate-45 translate-y-2"
                    : i === 1 && menuOpen
                      ? "opacity-0"
                      : i === 2 && menuOpen
                        ? "-rotate-45 -translate-y-2"
                        : ""
                }`}
                style={{
                  background: logoIsDark
                    ? "oklch(0.12 0.006 60)"
                    : "oklch(0.88 0.006 70)",
                  transition:
                    "background 0.5s ease, transform 0.3s ease, opacity 0.3s ease",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-paper/98 backdrop-blur-md flex flex-col justify-center items-center transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-10">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="flex flex-col items-center gap-1 group"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span
                className="font-devanagari text-ink text-2xl"
                style={{ fontWeight: 200 }}
              >
                {item.label}
              </span>
              <span
                className="font-barlow text-ash text-xs tracking-widest uppercase"
                style={{
                  fontWeight: 200,
                  letterSpacing: "0.3em",
                  fontSize: "0.6rem",
                }}
              >
                {item.sublabel}
              </span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
