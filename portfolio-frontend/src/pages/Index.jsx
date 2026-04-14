import Navbar from "@/components/Navbar.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import AboutSection from "@/components/AboutSection.jsx";
import PortfolioSection from "@/components/PortfolioSection.jsx";
import ServicesSection from "@/components/ServicesSection.jsx";
import ContactSection from "@/components/ContactSection.jsx";
import Footer from "@/components/Footer.jsx";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <main>
      <AboutSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;

