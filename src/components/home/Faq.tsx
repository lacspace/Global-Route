
"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is Global Career Pathways government authorized?",
    a: "Yes, we are a fully licensed recruitment agency registered with the Ministry of External Affairs (MEA), License #12345/IND. We adhere to all legal protocols for overseas recruitment."
  },
  {
    q: "How do you verify the employers?",
    a: "Our international legal team performs a 7-point background check on every employer before listing a job. We only partner with firms that offer legitimate contracts and work visas."
  },
  {
    q: "What are the costs involved?",
    a: "Our initial consultation is free. Service fees depend on the destination country and visa type. We provide a complete cost breakdown upfront with zero hidden charges."
  },
  {
    q: "Do you help with post-landing support?",
    a: "Absolutely. We help with airport pickup, initial accommodation guidance, and local registration in the destination country to ensure a smooth transition."
  }
];

export function Faq() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-primary">Your Questions, <br />Answered.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              We believe in 100% transparency. If you have more doubts, our counselors are just a call away.
            </p>
            <div className="pt-6">
              <div className="p-8 bg-primary rounded-3xl text-white space-y-4">
                <p className="font-bold text-xl">Need more clarity?</p>
                <p className="opacity-80 text-sm">Our 24/7 helpdesk is ready to assist you with any specific queries regarding your application.</p>
                <button className="text-accent font-bold hover:underline">Contact Support Now →</button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border-none rounded-2xl px-6 py-2 shadow-sm">
                  <AccordionTrigger className="text-left font-bold text-lg text-primary hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
