
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight text-primary font-headline">
            Global Career Pathways
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#countries" className="text-sm font-medium hover:text-primary transition-colors">Countries</Link>
          <Link href="#process" className="text-sm font-medium hover:text-primary transition-colors">Process</Link>
          <Link href="#success" className="text-sm font-medium hover:text-primary transition-colors">Success Stories</Link>
          <Link href="/analyzer">
            <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">Resume Analyzer</Button>
          </Link>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Apply Now</Button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 space-y-4 animate-in slide-in-from-top duration-300">
          <Link href="#countries" className="block text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Countries</Link>
          <Link href="#process" className="block text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Process</Link>
          <Link href="#success" className="block text-sm font-medium py-2" onClick={() => setIsOpen(false)}>Success Stories</Link>
          <Link href="/analyzer" className="block" onClick={() => setIsOpen(false)}>
            <Button variant="outline" className="w-full">Resume Analyzer</Button>
          </Link>
          <Button className="w-full bg-accent text-accent-foreground">Apply Now</Button>
        </div>
      )}
    </nav>
  );
}
