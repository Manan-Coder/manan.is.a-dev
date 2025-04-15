
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Database, Server, Zap } from "lucide-react";

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Quantum Chat",
      description: "A real-time chat application with end-to-end encryption built with React and Firebase.",
      tags: ["React", "Firebase", "TypeScript"],
      icon: <Zap className="text-space-accent" size={32} />,
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "AstroTracker",
      description: "An interactive web application for tracking celestial objects and space events.",
      tags: ["Next.js", "Three.js", "API"],
      icon: <Code className="text-space-accent" size={32} />,
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "DataViz Platform",
      description: "A data visualization platform for scientific research and educational purposes.",
      tags: ["Python", "Django", "D3.js"],
      icon: <Database className="text-space-accent" size={32} />,
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "SlackBot Assistant",
      description: "An AI-powered Slack bot that helps teams manage tasks and schedule meetings.",
      tags: ["Node.js", "Slack API", "OpenAI"],
      icon: <Server className="text-space-accent" size={32} />,
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "This very website, built with React and styled with Tailwind CSS.",
      tags: ["React", "Tailwind CSS", "Vite"],
      icon: <Code className="text-space-accent" size={32} />,
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 6,
      title: "Space Weather App",
      description: "Mobile app that provides real-time space weather updates and alerts.",
      tags: ["React Native", "NASA API", "Redux"],
      icon: <Zap className="text-space-accent" size={32} />,
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col">
      <div className="container mx-auto px-4 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 cosmic-glow">My <span className="text-space-accent">Projects</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of my work across various technologies and domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-space-darker bg-opacity-70 backdrop-blur-md border border-space-accent/20 rounded-lg overflow-hidden hover:border-space-accent/50 transition-all duration-300 group flex flex-col"
            >
              <div className="p-6 flex-grow">
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-space-accent transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-space-accent/10 text-space-accent text-xs px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-6 pb-6 mt-auto flex gap-3">
                <Button asChild variant="outline" size="sm" className="flex-1 border-space-accent/50 text-space-accent hover:bg-space-accent/10">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-1" /> Code
                  </a>
                </Button>
                <Button asChild size="sm" className="flex-1 bg-space-accent hover:bg-space-highlight text-black">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-1" /> Demo
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
