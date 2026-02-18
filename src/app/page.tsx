
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
        <section className="bg-primary py-8">
          <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center justify-center gap-3 text-white">
              <BadgeCheck className="h-6 w-6 text-accent" />
              <div className="text-left">
                <p className="font-bold">Government Approved</p>
                <p className="text-[10px] opacity-70">License #12345/IND</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <Users className="h-6 w-6 text-accent" />
              <div className="text-left">
                <p className="font-bold">5,000+ Placements</p>
                <p className="text-[10px] opacity-70">Across 12 Countries</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <ShieldCheck className="h-6 w-6 text-accent" />
              <div className="text-left">
                <p className="font-bold">Verified Employers</p>
                <p className="text-[10px] opacity-70">100% Background Checked</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <Headphones className="h-6 w-6 text-accent" />
              <div className="text-left">
                <p className="font-bold">24/7 Support</p>
                <p className="text-[10px] opacity-70">Overseas Crisis Help</p>
              </div>
            </div>
          </div>
        </section>

        <Countries />
        <Process />
        <TrustSection />

        {/* CTA Banner */}
        <section className="py-24 bg-accent/10 border-y border-accent/20">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-primary max-w-4xl mx-auto leading-tight">
              Don't leave your international career to chance. Talk to our experts today.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our verified counselors provide a step-by-step roadmap tailored to your specific profile and destination choice.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg h-14 px-10">
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
