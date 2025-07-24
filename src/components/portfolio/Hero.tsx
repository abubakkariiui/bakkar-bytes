import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import heroBackground from "@/assets/hero-background.jpg"
import profileAvatar from "@/assets/profile-avatar.jpg"

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary-light rounded-full animate-bounce-subtle opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-bounce-subtle opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-1 h-1 bg-primary rounded-full animate-bounce-subtle opacity-80" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-max section-padding text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src={profileAvatar} 
                alt="Abu Bakkar - Full Stack Developer"
                className="w-40 h-40 rounded-full border-4 border-white/20 shadow-2xl animate-slide-up"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white">Abu Bakkar</span>
            <span className="block text-gradient bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Crafting Scalable Web Solutions with{" "}
            <span className="font-semibold text-white">Angular</span>,{" "}
            <span className="font-semibold text-white">React</span>, and{" "}
            <span className="font-semibold text-white">ASP.NET Core</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-white px-8 py-4 text-lg font-semibold rounded-xl portfolio-shadow-hover portfolio-transition"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-xl portfolio-transition"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/abubakkariiui" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white portfolio-transition transform hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/abubakkarmit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white portfolio-transition transform hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <ArrowDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  )
}

export default Hero