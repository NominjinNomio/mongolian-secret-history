import { getTranslations } from "next-intl/server";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const roomTypes = [
  {
    title: "Hotel Rooms",
    description: "Comfortable hotel-style rooms with modern amenities, en-suite bathrooms, and scenic views.",
    image: "gallery-2.jpg",
  },
  {
    title: "Traditional Ger",
    description: "Authentic Mongolian felt tents with cozy beds, traditional décor, and a true nomadic atmosphere.",
    image: "gallery-3.jpg",
  },
];

const facilities = [
  { title: "Authentic Dining", description: "Traditional Mongolian meals prepared with local ingredients." },
  { title: "Relaxation Areas", description: "Lounges and outdoor spaces to unwind after a day of adventure." },
  { title: "Cultural Activities", description: "Experience local customs, music, and storytelling with hosts." },
  { title: "Guided Excursions", description: "Daily tours to nearby landmarks and natural wonders." },
  { title: "Transportation", description: "Airport transfers and transport support for all guests." },
  { title: "24/7 Support", description: "Round-the-clock assistance for bookings and special requests." },
];

export default async function AccommodationPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("accommodation");

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      <section className="bg-[#F8F5F0] py-16 lg:py-20">
        <div className="mx-auto max-w-[900px] px-6 lg:px-0 text-center">
          <p className="text-base md:text-lg leading-[1.8] text-muted-foreground">
            Experience the perfect blend of comfort and tradition during your Mongolian journey. From modern hotel rooms in Ulaanbaatar to authentic ger camps under the stars, we offer carefully selected accommodations for every type of traveler.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <span className="text-xs font-semibold uppercase tracking-[3px] text-muted-foreground">Featured Stay</span>
              <h2 className="font-display text-3xl md:text-[40px] leading-tight text-foreground">
                Nayon Mountain Top Entcamp
              </h2>
              <p className="text-base leading-[1.8] text-muted-foreground">
                Nestled in the breathtaking landscapes of central Mongolia, Nayon Mountain Top Entcamp offers an unforgettable blend of wilderness comfort and nomadic hospitality. Wake up to panoramic mountain views, enjoy traditional meals by the stove, and fall asleep under a sky full of stars.
              </p>
              <p className="text-base leading-[1.8] text-muted-foreground">
                Each ger is furnished with cozy bedding, warm blankets, and hand-crafted traditional details. Shared modern bathroom facilities, a central dining ger, and friendly local hosts make this the ideal base for exploring the surrounding valleys and horse trails.
              </p>
            </div>
            <div className="relative h-[320px] lg:h-[420px] rounded-[20px] overflow-hidden">
              <Image src="gallery-1.jpg" alt="Nayon Mountain Top Entcamp" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0] py-16 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-0">
          <h2 className="font-display text-2xl md:text-3xl text-center text-foreground mb-12">Room Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roomTypes.map((room) => (
              <div key={room.title} className="bg-white rounded-[20px] border border-border overflow-hidden">
                <div className="relative h-[240px] w-full">
                  <Image src={room.image} alt={room.title} fill className="object-cover" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-display text-xl text-foreground mb-2">{room.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{room.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-0">
          <h2 className="font-display text-2xl md:text-3xl text-center text-foreground mb-12">Services & Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <div key={facility.title} className="bg-[#F8F5F0] rounded-[16px] p-6">
                <h3 className="font-display text-lg text-foreground mb-2">{facility.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1A2B4A] py-14">
        <div className="mx-auto max-w-[900px] px-6 lg:px-0">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-display text-4xl md:text-5xl text-[#C9A227]">16</p>
              <p className="text-sm text-white/70 mt-1">Partner Stays</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-[#C9A227]">53</p>
              <p className="text-sm text-white/70 mt-1">Traditional Gers</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl text-[#C9A227]">69</p>
              <p className="text-sm text-white/70 mt-1">Hotel Rooms</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0] py-16 lg:py-20">
        <div className="mx-auto max-w-[900px] px-6 lg:px-0">
          <div className="bg-white rounded-[20px] border border-border p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl text-foreground mb-2">Book Your Stay</h3>
              <p className="text-sm text-muted-foreground">Ready to experience authentic Mongolian hospitality? Reserve your accommodation today.</p>
            </div>
            <a
              href={`/${locale}/book-online`}
              className="inline-block bg-[#C9A227] hover:bg-[#b08f22] text-white rounded-full px-8 py-3 text-sm font-medium transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
