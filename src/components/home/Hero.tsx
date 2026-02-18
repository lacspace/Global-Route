
"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-professional');

  return (
    <section className="relative w-full overflow-hidden bg-background pt-16 pb-24 md:pt-28 md:pb-40">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 animate-in fade-in slide-in-from-left duration-700">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary leading-[1.05]">
              Real Jobs. <br />Real People. <br /><span className="text-accent-foreground/60">Real Global Careers.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] leading-relaxed">
              We help Indian professionals secure verified, high-paying jobs in Canada, Germany, UAE, and the UK with zero confusion.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl h-16 px-10 shadow-lg font-bold">
              Check Eligibility Now <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 text-xl h-16 px-10 font-bold">
              Book Free Counseling
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-8 pt-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              <span className="text-base font-bold text-primary">MEA Registered Agency</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent" />
              <span className="text-base font-bold text-primary">Direct Employer Hiring</span>
            </div>
          </div>
        </div>
        <div className="relative h-[450px] md:h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right duration-700">
          <Image
            src={heroImage?.imageUrl || ""}
            alt={heroImage?.description || "Professional working abroad"}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage?.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-primary font-black text-lg">Join 5,000+ Pros</p>
                <p className="text-sm text-muted-foreground font-medium">Successfully placed across 12 countries this year alone.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Users } from "lucide-react";
