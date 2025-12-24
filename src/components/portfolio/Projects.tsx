import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  ExternalLink, 
  Github, 
  ChevronDown, 
  ChevronUp,
  Bike,
  FileSearch,
  Database,
  GitBranch,
  Container,
  Cloud
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  icon: React.ElementType;
  techStack: string[];
  overview: string;
  features: string[];
  problemSolved: string;
  myContribution: string;
  skillsDemonstrated: string[];
  githubLink: string;
}

const projects: Project[] = [
  {
    title: "TAPZO – Online Bike Rental & Comparison Platform",
    icon: Bike,
    techStack: ["MongoDB", "Express.js", "Angular", "Node.js", "REST API"],
    overview: "A comprehensive bike rental platform enabling users to compare bikes across multiple vendors, streamlining the rental process from search to booking.",
    features: [
      "User registration and authentication with secure session management",
      "Lender onboarding portal for bike listing management and availability tracking",
      "Advanced search with filters for bike type, price range, and location",
      "Real-time price comparison across multiple vendors",
      "Complete booking workflow with transaction handling and confirmation",
      "Responsive Angular frontend optimized for all devices"
    ],
    problemSolved: "Solved the fragmented bike rental market problem by aggregating options from multiple vendors, saving users time and helping them find the best deals without visiting multiple websites.",
    myContribution: "Designed and implemented the complete application architecture including MongoDB schema design, RESTful API development with Express.js, and the Angular frontend. Built the core comparison algorithm and booking system from scratch.",
    skillsDemonstrated: ["Full-Stack Development", "API Design", "Database Modeling", "Angular Components", "State Management"],
    githubLink: "https://github.com/gourabraj/tapzo"
  },
  {
    title: "Multithreaded Log Analyzer",
    icon: FileSearch,
    techStack: ["C++", "Multithreading", "File I/O", "STL"],
    overview: "A high-performance log analysis tool that leverages multithreading to process large application and server log files efficiently.",
    features: [
      "Parallel file processing using C++ threads for improved performance",
      "Pattern matching for errors, warnings, and failures",
      "Customizable regex-based log parsing",
      "Summarized reports with error frequency analysis",
      "Memory-efficient streaming for large files"
    ],
    problemSolved: "Addressed the challenge of analyzing massive log files quickly, reducing analysis time from hours to minutes by utilizing concurrent processing.",
    myContribution: "Architected the threading model, implemented the parser with regex patterns, and optimized memory usage for handling multi-gigabyte log files.",
    skillsDemonstrated: ["C++ Concurrency", "Performance Optimization", "File Handling", "Problem Solving"],
    githubLink: "https://github.com/gourabraj/log-analyzer"
  },
  {
    title: "In-Memory LRU Cache System",
    icon: Database,
    techStack: ["C++", "Hash Maps", "Doubly Linked Lists", "Data Structures"],
    overview: "A custom cache implementation providing O(1) get and put operations using a combination of hash maps and doubly linked lists.",
    features: [
      "O(1) time complexity for both get and put operations",
      "Automatic eviction of least recently used entries",
      "Thread-safe implementation for concurrent access",
      "Configurable cache size with dynamic resizing",
      "Memory-efficient node management"
    ],
    problemSolved: "Provides a fast, memory-efficient caching layer for applications requiring quick data access with automatic memory management.",
    myContribution: "Designed the data structure combination for optimal performance, implemented the eviction policy, and wrote comprehensive unit tests.",
    skillsDemonstrated: ["Data Structures", "Algorithm Design", "Memory Management", "C++ STL"],
    githubLink: "https://github.com/gourabraj/lru-cache"
  },
  {
    title: "CI/CD Pipeline Automation",
    icon: GitBranch,
    techStack: ["Jenkins", "GitHub Actions", "Git", "Shell Scripting"],
    overview: "Automated build, test, and deployment pipelines that streamline software delivery and reduce manual intervention.",
    features: [
      "Multi-stage pipeline with build, test, and deploy phases",
      "Automated testing integration with reporting",
      "GitHub Actions workflows for pull request validation",
      "Jenkins pipeline scripts for enterprise deployments",
      "Slack notifications for build status updates"
    ],
    problemSolved: "Eliminated manual deployment errors and reduced deployment time by 70%, enabling faster and more reliable releases.",
    myContribution: "Designed the pipeline architecture, wrote Jenkinsfiles and GitHub Actions workflows, and implemented the notification system.",
    skillsDemonstrated: ["CI/CD", "Jenkins", "GitHub Actions", "Automation", "Shell Scripting"],
    githubLink: "https://github.com/gourabraj/cicd-pipeline"
  },
  {
    title: "Kubernetes Application Deployment & Auto-Scaling",
    icon: Container,
    techStack: ["Kubernetes", "Docker", "Helm", "Prometheus"],
    overview: "Containerized application deployment with horizontal auto-scaling based on CPU and memory metrics.",
    features: [
      "Docker containerization with multi-stage builds",
      "Kubernetes Deployment and Service manifests",
      "Horizontal Pod Autoscaler configuration",
      "Resource limits and requests optimization",
      "Load testing with scaling behavior analysis"
    ],
    problemSolved: "Enables applications to handle variable traffic loads automatically, optimizing resource usage and reducing infrastructure costs.",
    myContribution: "Created containerized application images, wrote K8s manifests, configured HPA policies, and performed load testing to validate scaling.",
    skillsDemonstrated: ["Kubernetes", "Docker", "Auto-Scaling", "DevOps", "Infrastructure"],
    githubLink: "https://github.com/gourabraj/k8s-deployment"
  },
  {
    title: "Infrastructure as Code using Terraform",
    icon: Cloud,
    techStack: ["Terraform", "Azure", "HCL", "Infrastructure Automation"],
    overview: "Cloud infrastructure provisioning using Terraform, enabling consistent, repeatable, and version-controlled infrastructure deployment.",
    features: [
      "Modular Terraform configurations for reusability",
      "Azure resource provisioning (VMs, networking, storage)",
      "State management with remote backends",
      "Environment-specific variable files",
      "Automated destroy and recreate workflows"
    ],
    problemSolved: "Replaced manual cloud resource provisioning with code, ensuring consistency across environments and enabling infrastructure versioning.",
    myContribution: "Designed the module structure, wrote HCL configurations for Azure resources, and implemented the CI/CD integration for automatic deployments.",
    skillsDemonstrated: ["Terraform", "IaC", "Azure", "Cloud Architecture", "DevOps"],
    githubLink: "https://github.com/gourabraj/terraform-azure"
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <project.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg leading-tight">{project.title}</h3>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium rounded-md bg-accent/10 text-accent"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Overview */}
        <p className="text-muted-foreground text-sm mb-4">{project.overview}</p>

        {/* Expand Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full justify-center gap-2 text-muted-foreground hover:text-primary"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              View Details <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>

        {/* Expanded Content */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-border space-y-4"
          >
            {/* Features */}
            <div>
              <h4 className="font-medium text-sm mb-2">Key Features</h4>
              <ul className="space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Problem Solved */}
            <div>
              <h4 className="font-medium text-sm mb-2">Problem Solved</h4>
              <p className="text-sm text-muted-foreground">{project.problemSolved}</p>
            </div>

            {/* My Contribution */}
            <div>
              <h4 className="font-medium text-sm mb-2">My Contribution</h4>
              <p className="text-sm text-muted-foreground">{project.myContribution}</p>
            </div>

            {/* Skills Demonstrated */}
            <div>
              <h4 className="font-medium text-sm mb-2">Skills Demonstrated</h4>
              <div className="flex flex-wrap gap-2">
                {project.skillsDemonstrated.map((skill, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Link */}
            <Button variant="outline" size="sm" className="w-full gap-2" asChild>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View on GitHub
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Featured Work
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in DevOps, full-stack development, and system design.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
