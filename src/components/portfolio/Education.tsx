import { GraduationCap, Calendar, MapPin, Award, BookOpen } from "lucide-react"

const Education = () => {
  return (
    <section id="education" className="section-padding bg-gradient-to-br from-muted to-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in software engineering and computer science
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education Card */}
          <div className="bg-card rounded-2xl p-8 portfolio-shadow portfolio-transition hover:portfolio-shadow-hover">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              {/* University Logo/Icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-white" />
                </div>
              </div>

              {/* Education Details */}
              <div className="flex-grow">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Bachelor of Science in Software Engineering
                  </h3>
                  <h4 className="text-lg font-semibold text-primary mb-2">
                    International Islamic University, Islamabad
                  </h4>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>October 2017 – November 2021</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Islamabad, Pakistan</span>
                    </div>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-muted/50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <BookOpen className="h-5 w-5 text-primary mr-2" />
                      <h5 className="font-semibold text-foreground">Key Coursework</h5>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Data Structures & Algorithms</li>
                      <li>• Object-Oriented Programming</li>
                      <li>• Database Management Systems</li>
                      <li>• Web Development</li>
                      <li>• Software Engineering Principles</li>
                      <li>• Computer Networks</li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Award className="h-5 w-5 text-primary mr-2" />
                      <h5 className="font-semibold text-foreground">Academic Focus</h5>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Full Stack Web Development</li>
                      <li>• Software Architecture & Design</li>
                      <li>• Agile Development Methodologies</li>
                      <li>• API Design & Development</li>
                      <li>• User Interface Design</li>
                      <li>• Project Management</li>
                    </ul>
                  </div>
                </div>

                {/* Skills Gained */}
                <div className="mt-6">
                  <h5 className="font-semibold mb-3 text-foreground">Technical Skills Developed:</h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'C#', '.NET Framework', 'Java', 'Python', 'SQL', 'HTML/CSS', 
                      'JavaScript', 'Software Design Patterns', 'Database Design', 
                      'System Analysis', 'Testing Methodologies', 'Version Control'
                    ].map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Learning */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-xl portfolio-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Continuous Learning</h4>
              <p className="text-sm text-muted-foreground">
                Staying updated with latest technologies through online courses and tutorials
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl portfolio-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Certifications</h4>
              <p className="text-sm text-muted-foreground">
                Pursuing industry certifications in Angular, React, and ASP.NET Core
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl portfolio-shadow text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Academic Excellence</h4>
              <p className="text-sm text-muted-foreground">
                Strong foundation in computer science fundamentals and software engineering practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education