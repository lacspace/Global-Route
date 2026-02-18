"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ShieldCheck, MapPin, BadgeCheck } from "lucide-react";

export function TrustSection() {
  const officeImg = PlaceHolderImages.find(img => img.id === 'office-team');
  const sessionImg = PlaceHolderImages.find(img => img.id === 'counseling-session');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Trust is our <br className="hidden md:block" /> Foundation
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                In an industry filled with uncertainty, we stand out by being 100% transparent. Visit our registered offices or talk to our verified counselors today.
              </p>
            </div>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg">Government Registered</h4>
                  <p className="text-muted-foreground text-sm leading-snug">Ministry of External Affairs (MEA) License #12345/IND.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg">Physical Presence</h4>
                  <p className="text-muted-foreground text-sm leading-snug">Fully operational offices in Mumbai, Bangalore, and Kochi.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                  <BadgeCheck className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg">Direct Placements</h4>
                  <p className="text-muted-foreground text-sm leading-snug">Direct employer partnership, zero middle-men fraud.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4 h-[350px] sm:h-[450px] md:h-[500px]">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg h-full">
              <Image
                src={officeImg?.imageUrl || ""}
                alt="Our office team"
                fill
                className="object-cover"
                data-ai-hint={officeImg?.imageHint}
              />
              <div className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded text-[10px] md:text-xs font-bold shadow-sm">
                Mumbai HQ Team
              </div>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg flex-1">
                <Image
                  src={sessionImg?.imageUrl || ""}
                  alt="Counseling session"
                  fill
                  className="object-cover"
                  data-ai-hint={sessionImg?.imageHint}
                />
                <div className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded text-[10px] md:text-xs font-bold shadow-sm">
                  Expert Guidance
                </div>
              </div>
              <div className="bg-primary text-primary-foreground p-4 md:p-6 rounded-xl md:rounded-2xl flex flex-col justify-center">
                <p className="text-2xl md:text-3xl font-extrabold">100%</p>
                <p className="text-[10px] md:text-xs opacity-80 uppercase tracking-wider font-bold">Documentation Transparency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
