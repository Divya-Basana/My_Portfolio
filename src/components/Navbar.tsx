import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Only detect active section after user has scrolled a bit
      if (window.scrollY < 50) {
        setActiveSection(null);
        return;
      }

      for (const link of [...navLinks].reverse()) {
        const el = document.getElementById(link.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(link);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <button onClick={() => scrollTo("Home")} className="font-display text-2xl font-bold gradient-text">
          BASANA DIVYA
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`relative text-lg font-semibold transition-colors duration-200 pb-1
                ${activeSection === link ? "text-primary" : "text-muted-foreground hover:text-foreground"}
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:transition-transform after:duration-300 after:origin-left
                ${activeSection === link ? "after:w-full after:scale-x-100" : "after:w-full after:scale-x-0 hover:after:scale-x-100"}
              `}
            >
              {link}
            </button>
          ))}
          <Button variant="ghost" size="icon" onClick={() => setDark(!dark)}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setDark(!dark)}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-card border-t border-border/50 animate-fade-in">
          <div className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={`text-left py-2 px-3 rounded-md text-base font-semibold transition-colors
                  ${activeSection === link ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-muted"}
                `}
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
