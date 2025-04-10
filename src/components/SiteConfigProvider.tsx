'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface SiteConfig {
  id: string;
  siteTitle: string;
  headerText: string;
}

interface SiteConfigContextType {
  config: SiteConfig | null;
  isLoading: boolean;
}

const SiteConfigContext = createContext<SiteConfigContextType>({
  config: null,
  isLoading: true,
});

export function SiteConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/config');
        const data = await response.json();
        setConfig(data);
      } catch (error) {
        console.error('Error fetching site config:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchConfig();
  }, []);

  return (
    <SiteConfigContext.Provider value={{ config, isLoading }}>
      {children}
    </SiteConfigContext.Provider>
  );
}

export function useSiteConfig() {
  return useContext(SiteConfigContext);
} 