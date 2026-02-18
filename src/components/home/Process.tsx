
import { ClipboardCheck, Users, FileText, Briefcase } from "lucide-react";

const steps = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    title: "Eligibility Check",
    description: "Submit your basic details to know which countries fit your profile."
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Counselor Guidance",
    description: "Get a dedicated expert to guide you through rules and requirements."
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Documentation",
    description: "We handle your visa filing and document verification with precision."
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Job Offer",
    description: "Interview with top employers and receive your official offer letter."
  }
];

export function Process() {
  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">How It Works</h2>
          <p className="text-muted-foreground">Your four-step journey to a global career, explained simply.</p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border -z-10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg border-4 border-white">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-primary">{step.title}</h3>
              <p className="text-sm text-muted-foreground max-w-[200px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
