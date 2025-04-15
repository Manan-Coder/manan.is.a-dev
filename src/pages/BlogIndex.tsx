
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const BlogIndex = () => {
  // Sample blog post data
  const blogPosts = [
    {
      id: 1,
      title: "Exploring Black Holes: A Computational Approach",
      excerpt: "Dive into the mathematics behind black holes and how we can model them using computational methods.",
      category: "Astrophysics",
      date: "April 10, 2025",
      readTime: "8 min read",
      slug: "exploring-black-holes"
    },
    {
      id: 2,
      title: "Building a Real-time Chat App with Rust and WebSockets",
      excerpt: "A step-by-step guide on how I built a performant chat application using Rust on the backend and React on the frontend.",
      category: "Programming",
      date: "April 5, 2025",
      readTime: "12 min read",
      slug: "rust-chat-app"
    },
    {
      id: 3,
      title: "The Mathematics of Rocket Propulsion",
      excerpt: "Understanding the fundamental equations that govern rocket propulsion and how they apply to real-world rockets.",
      category: "Astrophysics",
      date: "March 28, 2025",
      readTime: "10 min read",
      slug: "rocket-propulsion-math"
    },
    {
      id: 4,
      title: "Creating Custom Slack Bots for Productivity",
      excerpt: "How I built a custom Slack bot to automate repetitive tasks and improve team workflow.",
      category: "Programming",
      date: "March 20, 2025",
      readTime: "7 min read",
      slug: "slack-bots-productivity"
    },
    {
      id: 5,
      title: "The Theory of Relativity: Simplified Explanation",
      excerpt: "Breaking down Einstein's Theory of Relativity in simpler terms with practical examples.",
      category: "Astrophysics",
      date: "March 15, 2025",
      readTime: "9 min read",
      slug: "relativity-simplified"
    },
    {
      id: 6,
      title: "My Journey Learning Rust as a JavaScript Developer",
      excerpt: "The challenges and revelations I experienced transitioning from JavaScript to Rust programming.",
      category: "Programming",
      date: "March 8, 2025",
      readTime: "6 min read",
      slug: "learning-rust-journey"
    }
  ];

  // Group posts by category
  const categories = [...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col">
      <div className="container mx-auto px-4 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 cosmic-glow">My <span className="text-space-accent">Blog</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Thoughts on astrophysics, programming, and my journey as a young developer.
          </p>
        </div>

        {/* Categories Filter */}
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

        {/* Blog Posts Grid */}
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
                
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center text-sm text-gray-400">
                  <Clock size={12} className="mr-1" /> {post.readTime}
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
