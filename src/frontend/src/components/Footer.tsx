export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "studio34";
  const appId = encodeURIComponent(hostname);

  return (
    <footer
      className="relative border-t py-10 px-6 md:px-16 lg:px-24"
      style={{
        background: "oklch(0.94 0.010 82)",
        borderColor: "oklch(0.62 0.10 72 / 0.15)",
      }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Left — Studio34 */}
        <div className="flex flex-col gap-1">
          <span
            className="font-barlow text-ink/70 tracking-widest"
            style={{
              fontWeight: 600,
              letterSpacing: "0.2em",
              fontSize: "0.9rem",
            }}
          >
            Studio<span className="text-gold">34</span>
          </span>
          <span
            className="font-barlow text-ash text-xs tracking-widest uppercase"
            style={{
              fontWeight: 200,
              letterSpacing: "0.3em",
              fontSize: "0.55rem",
            }}
          >
            Automotive Design · India
          </span>
        </div>

        {/* Center — Philosophy marks */}
        <div className="hidden md:flex items-center gap-6">
          {["बिंदु", "ज्यामिति", "सतह", "साम्य", "गति"].map((label) => (
            <span
              key={label}
              className="font-devanagari text-ash/50 text-xs"
              style={{ fontWeight: 200, fontSize: "0.7rem" }}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Right — Attribution */}
        <div className="flex flex-col items-start md:items-end gap-1">
          <p
            className="font-barlow text-ash text-xs"
            style={{
              fontWeight: 200,
              letterSpacing: "0.05em",
              fontSize: "0.65rem",
            }}
          >
            © {year} Studio34. All rights reserved.
          </p>
          <p
            className="font-barlow text-ash/60 text-xs"
            style={{ fontWeight: 200, fontSize: "0.6rem" }}
          >
            Built with{" "}
            <span className="text-gold" style={{ fontSize: "0.65rem" }}>
              ♥
            </span>{" "}
            using{" "}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/70 hover:text-gold transition-colors duration-200"
              style={{ fontWeight: 300 }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>

      {/* Bottom hairline */}
      <div
        className="mt-8 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(0.62 0.10 72 / 0.25), transparent)",
        }}
      />
    </footer>
  );
}
