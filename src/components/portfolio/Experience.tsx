import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const responsibilities = [
    {
      category: "Deployment Management",
      items: [
        "Managing environment-wise deployments across DEV, INT, UAT, and PROD environments",
        "Orchestrating deployments using Jenkins and IBM UrbanCode Deploy",
        "Coordinating release schedules and ensuring smooth rollouts"
      ]
    },
    {
      category: "Production Support",
      items: [
        "Providing 24/7 production deployment support during critical releases",
        "Post-deployment monitoring and validation",
        "Immediate troubleshooting and issue resolution"
      ]
    },
    {
      category: "Log Analysis & Debugging",
      items: [
        "Analyzing application and server logs to identify root causes",
        "Correlating issues across multiple services and components",
        "Documenting patterns for recurring issues"
      ]
    },
    {
      category: "Version Control & Quality",
      items: [
        "Validating Git pull requests for deployment readiness",
        "Ensuring code quality standards and best practices",
        "Managing branch strategies and merge workflows"
      ]
    },
    {
      category: "Change Management",
      items: [
        "Creating and managing ServiceNow change requests",
        "Coordinating deployment approvals with stakeholders",
        "Maintaining deployment documentation and runbooks"
      ]
    },
    {
      category: "Infrastructure Operations",
      items: [
        "Managing SCCM operations for software distribution",
        "Coordinating with infrastructure teams for resource provisioning",
        "Maintaining environment configurations and standards"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Professional Journey
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Experience Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl border border-border overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 md:p-8 border-b border-border">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold">DevOps Engineer</h3>
                  <p className="text-lg text-primary font-medium">Accenture</p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <span>March 2024 – Present</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      <span>Bengaluru, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="p-6 md:p-8">
              <h4 className="font-semibold text-lg mb-6">Key Responsibilities</h4>
              <div className="grid md:grid-cols-2 gap-6">
                {responsibilities.map((group, groupIndex) => (
                  <motion.div
                    key={groupIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + groupIndex * 0.1 }}
                    className="space-y-3"
                  >
                    <h5 className="font-medium text-primary">{group.category}</h5>
                    <ul className="space-y-2">
                      {group.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
