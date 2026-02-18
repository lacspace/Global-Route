
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const gallery = [
  { id: 'healthcare-worker', title: 'Nursing in Toronto', location: 'Canada' },
  { id: 'warehouse-worker', title: 'Logistics in Dubai', location: 'UAE' },
  { id: 'hero-professional', title: 'Engineering in Berlin', location: 'Germany' },
];

export function LifeAbroad() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <Badge className="bg-accent/20 text-primary hover:bg-accent/30 mb-4 px-4 py-1 text-sm font-bold border-none">Life Beyond Borders</Badge>
          <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">Visualize Your Future Career</h2>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">We don't just find you a job; we help you build a new life. See how professionals like you are thriving in their new environments.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gallery.map((item, idx) => {
            const img = PlaceHolderImages.find(i => i.id === item.id);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={img?.imageUrl || ""}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  data-ai-hint={img?.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <Badge className="bg-accent text-accent-foreground mb-3">{item.location}</Badge>
                  <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
