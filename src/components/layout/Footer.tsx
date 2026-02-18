"use client";

import Link from "next/link";
import { Globe, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 md:pt-24 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-accent" />
            <span className="text-xl md:text-2xl font-bold font-headline tracking-tight">Global Career Pathways</span>
          </Link>
          <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
            The most trusted gateway for Indian professionals. Headquartered in Nagpur, we provide 100% transparent documentation and verified international job opportunities.
          </p>
          <div className="flex gap-6">
            <Facebook className="h-6 w-6 cursor-pointer hover:text-accent transition-all hover:scale-110" />
            <Instagram className="h-6 w-6 cursor-pointer hover:text-accent transition-all hover:scale-110" />
            <Linkedin className="h-6 w-6 cursor-pointer hover:text-accent transition-all hover:scale-110" />
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold border-b border-white/10 pb-2">Destinations</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><Link href="#countries" className="hover:text-accent transition-colors">Germany - Engineering</Link></li>
            <li><Link href="#countries" className="hover:text-accent transition-colors">Canada - IT & Nursing</Link></li>
            <li><Link href="#countries" className="hover:text-accent transition-colors">UAE - Hospitality</Link></li>
            <li><Link href="#countries" className="hover:text-accent transition-colors">UK - Healthcare</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold border-b border-white/10 pb-2">Our Process</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><span className="hover:text-accent transition-colors cursor-pointer">Eligibility Assessment</span></li>
            <li><span className="hover:text-accent transition-colors cursor-pointer">Visa Documentation</span></li>
            <li><span className="hover:text-accent transition-colors cursor-pointer">Interview Coaching</span></li>
            <li><span className="hover:text-accent transition-colors cursor-pointer">Post-Landing Support</span></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold border-b border-white/10 pb-2">Nagpur HQ (India)</h4>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-accent shrink-0 mt-1" />
              <span className="leading-relaxed">Plot No. 45, Civil Lines, Nagpur, MH 440001</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-accent shrink-0" />
              <span className="font-bold">+91 9588464543</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-accent shrink-0" />
              <span>nagpur.desk@globalcareerpathways.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 md:mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <p className="text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Global Career Pathways. MEA Registered License #95884/IND.
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs text-primary-foreground/50 font-medium">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          <span className="hover:text-white cursor-pointer transition-colors">Fraud Alert</span>
        </div>
      </div>
    </footer>
  );
}
