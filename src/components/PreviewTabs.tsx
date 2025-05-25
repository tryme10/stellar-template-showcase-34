
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TabContent {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const tabsData: TabContent[] = [
  {
    id: "homepage",
    title: "Homepage Design",
    description: "Modern and clean homepage layout with hero sections and call-to-action buttons",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "components",
    title: "Components Library",
    description: "Rich set of reusable UI components built with React and TailwindCSS",
    images: [
      "https://images.unsplash.com/photo-1571677208775-05aa9c93a18c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "responsive",
    title: "Responsive Design",
    description: "Fully responsive layouts that work perfectly on all devices and screen sizes",
    images: [
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "forms",
    title: "Forms & Inputs",
    description: "Beautiful and functional form components with validation and user feedback",
    images: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "navigation",
    title: "Navigation",
    description: "Intuitive navigation patterns including headers, sidebars, and breadcrumbs",
    images: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
    ]
  },
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Professional dashboard layouts with charts, metrics, and data visualization",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
    ]
  }
];

const PreviewTabs = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const activeContent = tabsData.find(tab => tab.id === activeTab) || tabsData[0];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Explore Template
            <span className="text-gradient"> Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the comprehensive features and capabilities of our modern React template
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/3 space-y-2">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-card shadow-lg border-l-4 border-primary'
                    : 'bg-white/50 dark:bg-card/50 hover:bg-white dark:hover:bg-card hover:shadow-md'
                }`}
              >
                <h3 className={`font-semibold mb-2 transition-colors ${
                  activeTab === tab.id ? 'text-primary' : 'text-foreground'
                }`}>
                  {tab.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tab.description}
                </p>
              </button>
            ))}
          </div>

          {/* Main Content Panel */}
          <div className="lg:w-2/3">
            <div className="bg-white dark:bg-card rounded-2xl p-8 shadow-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {activeContent.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {activeContent.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {activeContent.images.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-video animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img
                      src={image}
                      alt={`${activeContent.title} preview ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-luxury hover:opacity-90 text-white">
                View More Examples
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewTabs;
