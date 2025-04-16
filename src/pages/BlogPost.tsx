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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {

        const response = await fetch(`/blogs/${slug}.md`);
        
        if (!response.ok) {
          throw new Error(`Blog post not found: ${slug}`);
        }
        
        const markdownContent = await response.text();
        
 
        const { metadata, content } = parseMarkdown(markdownContent);
        
        const postData: BlogPostData = {
          title: metadata.title || "Untitled Post",
          date: metadata.date || "No date",
          category: metadata.category || "Uncategorized",
          readTime: metadata.readTime || "Unknown read time",
          content: content
        };
        
        setPost(postData);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const parseMarkdown = (markdown: string) => {
    const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
    const match = markdown.match(frontmatterRegex);
    
    if (!match) {
      return {
        metadata: {},
        content: markdown
      };
    }
    
    const frontMatter = match[1];
    const content = markdown.replace(frontmatterRegex, '').trim();
    

    const metadata: Record<string, string> = {};
    frontMatter.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        const value = valueParts.join(':').trim();
        metadata[key.trim()] = value;
      }
    });
    
    return { metadata, content };
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-300">Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex flex-col">
        <div className="container mx-auto px-4 flex-grow text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-300 mb-8">{error || "The blog post you're looking for doesn't exist."}</p>
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
                img: ({ children, src, alt, ...props }) => <img className="rounded-lg my-6 max-w-full" src={src} alt={alt} {...props} />,
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