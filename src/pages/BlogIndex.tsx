
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const BlogIndex = () => {
  const blogPosts = [
    { 
      id: 1, 
      title: "Building nomad, a foldable suitcase 3D printer", 
      category: "Programming",
      date: "April 6, 2025",
      description:"This month, I decided to make a foldable 3d printer which turns into a suitcase and I'm still building it! I update this blog almost everyday so catch up with my journey!" ,
      readtime:"5 minutes",
      slug:"nomad"
    }
  ];


  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col">
      <div className="container mx-auto px-4 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 cosmic-glow">My <span className="text-space-accent">Blog</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Thoughts on astrophysics, programming, and my journey as a curious voyager.
          </p>
        </div>

        {}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button variant="outline" className="border-space-accent text-space-accent hover:bg-space-accent/10">
            All Posts
          </Button>
          {categories.map(category => (
            <Button key={category} variant="ghost" className="text-gray-300 hover:text-space-accent hover:bg-space-accent/5">
              {category}
            </Button>
          ))}
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <div 
              key={post.id}
              className="bg-space-darker bg-opacity-70 backdrop-blur-md border border-space-accent/20 rounded-lg overflow-hidden flex flex-col hover:border-space-accent/50 transition-all duration-300 group"
            >
              <div className="p-6 flex-grow">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span className="bg-space-accent/10 text-space-accent px-2 py-0.5 rounded-full flex items-center">
                    <Tag size={12} className="mr-1" /> {post.category}
                  </span>
                  <span className="mx-3">•</span>
                  <span className="flex items-center">
                    <Calendar size={12} className="mr-1" /> {post.date}
                  </span>
                </div>
                
                <h2 className="text-xl font-semibold mb-3 group-hover:text-space-accent transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                
                <p className="text-gray-400 mb-4">{post.description}</p>
                
                <div className="flex items-center text-sm text-gray-400">
                  <Clock size={12} className="mr-1" /> {post.readtime}
                </div>
              </div>
              
              <div className="px-6 pb-6">
                <Button asChild variant="link" className="p-0 text-space-accent hover:text-space-highlight">
                  <Link to={`/blog/${post.slug}`}>
                    Read Post <ArrowRight size={16} className="ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
