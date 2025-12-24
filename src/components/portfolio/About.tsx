import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Server, Code, Layers } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Briefcase,
      title: "DevOps Engineer",
      description: "Currently at Accenture, managing CI/CD pipelines and production deployments"
    },
    {
      icon: Server,
      title: "Infrastructure Expert",
      description: "Hands-on with Jenkins, IBM UrbanCode Deploy, Linux, and cloud technologies"
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Strong foundation in MEAN stack with completed enterprise-level projects"
    },
    {
      icon: Layers,
      title: "System Architect",
      description: "Passionate about building scalable, reliable, and maintainable systems"
    }
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Building the Bridge Between Development & Operations
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-16">
            <p>
              As a <strong className="text-foreground">DevOps Engineer at Accenture</strong>, I specialize in 
              streamlining software delivery through robust CI/CD pipelines, automated deployments, and 
              production support. My daily work involves managing deployments across multiple environments—from 
              development to production—using tools like <strong className="text-foreground">Jenkins</strong>, 
              <strong className="text-foreground"> IBM UrbanCode Deploy</strong>, and <strong className="text-foreground">ServiceNow</strong>.
            </p>
            <p>
              What sets me apart is my <strong className="text-foreground">strong full-stack foundation</strong>. 
              Having built a complete MEAN stack application (TAPZO - a bike rental platform), I understand 
              both sides of the equation: the application code that needs deploying and the infrastructure 
              that runs it. This dual perspective enables me to troubleshoot issues faster, design better 
              deployment strategies, and communicate effectively with development teams.
            </p>
            <p>
              My approach combines technical excellence with a focus on reliability. Whether it's analyzing 
              production logs, validating Git pull requests, or orchestrating multi-environment deployments, 
              I bring attention to detail and a commitment to quality that keeps systems running smoothly.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex gap-4 p-6 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
