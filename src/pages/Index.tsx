import HeroSection from "../components/HeroSection";
import TreatmentServices from "../components/TreatmentServices";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const Index = () => {
  return (
    <>
      <SEO
        title="Hair & Trichology Clinic Chennai | The Golden Gem Cosmetic Clinic"
        description="Top hair & trichology clinic in Chennai offering expert hair loss solutions, transplants and scalp care at The Golden Gem Cosmetic Clinic."
        canonical="https://thegoldengemhairclinic.com/"
      />

      <main>
        <HeroSection />
        <TreatmentServices />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;