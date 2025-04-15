'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Righteous } from 'next/font/google';
import { MarkdownComponents } from '@/components/MarkdownComponents';

const monoton = Righteous({weight: '400'});

interface SiteConfig {
  siteRules: string;
}

export default function RulesPage() {
  const [rules, setRules] = useState<string>('Loading...');

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const response = await fetch('/api/rules');
        if (!response.ok) {
          throw new Error('Failed to fetch rules');
        }
        const data = await response.json();
        setRules(data.siteRules);
      } catch (error) {
        console.error('Error fetching rules:', error);
        setRules('Error loading rules. Please try again later.');
      }
    };

    fetchRules();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="w-full max-w-5xl overflow-hidden">
          <div className="h-[80vh] overflow-y-auto">
            <h1 className={`text-5xl font-bold mb-4 float-start uppercase ${monoton.className}`}>Competition Rules</h1>
            <div className="border border-gray-400 w-full h-5 flex items-center justify-center relative clear-both">
              <div className="absolute inset-x-0 border-t-2 border-gray-400 w-full"></div>
            </div>
            <div className="prose prose-invert max-w-none mb-6 min-h-52">
              <ReactMarkdown
                components={MarkdownComponents}
                remarkPlugins={[remarkGfm]}
                skipHtml={false}
              >
                {rules}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
