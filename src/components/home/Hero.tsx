"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import { FlightAnimation } from "./FlightAnimation";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-professional');

  return (
    <section className="relative w-full overflow-hidden bg-background pt-12 pb-24 md:pt-24 md:pb-36 lg:pt-32 lg:pb-48">
      {/* Live Flight Animation Layer */}
      <FlightAnimation />

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <div className="space-y-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-primary border border-accent/20 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
              </span>
              <span className="text-xs font-black uppercase tracking-widest">Live: New jobs in Germany & Canada</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-primary leading-[0.95]">
              Real Jobs. <br />
              <span className="text-accent-foreground/50">Real People.</span> <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Global Careers.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0 leading-relaxed font-medium">
              We help Indian professionals secure verified, high-paying jobs in Canada, Germany, UAE, and the UK with absolute transparency.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
          >
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl h-16 px-12 shadow-2xl font-black rounded-full transition-transform hover:scale-105 active:scale-95">
              Check Eligibility <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 text-xl h-16 px-12 font-black rounded-full">
              Book Counseling
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-4"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              <span className="text-base font-black text-primary uppercase tracking-tight">MEA Registered</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              <span className="text-base font-black text-primary uppercase tracking-tight">Direct Hiring</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]"
        >
          <Image
            src={heroImage?.imageUrl || ""}
            alt={heroImage?.description || "Professional working abroad"}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage?.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 bg-white/95 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] shadow-2xl border border-white/20"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg rotate-3 group-hover:rotate-0 transition-transform">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-primary font-black text-xl md:text-2xl tracking-tighter">Join 5,000+ Professionals</p>
                <p className="text-sm md:text-base text-muted-foreground font-semibold">Successfully placed across 12 countries this year alone.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
