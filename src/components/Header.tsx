import { useEffect, useState } from "react";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blog" },
  { href: "#certifications", label: "Certifications" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const y = window.scrollY + 120;
      for (const n of [...NAV].reverse()) {
        const el = document.querySelector(n.href) as HTMLElement | null;
        if (el && el.offsetTop <= y) {
          setActive(n.href);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "backdrop-blur-md bg-background/80 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-white bg-gradient-to-br from-[var(--brand-from)] to-[var(--brand-to)] shadow-sm">
            DS
          </span>
          <span>Deepak<span className="text-primary">.</span></span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`px-3 py-2 text-sm rounded-md transition-colors relative ${
                active === n.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {n.label}
              {active === n.href && (
                <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[var(--brand-from)] to-[var(--brand-to)]" />
              )}
            </a>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="max-w-6xl mx-auto px-5 py-3 grid gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-md text-sm ${
                  active === n.href ? "bg-secondary text-foreground" : "text-muted-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}