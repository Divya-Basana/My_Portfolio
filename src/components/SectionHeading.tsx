import AnimatedSection from "./AnimatedSection";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <AnimatedSection className="text-center mb-12">
    <h2 className="font-display text-4xl md:text-5xl font-bold mb-3">
      <span className="gradient-text">{title}</span>
    </h2>
    {subtitle && <p className="text-lg text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
  </AnimatedSection>
);

export default SectionHeading;
