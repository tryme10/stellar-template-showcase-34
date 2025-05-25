
import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book } from "lucide-react";
import { Link } from "react-router-dom";

interface DocStep {
  id: string;
  title: string;
  description: string;
  code: string;
  image: string;
}

const basicSteps: DocStep[] = [
  {
    id: "installation",
    title: "Installation & Setup",
    description: "Get started by cloning the repository and installing dependencies",
    code: `# Clone the repository
git clone https://github.com/yourproject/template.git

# Navigate to project directory
cd template

# Install dependencies
npm install

# Start development server
npm run dev`,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
  },
  {
    id: "customization",
    title: "Basic Customization",
    description: "Learn how to customize colors, fonts, and basic styling",
    code: `// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  }
}`,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
  },
  {
    id: "components",
    title: "Using Components",
    description: "How to import and use the pre-built components in your project",
    code: `import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const MyComponent = () => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome</h2>
      <Button>Get Started</Button>
    </Card>
  );
};`,
    image: "https://images.unsplash.com/photo-1571677208775-05aa9c93a18c?w=600&h=400&fit=crop"
  },
  {
    id: "routing",
    title: "Adding New Pages",
    description: "Learn how to add new routes and pages to your application",
    code: `// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewPage from "./pages/NewPage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/new-page" element={<NewPage />} />
    </Routes>
  </BrowserRouter>
);`,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop"
  },
  {
    id: "styling",
    title: "Custom Styling",
    description: "Apply custom styles and create your own design system",
    code: `// styles/globals.css
.custom-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}`,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
  },
  {
    id: "deployment",
    title: "Deployment",
    description: "Deploy your application to various hosting platforms",
    code: `# Build for production
npm run build

# Deploy to Vercel
npx vercel --prod

# Deploy to Netlify
npm run build && npx netlify deploy --prod --dir=dist`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  }
];

const Documentation = () => {
  const [activeStep, setActiveStep] = useState(basicSteps[0].id);
  const currentStep = basicSteps.find(step => step.id === activeStep) || basicSteps[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Learn how to customize and extend your React template
            </p>
            
            {/* Navigation Tabs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" className="bg-primary text-primary-foreground">
                Basic Customization
              </Button>
              <Button asChild variant="outline">
                <Link to="/documentation/advanced">
                  Advanced Customization
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            {/* Sidebar Steps */}
            <div className="lg:w-1/3 space-y-2">
              {basicSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeStep === step.id
                      ? 'bg-white dark:bg-card shadow-lg border-l-4 border-primary'
                      : 'bg-white/50 dark:bg-card/50 hover:bg-white dark:hover:bg-card hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      activeStep === step.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className={`font-semibold mb-1 transition-colors ${
                        activeStep === step.id ? 'text-primary' : 'text-foreground'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-xl">
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                    {currentStep.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    {currentStep.description}
                  </p>
                  
                  {/* Preview Image */}
                  <div className="rounded-xl overflow-hidden mb-6">
                    <img 
                      src={currentStep.image} 
                      alt={currentStep.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>

                {/* Code Block */}
                <div className="bg-slate-900 rounded-xl p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-slate-400 text-sm ml-4">Code Example</span>
                  </div>
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{currentStep.code}</code>
                  </pre>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-gradient-luxury hover:opacity-90 text-white">
                    <a 
                      href="https://hebat-east-web-app.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      View Live Example
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/documentation/advanced" className="flex items-center gap-2">
                      <Book className="h-4 w-4" />
                      Advanced Documentation
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
