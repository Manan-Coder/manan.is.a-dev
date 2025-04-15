
import { Command, Database, Terminal, Braces, Code, Globe, Server, Workflow, Laptop } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Terminal className="text-space-accent" size={24} />,
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "HTML & CSS", level: 90 },
        { name: "Rust", level: 75 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Braces className="text-space-accent" size={24} />,
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Svelte", level: 80 },
        { name: "Flask", level: 90 },
        { name: "Django", level: 85 },
        { name: "Astro", level: 75 },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Workflow className="text-space-accent" size={24} />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Docker", level: 70 },
        { name: "Slack Apps", level: 85 },
        { name: "Fusion 360", level: 80 },
      ],
    },
    {
      title: "Backend & Databases",
      icon: <Database className="text-space-accent" size={24} />,
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "SQLite", level: 80 },
        { name: "PostgreSQL", level: 70 },
        { name: "Node.js", level: 85 },
        { name: "RESTful APIs", level: 85 },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col">
      <div className="container mx-auto px-4 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 cosmic-glow">My <span className="text-space-accent">Skills</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I've learned and worked with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-space-darker bg-opacity-70 backdrop-blur-md border border-space-accent/20 rounded-lg p-6 hover:border-space-accent/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="mr-3">{category.icon}</div>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-space-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-space-accent to-space-purple h-2 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center cosmic-glow">Current <span className="text-space-accent">Learning Focus</span></h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Machine Learning", icon: <Command size={24} /> },
              { name: "WebAssembly", icon: <Code size={24} /> },
              { name: "Three.js", icon: <Globe size={24} /> },
              { name: "Cloud Computing", icon: <Server size={24} /> }
            ].map((item, index) => (
              <div key={index} className="bg-space-darker bg-opacity-70 backdrop-blur-md border border-space-accent/20 rounded-lg p-6 text-center hover:border-space-accent/50 transition-all duration-300">
                <div className="flex justify-center text-space-accent mb-3">{item.icon}</div>
                <h3 className="font-medium">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
