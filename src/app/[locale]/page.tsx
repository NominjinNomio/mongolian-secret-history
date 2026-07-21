import HeroHome from "@/components/sections/HeroHome";
import WelcomeIntro from "@/components/sections/WelcomeIntro";
import SplitCardSection from "@/components/sections/SplitCardSection";
import DoubleImageSection from "@/components/sections/DoubleImageSection";
import SpaSection from "@/components/sections/SpaSection";

export default function HomePage() {
  return (
    <>
      <HeroHome />

      <WelcomeIntro
        text="Immerse yourself in the captivating beauty of Mongolia at Mongolian Secret History. A unique retreat set within the vast steppe, offering authentic ger accommodation, refined Mongolian cuisine, and curated cultural journeys."
      />

      <SplitCardSection
        title="Ger Camp Accommodation"
        description="Experience traditional Mongolian living in our beautifully appointed gers. Each one blends heritage craftsmanship with modern comfort, offering panoramic views of the surrounding steppe and a peaceful retreat after a day of adventure."
        image="hero-steppe.jpg"
        imageAlt="Ger camp at sunset"
        href="/accommodation"
        cta="View Accommodation"
      />

      <DoubleImageSection
        title="Mongolian Cuisine"
        description="Our kitchen celebrates the rich culinary heritage of Mongolia. From hand-rolled buuz and hearty khorkhog to fresh dairy dishes and modern interpretations, every meal is a journey through the country's nomadic traditions."
        images={[
          { src: "about-nomads.jpg", alt: "Traditional Mongolian dining" },
          { src: "culture-nomads.jpg", alt: "Mongolian food platter" },
          { src: "hero-steppe.jpg", alt: "Dining in the steppe" },
        ]}
        href="/services"
        cta="Explore Dining"
        reversed
      />

      <SplitCardSection
        title="Discover Mongolia"
        description="Mongolia is a country of dramatic contrasts — vast deserts, rolling grasslands, pristine lakes, and ancient forests. Discover the rich tapestry of nomadic culture, UNESCO-listed sites, and untouched wilderness that has captivated travelers for centuries."
        image="about-nomads.jpg"
        imageAlt="Mongolian landscape"
        href="/about"
        cta="About Mongolia"
      />

      <DoubleImageSection
        title="Recreation & Activities"
        description="Enjoy a refined stay with access to exceptional indoor and outdoor experiences. Horseback riding across the open plains, archery, traditional crafts, and evenings of folk music — there is something unforgettable for every traveler."
        images={[
          { src: "mongolia-destinations-bg.jpg", alt: "Horseback riding" },
          { src: "hero-steppe.jpg", alt: "Steppe activity" },
          { src: "about-nomads.jpg", alt: "Cultural experience" },
        ]}
        href="/portfolio"
        cta="Recreation & Activities"
      />

      <SpaSection
        title="Wellness & Relaxation"
        description="Our wellness spaces exist to restore balance — not through indulgence, but through quiet care. Unwind in a serene setting, reconnect with nature, and enjoy treatments inspired by Mongolian traditions and the healing power of the landscape."
        images={[
          { src: "culture-nomads.jpg", alt: "Wellness space" },
          { src: "hero-steppe.jpg", alt: "Relaxation area" },
        ]}
        href="/services"
        cta="View Wellness"
      />

      <SplitCardSection
        title="Tours & Experiences"
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
