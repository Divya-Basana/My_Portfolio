import { Award, CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const certificationGroups = [
  {
    organization: "Deloitte",
    certifications: ["Data Analytics Job Simulation"]
  },
  {
    organization: "Cisco",
    certifications: ["Introduction to Data Science", "Python Essentials", "CCNA: Networks"]
  },
  {
    organization: "Salesforce",
    certifications: ["Agentforce Specialist"]
  },
  {
    organization: "NPTEL",
    certifications: ["Cloud Computing", "Project Management"]
  },
  {
    organization: "Infosys Springboard",
    certifications: ["Python Data Science", "Networking & Web Tech"]
  }
];

const CertificationsSection = () => (
  <section id="certifications" className="py-20 gradient-bg-subtle">
    <div className="container mx-auto px-4">
      <SectionHeading title="Certifications" subtitle="My professional certifications" />

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4 items-start" style={{ gridAutoFlow: 'dense' }}>
          {certificationGroups.map((group, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass-card interactive-card rounded-xl p-5 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg gradient-bg">
                    <Award size={20} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-xl">{group.organization}</h3>
                </div>
                <div className="space-y-2">
                  {group.certifications.map((cert, certIndex) => (
                    <div key={certIndex} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CertificationsSection;