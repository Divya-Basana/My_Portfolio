import { GraduationCap, User } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <SectionHeading title="About Me" subtitle="Get to know me better" />

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg gradient-bg">
                <User size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl">Who I Am</h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              I am an aspiring software developer and AI engineer with a strong foundation in programming, data structures, 
              and database systems. I have worked on projects involving AI, computer vision, and web development, focusing on real-world problem solving and scalable solutions. 
              I am eager to learn, innovate, and contribute to impactful technologies.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg gradient-bg">
                <GraduationCap size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl">Education</h3>
            </div>
            <ul className="space-y-4">
              <li>
                <p className="font-medium text-base">B.Tech in Computer Science &amp; IT</p>
                <p className="text-sm text-muted-foreground">2023–2026 · CGPA: 8.52</p>
              </li>
              <li>
                <p className="font-medium text-base">Diploma in Computer Engineering</p>
                <p className="text-sm text-muted-foreground">2020–2023 · 88.34%</p>
              </li>
              <li>
                <p className="font-medium text-base">SSC – Catherine Public School</p>
                <p className="text-sm text-muted-foreground">Percentage: 97.66%</p>
              </li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
