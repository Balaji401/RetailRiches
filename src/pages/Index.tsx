import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OfferingsSection from "@/components/OfferingsSection";
import FreeBooksSection from "@/components/FreeBooksSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <OfferingsSection />
      <FreeBooksSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
