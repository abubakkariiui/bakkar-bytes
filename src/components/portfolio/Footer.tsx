import { Github, Linkedin, Globe, ArrowUp, Heart, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand/Logo */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">Abu Bakkar</h3>
            <p className="text-muted-foreground">Full Stack Developer</p>
            <p className="text-sm text-muted-foreground mt-1">
              Crafting digital experiences with passion
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/abubakkariiui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary portfolio-transition transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/abubakkarmit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary portfolio-transition transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://abu-bakkar.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary portfolio-transition transform hover:scale-110"
              aria-label="Personal Website"
            >
              <Globe className="h-6 w-6" />
            </a>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="portfolio-transition hover:bg-primary hover:text-white"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center mb-4 md:mb-0">
            <span>© {currentYear} Abu Bakkar. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 mx-1" />
            <span>using</span>
            <Code className="h-4 w-4 text-primary mx-1" />
            <span>React & TypeScript</span>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary portfolio-transition">
              About
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-primary portfolio-transition">
              Experience
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary portfolio-transition">
              Projects
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary portfolio-transition">
              Skills
            </a>
            <a href="#education" className="text-muted-foreground hover:text-primary portfolio-transition">
              Education
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary portfolio-transition">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer