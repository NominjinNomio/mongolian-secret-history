"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <InnerPageLayout>
      <PageHero
        label="Get in Touch"
        title="Contact Us"
        subtitle="Start planning your Mongolia adventure today"
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[20px] bg-white p-8 lg:p-10 flex flex-col gap-6 w-full max-w-[520px]"
            >
              <h3 className="font-display text-[28px]">Send Us a Message</h3>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">Name</label>
                <input
                  type="text"
                  className="h-[52px] rounded-xl border border-border bg-[#F8F5F0] px-4 text-foreground outline-none focus:border-primary-dark"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">Email</label>
                <input
                  type="email"
                  className="h-[52px] rounded-xl border border-border bg-[#F8F5F0] px-4 text-foreground outline-none focus:border-primary-dark"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">Message</label>
                <textarea
                  rows={5}
                  className="rounded-xl border border-border bg-[#F8F5F0] p-4 text-foreground outline-none focus:border-primary-dark resize-none"
                  placeholder="Tell us about your trip..."
                />
              </div>

              <Button type="submit" variant="dark" className="self-start">
                Send Inquiry
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-7 w-full max-w-[460px]"
            >
              <h3 className="font-display text-4xl">Get in Touch</h3>

              {[
                { label: "Address", value: "Akuma center and Workers street, Ulaanbaatar" },
                { label: "Phone", value: "+976 70000450" },
                { label: "Email", value: "info@mongoliansecrethistory.mn" },
                { label: "Working Hours", value: "Mon–Fri, 9:00 AM – 6:00 PM (GMT+8)" },
              ].map((info) => (
                <div key={info.label} className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground">{info.label}</span>
                  <span className="text-lg text-foreground">{info.value}</span>
                </div>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <Button href="tel:+97670000450" variant="primary" className="gap-2">
                  <Phone size={16} />
                  Call Us Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
