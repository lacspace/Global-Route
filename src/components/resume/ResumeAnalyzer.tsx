
"use client";

import { useState } from "react";
import { analyzeResume, type AnalyzeResumeOutput } from "@/ai/flows/resume-feedback-ai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Loader2, CheckCircle, AlertTriangle, Lightbulb, FileText, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function ResumeAnalyzer() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalyzeResumeOutput | null>(null);
  const { toast } = useToast();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf" && !file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or image of your resume.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const dataUri = event.target?.result as string;
        try {
          const feedback = await analyzeResume({ resumeDataUri: dataUri });
          setResult(feedback);
        } catch (err) {
          toast({
            title: "Analysis failed",
            description: "Something went wrong during the analysis. Please try again.",
            variant: "destructive",
          });
        } finally {
          setLoading(false);
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setLoading(false);
      toast({
        title: "Error",
        description: "Failed to read the file.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="border-2 border-dashed border-primary/20 bg-white/50">
        <CardContent className="p-12 flex flex-col items-center text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <Upload className="h-10 w-10 text-primary" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-primary">Upload Your Resume</h3>
            <p className="text-muted-foreground">Get instant expert AI feedback optimized for overseas job markets.</p>
          </div>
          <div className="w-full max-w-sm">
            <Input
              type="file"
              accept=".pdf,image/*"
              className="hidden"
              id="resume-upload"
              onChange={handleFileUpload}
              disabled={loading}
            />
            <label htmlFor="resume-upload">
              <Button asChild size="lg" className="w-full cursor-pointer bg-primary text-white hover:bg-primary/90" disabled={loading}>
                <span>
                  {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <FileText className="mr-2 h-5 w-5" />}
                  {loading ? "Analyzing..." : "Choose File"}
                </span>
              </Button>
            </label>
          </div>
          <p className="text-xs text-muted-foreground">Supported formats: PDF, PNG, JPG (Max 5MB)</p>
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-6 animate-in fade-in zoom-in duration-500">
          <Card className="border-none shadow-xl overflow-hidden">
            <CardHeader className="bg-primary text-white">
              <CardTitle>Professional Feedback</CardTitle>
              <CardDescription className="text-primary-foreground/80">Tailored suggestions for international standards</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-8 bg-white">
              <div className="space-y-2">
                <h4 className="font-bold text-lg text-primary">Overall Summary</h4>
                <p className="text-muted-foreground leading-relaxed">{result.overallSummary}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <h4 className="font-bold">Key Strengths</h4>
                  </div>
                  <ul className="space-y-2">
                    {result.strengths.map((s, i) => (
                      <li key={i} className="text-sm bg-green-50 p-2 rounded border border-green-100">{s}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-amber-600">
                    <AlertTriangle className="h-5 w-5" />
                    <h4 className="font-bold">Areas for Improvement</h4>
                  </div>
                  <ul className="space-y-2">
                    {result.weaknesses.map((w, i) => (
                      <li key={i} className="text-sm bg-amber-50 p-2 rounded border border-amber-100">{w}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <div className="flex items-center gap-2 text-primary">
                  <Lightbulb className="h-5 w-5" />
                  <h4 className="font-bold">Actionable Suggestions</h4>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {result.suggestions.map((s, i) => (
                    <div key={i} className="flex gap-3 items-start text-sm text-muted-foreground p-3 bg-secondary/20 rounded-lg">
                      <span className="bg-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full flex-shrink-0 mt-0.5">{i+1}</span>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
