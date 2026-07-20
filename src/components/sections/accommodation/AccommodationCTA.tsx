import Link from "next/link";

export default function AccommodationCTA({ locale }: { locale: string }) {
  return (
    <section className="relative overflow-hidden py-24 lg:py-40">
      <div className="absolute inset-0 bg-[#111]" />
      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col items-start gap-8 px-6 lg:px-12">
        <span className="text-sm tracking-[4px] text-white/50 uppercase">
          Start Your Journey
        </span>
        <h2 className="font-display max-w-[900px] text-4xl leading-[1.1] text-white md:text-6xl lg:text-[80px]">
          Tell us about your next stay in Mongolia
        </h2>

        <p className="max-w-[560px] text-lg leading-relaxed text-white/60">
          Every one of our guests has expressed their delight, so why not give it a shot and get in touch?
        </p>

        <Link
          href={`/${locale}/contact`}
          className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-base font-semibold text-[#0a0a0a] transition-transform hover:scale-105"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
