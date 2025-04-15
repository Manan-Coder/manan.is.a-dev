
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-12 flex flex-col">
      <div className="container mx-auto px-4 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 cosmic-glow">Get In <span className="text-space-accent">Touch</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-space-darker bg-opacity-70 backdrop-blur-md border border-space-accent/20 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-space-darker border-space-accent/30 focus:border-space-accent"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-space-darker border-space-accent/30 focus:border-space-accent"
                />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                  required
                  className="bg-space-darker border-space-accent/30 focus:border-space-accent"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-space-darker border-space-accent/30 focus:border-space-accent resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={loading}
                className="w-full bg-space-accent hover:bg-space-highlight text-black font-medium"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-space-accent mr-4 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-300">contact@manan-sharma.com</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Social Profiles</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-space-darker bg-opacity-70 backdrop-blur-md border border-space-accent/20 rounded-lg p-3 text-white hover:text-space-accent hover:border-space-accent/50 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-space-darker bg-opacity-70 backdrop-blur-md border border-space-accent/20 rounded-lg p-3 text-white hover:text-space-accent hover:border-space-accent/50 transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="mailto:contact@manan-sharma.com"
                      className="bg-space-darker bg-opacity-70 backdrop-blur-md border border-space-accent/20 rounded-lg p-3 text-white hover:text-space-accent hover:border-space-accent/50 transition-colors"
                    >
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-space-darker bg-opacity-70 backdrop-blur-md border border-space-accent/20 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold mb-4">Let's Build Something Amazing</h3>
              <p className="text-gray-300 mb-4">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <p className="text-gray-400">
                Response Time: <span className="text-space-accent">Within 24 hours</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
