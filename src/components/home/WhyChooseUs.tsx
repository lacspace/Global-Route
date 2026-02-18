"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Rocket, HeartHandshake, MapPin } from "lucide-react";

const benefits = [
  {
    icon: <ShieldAlert className="h-8 w-8 text-primary" />,
    title: "Anti-Fraud Policy",
    desc: "100% transparent documentation with zero middle-man involvement."
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Fast-Track Visas",
    desc: "Our MEA license status gives us priority in government processing queues."
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Post-Landing Care",
    desc: "From airport pickup to local banking, we don't leave you until you're settled."
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Verified Networks",
    desc: "Direct access to Fortune 500 employers in 12+ developed nations."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-primary leading-tight">
                Why Thousands <br />
                Trust <span className="text-accent">GCP Portal.</span>
              </h2>
              <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
                In an industry clouded with uncertainty, we provide a beacon of professional clarity and legal integrity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-4"
                >
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-bold text-primary">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative h-[500px] w-full rounded-[3rem] bg-primary overflow-hidden shadow-2xl"
          >
            {/* Visual Abstract Decoration */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/tech/1000/1000')] bg-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/40" />
            
            <div className="relative h-full flex flex-col justify-center p-12 text-white">
              <div className="text-8xl font-black opacity-10 absolute -top-10 -right-10 leading-none">TRUST</div>
              <blockquote className="text-3xl font-medium italic leading-relaxed">
                "Our mission is to eliminate the fear of overseas migration by providing a platform where merit meets opportunity directly."
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-16 h-1 w-accent bg-accent" />
                <p className="text-xl font-bold">Leadership Vision, 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
