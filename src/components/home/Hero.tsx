"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, CheckCircle2, Users } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-professional');

  return (
    <section className="relative w-full overflow-hidden bg-background pt-8 pb-16 md:pt-20 md:pb-32 lg:pt-28 lg:pb-40">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8 md:space-y-10 animate-in fade-in slide-in-from-left duration-700 text-center lg:text-left">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-primary leading-[1.1]">
              Real Jobs. <br />
              <span className="hidden sm:inline">Real People.</span>
              <span className="sm:hidden">Real People.</span> <br />
              <span className="text-accent-foreground/60">Real Global Careers.</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-[600px] mx-auto lg:mx-0 leading-relaxed">
              We help Indian professionals secure verified, high-paying jobs in Canada, Germany, UAE, and the UK with zero confusion.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg md:text-xl h-14 md:h-16 px-8 md:px-10 shadow-lg font-bold">
              Check Eligibility <ArrowRight className="ml-2 h-5 w-5 md:h-6 md:w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 text-lg md:text-xl h-14 md:h-16 px-8 md:px-10 font-bold">
              Book Counseling
            </Button>
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 pt-4">
            <div className="flex items-center gap-2 md:gap-3">
              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent" />
              <span className="text-sm md:text-base font-bold text-primary">MEA Registered</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <CheckCircle2 className="h-5 w-5 md:h-6 md:w-6 text-accent" />
              <span className="text-sm md:text-base font-bold text-primary">Direct Hiring</span>
            </div>
          </div>
        </div>
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right duration-700">
          <Image
            src={heroImage?.imageUrl || ""}
            alt={heroImage?.description || "Professional working abroad"}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage?.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-xl md:rounded-2xl shadow-2xl border border-white/20">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                <Users className="h-5 w-5 md:h-6 md:w-6 text-primary" />
              </div>
              <div>
                <p className="text-primary font-black text-base md:text-lg">Join 5,000+ Pros</p>
                <p className="text-[10px] md:text-sm text-muted-foreground font-medium">Successfully placed across 12 countries this year.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
