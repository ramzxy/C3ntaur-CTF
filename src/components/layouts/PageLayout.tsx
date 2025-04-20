import { ReactNode } from 'react';
import { Righteous } from 'next/font/google';

const righteous = Righteous({ weight: '400', subsets: ['latin'] });

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '5xl' | '6xl' | '7xl';
  showHeaderLine?: boolean;
}

export default function PageLayout({ 
  children, 
  title, 
  maxWidth = '7xl',
  showHeaderLine = true 
}: PageLayoutProps) {
  const maxWidthClasses = {
    'sm': 'max-w-sm',
    'md': 'max-w-md',
    'lg': 'max-w-lg',
    'xl': 'max-w-xl',
    '2xl': 'max-w-2xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl'
  };

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <div className={`w-full ${maxWidthClasses[maxWidth]} overflow-hidden`}>
          <div className="h-[80vh] overflow-y-auto">
            {title && (
              <>
                <h1 className={`text-5xl font-bold mb-4 float-start uppercase ${righteous.className}`}>
                  {title}
                </h1>
                {showHeaderLine && (
                  <div className="border border-gray-400 w-full h-5 flex items-center justify-center relative clear-both">
                    <div className="absolute inset-x-0 border-t-2 border-gray-400 w-full" />
                  </div>
                )}
              </>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
} 