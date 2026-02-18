"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "919588464543";
    const text = `Hi Global Career Pathways, my name is ${formData.name}. I'm interested in moving to ${formData.destination}. ${formData.message ? `My query: ${formData.message}` : ""} (Phone: ${formData.phone})`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-primary mb-6">Talk to Experts.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Visit our regional headquarters in Nagpur or reach out via WhatsApp for immediate eligibility screening.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary">Nagpur Office (HQ)</h4>
                  <p className="text-muted-foreground">Plot No. 45, Civil Lines, Near High Court, Nagpur, Maharashtra - 440001</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-accent text-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary">Direct Helpline</h4>
                  <p className="text-muted-foreground">+91 9588464543</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-secondary text-primary rounded-2xl flex items-center justify-center shrink-0 shadow-lg border border-primary/10">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl text-primary">Email Support</h4>
                  <p className="text-muted-foreground">nagpur.desk@globalcareerpathways.com</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-accent/10 rounded-[2.5rem] border border-accent/20">
              <p className="text-primary font-bold mb-2">Office Hours</p>
              <p className="text-sm text-muted-foreground">Monday - Saturday: 10:00 AM - 7:00 PM IST</p>
              <p className="text-sm text-muted-foreground">Sunday: Emergency Calls Only</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden">
              <CardContent className="p-10 md:p-14 space-y-8 bg-white">
                <div className="text-center space-y-2">
                  <h3 className="text-3xl font-black text-primary">Apply for Screening</h3>
                  <p className="text-muted-foreground">Submit this form to start your journey on WhatsApp</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-bold">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="font-bold">Phone Number</Label>
                      <Input 
                        id="phone" 
                        placeholder="+91 XXXXX XXXXX" 
                        required 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="destination" className="font-bold">Preferred Destination</Label>
                    <Input 
                      id="destination" 
                      placeholder="e.g., Germany, Canada, UAE" 
                      required 
                      value={formData.destination}
                      onChange={(e) => setFormData({...formData, destination: e.target.value})}
                      className="rounded-xl h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-bold">Your Query (Optional)</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your background..." 
                      className="rounded-xl min-h-[120px]"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90 h-14 text-lg font-black rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 group">
                    Continue to WhatsApp <MessageCircle className="ml-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  </Button>
                  
                  <p className="text-[10px] text-center text-muted-foreground px-10">
                    By submitting, you agree to receive career updates and verification calls from Global Career Pathways.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
