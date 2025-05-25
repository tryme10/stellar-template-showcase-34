
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isDocumentation = location.pathname.includes('documentation');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-display font-bold text-gradient">
            Template Preview
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors hover:text-primary font-medium ${
                location.pathname === '/' ? 'text-primary' : 'text-foreground'
              }`}
            >
              Preview Home
            </Link>
            <Link 
              to="/documentation" 
              className={`transition-colors hover:text-red-500 font-medium ${
                isDocumentation ? 'text-red-500' : 'text-foreground'
              }`}
            >
              Documentation
            </Link>
            <Button asChild variant="default" className="bg-gradient-luxury hover:opacity-90 text-white">
              <a 
                href="https://hebat-east-web-app.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                View Live Demo
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20">
            <div className="flex flex-col space-y-4 pt-4">
              <Link 
                to="/" 
                className={`transition-colors hover:text-primary font-medium ${
                  location.pathname === '/' ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Preview Home
              </Link>
              <Link 
                to="/documentation" 
                className={`transition-colors hover:text-red-500 font-medium ${
                  isDocumentation ? 'text-red-500' : 'text-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Documentation
              </Link>
              <Button asChild variant="default" className="bg-gradient-luxury hover:opacity-90 text-white w-fit">
                <a 
                  href="https://hebat-east-web-app.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  View Live Demo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
