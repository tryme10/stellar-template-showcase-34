
import { useState, useEffect } from "react";
import { RefreshCw } from "lucide-react";

interface DeviceMockupProps {
  url: string;
  device: 'desktop' | 'mobile';
  scale?: number;
  width?: number;
  height?: number;
}

const DeviceMockup = ({ 
  url, 
  device, 
  scale,
  width,
  height
}: DeviceMockupProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, [key]);

  const handleRefresh = () => {
    setIsLoaded(false);
    setKey(prev => prev + 1);
  };

  if (device === 'desktop') {
    // Desktop original resolution
    const desktopWidth = width || 1920;
    const desktopHeight = height || 1080;
    
    // Much smaller display sizes
    const isLargeScreen = window.innerWidth >= 1024;
    const targetWidth = isLargeScreen ? 400 : 200; // Much smaller!
    const calculatedScale = targetWidth / desktopWidth;
    const finalScale = scale || calculatedScale;
    
    const containerWidth = desktopWidth * finalScale;
    const containerHeight = desktopHeight * finalScale;

    return (
      <div className="relative animate-fade-in">
        {/* Desktop Frame */}
        <div 
          className="bg-gradient-to-b from-gray-200 to-gray-300 rounded-xl p-2 shadow-lg"
          style={{ width: containerWidth + 16, height: containerHeight + 40 }}
        >
          {/* Screen Header Bar */}
          <div className="bg-gray-800 rounded-t-md px-2 py-1 flex items-center justify-between mb-0.5">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
            </div>
            <div className="text-white text-xs font-medium">Desktop</div>
            <button
              onClick={handleRefresh}
              className="text-white hover:text-gray-300 transition-colors p-0.5 rounded"
              title="Refresh"
            >
              <RefreshCw className="w-2 h-2" />
            </button>
          </div>

          {/* Screen */}
          <div 
            className="bg-black rounded-b-md overflow-hidden relative"
            style={{ width: containerWidth, height: containerHeight }}
          >
            {!isLoaded && (
              <div className="absolute inset-0 bg-white flex items-center justify-center z-10">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <div className="text-gray-500 text-xs">Loading...</div>
                </div>
              </div>
            )}
            <iframe
              key={key}
              src={url}
              className={`border-0 transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                width: desktopWidth,
                height: desktopHeight,
                transform: `scale(${finalScale})`,
                transformOrigin: 'top left',
              }}
              onLoad={() => setIsLoaded(true)}
              title="Desktop Preview"
            />
          </div>
          
          {/* Stand Base */}
          <div className="mt-1 mx-auto w-12 h-1 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full shadow-sm"></div>
          <div className="mt-0.5 mx-auto w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
        </div>
      </div>
    );
  }

  // Mobile Device
  const mobileWidth = width || 375;
  const mobileHeight = height || 812;
  
  // Much smaller mobile sizes
  const isLargeScreen = window.innerWidth >= 1024;
  const targetWidth = isLargeScreen ? 120 : 70; // Much smaller!
  const calculatedScale = targetWidth / mobileWidth;
  const finalScale = scale || calculatedScale;
  
  const containerWidth = mobileWidth * finalScale;
  const containerHeight = mobileHeight * finalScale;

  return (
    <div className="relative animate-fade-in">
      {/* Mobile Frame */}
      <div 
        className="bg-gradient-to-b from-gray-900 to-black rounded-2xl p-1.5 shadow-lg"
        style={{ width: containerWidth + 12, height: containerHeight + 24 }}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between mb-1 px-0.5">
          <div className="text-white text-xs font-medium">Mobile</div>
          <button
            onClick={handleRefresh}
            className="text-white hover:text-gray-300 transition-colors p-0.5 rounded"
            title="Refresh"
          >
            <RefreshCw className="w-2 h-2" />
          </button>
        </div>

        {/* Screen */}
        <div 
          className="bg-black rounded-xl overflow-hidden relative"
          style={{ width: containerWidth, height: containerHeight }}
        >
          {!isLoaded && (
            <div className="absolute inset-0 bg-white flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-1">
                <div className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <div className="text-gray-500 text-xs">Loading...</div>
              </div>
            </div>
          )}
          
          <iframe
            key={key}
            src={url}
            className={`border-0 transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              width: mobileWidth,
              height: mobileHeight,
              transform: `scale(${finalScale})`,
              transformOrigin: 'top left',
            }}
            onLoad={() => setIsLoaded(true)}
            title="Mobile Preview"
          />
        </div>

        {/* Home Indicator */}
        <div className="mt-1 mx-auto w-8 h-0.5 bg-white rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

export default DeviceMockup;
