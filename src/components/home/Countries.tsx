
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
    <section id="countries" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Top Destinations for Indian Talent</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Explore the most sought-after countries with simplified visa processes and high demand for skilled professionals.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country) => {
            const imgData = PlaceHolderImages.find(img => img.id === country.id);
            return (
              <Card key={country.id} className="group cursor-pointer overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 w-full">
                  <Image
                    src={imgData?.imageUrl || ""}
                    alt={country.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={imgData?.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white drop-shadow-md">{country.name}</h3>
                  </div>
                </div>
                <CardContent className="p-4 bg-white">
                  <p className="text-sm font-medium text-primary uppercase tracking-wider">{country.tag}</p>
                  <p className="text-xs text-muted-foreground mt-1">High demand: 250+ active listings</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
