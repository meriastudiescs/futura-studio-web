import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { ScrollReveal } from "./ScrollAnimations";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100, "Máximo 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Máximo 255 caracteres"),
  company: z.string().trim().max(100, "Máximo 100 caracteres").optional(),
  service: z.string().min(1, "Selecciona un servicio"),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000, "Máximo 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", { ...data, email: "[REDACTED]" });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  const services = [
    { value: "web", label: "Diseño Web" },
    { value: "branding", label: "Branding" },
    { value: "packaging", label: "Packaging" },
    { value: "social", label: "Redes Sociales" },
    { value: "other", label: "Otro" },
  ];

  return (
    <section id="contacto" className="py-24 bg-hero">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Info */}
          <ScrollReveal>
            <div>
              <p className="font-body text-sm text-hero-foreground/40 uppercase tracking-wider mb-4">
                ¿Listo para empezar?
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-hero-foreground mb-8">
                Hablemos
              </h2>
              <p className="font-body text-lg text-hero-foreground/70 max-w-md mb-12">
                Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte a alcanzar tus objetivos.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="font-body text-sm text-hero-foreground/40 mb-2">Email</p>
                  <a href="mailto:hola@futurastudio.com" className="font-display text-xl text-hero-foreground hover:text-accent transition-colors">
                    hola@futurastudio.com
                  </a>
                </div>
                <div>
                  <p className="font-body text-sm text-hero-foreground/40 mb-2">Teléfono</p>
                  <a href="tel:+34600000000" className="font-display text-xl text-hero-foreground hover:text-accent transition-colors">
                    +34 600 000 000
                  </a>
                </div>
                <div>
                  <p className="font-body text-sm text-hero-foreground/40 mb-2">Ubicación</p>
                  <p className="font-display text-xl text-hero-foreground">Madrid, España</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Form */}
          <ScrollReveal delay={0.2}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-body text-sm text-hero-foreground/60 mb-2">
                  Nombre *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name")}
                  className="w-full px-4 py-3 bg-hero-foreground/5 border border-hero-foreground/10 rounded-lg text-hero-foreground placeholder:text-hero-foreground/30 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-body text-sm text-hero-foreground/60 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full px-4 py-3 bg-hero-foreground/5 border border-hero-foreground/10 rounded-lg text-hero-foreground placeholder:text-hero-foreground/30 focus:outline-none focus:border-accent transition-colors"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block font-body text-sm text-hero-foreground/60 mb-2">
                  Empresa (opcional)
                </label>
                <input
                  id="company"
                  type="text"
                  {...register("company")}
                  className="w-full px-4 py-3 bg-hero-foreground/5 border border-hero-foreground/10 rounded-lg text-hero-foreground placeholder:text-hero-foreground/30 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Tu empresa"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block font-body text-sm text-hero-foreground/60 mb-2">
                  Servicio *
                </label>
                <select
                  id="service"
                  {...register("service")}
                  className="w-full px-4 py-3 bg-hero-foreground/5 border border-hero-foreground/10 rounded-lg text-hero-foreground focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-hero">Selecciona un servicio</option>
                  {services.map((service) => (
                    <option key={service.value} value={service.value} className="bg-hero">
                      {service.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-destructive">{errors.service.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-body text-sm text-hero-foreground/60 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={5}
                  className="w-full px-4 py-3 bg-hero-foreground/5 border border-hero-foreground/10 rounded-lg text-hero-foreground placeholder:text-hero-foreground/30 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-display font-bold text-lg rounded-full hover:shadow-glow transition-all duration-300 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    ¡Enviado!
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
