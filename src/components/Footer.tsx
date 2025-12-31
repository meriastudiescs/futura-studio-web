import { Instagram, Linkedin, Dribbble } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
  ];

  return (
    <footer className="py-8 bg-hero border-t border-hero-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-hero-foreground">
              FUTURA STUDIO
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-accent" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full border border-hero-foreground/20 flex items-center justify-center text-hero-foreground/60 hover:text-accent hover:border-accent transition-all duration-300"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-hero-foreground/40">
            © {currentYear} Futura Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
