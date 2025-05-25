
import Header from "@/components/Header";
import DeviceMockup from "@/components/DeviceMockup";
import PreviewTabs from "@/components/PreviewTabs";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book } from "lucide-react";
import { Link } from "react-router-dom";

// Feature data with available icons
const features = [
  {
    icon: () => <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">R</div>,
    title: "React 18",
    description: "Built with the latest React features including concurrent rendering and automatic batching",
    color: "blue"
  },
  {
    icon: () => <div className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center text-white text-xs font-bold">T</div>,
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development with consistent design",
    color: "blue"
  },
  {
    icon: () => <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">S</div>,
    title: "SEO Optimized",
    description: "Built-in SEO best practices with meta tags, structured data, and performance optimization",
    color: "green"
  },
  {
    icon: () => <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">C</div>,
    title: "Clean Code",
    description: "Well-structured, documented, and maintainable codebase following industry standards",
    color: "purple"
  },
  {
    icon: () => <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">R</div>,
    title: "RTL Support",
    description: "Full right-to-left language support for Arabic, Hebrew, and other RTL languages",
    color: "orange"
  },
  {
    icon: () => <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center text-white text-xs font-bold">D</div>,
    title: "Dark Mode",
    description: "Beautiful dark and light themes with smooth transitions and user preferences",
    color: "primary"
  },
  {
    icon: () => <div className="w-6 h-6 bg-indigo-500 rounded flex items-center justify-center text-white text-xs font-bold">M</div>,
    title: "Modular Design",
    description: "Component-based architecture for easy customization and scalability",
    color: "purple"
  },
  {
    icon: () => <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">P</div>,
    title: "Performance",
    description: "Optimized for speed with lazy loading, code splitting, and efficient rendering",
    color: "red"
  },
  {
    icon: () => <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center text-white text-xs font-bold">T</div>,
    title: "TypeScript",
    description: "Full TypeScript support for better development experience and type safety",
    color: "orange"
  },
  {
    icon: () => <div className="w-6 h-6 bg-pink-500 rounded flex items-center justify-center text-white text-xs font-bold">A</div>,
    title: "Animations",
    description: "Smooth and engaging animations using Framer Motion and CSS transitions",
    color: "primary"
  },
  {
    icon: () => <div className="w-6 h-6 bg-teal-500 rounded flex items-center justify-center text-white text-xs font-bold">E</div>,
    title: "Accessibility",
    description: "WCAG compliant with proper ARIA labels, keyboard navigation, and screen reader support",
    color: "green"
  },
  {
    icon: () => <div className="w-6 h-6 bg-violet-500 rounded flex items-center justify-center text-white text-xs font-bold">F</div>,
    title: "Form Handling",
    description: "Advanced form validation and handling with React Hook Form and Zod schemas",
    color: "purple"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Device Mockups */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-mesh opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 animate-fade-in">
              Modern React
              <span className="text-gradient block"> Template</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
              Professional, responsive, and feature-rich template built with React, TypeScript, and TailwindCSS
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button asChild size="lg" className="bg-gradient-luxury hover:opacity-90 text-white">
                <a 
                  href="https://hebat-east-web-app.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  View Live Demo
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/documentation" className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  Documentation
                </Link>
              </Button>
            </div>
          </div>

          {/* Device Mockups */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">
            {/* Desktop Mockup */}
            <div className="flex-1 max-w-3xl animate-scale-in">
              <DeviceMockup 
                url="https://hebat-east-web-app.vercel.app/" 
                device="desktop" 
                scale={0.7}
              />
            </div>
            
            {/* Mobile Mockup */}
            <div className="lg:flex-shrink-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <DeviceMockup 
                url="https://hebat-east-web-app.vercel.app/" 
                device="mobile"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Preview Tabs Section */}
      <PreviewTabs />

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Packed with
              <span className="text-gradient"> Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to build modern, professional web applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard
                  icon={feature.icon as any}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get access to the complete template with documentation, source code, and lifetime updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              <Link to="/documentation" className="flex items-center gap-2">
                <Book className="h-5 w-5" />
                View Documentation
              </Link>
            </Button>
            <Button size="lg" className="bg-gradient-luxury hover:opacity-90 text-white">
              Buy Now - $49
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
