import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Cloud, GitBranch, Terminal, Code2 } from "lucide-react";

const certifications = [
  {
    title: "Azure Administrator Associate",
    issuer: "Microsoft",
    icon: Cloud,
    description: "Validated expertise in implementing, managing, and monitoring Azure environments including virtual networks, storage, compute, and identity.",
    color: "bg-primary/10 text-primary"
  },
  {
    title: "GitHub Actions",
    issuer: "Microsoft",
    icon: GitBranch,
    description: "Proficiency in automating software workflows with GitHub Actions, including CI/CD pipelines, automated testing, and deployment strategies.",
    color: "bg-accent/10 text-accent"
  },
  {
    title: "Introduction to DevOps",
    issuer: "IBM",
    icon: Terminal,
    description: "Foundation in DevOps principles, practices, and cultural philosophy including continuous integration, delivery, and deployment methodologies.",
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Linux Commands & Shell Scripting",
    issuer: "IBM",
    icon: Terminal,
    description: "Comprehensive knowledge of Linux command-line operations, shell scripting, and system administration tasks for server management.",
    color: "bg-accent/10 text-accent"
  },
  {
    title: "Git and GitHub",
    issuer: "IBM",
    icon: GitBranch,
    description: "Mastery of version control with Git, collaborative workflows, branching strategies, and GitHub platform features for team development.",
    color: "bg-primary/10 text-primary"
  },
  {
    title: "DSA in C++",
    issuer: "GeeksforGeeks",
    icon: Code2,
    description: "Strong foundation in data structures and algorithms using C++, covering arrays, linked lists, trees, graphs, sorting, and dynamic programming.",
    color: "bg-accent/10 text-accent"
  }
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-card">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Certifications</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Professional Credentials
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              Industry-recognized certifications demonstrating commitment to continuous learning and professional excellence.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group bg-background rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${cert.color} flex items-center justify-center flex-shrink-0`}>
                    <cert.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                      </div>
                      <Award className="h-5 w-5 text-primary flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
