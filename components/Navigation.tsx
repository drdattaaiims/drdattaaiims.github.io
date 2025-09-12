import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "About", href: "#hero" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Talks", href: "#talks" },
  { name: "Awards", href: "#awards" },
  { name: "Contact", href: "#contact" }
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
    console.log(`Navigation to ${targetId} clicked`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div 
            className="font-bold text-xl cursor-pointer hover:text-primary transition-colors"
            onClick={() => handleNavClick("#hero")}
            data-testid="nav-logo"
          >
            Dr. Suvrankar Datta
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={`hover-elevate ${
                  activeSection === item.href.substring(1) 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => handleNavClick(item.href)}
                data-testid={`nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </Button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-elevate"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="nav-mobile-toggle"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={`justify-start hover-elevate ${
                    activeSection === item.href.substring(1)
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => handleNavClick(item.href)}
                  data-testid={`nav-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}