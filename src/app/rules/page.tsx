'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MarkdownComponents } from '@/components/MarkdownComponents';
import PageLayout from '@/components/layouts/PageLayout';


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
    <PageLayout title="COMPETITION RULES" maxWidth="6xl">
      <ReactMarkdown
        components={MarkdownComponents}
        remarkPlugins={[remarkGfm]}
        skipHtml={false}
      >
        {rules}
      </ReactMarkdown>
    </PageLayout>
  );
}
