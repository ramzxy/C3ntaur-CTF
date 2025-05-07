'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MarkdownComponents } from '@/components/MarkdownComponents';
import PageLayout from '@/components/layouts/PageLayout';
import { fetchRules } from '@/utils/api';

export default function RulesPage() {
  const [rules, setRules] = useState<string>('Loading...');

  useEffect(() => {
    const loadRules = async () => {
      try {
        const data = await fetchRules();
        setRules(data.siteRules);
      } catch (error) {
        console.error('Error fetching rules:', error);
        setRules('Error loading rules. Please try again later.');
      }
    };

    loadRules();
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
