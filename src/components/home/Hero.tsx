"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, CheckCircle2, Users, MapPin } from "lucide-react";
import { FlightAnimation } from "./FlightAnimation";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-professional');

  return (
    <section className="relative w-full overflow-hidden bg-background pt-12 pb-24 md:pt-24 md:pb-36 lg:pt-32 lg:pb-48">
      {/* High-Performance Flight Network Background */}
      <FlightAnimation />

      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        <div className="space-y-10 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md text-primary border border-accent/30 shadow-sm mb-4">
              <MapPin className="h-4 w-4 text-accent animate-bounce" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified International Routes Open</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-primary leading-[0.9] lg:max-w-xl">
              Your Career, <br />
              <span className="text-accent underline decoration-primary/10 decoration-8 underline-offset-8">No Borders.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0 leading-relaxed font-medium">
              We connect skilled Indian professionals directly with verified employers in 12+ nations. Zero middle-men. 100% transparency.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
          >
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-xl h-16 px-12 shadow-2xl font-black rounded-full transition-all hover:scale-105 active:scale-95 group">
              Start Your Journey <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 text-primary hover:bg-white text-xl h-16 px-12 font-black rounded-full transition-all">
              Meet a Counselor
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
              <span className="text-sm font-black text-primary uppercase tracking-tight">MEA Registered (12345/IND)</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              <span className="text-sm font-black text-primary uppercase tracking-tight">ISO 9001 Certified</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group"
        >
          {/* Animated decorative frame */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-[4rem] blur-2xl group-hover:scale-105 transition-transform duration-700" />
          
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-8 border-white">
            <Image
              src={heroImage?.imageUrl || ""}
              alt={heroImage?.description || "Professional working abroad"}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
              priority
              data-ai-hint={heroImage?.imageHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 bg-white/95 backdrop-blur-xl p-6 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/20"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-accent rounded-3xl flex items-center justify-center shadow-lg -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <p className="text-primary font-black text-2xl md:text-3xl tracking-tighter">5,000+ Success Stories</p>
                  <p className="text-sm md:text-lg text-muted-foreground font-semibold leading-tight">Join a community of elite professionals working in world-class environments.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
