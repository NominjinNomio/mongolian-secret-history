import HeroHome from "@/components/sections/HeroHome";
import GerCampFeature from "@/components/sections/GerCampFeature";
import WelcomeIntro from "@/components/sections/WelcomeIntro";
import SplitCardSection from "@/components/sections/SplitCardSection";
import DoubleImageSection from "@/components/sections/DoubleImageSection";
import SpaSection from "@/components/sections/SpaSection";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const fallbackIntro =
  "Immerse yourself in the captivating beauty of Mongolia at Mongolian Secret History. A unique retreat set within the vast steppe, offering authentic ger accommodation, refined Mongolian cuisine, and curated cultural journeys.";

export default async function HomePage({ params }: PageProps) {
  await params;

  return (
    <>
      <HeroHome />

      <GerCampFeature />

      <WelcomeIntro text={fallbackIntro} />

      <SplitCardSection
        title="Discover Mongolia"
        description="Mongolia is a country of dramatic contrasts — vast deserts, rolling grasslands, pristine lakes, and ancient forests. Discover the rich tapestry of nomadic culture, UNESCO-listed sites, and untouched wilderness that has captivated travelers for centuries."
        image="/images/about-nomads.jpg"
        imageAlt="Mongolian landscape"
        href="/about"
        cta="About Mongolia"
      />

      <DoubleImageSection
        title="Recreation & Activities"
        description="Enjoy a refined stay with access to exceptional indoor and outdoor experiences. Horseback riding across the open plains, archery, traditional crafts, and evenings of folk music — there is something unforgettable for every traveler."
        images={[
          { src: "/images/mongolia-destinations-bg.jpg", alt: "Horseback riding" },
          { src: "/images/hero-steppe.jpg", alt: "Steppe activity" },
          { src: "/images/about-nomads.jpg", alt: "Cultural experience" },
        ]}
        href="/portfolio"
        cta="Recreation & Activities"
      />

      <SpaSection
        title="Wellness & Relaxation"
        description="Our wellness spaces exist to restore balance — not through indulgence, but through quiet care. Unwind in a serene setting, reconnect with nature, and enjoy treatments inspired by Mongolian traditions and the healing power of the landscape."
        images={[
          { src: "/images/culture-nomads.jpg", alt: "Wellness space" },
          { src: "/images/hero-steppe.jpg", alt: "Relaxation area" },
        ]}
        href="/services"
        cta="View Wellness"
      />

      <SplitCardSection
        title="Tours & Experiences"
        description="From horseback riding across the open plains to visiting ancient monasteries and meeting local nomadic families, our tours are designed to connect you with the soul of Mongolia. Choose from ready-made itineraries or let us craft a custom adventure."
        image="/images/mongolia-destinations-bg.jpg"
        imageAlt="Mongolian tour experience"
        href="/portfolio"
        cta="Explore Tours"
        reversed
      />
    </>
  );
}
