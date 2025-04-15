
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-space-dark">
      <div className="text-center px-4">
        <h1 className="text-7xl md:text-9xl font-bold text-space-accent mb-4">404</h1>
        <p className="text-xl md:text-2xl text-white mb-8">Houston, we have a problem. Page not found.</p>
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-space-purple/30 backdrop-blur-xl border border-space-purple/30 flex items-center justify-center animate-float">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-16 w-16 text-white">
              <circle cx="12" cy="12" r="10" />
              <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          </div>
        </div>
        <Button asChild className="bg-space-accent hover:bg-space-highlight text-black font-medium">
          <Link to="/">
            <ArrowLeft size={16} className="mr-2" /> Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
