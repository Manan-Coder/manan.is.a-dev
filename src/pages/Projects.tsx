
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Boxes, Swords, TentTree, AppWindowIcon, Cpu, Clock } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "nomad",
      description: "nomad is a Cartesian 3D printer which folds and turns into a suitcase.",
      tags: ["CAD", "Fusion", "Hardware"],
      icon: <Boxes className="text-space-accent" size={32} />,
      github: "https://github.com/Manan-Coder/nomad",
      demo: "",
    },
    {
      id: 2,
      title: "Devil's Kitchen",
      description: "A topdown-cum-platformer RPG game made in Godot.",
      tags: ["GDScript", "Godot", "Scene"],
      icon: <Swords className="text-space-accent" size={32} />,
      github: "https://github.com/Manan-Coder/devil-s-kitchen",
      demo: "https://manan-coder.itch.io/devils-kitchen",
    },
    {
      id: 5,
      title: "Personal Website",
      description: "This very website, my internet home made with React and styled with tailwind.",
      tags: ["React", "Typescript", "Tailwind"],
      icon: <TentTree className="text-space-accent" size={32} />,
      github: "https://github.com/Manan-Coder/manan.is.a-dev",
      demo: "http://manans.loves-being-a.dev/",
    },
    {
      id: 4,
      title: "HackLumina'25 site",
      description: "Website for a hackathon named 'HackLumina'25', being organised in summers of this year in Delhi/NCR region.",
      tags: ["Javascript", "Python", "APIs"],
      icon: <AppWindowIcon className="text-space-accent" size={32} />,
      github: "https://github.com/HackLumina/Website-slrpnk",
      demo: "https://www.hacklumina.tech/",
    },
    {
      id: 5,
      title: "YapScript!",
      description: "A toy programming language, written on the top of Javascript and Python.",
      tags: ["Javascript", "Python", "Regex"],
      icon: <Cpu className="text-space-accent" size={32} />,
      github: "https://github.com/Manan-Coder/YapScript",
      demo: "https://manan-coder.github.io/YapScript/",
    },
    {
      id: 6,
      title: "Lap",
      description: "A wakatime inspired personal project, which records your stats while you code.",
      tags: ["Rust", "Typescript", "React","Tailwind","Chart.js"],
      icon: <Clock className="text-space-accent" size={32} />,
      github: "https://github.com/Manan-Coder/Lap",
      demo: "",
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
