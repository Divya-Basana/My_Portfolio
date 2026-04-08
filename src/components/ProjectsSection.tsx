import { Bot, Gamepad2, HeartPulse, ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Bot,
    title: "AI Assistant Mobile App",
    tech: ["Flutter", "Dart", "Firebase", "REST API", "Speech-to-Text"],
    desc: "AI-powered mobile assistant supporting voice and text interaction with real-time responses.",
    features: ["Chat interface", "Voice input", "Firebase authentication"],
    github: "https://github.com/Divya-Basana/AI_ASSISTANT_APP",
  },
  {
    icon: Gamepad2,
    title: "VIBELY – Motion Controlled Gaming",
    tech: ["Python", "Flask", "OpenCV", "MediaPipe", "PyGame"],
    desc: "Real-time gesture-based gaming system using computer vision.",
    features: ["Controller-free gameplay", "Pose detection", "Interactive games"],
    github: "https://github.com/Divya-Basana/Vibely",
  },
  {
    icon: HeartPulse,
    title: "Health Monitoring System",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    desc: "Web application for managing health data with user/admin modules.",
    features: ["Authentication", "Reporting", "Database normalization"],
    github: "",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-4">
      <SectionHeading title="Projects" subtitle="Some things I've built" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-8 h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-lg gradient-bg">
                  <p.icon size={24} className="text-primary-foreground" />
                </div>
                <ExternalLink size={18} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-display font-bold text-2xl mb-3">{p.title}</h3>
              <p className="text-base text-muted-foreground mb-5 flex-1 leading-relaxed">{p.desc}</p>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="text-sm font-medium px-3 py-1 rounded-md gradient-bg-subtle text-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full gradient-bg flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                {p.github && (
                  <Button variant="outline" size="sm" className="w-full border-primary/30 hover:border-primary hover:bg-primary/5 transition-all" asChild>
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" /> View on GitHub
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
