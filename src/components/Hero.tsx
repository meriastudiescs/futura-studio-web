import { ArrowDown, Instagram, Linkedin, Dribbble, Globe } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
    { icon: Globe, href: "#", label: "Web" },
  ];

  return (
    <section className="min-h-screen bg-hero flex flex-col justify-between pt-20">
      <div className="container mx-auto px-6 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 opacity-0 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-body text-sm text-hero-foreground/60 tracking-wide uppercase">
              Estudio Creativo
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-hero-foreground leading-[0.95] mb-8 opacity-0 animate-fade-in-up delay-100">
            Somos un estudio
            <br />
            <span className="text-gradient">digital creativo.</span>
          </h1>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-12 opacity-0 animate-fade-in-up delay-200">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full border border-hero-foreground/20 flex items-center justify-center text-hero-foreground/60 hover:text-accent hover:border-accent transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="grid md:grid-cols-2 gap-12 pb-12 opacity-0 animate-fade-in-up delay-300">
          <div>
            <p className="font-body text-sm text-hero-foreground/40 uppercase tracking-wider mb-4">
              Nuestra filosofía
            </p>
            <p className="font-body text-lg text-hero-foreground/80 leading-relaxed max-w-md">
              El diseño es más que estética; es una herramienta estratégica. 
              Nuestra filosofía gira en torno al impacto estratégico de nuestro 
              trabajo. Cada proyecto está diseñado para alcanzar los objetivos 
              de nuestros clientes.
            </p>
          </div>
          <div className="flex items-end justify-end">
            <a
              href="#servicios"
              className="group flex items-center gap-3 text-hero-foreground/60 hover:text-hero-foreground transition-colors"
            >
              <span className="font-body text-sm">Explorar servicios</span>
              <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground transition-all duration-300">
                <ArrowDown size={16} />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="h-px bg-gradient-to-r from-transparent via-hero-foreground/20 to-transparent" />
    </section>
  );
};

export default Hero;
