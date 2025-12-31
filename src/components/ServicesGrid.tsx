import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import serviceWeb from "@/assets/service-web.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceSocial from "@/assets/service-social.jpg";

const services = [
  {
    title: "Diseño Web",
    description: "Sitios web y landing pages que convierten visitantes en clientes.",
    items: ["Diseño web", "Landing pages"],
    image: serviceWeb,
    href: "/diseno-web",
  },
  {
    title: "Diseño Gráfico",
    description: "Identidad visual que hace que tu marca destaque.",
    items: ["Branding", "Packaging"],
    image: serviceBranding,
    href: "/diseno-grafico",
  },
  {
    title: "Redes Sociales",
    description: "Contenido estratégico que conecta con tu audiencia.",
    items: ["Creación de contenido", "Gestión de redes"],
    image: serviceSocial,
    href: "/redes-sociales",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Link
        to={service.href}
        className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer block"
      >
        {/* Background Image */}
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="transform transition-transform duration-500 group-hover:translate-y-[-10px]">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              {service.title}
            </h3>
            <p className="font-body text-sm text-primary-foreground/80 mb-4 max-w-xs">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {service.items.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center px-3 py-1 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full text-xs text-primary-foreground font-body"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          {/* Arrow Icon */}
          <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight size={18} className="text-accent-foreground" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
