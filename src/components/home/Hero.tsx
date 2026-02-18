
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
    <section className="relative w-full overflow-hidden bg-background pt-24 pb-20 md:pt-32 md:pb-36 lg:pt-40 lg:pb-48">
      {/* High-Performance Flight Network Background */}
      <FlightAnimation />

      {/* Decorative Blur Spheres */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-accent/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center relative z-10">
        <div className="space-y-8 md:space-y-10 text-center lg:text-left order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md text-primary border border-accent/30 shadow-sm mb-2 mx-auto lg:mx-0">
              <MapPin className="h-4 w-4 text-accent animate-bounce" />
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em]">Verified International Routes Open</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-primary leading-[1] lg:max-w-xl">
              Your Career, <br className="hidden sm:block" />
              <span className="text-accent underline decoration-primary/10 decoration-4 md:decoration-8 underline-offset-4 md:underline-offset-8">No Borders.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0 leading-relaxed font-medium px-4 lg:px-0">
              We connect skilled Indian professionals directly with verified employers in 12+ nations. Zero middle-men. 100% transparency from Nagpur.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start px-4 lg:px-0"
          >
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg md:text-xl h-14 md:h-16 px-8 md:px-12 shadow-2xl font-black rounded-full transition-all hover:scale-105 active:scale-95 group w-full sm:w-auto"
            >
              Start Your Journey <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg" variant="outline" className="bg-white/50 backdrop-blur-sm border-2 border-primary/20 text-primary hover:bg-white text-lg md:text-xl h-14 md:h-16 px-8 md:px-12 font-black rounded-full transition-all w-full sm:w-auto"
            >
              Meet a Counselor
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-8 pt-4"
          >
            <div className="flex items-center gap-2 md:gap-3">
              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent" />
              <span className="text-[10px] md:text-sm font-black text-primary uppercase tracking-tight">MEA Registered (9588/IND)</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent" />
              <span className="text-[10px] md:text-sm font-black text-primary uppercase tracking-tight">ISO 9001 Certified</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group order-1 lg:order-2 px-4 lg:px-0"
        >
          {/* Animated decorative frame */}
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-[2rem] md:rounded-[4rem] blur-xl md:blur-2xl group-hover:scale-105 transition-transform duration-700" />
          
          <div className="relative h-[300px] sm:h-[450px] md:h-[600px] lg:h-[700px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-4 md:border-8 border-white">
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
              className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-xl p-4 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border border-white/20"
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-accent rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg -rotate-6 group-hover:rotate-0 transition-transform duration-500">
                  <Users className="h-6 w-6 md:h-10 md:w-10 text-primary" />
                </div>
                <div>
                  <p className="text-primary font-black text-lg md:text-3xl tracking-tighter">5,000+ Success Stories</p>
                  <p className="text-[10px] md:text-lg text-muted-foreground font-semibold leading-tight">Join elite Indian professionals working globally.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
