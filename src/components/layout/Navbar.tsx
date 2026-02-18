"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "sticky top-0 z-50 w-full border-b transition-all duration-300",
      scrolled 
        ? "bg-background/95 backdrop-blur-md py-2" 
        : "bg-background py-4"
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          <span className="text-lg md:text-xl font-bold tracking-tight text-primary font-headline">
            Global Career Pathways
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#countries" className="text-sm font-semibold hover:text-primary transition-colors">Destinations</Link>
          <Link href="#process" className="text-sm font-semibold hover:text-primary transition-colors">Process</Link>
          <Link href="#success" className="text-sm font-semibold hover:text-primary transition-colors">Success Stories</Link>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-6">Apply Now</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-primary" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-x-0 top-[65px] bg-background border-b shadow-xl transition-all duration-300 ease-in-out md:hidden overflow-hidden",
        isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
      )}>
        <div className="container mx-auto p-6 flex flex-col gap-4">
          <Link 
            href="#countries" 
            className="text-base font-bold py-3 border-b border-muted hover:text-primary" 
            onClick={() => setIsOpen(false)}
          >
            Destinations
          </Link>
          <Link 
            href="#process" 
            className="text-base font-bold py-3 border-b border-muted hover:text-primary" 
            onClick={() => setIsOpen(false)}
          >
            Process
          </Link>
          <Link 
            href="#success" 
            className="text-base font-bold py-3 border-b border-muted hover:text-primary" 
            onClick={() => setIsOpen(false)}
          >
            Success Stories
          </Link>
          <Button className="w-full bg-accent text-accent-foreground font-bold h-12 mt-2">
            Apply Now
          </Button>
        </div>
      </div>
    </nav>
  );
}
