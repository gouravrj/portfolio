import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Cloud, 
  GitBranch, 
  Server, 
  Code2, 
  Database, 
  Container,
  Terminal,
  Cpu,
  Settings,
  FileCode
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "DevOps & CI/CD",
      icon: GitBranch,
      color: "bg-primary/10 text-primary",
      skills: [
        { name: "DevOps", icon: Settings },
        { name: "CI/CD", icon: GitBranch },
        { name: "Jenkins", icon: Server },
        { name: "IBM UrbanCode Deploy", icon: Container },
        { name: "GitHub Actions", icon: GitBranch },
        { name: "Linux", icon: Terminal },
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "bg-accent/10 text-accent",
      skills: [
        { name: "Azure", icon: Cloud },
        { name: "Kubernetes", icon: Container },
        { name: "Terraform", icon: FileCode },
        { name: "Cloud Computing", icon: Cloud },
        { name: "Docker", icon: Container },
      ]
    },
    {
      title: "Full-Stack Development",
      icon: Code2,
      color: "bg-primary/10 text-primary",
      skills: [
        { name: "MEAN Stack", icon: Code2 },
        { name: "Angular", icon: Code2 },
        { name: "Node.js", icon: Server },
        { name: "MongoDB", icon: Database },
        { name: "REST APIs", icon: Server },
        { name: "Express.js", icon: Server },
      ]
    },
    {
      title: "Programming & Tools",
      icon: Cpu,
      color: "bg-accent/10 text-accent",
      skills: [
        { name: "C++", icon: Code2 },
        { name: "DSA", icon: Cpu },
        { name: "OOPs", icon: FileCode },
        { name: "Git", icon: GitBranch },
        { name: "ServiceNow", icon: Settings },
        { name: "SCCM", icon: Server },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Skills</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Technical Expertise
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit spanning DevOps practices, cloud infrastructure, and full-stack development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors duration-200 text-sm font-medium"
                    >
                      <skill.icon className="h-4 w-4" />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
