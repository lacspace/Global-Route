
"use client";

import { motion } from "framer-motion";
import { CheckCircle2, UserCheck, FileSearch, Send, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: <UserCheck className="h-10 w-10" />,
    title: "Profile Audit",
    desc: "We analyze your skills against 50+ international market benchmarks.",
    color: "bg-blue-500"
  },
  {
    icon: <FileSearch className="h-10 w-10" />,
    title: "Employer Match",
    desc: "Hiring matching with 450+ verified global partners.",
    color: "bg-accent"
  },
  {
    icon: <GraduationCap className="h-10 w-10" />,
    title: "Prep & Polish",
    desc: "Specialized interview coaching for diverse cultural standards.",
    color: "bg-primary"
  },
  {
    icon: <Send className="h-10 w-10" />,
    title: "Final Departure",
    desc: "Visa stamping and post-landing logistics handled end-to-end.",
    color: "bg-green-500"
  }
];

export function WorkJourney() {
  return (
    <section className="py-20 md:py-32 bg-secondary/10 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-primary mb-6"
          >
            The Success Path
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            A professional view of how we transform your career from local to global with Nagpur expertise.
          </p>
        </div>

        <div className="relative py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-primary/5 h-full"
              >
                <div className={`${step.color} w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center text-white shadow-lg mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-black text-primary mb-3 md:mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium text-sm md:text-base">
                  {step.desc}
                </p>

                <div className="mt-6 md:mt-8 flex items-center gap-2 text-primary font-bold text-xs md:text-sm">
                  <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-accent" />
                  <span>Verified Step</span>
                </div>
                
                {/* Connector Line for Desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[2px] border-t-2 border-dashed border-accent/30 -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
