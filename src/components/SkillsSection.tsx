import { Code2, Globe, Brain, Database, Wrench, Cpu } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const skills = [
  { icon: Code2, title: "Programming", items: ["Java", "Python", "Dart"] },
  { icon: Globe, title: "Web Development", items: ["HTML", "CSS", "JavaScript"] },
  { icon: Brain, title: "Data Science", items: ["Machine Learning", "Data Analysis", "Data Visualization"] },
  { icon: Database, title: "Database", items: ["MySQL", "MongoDB", "Firebase"] },
  { icon: Wrench, title: "Tools", items: ["Tableau", "Jupyter Notebook", "GitHub", "VS Code"] },
  { icon: Cpu, title: "Core Concepts", items: ["OOPS", "Data Structures", "DBMS", "Software Engineering"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 gradient-bg-subtle">
    <div className="container mx-auto px-4">
      <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {skills.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <div className="glass-card rounded-xl p-6 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg gradient-bg">
                  <s.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg">{s.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span key={item} className="text-sm font-medium px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
