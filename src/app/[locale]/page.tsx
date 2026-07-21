import Hero from "@/components/sections/Hero";
import WelcomeSection from "@/components/sections/WelcomeSection";
import SplitFeatureSection from "@/components/sections/SplitFeatureSection";
import ThreeImageFeature from "@/components/sections/ThreeImageFeature";
import TextImageFeature from "@/components/sections/TextImageFeature";
import FullBleedFeature from "@/components/sections/FullBleedFeature";

export default function HomePage() {
  return (
    <>
      <Hero />

      <WelcomeSection
        eyebrow="Welcome to Mongolia"
        title="Immerse yourself in the captivating beauty of Mongolia"
        description="Mongolian Secret History invites you to experience the timeless landscapes, ancient traditions, and warm hospitality of the Mongolian steppe. From authentic ger camps to curated cultural journeys, every detail is crafted for an unforgettable stay."
      />

      <SplitFeatureSection
        eyebrow="Ger Camp Accommodation"
        title="Stay in authentic Mongolian gers"
        description="Experience traditional Mongolian living in our beautifully appointed gers. Each one blends heritage craftsmanship with modern comfort, offering panoramic views of the surrounding steppe and a peaceful retreat after a day of adventure."
        image="hero-steppe.jpg"
        imageAlt="Ger camp at sunset"
        href="/accommodation"
        cta="View Accommodation"
      />

      <ThreeImageFeature
        eyebrow="Mongolian Cuisine"
        title="Savor authentic flavors"
        description="Our kitchen celebrates the rich culinary heritage of Mongolia. From hand-rolled buuz and hearty khorkhog to fresh dairy dishes and modern interpretations, every meal is a journey through the country's nomadic traditions."
        images={[
          { src: "about-nomads.jpg", alt: "Traditional Mongolian dining" },
          { src: "culture-nomads.jpg", alt: "Mongolian food platter" },
          { src: "hero-steppe.jpg", alt: "Dining in the steppe" },
        ]}
        href="/services"
        cta="Explore Dining"
      />

      <TextImageFeature
        eyebrow="Discover Mongolia"
        title="Land of endless horizons"
        description="Mongolia is a country of dramatic contrasts — vast deserts, rolling grasslands, pristine lakes, and ancient forests. Discover the rich tapestry of nomadic culture, UNESCO-listed sites, and untouched wilderness that has captivated travelers for centuries."
        image="about-nomads.jpg"
        imageAlt="Mongolian landscape"
        href="/about"
        cta="About Mongolia"
      />

      <FullBleedFeature
        eyebrow="Restaurant & Dining"
        title="An unforgettable culinary journey"
        description="Step into our restaurant where traditional Mongolian hospitality meets refined dining. Our chefs source local ingredients and ancestral recipes to create dishes that tell the story of the steppe, served in an atmosphere of understated elegance."
        image="culture-nomads.jpg"
        imageAlt="Restaurant interior"
        href="/services"
        cta="View Dining"
      />

      <SplitFeatureSection
        eyebrow="Tours & Experiences"
        title="Curated journeys across the steppe"
        description="From horseback riding across the open plains to visiting ancient monasteries and meeting local nomadic families, our tours are designed to connect you with the soul of Mongolia. Choose from ready-made itineraries or let us craft a custom adventure."
        image="mongolia-destinations-bg.jpg"
        imageAlt="Mongolian tour experience"
        href="/portfolio"
        cta="Explore Tours"
        reversed
      />
    </>
  );
}
