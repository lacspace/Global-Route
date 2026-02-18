import { ClipboardCheck, Users, FileText, Briefcase } from "lucide-react";

const steps = [
  {
    icon: <ClipboardCheck className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
    title: "Eligibility Check",
    description: "Know which countries fit your profile instantly."
  },
  {
    icon: <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
    title: "Expert Guidance",
    description: "Dedicated counselors guide you through every rule."
  },
  {
    icon: <FileText className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
    title: "Documentation",
    description: "Precise visa filing and verification handled by us."
  },
  {
    icon: <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
    title: "Job Offer",
    description: "Interview with top employers and get your official letter."
  }
];

export function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">How It Works</h2>
          <p className="text-sm md:text-base text-muted-foreground">Your transparent 4-step journey to a global career.</p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-10 lg:top-12 left-[10%] right-[10%] h-0.5 bg-border -z-10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex md:flex-col items-center md:text-center gap-6 md:gap-4 lg:gap-6 group">
              <div className="relative">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-accent flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform shrink-0">
                  {step.icon}
                </div>
                <div className="md:hidden absolute -bottom-2 -right-2 bg-primary text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  {idx + 1}
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg lg:text-xl font-bold text-primary">{step.title}</h3>
                <p className="text-xs lg:text-sm text-muted-foreground max-w-[200px] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
