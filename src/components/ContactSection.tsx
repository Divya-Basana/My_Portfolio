import { Mail, Phone, Linkedin, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";

const contacts = [
  { icon: Mail, label: "basanadivya@gmail.com", href: "mailto:basanadivya@gmail.com" },
  { icon: Phone, label: "7396186575", href: "tel:7396186575" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/divya-basana-5aab08296/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Divya-Basana" },
];

const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-4">
      <SectionHeading title="Get In Touch" subtitle="Feel free to reach out!" />
      <AnimatedSection>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-5 flex items-center gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-primary/40 group"
            >
              <div className="p-2 rounded-lg gradient-bg">
                <c.icon size={20} className="text-primary-foreground" />
              </div>
              <span className="text-base font-medium group-hover:text-primary transition-colors">{c.label}</span>
            </a>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
