import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesMarquee from "@/components/ServicesMarquee";
import ServicesGrid from "@/components/ServicesGrid";
import Portfolio from "@/components/Portfolio";
import Solutions from "@/components/Solutions";
import Clients from "@/components/Clients";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesMarquee />
      <ServicesGrid />
      <Portfolio />
      <Solutions />
      <Clients />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
