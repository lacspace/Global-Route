
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Countries } from "@/components/home/Countries";
import { Process } from "@/components/home/Process";
import { SuccessStories } from "@/components/home/SuccessStories";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { BadgeCheck, Users, ShieldCheck, Headphones } from "lucide-react";

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

        {/* CTA Banner */}
        <section className="py-20 bg-accent/10">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-primary max-w-3xl mx-auto">
              Ready to take your first step towards an international career?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of professionals who have already made the leap. Start with our AI Resume Analyzer to see where you stand.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90">Get Started Now</Button>
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
