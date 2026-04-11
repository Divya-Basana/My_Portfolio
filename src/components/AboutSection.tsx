import { User, Languages, Heart } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-4">
      <SectionHeading title="About Me" subtitle="Get to know me better" />

      <div className="max-w-4xl mx-auto space-y-8">
        <AnimatedSection>
          <div className="glass-card interactive-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg gradient-bg">
                <User size={20} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-xl">Who I Am</h3>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              I am a passionate Computer Science student with a strong interest in software development and data-driven solutions. I enjoy building real-world applications, from AI-powered systems to responsive web platforms. With hands-on experience in projects and problem-solving, I focus on writing clean and efficient code. I am always eager to learn new technologies and grow as a developer.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection delay={0.1}>
            <div className="glass-card interactive-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg gradient-bg">
                  <Languages size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl">Languages</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-bg"></span>
                  <span className="text-muted-foreground">English (Fluent)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-bg"></span>
                  <span className="text-muted-foreground">Telugu (Native)</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card rounded-xl p-6 cursor-pointer hover:shadow-xl hover:scale-[1.02] hover:-translate-y-[4px] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg gradient-bg">
                  <Heart size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-xl">Hobbies</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-bg"></span>
                  <span className="text-muted-foreground">Writing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-bg"></span>
                  <span className="text-muted-foreground">Badminton</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full gradient-bg"></span>
                  <span className="text-muted-foreground">Travel</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
