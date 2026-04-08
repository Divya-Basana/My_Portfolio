import { Briefcase, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  { role: "AI/ML Internship", company: "EdyGrad" },
  { role: "Salesforce Developer Virtual Internship", company: "SmartInternz" },
  { role: "Web Development Internship", company: "IntrainZ" },
  { role: "Python Full Stack", company: "HMI Engineering" },
];

const certifications = [
  { heading: "Cisco", details: "Python Essentials, Data Science, Networking" },
  { heading: "Deloitte", details: "Data Analytics Job Simulation" },
  { heading: "Salesforce", details: "Agentforce Specialist" },
  { heading: "NPTEL", details: "Cloud Computing, Project Management" },
  { heading: "Infosys Springboard", details: "Python Data Science" },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20 gradient-bg-subtle">
    <div className="container mx-auto px-4">
      <SectionHeading title="Experience & Certifications" />
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg gradient-bg">
                <Briefcase size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl">Experience</h3>
            </div>
            <div className="space-y-4">
              {experiences.map((e, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-primary/20">
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full gradient-bg" />
                  <p className="font-medium text-base">{e.role}</p>
                  <p className="text-sm text-muted-foreground">{e.company}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg gradient-bg">
                <Award size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-base">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full gradient-bg flex-shrink-0" />
                  <span>
                    <span className="font-semibold text-foreground">{c.heading}:</span>{" "}
                    <span className="text-muted-foreground">{c.details}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
