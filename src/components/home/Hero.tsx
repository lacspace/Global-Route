
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-professional');

  return (
    <section className="relative w-full overflow-hidden bg-background pt-12 pb-24 md:pt-24 md:pb-32">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary leading-[1.1]">
              Your Global Career <br /> Starts Here
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-[600px]">
              We help Indian professionals secure high-paying jobs in Canada, Germany, UAE, and the UK. No confusion, no fraud—just real opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg h-14 px-8">
              Check Your Eligibility <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 text-lg h-14 px-8">
              Book Free Counseling
            </Button>
          </div>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Verified Agencies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">100% Transparency</span>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right duration-700">
          <Image
            src={heroImage?.imageUrl || ""}
            alt={heroImage?.description || "Professional working abroad"}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage?.imageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-primary/10">
            <p className="text-primary font-bold">Join 5,000+ professionals</p>
            <p className="text-sm text-muted-foreground">Successfully placed in over 12 countries this year.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
