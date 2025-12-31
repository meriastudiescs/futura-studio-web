import { ArrowUpRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollAnimations";

import portfolioWeb1 from "@/assets/portfolio-web-1.jpg";
import portfolioWeb2 from "@/assets/portfolio-web-2.jpg";
import portfolioBranding1 from "@/assets/portfolio-branding-1.jpg";
import portfolioBranding2 from "@/assets/portfolio-branding-2.jpg";
import portfolioSocial1 from "@/assets/portfolio-social-1.jpg";
import portfolioSocial2 from "@/assets/portfolio-social-2.jpg";

const projects = [
  {
    title: "Cornfox E-commerce",
    category: "Diseño Web",
    description: "Tienda online de moda con experiencia de compra premium",
    image: portfolioWeb1,
    tags: ["E-commerce", "UX/UI", "Desarrollo"],
  },
  {
    title: "LuxePlay Restaurant",
    category: "Diseño Web",
    description: "Web gastronómica elegante para restaurante de alta cocina",
    image: portfolioWeb2,
    tags: ["Web Design", "Branding", "SEO"],
  },
  {
    title: "Brasn Coffee",
    category: "Branding & Packaging",
    description: "Identidad visual completa para marca de café artesanal",
    image: portfolioBranding1,
    tags: ["Branding", "Packaging", "Fotografía"],
  },
  {
    title: "Caliternity Cosmetics",
    category: "Branding & Packaging",
    description: "Diseño premium para línea de skincare de lujo",
    image: portfolioBranding2,
    tags: ["Branding", "Packaging", "Identidad"],
  },
  {
    title: "Lifestyle Brand",
    category: "Redes Sociales",
    description: "Estrategia de contenido y gestión de Instagram para marca de moda",
    image: portfolioSocial1,
    tags: ["Social Media", "Contenido", "Estrategia"],
  },
  {
    title: "Multi-brand Campaign",
    category: "Redes Sociales",
    description: "Gestión integral de redes sociales para múltiples marcas",
    image: portfolioSocial2,
    tags: ["Social Media", "Campañas", "Gestión"],
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-2xl mb-16">
            <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-4">
              Nuestro trabajo
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Casos de Éxito
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Proyectos que han ayudado a nuestros clientes a destacar y alcanzar sus objetivos.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <div className="group cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                  
                  {/* Hover Arrow */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={18} className="text-accent-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="font-body text-sm text-accent mb-2">{project.category}</p>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-background rounded-full text-xs font-body text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Portfolio;
