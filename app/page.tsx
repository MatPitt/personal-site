"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Download, MapPin, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function PersonalWebsite() {
  const experiences = [    
    {
      company: "DevRev",
      role: "Applied AI Engineer",
      period: "2025 - Present",
      logo: "/logos/devrev.png",
      description:
        "Working on integrating AI solutions into customer relationship management tools and create automation, workflows and agents.",
    },
    {
      company: "Salesforce",
      role: "Software Engineer",
      period: "2021 - 2025",
      logo: "/logos/Salesforce.com_logo.svg.png",
      description:
        "Led development of cloud-native applications and microservices architecture, focusing on backend systems and API design.",
    },
    {
      company: "MercadoLibre",
      role: "Data Engineer",
      period: "2020 - 2021",
      logo: "/logos/png-transparent-mercadolibre-hd-logo.png",
      description:
        "Developed scalable backend solutions for e-commerce platform serving millions of users across Latin America.",
    },
    {
      company: "JP Morgan Chase",
      role: "Data Scientist Analytics Intern",
      period: "2019 - 2020",
      logo: "/logos/jp-morgan.svg",
      description: "Built dashboards, KPIs and metrics solutions to provide data-driven insights and impact the decision making process.",
    },
    {
      company: "Ecolab",
      role: "Business System Analyst Intern",
      period: "2018 - 2019",
      logo: "/logos/png-transparent-logo-brand-trademark-product-design-logo-graphic-logo-blue-text-trademark.png",
      description:
        "Managed the settings and configuration of the company's ERP system, ensuring data integrity and process optimization.",
    },
  ]

  const ProjectsProjects = [
    {
      title: "JuliiCocina",
      description: "Site for young chef Argentinian youtuber specialized in cakes and desserts",
      image: "/images/juliCocinaLogo.png",
      liveUrl: "https://www.juliicocina.com/",
      githubUrl: "",
      tech: ["React", "Node.js"],
    },
    {
      title: "Celestial Particle Explorer",
      description: "Interactive web app visualizing planets and the moon with particles data.",
      image: "/images/particlesLogo.png",
      liveUrl: "https://v0-particle-explorer.vercel.app/",
      githubUrl: "https://github.com/MatPitt/v0-particles-globe",
      tech: ["React", "Node.js", "v0"],
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      liveUrl: "https://taskmaster-app.com",
      githubUrl: "https://github.com/mateopitarch/task-manager",
      tech: ["TypeScript", "Next.js", "MongoDB"],
    },
  ]

  const skills = [
    "Java",
    "Python",
    "Node.js",
    "TypeScript",
    "Spring Boot",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "AWS",
    "Docker",
    "Kubernetes",
    "Microservices",
    "REST APIs",
    "GraphQL",
    "System Design",
    "CI/CD",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-white">Mateo Pitarch</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">
                Experience
              </a>
              <a href="#Projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <img
                src="/profile.JPG"
                alt="Mateo Pitarch"
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-blue-500"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Mateo Pitarch</h1>
            <p className="text-xl md:text-2xl text-blue-400 mb-6">Software Engineer - Solutions Engineer - Data Engineer</p>
            <div className="flex items-center justify-center gap-2 text-gray-300 mb-8">
              <MapPin className="w-4 h-4" />
              <span>Buenos Aires, Argentina</span>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Experienced software engineer specializing in backend development with a passion for building robust apps
              and innovative technology solutions. Proven track record at leading companies including DevRev, Salesforce,
              MercadoLibre, MuleSoft, and JP Morgan, delivering scalable systems that serve millions of users worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
              >
                <Download className="w-4 h-4 mr-2" />
                <Link href="/resume.pdf" className="flex items-center">
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Professional Experience</h2>
          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all bg-gray-800 border-gray-700 hover:border-gray-600"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center p-2">
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                        <Badge variant="outline" className="text-blue-400 border-blue-400 w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      <p className="text-lg text-blue-400 mb-3">{exp.company}</p>
                      <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="Projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ProjectsProjects.map((project, index) => (
              <Card
                key={index}
                className="group overflow-hidden bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 md:h-48 object-contain bg-white p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-gray-700 text-gray-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-4 py-2 text-gray-300 border-gray-600 hover:border-blue-500 hover:text-blue-400 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-lg text-gray-300 mb-8">
            Always interested in exciting opportunities and innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white bg-transparent"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
