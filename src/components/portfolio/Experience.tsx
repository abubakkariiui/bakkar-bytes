import { Calendar, MapPin, Briefcase, CheckCircle } from "lucide-react"

const experiences = [
  {
    company: "Genesis Engineering",
    position: "Full Stack Developer",
    period: "July 2021 – February 2023",
    location: "Remote",
    achievements: [
      "Collaborated with US clients to deliver high-quality web applications from scratch",
      "Optimized applications for speed and scalability, ensuring seamless performance",
      "Designed visually appealing interfaces using HTML5, CSS3, Sass, Bootstrap, Foundation, Semantic UI, and Angular Material Design",
      "Conducted code reviews to maintain high-quality standards and tested for cross-browser/platform compatibility"
    ],
    technologies: ["Angular", "HTML5", "CSS3", "Sass", "Bootstrap", "Angular Material", "Cross-browser Testing"]
  },
  {
    company: "Unaz Services",
    position: "Full Stack Developer",
    period: "January 2021 – July 2021",
    location: "Remote",
    achievements: [
      "Developed a Lawyer Web Application using ASP.NET Core Web API and Angular (Ngxs)",
      "Built business web applications with ASP.NET Core and React.js",
      "Optimized API performance for improved efficiency and user experience",
      "Implemented secure authentication and authorization systems"
    ],
    technologies: ["ASP.NET Core", "Angular", "React.js", "Ngxs", "Web API", "Performance Optimization"]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions and delivering exceptional results
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary-light hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  {/* Experience Card */}
                  <div className="md:ml-20 bg-card rounded-2xl p-8 portfolio-shadow portfolio-transition hover:portfolio-shadow-hover">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                        <div className="flex items-center text-primary font-semibold">
                          <Briefcase className="h-4 w-4 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="h-4 w-4 mr-1" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium portfolio-transition hover:bg-secondary-hover"
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience