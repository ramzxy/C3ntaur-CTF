import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

interface SiteConfig {
  key: string;
  value: string;
}

export default function SiteConfigurationTab() {
  const [configs, setConfigs] = useState<SiteConfig[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const configKeys = [
    'site_title',
    'homepage_title',
    'homepage_subtitle',
    'rules_text',
  ];

  useEffect(() => {
    fetchConfigs();
  }, []);

  const fetchConfigs = async () => {
    try {
      const res = await fetch('/api/config');
      const data = await res.json();
      setConfigs(data);
      setFormData(
        data.reduce((acc: { [x: string]: any; }, config: { key: string | number; value: any; }) => {
          acc[config.key] = config.value;
          return acc;
        }, {} as Record<string, string>)
      );
      setIsLoading(false);
    } catch (error) {
      toast.error('Failed to fetch configurations');
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updates = Object.entries(formData).map(async ([key, value]) => {
        const response = await fetch('/api/config', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ key, value }),
        });
        
        if (!response.ok) throw new Error(`Failed to update ${key}`);
        return response.json();
      });
      
      await Promise.all(updates);
      toast.success('All configurations updated successfully');
      fetchConfigs();
    } catch (error) {
      toast.error('Failed to update some configurations');
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  if (isLoading) {
    return <div className="p-6">Loading configuration...</div>;
  }

  return (
    <div className="space-y-8">
      <div className="p-6 bg-gray-800/50 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Site Configuration</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {configKeys.map((key) => (
            <div key={key} className="space-y-2">
              <label htmlFor={key} className="block text-sm font-medium text-gray-300">
                {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </label>
              {key.includes('text') ? (
                <textarea
                  id={key}
                  value={formData[key] || ''}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  rows={4}
                  className="mt-1 block w-full bg-gray-700 border-gray-600 rounded text-white focus:border-blue-500 focus:ring-blue-500 p-2"
                />
              ) : (
                <input
                  type="text"
                  id={key}
                  value={formData[key] || ''}
                  onChange={(e) => handleInputChange(key, e.target.value)}
                  className="mt-1 block w-full bg-gray-700 border-gray-600 rounded text-white focus:border-blue-500 focus:ring-blue-500 p-2"
                />
              )}
              <p className="mt-1 text-sm text-gray-400">
                {getConfigDescription(key)}
              </p>
            </div>
          ))}
          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Save All Configuration
          </button>
        </form>
      </div>
    </div>
  );
}

function getConfigDescription(key: string): string {
  const descriptions: Record<string, string> = {
    site_title: 'Appears in browser tab and main navigation',
    homepage_title: 'Main title displayed on the homepage',
    homepage_subtitle: 'Subtitle shown below the main title',
    rules_text: 'Competition rules and guidelines (supports Markdown)'
  };
  return descriptions[key] || '';
}
