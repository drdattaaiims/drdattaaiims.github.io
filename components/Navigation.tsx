import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/index.html" },
  { name: "Research", href: "/research.html" },
  { name: "Publications", href: "/publications.html" },
  { name: "Lab", href: "/lab.html" },
  { name: "Talks", href: "/talks.html" },
  { name: "CV", href: "/cv/" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-rule">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <a
            href="/index.html"
            className="font-serif font-semibold text-lg"
            data-testid="nav-logo"
          >
            Suvrankar Datta
          </a>

          <nav className="hidden md:flex items-center gap-5 font-sans text-sm" aria-label="Primary">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-ink-quiet hover:text-primary transition-colors"
                data-testid={`nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2"
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
          <nav id="mobile-menu" className="md:hidden py-3 border-t border-rule font-sans text-sm" aria-label="Primary mobile">
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 text-ink-quiet hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`nav-mobile-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
