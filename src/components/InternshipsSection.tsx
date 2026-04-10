import { Briefcase } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const internships = [
  {
    company: "EdyGrad One Pvt. Ltd.",
    role: "Tech Stack Internship (AI, ML, Data Science)",
    period: "June 2025"
  },
  {
    company: "SmartInternz (Salesforce)",
    role: "Salesforce Developer Virtual Internship",
    period: "Jan 2025"
  },
  {
    company: "IntrainZ",
    role: "Web Development Internship",
    period: "Feb 2023"
  },
  {
    company: "HMI Engineering Services",
    role: "Full Stack Programming in Python",
    period: "March 2023"
  }
];

const InternshipsSection = () => (
  <section id="internships" className="py-20">
    <div className="container mx-auto px-4">
      <SectionHeading title="Internships" subtitle="My professional experience" />

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {internships.map((internship, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass-card interactive-card rounded-xl p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg gradient-bg flex-shrink-0">
                    <Briefcase size={24} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl mb-1">{internship.company}</h3>
                    <p className="text-lg text-primary font-medium mb-2">{internship.role}</p>
                    <p className="text-sm text-muted-foreground">{internship.period}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default InternshipsSection;
