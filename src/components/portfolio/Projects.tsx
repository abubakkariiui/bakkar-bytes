import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code2, Database, Globe, Smartphone } from "lucide-react"

const projects = [
  {
    title: "Lawyer Web Application",
    description: "A comprehensive full-stack application built with ASP.NET Core Web API and Angular (Ngxs), featuring secure user authentication, case management, document handling, and client communication systems.",
    technologies: ["ASP.NET Core", "Angular", "Ngxs", "SQL Server", "JWT Authentication", "Material Design"],
    features: ["Secure Authentication", "Case Management", "Document Upload", "Client Portal"],
    icon: <Database className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Business Dashboard",
    description: "A React.js-based analytics dashboard integrated with ASP.NET Core APIs, providing real-time data visualization, business metrics tracking, and comprehensive reporting capabilities.",
    technologies: ["React.js", "ASP.NET Core", "Chart.js", "REST API", "Redux", "Tailwind CSS"],
    features: ["Real-time Analytics", "Data Visualization", "Custom Reports", "User Management"],
    icon: <Code2 className="h-8 w-8" />,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "E-Commerce Platform",
    description: "A scalable e-commerce web application using Angular, Bootstrap, and Sass, optimized for cross-device compatibility with advanced product management and payment integration.",
    technologies: ["Angular", "Bootstrap", "Sass", "TypeScript", "PayPal API", "Responsive Design"],
    features: ["Product Catalog", "Shopping Cart", "Payment Integration", "Admin Panel"],
    icon: <Globe className="h-8 w-8" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Portfolio Website",
    description: "A custom-built, responsive portfolio website showcasing professional work and skills, built with React, TypeScript, and Tailwind CSS with modern animations and optimal performance.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Netlify"],
    features: ["Responsive Design", "Smooth Animations", "SEO Optimized", "Fast Loading"],
    icon: <Smartphone className="h-8 w-8" />,
    color: "from-orange-500 to-red-500"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-muted to-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden portfolio-shadow portfolio-transition hover:portfolio-shadow-hover group"
            >
              {/* Project Header */}
              <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-white text-gray-900 hover:bg-gray-100"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="px-8 py-4 rounded-xl border-primary text-primary hover:bg-primary hover:text-white portfolio-transition"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects