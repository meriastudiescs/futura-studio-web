import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollAnimations";

const clients = [
  "TechStart",
  "Moderna",
  "Urbano",
  "Creativa",
  "Bloom",
  "Nexus",
  "Vértice",
  "Lumina",
];

const Clients = () => {
  return (
    <section id="clientes" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Empresas con las que
              <br />
              hemos trabajado
            </h2>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {clients.map((client) => (
            <StaggerItem key={client}>
              <div className="group flex items-center justify-center py-8 px-4 rounded-xl hover:bg-secondary transition-colors duration-300 cursor-pointer">
                <span className="font-display text-xl md:text-2xl font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {client}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Clients;
