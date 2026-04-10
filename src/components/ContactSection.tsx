import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  { icon: Mail, label: "basanadivya@gmail.com", href: "mailto:basanadivya@gmail.com" },
  { icon: Phone, label: "7396186575", href: "tel:7396186575" },
  { icon: MapPin, label: "Visakhapatnam, India", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/divya-basana-5aab08296/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Divya-Basana" },
  { icon: Mail, label: "Email", href: "mailto:basanadivya@gmail.com" },
];

const ContactSection = () => (
  <section id="contact" className="py-20 gradient-bg-subtle">
    <div className="container mx-auto px-4">
      <SectionHeading title="Contact Me" subtitle="Let's work together" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <AnimatedSection>
          <div className="glass-card interactive-card rounded-xl p-8">
            <h3 className="font-display font-semibold text-2xl mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" className="bg-background/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} className="bg-background/50" />
              </div>
              <Button className="w-full gradient-bg text-primary-foreground hover:opacity-90 transition-opacity">
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </AnimatedSection>

        {/* Contact Info & Social */}
        <AnimatedSection delay={0.2}>
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="glass-card interactive-card rounded-xl p-8">
              <h3 className="font-display font-semibold text-2xl mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href !== "#" ? "_blank" : undefined}
                    rel={contact.href !== "#" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg gradient-bg">
                      <contact.icon size={20} className="text-primary-foreground" />
                    </div>
                    <span className="text-base font-medium group-hover:text-primary transition-colors">{contact.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card interactive-card rounded-xl p-8">
              <h3 className="font-display font-semibold text-2xl mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass-card interactive-card hover:border-primary/40 group"
                    aria-label={social.label}
                  >
                    <social.icon size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ContactSection;
