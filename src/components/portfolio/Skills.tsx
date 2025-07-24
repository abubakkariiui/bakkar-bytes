import { Code, Palette, Database, Globe, Settings, Zap } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Palette className="h-6 w-6" />,
    skills: [
      { name: "Angular", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Sass/SCSS", level: 85 },
      { name: "Bootstrap", level: 90 }
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend Development",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "ASP.NET Core", level: 88 },
      { name: "Web API", level: 90 },
      { name: "C#", level: 85 },
      { name: "SQL Server", level: 80 },
      { name: "Entity Framework", level: 82 },
      { name: "JWT Authentication", level: 85 }
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Tools & Technologies",
    icon: <Settings className="h-6 w-6" />,
    skills: [
      { name: "Git/GitHub", level: 88 },
      { name: "Angular Material", level: 90 },
      { name: "Foundation", level: 78 },
      { name: "Semantic UI", level: 80 },
      { name: "Cross-browser Testing", level: 85 },
      { name: "API Optimization", level: 82 }
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Development Practices",
    icon: <Zap className="h-6 w-6" />,
    skills: [
      { name: "Code Reviews", level: 88 },
      { name: "Performance Optimization", level: 85 },
      { name: "Responsive Design", level: 92 },
      { name: "Agile Development", level: 80 },
      { name: "Testing", level: 78 },
      { name: "Documentation", level: 85 }
    ],
    color: "from-orange-500 to-red-500"
  }
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across the full stack with modern technologies and best practices
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden portfolio-shadow portfolio-transition hover:portfolio-shadow-hover"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center mb-2">
                  <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm mr-3">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6 space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full portfolio-transition"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'JavaScript', 'JSON', 'RESTful APIs', 'Postman', 'Visual Studio', 
              'VS Code', 'Figma', 'Adobe XD', 'Webpack', 'NPM', 'Yarn',
              'Material-UI', 'Tailwind CSS', 'LINQ', 'AutoMapper', 'SignalR',
              'Azure DevOps', 'Jira', 'Scrum', 'Unit Testing', 'Integration Testing'
            ].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium portfolio-transition hover:bg-secondary-hover hover:scale-105"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills