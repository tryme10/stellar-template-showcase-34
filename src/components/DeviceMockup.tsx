
import { useState, useEffect } from "react";

interface DeviceMockupProps {
  url: string;
  device: 'desktop' | 'mobile';
  scale?: number;
}

const DeviceMockup = ({ url, device, scale = 1 }: DeviceMockupProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (device === 'desktop') {
    return (
      <div className="relative animate-fade-in">
        {/* Desktop Frame */}
        <div className="device-mockup rounded-2xl p-4 shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
          {/* Screen Bezel */}
          <div className="bg-black rounded-lg p-2 shadow-inner">
            {/* Screen */}
            <div className="bg-white rounded-md overflow-hidden aspect-video relative">
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                  <div className="text-gray-400">Loading...</div>
                </div>
              )}
              <iframe
                src={url}
                className={`w-full h-full border-0 transition-opacity duration-500 ${
                  isLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  transform: `scale(${scale})`,
                  transformOrigin: 'top left',
                  width: `${100 / scale}%`,
                  height: `${100 / scale}%`
                }}
                onLoad={() => setIsLoaded(true)}
                title="Desktop Preview"
              />
            </div>
          </div>
          {/* Stand Base */}
          <div className="mt-4 mx-auto w-32 h-6 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full shadow-lg"></div>
          <div className="mt-2 mx-auto w-48 h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative animate-fade-in">
      {/* Mobile Frame */}
      <div className="device-mockup rounded-3xl p-3 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 max-w-xs mx-auto">
        {/* Screen */}
        <div className="bg-black rounded-2xl p-1">
          <div className="bg-white rounded-xl overflow-hidden relative" style={{ aspectRatio: '9/19.5' }}>
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-black rounded-b-lg z-10"></div>
            
            {!isLoaded && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                <div className="text-gray-400 text-sm">Loading...</div>
              </div>
            )}
            
            <iframe
              src={url}
              className={`w-full h-full border-0 transition-opacity duration-500 ${
                isLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsLoaded(true)}
              title="Mobile Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceMockup;
