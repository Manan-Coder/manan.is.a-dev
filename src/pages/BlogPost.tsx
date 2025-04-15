
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostData {
  title: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);

  // In a real app, this would fetch from an API or CMS
  useEffect(() => {
    const fetchPost = () => {
      // Simulating API call delay
      setTimeout(() => {
        // Sample post content with markdown
        const postData: BlogPostData = {
          title: "Exploring Black Holes: A Computational Approach",
          date: "April 10, 2025",
          category: "Astrophysics",
          readTime: "8 min read",
          content: `
# Exploring Black Holes: A Computational Approach

Black holes are some of the most fascinating and mysterious objects in our universe. In this post, we'll explore how to model and simulate black holes using computational methods.

## What are Black Holes?

A black hole is a region of spacetime where gravity is so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from it. The theory of general relativity predicts that a sufficiently compact mass can deform spacetime to form a black hole.

## The Mathematics Behind Black Holes

The Schwarzschild radius formula:

\`\`\`
Rs = (2 * G * M) / c^2
\`\`\`

Where:
- Rs is the Schwarzschild radius
- G is the gravitational constant (6.674 × 10^-11 m^3 kg^-1 s^-2)
- M is the mass of the object
- c is the speed of light in vacuum (299,792,458 m/s)

## Computational Models

Here's a simple example of how we might calculate the Schwarzschild radius in Python:

\`\`\`python
import numpy as np

def schwarzschild_radius(mass_kg):
    G = 6.67430e-11  # gravitational constant in m^3 kg^-1 s^-2
    c = 299792458    # speed of light in m/s
    
    radius = (2 * G * mass_kg) / (c**2)
    return radius

# Mass of the Sun in kg
mass_sun = 1.989e30

# Calculate the Schwarzschild radius for the Sun
radius_sun = schwarzschild_radius(mass_sun)
print(f"The Schwarzschild radius of the Sun would be {radius_sun:.3f} meters")
\`\`\`

## Visualizing Black Holes

One of the most exciting aspects of computational astrophysics is the ability to visualize phenomena that we could never see directly. Using tools like **Three.js** or **OpenGL**, we can create realistic visualizations of black holes.

![Black Hole Simulation](https://source.unsplash.com/random/800x400/?space)

## Future Directions

As computational power increases, our ability to model black holes with greater accuracy improves. Some interesting areas for future exploration include:

1. Simulating Hawking radiation
2. Modeling black hole mergers
3. Exploring the information paradox computationally

## Conclusion

Computational methods provide us with powerful tools to explore and understand black holes, even though we can never directly observe them. By combining the mathematics of general relativity with numerical methods, we can gain insights into these fascinating cosmic objects.

---

*This is a simplified explanation of a very complex topic. For more detailed information, refer to textbooks on general relativity and computational astrophysics.*
          `
        };
        setPost(postData);
        setLoading(false);
      }, 500);
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-300">Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex flex-col">
        <div className="container mx-auto px-4 flex-grow text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-300 mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild className="bg-white hover:bg-gray-200 text-black">
            <Link to="/blog">
              <ArrowLeft size={16} className="mr-2" /> Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col">
      <div className="container mx-auto px-4 flex-grow">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button asChild variant="outline" size="sm" className="mb-6 border-white/50 text-white hover:bg-white/10">
              <Link to="/blog">
                <ArrowLeft size={16} className="mr-2" /> Back to Blog
              </Link>
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-400 mb-8 gap-y-2">
              <span className="bg-white/10 text-white px-2 py-0.5 rounded-full flex items-center mr-4">
                <Tag size={12} className="mr-1" /> {post.category}
              </span>
              <span className="flex items-center mr-4">
                <Calendar size={12} className="mr-1" /> {post.date}
              </span>
              <span className="flex items-center">
                <Clock size={12} className="mr-1" /> {post.readTime}
              </span>
            </div>
          </div>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              children={post.content}
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children, ...props }) => <h1 className="text-3xl font-bold mb-4 mt-6 text-white" {...props}>{children}</h1>,
                h2: ({ children, ...props }) => <h2 className="text-2xl font-bold mb-3 mt-5" {...props}>{children}</h2>,
                h3: ({ children, ...props }) => <h3 className="text-xl font-bold mb-2 mt-4" {...props}>{children}</h3>,
                p: ({ children, ...props }) => <p className="mb-4 text-gray-300 leading-relaxed" {...props}>{children}</p>,
                a: ({ children, ...props }) => <a className="text-white hover:text-gray-200 underline" {...props}>{children}</a>,
                img: ({ src, alt, ...props }) => <img className="rounded-lg my-6 max-w-full" src={src} alt={alt} {...props} />,
                ul: ({ children, ...props }) => <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300" {...props}>{children}</ul>,
                ol: ({ children, ...props }) => <ol className="list-decimal pl-6 mb-4 space-y-2 text-gray-300" {...props}>{children}</ol>,
                code: ({ children, className, ...props }) => {
                  const match = /language-(\w+)/.exec(className || '');
                  return !className ? (
                    <code className="bg-space-darker p-1 rounded text-white" {...props}>{children}</code>
                  ) : (
                    <pre className="bg-space-darker p-4 rounded-lg overflow-x-auto mb-6 text-gray-300">
                      <code className={className} {...props}>{children}</code>
                    </pre>
                  );
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
