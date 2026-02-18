import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Countries } from "@/components/home/Countries";
import { Process } from "@/components/home/Process";
import { TrustSection } from "@/components/home/TrustSection";
import { SuccessStories } from "@/components/home/SuccessStories";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { BadgeCheck, Users, ShieldCheck, Headphones, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        
        {/* Trust Indicators Bar */}
        <section className="bg-primary py-8 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 text-white">
                <BadgeCheck className="h-6 w-6 text-accent shrink-0" />
                <div className="text-left">
                  <p className="font-bold text-sm md:text-base">Government Approved</p>
                  <p className="text-[10px] md:text-xs opacity-70 uppercase tracking-tighter">License #12345/IND</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-white">
                <Users className="h-6 w-6 text-accent shrink-0" />
                <div className="text-left">
                  <p className="font-bold text-sm md:text-base">5,000+ Placements</p>
                  <p className="text-[10px] md:text-xs opacity-70 uppercase tracking-tighter">Across 12 Countries</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-white">
                <ShieldCheck className="h-6 w-6 text-accent shrink-0" />
                <div className="text-left">
                  <p className="font-bold text-sm md:text-base">Verified Employers</p>
                  <p className="text-[10px] md:text-xs opacity-70 uppercase tracking-tighter">100% Background Checked</p>
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3 text-white">
                <Headphones className="h-6 w-6 text-accent shrink-0" />
                <div className="text-left">
                  <p className="font-bold text-sm md:text-base">24/7 Support</p>
                  <p className="text-[10px] md:text-xs opacity-70 uppercase tracking-tighter">Overseas Crisis Help</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Countries />
        <Process />
        <TrustSection />

        {/* CTA Banner */}
        <section className="py-16 md:py-24 bg-accent/10 border-y border-accent/20">
          <div className="container mx-auto px-4 text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary max-w-4xl mx-auto leading-tight px-2">
              Don't leave your international career to chance. Talk to our experts.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Our verified counselors provide a step-by-step roadmap tailored to your specific profile and destination choice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 pt-2">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg h-14 px-10 shadow-lg font-bold w-full sm:w-auto">
                Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <SuccessStories />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
