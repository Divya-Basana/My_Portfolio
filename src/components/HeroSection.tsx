import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImg from "@/assets/divya.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-glow absolute inset-0 pointer-events-none" />
      <div className="container mx-auto px-4 py-20 flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-8">
        {/* Text */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-primary font-medium mb-2">Hi, I'm</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            Basana <span className="gradient-text">Divya</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            AI Engineer | Software Developer | Data Science Enthusiast
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
            I design and build intelligent, real-world applications.
            Focused on solving problems using AI, data, and modern technologies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button className="gradient-bg text-primary-foreground hover:opacity-90 transition-opacity text-base px-6 py-3 h-12" onClick={() => scrollTo("projects")}>
              View Projects <ArrowDown className="ml-2" size={18} />
            </Button>
            <Button variant="outline" className="border-primary/30 hover:border-primary transition-colors text-base px-6 py-3 h-12" asChild>
              <a href="https://drive.google.com/file/d/1HKTIT1Ysrn5Z-t_AYR7JN-Eg-dGwn_lk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download size={18} className="mr-2" /> Download Resume
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-4 gradient-bg rounded-full opacity-20 blur-2xl animate-float" />
            <img
              src={profileImg}
              alt="Divya Basana"
              width={280}
              height={280}
              className="relative rounded-full border-4 border-primary/20 shadow-xl object-cover w-56 h-56 sm:w-72 sm:h-72"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
