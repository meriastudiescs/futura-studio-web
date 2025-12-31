import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/#servicios", label: "Servicios" },
    { href: "/#portfolio", label: "Portfolio" },
    { href: "/#soluciones", label: "Soluciones" },
    { href: "/#contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-hero-foreground">
              FUTURA STUDIO
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm text-hero-foreground/70 hover:text-hero-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="/#contacto"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-display font-semibold text-sm rounded-full hover:shadow-glow transition-all duration-300"
          >
            Hablemos
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-hero-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-hero-foreground/10">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-body text-hero-foreground/70 hover:text-hero-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/#contacto"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-display font-semibold text-sm rounded-full"
              >
                Hablemos
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
