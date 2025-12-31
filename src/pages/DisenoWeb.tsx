import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import serviceWeb from "@/assets/service-web.jpg";
import portfolioWeb1 from "@/assets/portfolio-web-1.jpg";
import portfolioWeb2 from "@/assets/portfolio-web-2.jpg";

const features = [
  "Diseño responsive para todos los dispositivos",
  "Optimización SEO desde el primer día",
  "Velocidad de carga optimizada",
  "Integración con herramientas de análisis",
  "Formularios y funcionalidades personalizadas",
  "Soporte y mantenimiento continuo",
];

const process = [
  { step: "01", title: "Descubrimiento", description: "Analizamos tus objetivos, audiencia y competencia para definir la estrategia." },
  { step: "02", title: "Diseño", description: "Creamos wireframes y diseños visuales que reflejan tu marca." },
  { step: "03", title: "Desarrollo", description: "Construimos tu sitio con las últimas tecnologías web." },
  { step: "04", title: "Lanzamiento", description: "Publicamos y optimizamos tu sitio para el éxito." },
];

const projects = [
  { title: "Cornfox E-commerce", image: portfolioWeb1 },
  { title: "LuxePlay Restaurant", image: portfolioWeb2 },
];

const DisenoWeb = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="min-h-[80vh] bg-hero flex items-center pt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-hero-foreground/60 hover:text-hero-foreground mb-8 transition-colors">
              <ArrowLeft size={16} />
              <span className="font-body text-sm">Volver al inicio</span>
            </Link>
            
            <p className="font-body text-sm text-accent uppercase tracking-wider mb-4">
              Servicios
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-hero-foreground leading-[0.95] mb-8">
              Diseño Web
            </h1>
            <p className="font-body text-xl text-hero-foreground/70 max-w-2xl mb-12">
              Creamos sitios web y landing pages que no solo se ven increíbles, 
              sino que convierten visitantes en clientes. Diseño estratégico enfocado en resultados.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-display font-bold text-lg rounded-full hover:shadow-glow transition-all duration-300"
            >
              Solicitar presupuesto
              <ArrowUpRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Image */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="rounded-3xl overflow-hidden">
              <img src={serviceWeb} alt="Diseño Web" className="w-full h-[60vh] object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  ¿Qué incluye nuestro servicio?
                </h2>
                <p className="font-body text-lg text-muted-foreground">
                  Cada proyecto web es único, pero todos comparten nuestro compromiso 
                  con la calidad y los resultados.
                </p>
              </div>
            </ScrollReveal>
            
            <StaggerContainer className="space-y-4">
              {features.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Check size={16} className="text-accent" />
                    </div>
                    <span className="font-body text-foreground">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Nuestro Proceso
              </h2>
              <p className="font-body text-lg text-muted-foreground">
                Un proceso probado que garantiza resultados excepcionales.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <StaggerItem key={item.step}>
                <div className="text-center">
                  <span className="font-display text-6xl font-bold text-accent/20">{item.step}</span>
                  <h3 className="font-display text-xl font-bold text-foreground mt-4 mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Proyectos Destacados
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.15}>
                <div className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mt-4">{project.title}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-24 bg-hero">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-hero-foreground mb-8">
              ¿Listo para tu nuevo sitio web?
            </h2>
            <a
              href="mailto:hola@futurastudio.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-display font-bold text-lg rounded-full hover:shadow-glow transition-all duration-300"
            >
              Contactar ahora
              <ArrowUpRight size={20} />
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DisenoWeb;
