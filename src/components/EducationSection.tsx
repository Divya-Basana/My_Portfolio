import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const education = [
  {
    degree: "B.Tech in CSIT",
    institution: "MVGR College of Engineering",
    period: "2023–2026",
    score: "CGPA: 8.52"
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Sanketika Polytechnic",
    period: "2020–2023",
    score: "Percentage: 88.34"
  },
  {
    degree: "SSC",
    institution: "Catherine Public School",
    period: "2020",
    score: "Percentage: 97.66"
  }
];

const EducationSection = () => (
  <section id="education" className="py-20">
    <div className="container mx-auto px-4">
      <SectionHeading title="Education" subtitle="My academic journey" />

      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {education.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass-card interactive-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg gradient-bg flex-shrink-0">
                    <GraduationCap size={24} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-xl mb-1">{edu.degree}</h3>
                    <p className="text-lg text-primary font-medium mb-2">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>{edu.period}</span>
                      <span>{edu.score}</span>
                    </div>
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

export default EducationSection;