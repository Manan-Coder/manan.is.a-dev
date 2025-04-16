
import { ArrowRight, Github, Code, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Description } from "@radix-ui/react-toast";
const projects = [
  {id: 1,
   name:"nomad",
   description:"nomad is a Cartesian 3D printer which folds and turns into a suitcase."
  }
  ,
  {id: 2,
    name:"Devil's Kitchen",
    description:"A topdown-cum-platformer RPG game made in Godot."
   }
   ,
   {id: 3,
     name:"Personal site",
     description:"This very website, made with React and styled with tailwind."
    }
 ]
const blogs = 
[
  { 
    id: 1, 
    title: "Building nomad, a foldable suitcase 3D printer", 
    category: "Programming",
    date: "April 6, 2025",
    description:"This month, I decided to make a foldable 3d printer which turns into a suitcase and I'm still building it! I update this blog almost everyday so catch up with my journey!" 
  }
]
const Home = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col">
      <div className="container mx-auto px-4 flex-grow">
        {}
        <section className="flex flex-col md:flex-row items-center justify-between py-12 md:py-24">
          <div className="w-full md:w-3/5 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 cosmic-glow">
              <span className="text-space-accent">Hello!<br /> 
              I'm Manan.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              A developer exploring the cosmic vastness of code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-space-accent hover:bg-space-highlight text-black font-medium">
                <Link to="/projects">
                  View My Projects <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-space-accent text-space-accent hover:bg-space-accent/10">
                <Link to="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative">
              <Link to={"https://github.com/Manan-Coder/manan.is.a-dev"}>
              <div className="w-64 h-64 rounded-full bg-space-purple bg-opacity-20 backdrop-blur-xl border border-space-purple/30 flex items-center justify-center animate-float">
                <Code size={100} className="text-space-accent" />
              </div>
              </Link>
              <Link to={"/blog"}>

              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-space-accent bg-opacity-20 backdrop-blur-xl border border-space-accent/30 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <Rocket size={24} className="text-space-accent" />
            
              </div>
              </Link>
              <Link to={"https://github.com/Manan-Coder"}>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-space-nebula bg-opacity-20 backdrop-blur-xl border border-space-nebula/30 flex items-center justify-center animate-float" style={{ animationDelay: "2s" }}>
                <Github size={32} className="text-space-nebula" />
              </div>
              </Link>
            </div>
          </div>
        </section>

        
        {}
        <section className="py-12 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 cosmic-glow">About <span className="text-space-accent">Me</span></h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I like to make new things, I like to code and doing crazy shit with it. I made a foldable 3d printer which turns into a suitcase recently, you should check my blog about it <a href="" >here</a>.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              When I'm not coding, I like to solve physics and maths problems. I love space and astrophysics deeply, which is quite evident considering this website's vibe.
            </p>
            <Button asChild className="bg-space-accent hover:bg-space-highlight text-black font-medium">
              <Link to="/skills">
                See My Skills <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
        
        {}
        <section className="py-12 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 cosmic-glow">Some of my Recent Projects</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Some of my recent work that showcases my skills and capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-space-darker bg-opacity-50 backdrop-blur-md border border-space-accent/20 rounded-lg overflow-hidden hover:border-space-accent/50 transition-all duration-300 group">
                <div className="h-48 bg-gradient-to-br from-space-purple/30 to-space-nebula/30 flex items-center justify-center">
                  <Code size={64} className="text-white opacity-50 group-hover:text-space-accent group-hover:opacity-100 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-space-accent transition-colors">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <Button asChild variant="outline" size="sm" className="border-space-accent/50 text-space-accent hover:bg-space-accent/10">
                    <Link to={`/projects/blog/${project.name}`}>
                      View Project
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-space-accent hover:bg-space-highlight text-black font-medium">
              <Link to="/projects">
                View All Projects <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
        
        {}
        <section className="py-12 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 cosmic-glow">Latest <span className="text-space-accent">Blog Posts</span></h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Thoughts on astrophysics, coding, and my journey as a young developer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogs.map((post) => (
              <div key={post.id} className="bg-space-darker bg-opacity-50 backdrop-blur-md border border-space-accent/20 rounded-lg overflow-hidden p-6 hover:border-space-accent/50 transition-all duration-300">
                <div className="text-space-accent text-sm mb-2">{post.category} • {post.date}</div>
                <h3 className="text-xl font-semibold mb-4 hover:text-space-accent transition-colors">{post.title}</h3>
                <p className="text-gray-400 mb-4">
                  {post.description}
                  </p>
                <Button asChild variant="link" className="p-0 text-space-accent hover:text-space-highlight">
                  <Link to={`/blog/${post.id}`}>
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-space-accent hover:bg-space-highlight text-black font-medium">
              <Link to="/blog">
                View All Posts <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
