
"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Countries } from "@/components/home/Countries";
import { Process } from "@/components/home/Process";
import { TrustSection } from "@/components/home/TrustSection";
import { SuccessStories } from "@/components/home/SuccessStories";
import { Stats } from "@/components/home/Stats";
import { LifeAbroad } from "@/components/home/LifeAbroad";
import { Faq } from "@/components/home/Faq";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { BadgeCheck, Users, ShieldCheck, Headphones, ArrowRight } from "lucide-react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col min-h-screen selection:bg-accent/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Trust Indicators Bar */}
        <section className="bg-primary py-12 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
              {[
                { icon: <BadgeCheck className="h-7 w-7 text-accent" />, title: "Govt Approved", sub: "License #12345/IND" },
                { icon: <Users className="h-7 w-7 text-accent" />, title: "5,000+ Placements", sub: "Across 12 Nations" },
                { icon: <ShieldCheck className="h-7 w-7 text-accent" />, title: "Verified Employers", sub: "100% BG Checked" },
                { icon: <Headphones className="h-7 w-7 text-accent" />, title: "24/7 Support", sub: "Overseas Crisis Help" },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center lg:justify-start gap-4 text-white"
                >
                  <div className="shrink-0">{item.icon}</div>
                  <div className="text-left">
                    <p className="font-bold text-base">{item.title}</p>
                    <p className="text-[10px] opacity-70 uppercase tracking-widest">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Countries />
        <Stats />
        <Process />
        <LifeAbroad />
        <TrustSection />

        {/* CTA Banner */}
        <section className="py-24 md:py-32 bg-accent/10 border-y border-accent/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="container mx-auto px-4 text-center space-y-10 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-primary max-w-4xl mx-auto leading-[1.1]"
            >
              Don't leave your global career to chance.
            </motion.h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our verified counselors provide a precise roadmap tailored to your profile.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-xl h-16 px-12 shadow-2xl font-bold w-full sm:w-auto rounded-full transition-all hover:scale-105 active:scale-95">
                Book Free Consultation <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>

        <SuccessStories />
        <Faq />
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}
