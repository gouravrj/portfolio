import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2,
          duration: 0.4
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-foreground">Currently at Accenture</span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.3,
          duration: 0.6
        }} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            Gourab Raj
          </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4,
          duration: 0.6
        }} className="text-xl md:text-2xl lg:text-3xl font-medium text-primary mb-6">
            DevOps Engineer{" "}
            <span className="text-muted-foreground">|</span>{" "}
            Full-Stack (MEAN) Engineer
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5,
          duration: 0.6
        }} className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <MapPin className="h-4 w-4" />
            <span>Bengaluru, India</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6,
          duration: 0.6
        }} className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:gourav.raj42001@gmail.com">
                <Mail className="h-4 w-4" />
                Get in Touch
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://linkedin.com/in/gourab-raj-167a14285" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/gouravrj">
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.7,
          duration: 0.6
        }} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[{
            value: "1+",
            label: "Years Experience"
          }, {
            value: "6+",
            label: "Projects"
          }, {
            value: "Azure",
            label: "Certified"
          }, {
            value: "MEAN",
            label: "Stack Expert"
          }].map((stat, index) => <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>)}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button onClick={scrollToAbout} initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1,
        duration: 0.6
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer">
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </motion.button>
      </div>
    </section>;
};
export default Hero;