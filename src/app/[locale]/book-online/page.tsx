"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";

const tabs = ["Tours", "Accommodation", "Travel Services"];

const steps = [
  {
    title: "1. Submit your request",
    desc: "Fill in the form with your preferred dates and group size.",
  },
  {
    title: "2. We check availability",
    desc: "Our team will confirm availability and send a detailed itinerary.",
  },
  {
    title: "3. Confirm with deposit",
    desc: "Pay a deposit to secure your booking and prepare for your journey.",
  },
];

export default function BookOnlinePage() {
  const [activeTab, setActiveTab] = useState("Tours");

  return (
    <InnerPageLayout>
      <PageHero
        label="Reservations"
        title="Book Online"
        subtitle="Reserve your tour, accommodation, or travel services with our team"
      />

      <section className="bg-[#F8F5F0] pt-20 pb-10 lg:pt-[80px] lg:pb-[40px]">
        <div className="mx-auto max-w-[800px] px-6 lg:px-0 text-center">
          <p className="text-lg leading-[1.7] text-muted-foreground">
            When you have made your decision and are ready to book, please use this form to let us know your plans. The following services can be booked online through this page.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F5F0] pb-10">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-primary-dark text-white"
                    : "bg-white text-foreground hover:bg-white/80"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0] pb-20 lg:pb-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-[520px] rounded-[20px] bg-white p-10"
            >
              <h2 className="font-display text-[28px] text-foreground mb-6">Book Your {activeTab}</h2>

              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">Full Name</label>
                  <input
                    type="text"
                    className="w-full h-[52px] rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] px-4 text-sm outline-none focus:border-primary-dark"
                    placeholder="Your full name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">Email Address</label>
                  <input
                    type="email"
                    className="w-full h-[52px] rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] px-4 text-sm outline-none focus:border-primary-dark"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full h-[52px] rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] px-4 text-sm outline-none focus:border-primary-dark"
                    placeholder="+976 ..."
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">Preferred {activeTab === "Accommodation" ? "Room Type" : activeTab === "Travel Services" ? "Service" : "Tour"}</label>
                  <input
                    type="text"
                    className="w-full h-[52px] rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] px-4 text-sm outline-none focus:border-primary-dark"
                    placeholder={activeTab === "Accommodation" ? "Hotel room or ger" : activeTab === "Travel Services" ? "Guide, driver, etc." : "Tour name"}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">Travel Dates</label>
                  <input
                    type="text"
                    className="w-full h-[52px] rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] px-4 text-sm outline-none focus:border-primary-dark"
                    placeholder="e.g. July 10–20, 2026"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">Additional Requests</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] p-4 text-sm outline-none focus:border-primary-dark resize-none"
                    placeholder="Tell us more about your group size, dietary needs, or special requests."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-accent text-foreground px-8 py-4 text-sm font-medium hover:bg-accent-dark transition-colors"
                >
                  Submit Booking Request
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full max-w-[460px] flex flex-col gap-7"
            >
              <h2 className="font-display text-[30px] text-foreground">What Happens Next?</h2>
              {steps.map((step) => (
                <div key={step.title} className="flex flex-col gap-1">
                  <h3 className="font-display text-xl text-primary-dark">{step.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
