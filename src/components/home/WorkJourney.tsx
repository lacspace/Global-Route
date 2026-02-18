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
    desc: "AI-driven matching with 450+ verified global hiring partners.",
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
    <section className="py-24 bg-secondary/10 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-primary mb-6"
          >
            The 3D Success Path
          </motion.h2>
          <p className="text-lg text-muted-foreground">
            A high-definition view of how we transform your career from local to global.
          </p>
        </div>

        <div className="relative perspective-[2000px] py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, rotateY: -30, z: -100 }}
                whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                whileHover={{ y: -20, scale: 1.05 }}
                className="group relative bg-white p-8 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-primary/5 h-full"
              >
                {/* 3D Depth Effect */}
                <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] translate-y-4 translate-x-2 -z-10 group-hover:translate-y-6 group-hover:translate-x-4 transition-transform duration-500" />
                
                <div className={`${step.color} w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-lg mb-8 group-hover:rotate-12 transition-transform duration-500`}>
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-black text-primary mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {step.desc}
                </p>

                <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span>Verified Step</span>
                </div>
                
                {/* Connector Line for Desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[2px] bg-accent/30 dashed -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
