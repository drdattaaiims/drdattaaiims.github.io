import { useState } from "react";
import { Menu, X } from "lucide-react";
import RingMark from "@/components/RingMark";

const navigation = [
  { name: "Work", href: "/research.html" },
  { name: "Clinical & Global Health", href: "/clinical-global-health.html" },
  { name: "Publications", href: "/publications.html" },
  { name: "Journey", href: "/journey.html" },
  { name: "CV", href: "/cv/" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-canvas/95 backdrop-blur border-b border-rule">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="flex items-center justify-between h-14">
          <a
            href="/"
            className="flex items-center gap-2.5 font-display font-bold text-[1.02rem] tracking-tight text-navy no-underline"
            data-testid="nav-logo"
          >
            <RingMark className="w-5 h-5 shrink-0" />
            Suvrankar Datta
          </a>

          <nav
            className="hidden items-center gap-4 font-sans text-xs min-[900px]:flex min-[1100px]:gap-5 min-[1100px]:text-sm"
            aria-label="Primary"
          >
            {navigation.map((item) => {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="border-b-2 border-transparent py-1 text-ink-quiet no-underline transition-colors hover:text-navy"
                  data-testid={`nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          <button
            className="min-h-11 min-w-11 p-2 text-navy min-[900px]:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            data-testid="nav-mobile-toggle"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Menu</span>
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="border-t border-rule py-3 font-sans text-sm min-[900px]:hidden"
            aria-label="Primary mobile"
          >
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => {
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="flex min-h-11 items-center text-ink-quiet no-underline transition-colors hover:text-navy"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`nav-mobile-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
