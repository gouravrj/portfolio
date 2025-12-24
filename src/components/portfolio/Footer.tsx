import { Mail, Linkedin, Github, MapPin, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* CTA Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-background/70 max-w-lg mx-auto mb-8">
              I'm always interested in discussing new opportunities, DevOps challenges, or innovative projects. Feel free to reach out!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                asChild
              >
                <a href="mailto:gourav.raj42001@gmail.com">
                  <Mail className="h-4 w-4" />
                  gourav.raj42001@gmail.com
                </a>
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-background/70 hover:text-background hover:bg-background/10"
              asChild
            >
              <a href="https://linkedin.com/in/gourab-raj-167a14285" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-background/70 hover:text-background hover:bg-background/10"
              asChild
            >
              <a href="https://github.com/gouravrj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-background/70 hover:text-background hover:bg-background/10"
              asChild
            >
              <a href="mailto:gourav.raj42001@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-background/50 mb-8">
            <MapPin className="h-4 w-4" />
            <span>Bengaluru, India</span>
          </div>

          {/* Divider */}
          <div className="border-t border-background/10 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/50">
              <p>© {currentYear} Gourab Raj. All rights reserved.</p>
              <p className="flex items-center gap-1">
                Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using React & Tailwind
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
