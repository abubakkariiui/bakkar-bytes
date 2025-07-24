import { Button } from "@/components/ui/button"
import { Download, User, Award, Code2 } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-background to-muted">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating exceptional digital experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-2xl portfolio-shadow portfolio-transition hover:portfolio-shadow-hover">
                <div className="flex items-center mb-4">
                  <User className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Professional Journey</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate Full Stack Developer with a BS in Software Engineering from 
                  International Islamic University, Islamabad (2017–2021). With experience at 
                  Genesis Engineering and Unaz Services, I specialize in building scalable web 
                  applications that deliver exceptional user experiences.
                </p>
              </div>

              <div className="bg-card p-8 rounded-2xl portfolio-shadow portfolio-transition hover:portfolio-shadow-hover">
                <div className="flex items-center mb-4">
                  <Code2 className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Technical Expertise</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise spans modern web technologies including Angular, React, ASP.NET Core, 
                  and advanced front-end frameworks. I focus on creating responsive, performant 
                  applications with clean, maintainable code and optimal user experiences.
                </p>
              </div>

              {/* Download Resume */}
              <div className="pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl portfolio-transition"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Stats & Highlights */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl portfolio-shadow text-center">
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="bg-card p-6 rounded-xl portfolio-shadow text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-card p-6 rounded-xl portfolio-shadow text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="bg-card p-6 rounded-xl portfolio-shadow text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>

              {/* Key Skills Preview */}
              <div className="bg-card p-8 rounded-2xl portfolio-shadow">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Core Competencies</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Angular', 'React', 'ASP.NET Core', 'TypeScript', 
                    'HTML5/CSS3', 'Sass', 'Bootstrap', 'API Design'
                  ].map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About