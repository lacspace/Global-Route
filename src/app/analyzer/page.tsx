
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ResumeAnalyzer } from "@/components/resume/ResumeAnalyzer";
import { Toaster } from "@/components/ui/toaster";
import { ShieldCheck, Zap, Target } from "lucide-react";

export default function AnalyzerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/20">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-16 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary font-headline">AI Resume Analyzer</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Specifically designed for overseas applications. Our AI checks your resume against international standards for Canada, UK, Germany, and UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-primary/5">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-sm">Privacy Secured</p>
              <p className="text-xs text-muted-foreground">Your data is never shared.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-primary/5">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-sm">Instant Results</p>
              <p className="text-xs text-muted-foreground">Feedback in under 10 seconds.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-primary/5">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-sm">Targeted Strategy</p>
              <p className="text-xs text-muted-foreground">Tailored for global markets.</p>
            </div>
          </div>
        </div>

        <ResumeAnalyzer />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
