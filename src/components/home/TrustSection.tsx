
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, MapPin, BadgeCheck } from "lucide-react";

export function TrustSection() {
  const officeImg = PlaceHolderImages.find(img => img.id === 'office-team');
  const sessionImg = PlaceHolderImages.find(img => img.id === 'counseling-session');

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
                Trust is our <br />Foundation
              </h2>
              <p className="text-lg text-muted-foreground">
                In an industry filled with uncertainty, we stand out by being 100% transparent. Visit our registered offices or talk to our verified counselors today.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Government Registered</h4>
                  <p className="text-muted-foreground text-sm">Ministry of External Affairs (MEA) License #12345/IND.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Physical Presence</h4>
                  <p className="text-muted-foreground text-sm">Fully operational offices in Mumbai, Bangalore, and Kochi.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                  <BadgeCheck className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Direct Placements</h4>
                  <p className="text-muted-foreground text-sm">We work directly with employers, eliminating middle-men fraud.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-full">
              <Image
                src={officeImg?.imageUrl || ""}
                alt="Our office team"
                fill
                className="object-cover"
                data-ai-hint={officeImg?.imageHint}
              />
              <div className="absolute bottom-4 left-4 bg-white/90 p-2 rounded text-xs font-bold">
                Mumbai HQ Team
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg flex-1">
                <Image
                  src={sessionImg?.imageUrl || ""}
                  alt="Counseling session"
                  fill
                  className="object-cover"
                  data-ai-hint={sessionImg?.imageHint}
                />
                <div className="absolute bottom-4 left-4 bg-white/90 p-2 rounded text-xs font-bold">
                  Expert Guidance
                </div>
              </div>
              <div className="bg-primary text-primary-foreground p-6 rounded-2xl flex flex-col justify-center">
                <p className="text-3xl font-extrabold">100%</p>
                <p className="text-sm opacity-80">Documentation Transparency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
