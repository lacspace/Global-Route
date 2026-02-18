
import Link from "next/link";
import { Globe, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <Globe className="h-6 w-6" />
            <span className="text-xl font-bold font-headline">Global Career Pathways</span>
          </Link>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Leading the way for Indian professionals to achieve their dreams of working abroad with trust, transparency, and expert guidance.
          </p>
          <div className="flex gap-4">
            <Facebook className="h-5 w-5 cursor-pointer hover:text-accent" />
            <Instagram className="h-5 w-5 cursor-pointer hover:text-accent" />
            <Linkedin className="h-5 w-5 cursor-pointer hover:text-accent" />
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="#countries" className="hover:text-accent transition-colors">Destinations</Link></li>
            <li><Link href="#process" className="hover:text-accent transition-colors">Our Process</Link></li>
            <li><Link href="#success" className="hover:text-accent transition-colors">Success Stories</Link></li>
            <li><Link href="/analyzer" className="hover:text-accent transition-colors">Resume Analyzer</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><span className="hover:text-accent transition-colors cursor-pointer">Visa Documentation</span></li>
            <li><span className="hover:text-accent transition-colors cursor-pointer">Interview Coaching</span></li>
            <li><span className="hover:text-accent transition-colors cursor-pointer">Eligibility Assessment</span></li>
            <li><span className="hover:text-accent transition-colors cursor-pointer">Job Placement Support</span></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-accent shrink-0" />
              <span>123 BKC Area, Mumbai, Maharashtra 400051</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-accent shrink-0" />
              <span>+91 1800-123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-accent shrink-0" />
              <span>support@globalcareerpathways.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Global Career Pathways. All rights reserved.
      </div>
    </footer>
  );
}
