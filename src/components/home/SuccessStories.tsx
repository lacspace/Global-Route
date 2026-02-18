
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const stories = [
  {
    id: 'success-story-1',
    name: 'Rahul Sharma',
    from: 'Mumbai',
    to: 'Germany',
    job: 'Mechanical Engineer',
    story: "I was worried about fake consultancies. Global Career Pathways provided me a clear roadmap and within 6 months, I moved to Berlin."
  },
  {
    id: 'success-story-2',
    name: 'Priya Verma',
    from: 'Kerala',
    to: 'Canada',
    job: 'Registered Nurse',
    story: "The eligibility checker showed me exactly where I could apply. The healthcare guidance was spot on for Canadian standards."
  }
];

export function SuccessStories() {
  return (
    <section id="success" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Real Success Stories</h2>
          <p className="text-muted-foreground">See how professionals like you transformed their lives and careers.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {stories.map((story) => {
            const imgData = PlaceHolderImages.find(img => img.id === story.id);
            return (
              <div key={story.id} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-primary/5 flex flex-col md:flex-row gap-8 items-start">
                <div className="relative w-full md:w-48 h-48 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={imgData?.imageUrl || ""}
                    alt={story.name}
                    fill
                    className="object-cover"
                    data-ai-hint={imgData?.imageHint}
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-accent text-accent-foreground font-bold">{story.to}</Badge>
                  </div>
                </div>
                <div className="space-y-4 flex-1">
                  <Quote className="h-8 w-8 text-accent/50" />
                  <p className="italic text-muted-foreground leading-relaxed">"{story.story}"</p>
                  <div>
                    <h4 className="text-xl font-bold text-primary">{story.name}</h4>
                    <p className="text-sm font-medium text-muted-foreground">{story.job} • Formerly in {story.from}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
