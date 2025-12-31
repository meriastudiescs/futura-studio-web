import { Check } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const solutions = [
  {
    category: "Concepto",
    description: "Desarrollamos conceptos creativos únicos que definen la esencia de tu marca.",
  },
  {
    category: "Para Empresas",
    description: "Soluciones integrales de diseño y marketing para empresas en crecimiento.",
  },
  {
    category: "Para Startups",
    description: "Branding y presencia digital que ayuda a startups a destacar desde el primer día.",
  },
  {
    category: "Para Eventos",
    description: "Identidad visual y promoción para eventos memorables.",
  },
  {
    category: "Para Productos",
    description: "Packaging y diseño de producto que cautiva en el punto de venta.",
  },
  {
    category: "Para Profesionales",
    description: "Marca personal y portafolios que muestran tu mejor trabajo.",
  },
];

const Solutions = () => {
  return (
    <section id="soluciones" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Soluciones
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Adaptamos nuestros servicios a las necesidades específicas de cada cliente y proyecto.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="space-y-0">
          {solutions.map((solution) => (
            <StaggerItem key={solution.category}>
              <div className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-border hover:bg-background/50 transition-colors duration-300 px-4 -mx-4 rounded-lg cursor-pointer">
                <div className="flex items-center gap-4 mb-2 md:mb-0">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <Check size={16} className="text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <span className="font-display text-lg md:text-xl font-semibold text-foreground">
                    {solution.category}
                  </span>
                </div>
                <p className="font-body text-sm md:text-base text-muted-foreground md:max-w-md md:text-right pl-12 md:pl-0">
                  {solution.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Solutions;
