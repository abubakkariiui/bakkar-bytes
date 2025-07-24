import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Send, MessageSquare } from "lucide-react"

const contactInfo = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: "+92 342 18998417",
    href: "tel:+923421899841"
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "contact@abu-bakkar.dev",
    href: "mailto:contact@abu-bakkar.dev"
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    value: "github.com/abubakkariiui",
    href: "https://github.com/abubakkariiui"
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/abubakkarmit",
    href: "https://linkedin.com/in/abubakkarmit"
  },
  {
    icon: <Globe className="h-5 w-5" />,
    label: "Website",
    value: "abu-bakkar.netlify.app",
    href: "https://abu-bakkar.netlify.app"
  }
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      })
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your next project? Let's create something amazing together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-2xl portfolio-shadow">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Let's Connect</h3>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with talented teams. 
                Whether you have a specific project in mind or just want to explore possibilities, 
                feel free to reach out!
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-4 bg-muted/50 rounded-xl portfolio-transition hover:bg-muted hover:transform hover:scale-105 group"
                  >
                    <div className="bg-primary/10 p-3 rounded-lg mr-4 group-hover:bg-primary/20 portfolio-transition">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{contact.label}</div>
                      <div className="font-medium text-foreground">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-primary to-primary-light p-8 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-4">Available for Opportunities</h4>
              <p className="mb-4 text-blue-100">
                I'm currently open to full-time positions, freelance projects, and consulting opportunities.
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-sm font-medium">Available for immediate start</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl portfolio-shadow portfolio-transition hover:portfolio-shadow-hover">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-xl portfolio-transition"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Prefer email? Reach me directly at{" "}
                <a href="mailto:contact@abu-bakkar.dev" className="text-primary hover:underline">
                  contact@abu-bakkar.dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact