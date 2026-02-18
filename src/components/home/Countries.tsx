import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";

const countries = [
  { id: 'germany-skyline', name: 'Germany', tag: 'Engineering & Healthcare' },
  { id: 'uae-skyline', name: 'UAE', tag: 'Hospitality & Logistics' },
  { id: 'canada-skyline', name: 'Canada', tag: 'IT & Nursing' },
  { id: 'uk-skyline', name: 'UK', tag: 'Healthcare & Retail' },
];

export function Countries() {
  return (
    <section id="countries" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Top Destinations</h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Explore seeking countries with simplified visa processes and high demand for skilled Indian professionals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {countries.map((country) => {
            const imgData = PlaceHolderImages.find(img => img.id === country.id);
            return (
              <Card key={country.id} className="group cursor-pointer overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-40 md:h-48 w-full">
                  <Image
                    src={imgData?.imageUrl || ""}
                    alt={country.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={imgData?.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4">
                    <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-md">{country.name}</h3>
                  </div>
                </div>
                <CardContent className="p-3 md:p-4 bg-white">
                  <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider mb-1">{country.tag}</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">High demand: 250+ active listings</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
