
import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

interface AdvancedStep {
  id: string;
  title: string;
  description: string;
  code: string;
  image: string;
}

const advancedSteps: AdvancedStep[] = [
  {
    id: "state-management",
    title: "State Management",
    description: "Implement advanced state management with React Query and Zustand",
    code: `// stores/useAppStore.ts
import { create } from 'zustand';

interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  setUser: (user: User | null) => void;
  toggleTheme: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  theme: 'light',
  setUser: (user) => set({ user }),
  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),
}));`,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop"
  },
  {
    id: "api-integration",
    title: "API Integration",
    description: "Advanced API patterns with React Query and error handling",
    code: `// hooks/useApi.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('/api/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (userData: CreateUserData) => {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
};`,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description: "Advanced performance patterns including code splitting and memoization",
    code: `// utils/lazyLoader.ts
import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const LazyComponent = lazy(() => import('./HeavyComponent'));

export const OptimizedComponent = () => {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense fallback={<ComponentSkeleton />}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
};

// Memoization example
export const ExpensiveComponent = memo(({ data, onAction }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      computed: heavyComputation(item)
    }));
  }, [data]);

  const handleAction = useCallback((id) => {
    onAction(id);
  }, [onAction]);

  return (
    <div>
      {processedData.map(item => (
        <Item key={item.id} data={item} onAction={handleAction} />
      ))}
    </div>
  );
});`,
    image: "https://images.unsplash.com/photo-1571677208775-05aa9c93a18c?w=600&h=400&fit=crop"
  },
  {
    id: "testing",
    title: "Testing Strategies",
    description: "Comprehensive testing with Jest, React Testing Library, and E2E tests",
    code: `// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('custom-class');
  });
});

// E2E test example with Playwright
test('user can navigate and interact with the app', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Get Started');
  await expect(page).toHaveURL('/dashboard');
});`,
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop"
  },
  {
    id: "internationalization",
    title: "Internationalization (i18n)",
    description: "Multi-language support with react-i18next and RTL layout",
    code: `// i18n/config.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to our app",
          buttons: {
            submit: "Submit",
            cancel: "Cancel"
          }
        }
      },
      ar: {
        translation: {
          welcome: "مرحباً بكم في تطبيقنا",
          buttons: {
            submit: "إرسال",
            cancel: "إلغاء"
          }
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

// Component usage
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLanguage('ar')}>العربية</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
};`,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
  },
  {
    id: "security",
    title: "Security Best Practices",
    description: "Implement security measures including authentication and data protection",
    code: `// security/auth.ts
import { jwtVerify } from 'jose';

export const validateToken = async (token: string) => {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch {
    throw new Error('Invalid token');
  }
};

// Input sanitization
import DOMPurify from 'dompurify';

export const sanitizeInput = (input: string) => {
  return DOMPurify.sanitize(input);
};

// CSRF protection
export const csrfToken = () => {
  return crypto.randomUUID();
};

// Secure headers middleware
export const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline';"
};`,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  }
];

const AdvancedDocs = () => {
  const [activeStep, setActiveStep] = useState(advancedSteps[0].id);
  const currentStep = advancedSteps.find(step => step.id === activeStep) || advancedSteps[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Advanced Documentation
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Deep dive into advanced patterns and best practices for professional development
            </p>
            
            {/* Navigation Tabs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/documentation" className="flex items-center gap-2">
                  <ArrowDown className="ml-2 h-4 w-4 rotate-90" />
                  Basic Customization
                </Link>
              </Button>
              <Button variant="default" className="bg-primary text-primary-foreground">
                Advanced Customization
              </Button>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
            {/* Sidebar Steps */}
            <div className="lg:w-1/3 space-y-2">
              {advancedSteps.map((step, index) => (
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
                    <span className="text-slate-400 text-sm ml-4">Advanced Code Example</span>
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
                      View Live Implementation
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/documentation" className="flex items-center gap-2">
                      <ArrowDown className="h-4 w-4 rotate-90" />
                      Back to Basic Docs
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

export default AdvancedDocs;
