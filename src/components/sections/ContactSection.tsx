"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  return (
    <section className="bg-[#F8F5F0] py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 w-full max-w-[520px]"
          >
            <span className="text-sm tracking-[3px] text-[#2D5A4A] uppercase">Get in Touch</span>
            <h2 className="font-display text-3xl md:text-[44px] leading-[1.15]">
              Start Your Mongolia Adventure
            </h2>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-muted-foreground">Name</label>
              <input
                type="text"
                className="h-[52px] rounded-xl border border-border bg-white px-4 text-foreground outline-none focus:border-[#2D5A4A]"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-muted-foreground">Email</label>
              <input
                type="email"
                className="h-[52px] rounded-xl border border-border bg-white px-4 text-foreground outline-none focus:border-[#2D5A4A]"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-muted-foreground">Message</label>
              <textarea
                rows={5}
                className="rounded-xl border border-border bg-white p-4 text-foreground outline-none focus:border-[#2D5A4A] resize-none"
                placeholder="Tell us about your trip..."
              />
            </div>

            <Button type="submit" variant="primary" className="self-start">
              Send Inquiry
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-7 w-full max-w-[460px]"
          >
            <h3 className="font-display text-[30px]">Contact Information</h3>

            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">Address</span>
              <span className="text-[17px] text-foreground">Akuma center and Workers street, Ulaanbaatar</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">Phone</span>
              <span className="text-[17px] text-foreground">+976 70000450</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">Email</span>
              <span className="text-[17px] text-foreground">info@mongoliansecrethistory.mn</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">Working Hours</span>
              <span className="text-[17px] text-foreground">Mon–Fri, 9:00 AM – 6:00 PM (GMT+8)</span>
            </div>

            <div className="pt-6 flex flex-col gap-3">
              <Button href="tel:+97670000450" variant="primary" className="gap-2">
                <Phone size={16} />
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
