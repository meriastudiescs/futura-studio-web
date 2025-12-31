const ServicesMarquee = () => {
  const text = "Nuestros Servicios";
  
  return (
    <section id="servicios" className="py-16 bg-background overflow-hidden">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold text-foreground mx-8"
            >
              {text}
              <span className="text-accent mx-4">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesMarquee;
