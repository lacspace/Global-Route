
"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Successful Placements", value: "5,000+", sub: "across 12+ nations" },
  { label: "Visa Success Rate", value: "98.5%", sub: "industry leading" },
  { label: "Partner Employers", value: "450+", sub: "verified global firms" },
  { label: "Average Salary Hike", value: "3.5x", sub: "from current CTC" },
];

export function Stats() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(163,230,53,0.1),transparent)]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="space-y-2"
            >
              <div className="text-3xl md:text-5xl font-black text-accent">{stat.value}</div>
              <div className="text-sm md:text-base font-bold">{stat.label}</div>
              <div className="text-[10px] md:text-xs opacity-60 uppercase tracking-widest">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
