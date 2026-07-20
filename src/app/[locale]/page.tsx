import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import PricingSection from "@/components/sections/PricingSection";
import TeamSection from "@/components/sections/TeamSection";
import GallerySection from "@/components/sections/GallerySection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import BlogSection from "@/components/sections/BlogSection";
import AccommodationSection from "@/components/sections/AccommodationSection";
import BuildYourTourSection from "@/components/sections/BuildYourTourSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <DestinationsSection />
      <ServicesSection />
      <BuildYourTourSection />
      <PortfolioSection />
      <PricingSection />
      <TeamSection />
      <GallerySection />
      <AccommodationSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}
