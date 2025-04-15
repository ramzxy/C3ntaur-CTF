import { ReactNode, ComponentPropsWithoutRef } from 'react';

type MarkdownComponentProps<T extends keyof HTMLElementTagNameMap> = ComponentPropsWithoutRef<T> & {
  children?: ReactNode;
};

export const MarkdownComponents = {
  h1: ({ children, ...props }: MarkdownComponentProps<'h1'>) => <h1 className="text-4xl font-bold my-6" {...props}>{children}</h1>,
  h2: ({ children, ...props }: MarkdownComponentProps<'h2'>) => <h2 className="text-3xl font-bold my-5" {...props}>{children}</h2>,
  h3: ({ children, ...props }: MarkdownComponentProps<'h3'>) => <h3 className="text-2xl font-bold my-4" {...props}>{children}</h3>,
  h4: ({ children, ...props }: MarkdownComponentProps<'h4'>) => <h4 className="text-xl font-bold my-3" {...props}>{children}</h4>,
  h5: ({ children, ...props }: MarkdownComponentProps<'h5'>) => <h5 className="text-xl font-bold my-3" {...props}>{children}</h5>,
  h6: ({ children, ...props }: MarkdownComponentProps<'h6'>) => <h6 className="text-lg font-bold my-2" {...props}>{children}</h6>,
  p: ({ children, ...props }: MarkdownComponentProps<'p'>) => <p className="my-4" {...props}>{children}</p>,
  ul: ({ children, ...props }: MarkdownComponentProps<'ul'>) => <ul className="list-disc list-inside my-4" {...props}>{children}</ul>,
  ol: ({ children, ...props }: MarkdownComponentProps<'ol'>) => <ol className="list-decimal list-inside my-4" {...props}>{children}</ol>,
  li: ({ children, ...props }: MarkdownComponentProps<'li'>) => <li className="my-1" {...props}>{children}</li>,
  code: ({ children, ...props }: MarkdownComponentProps<'code'>) => <code className="bg-gray-800 px-2 py-1 rounded" {...props}>{children}</code>,
  pre: ({ children, ...props }: MarkdownComponentProps<'pre'>) => <pre className="bg-gray-800 p-4 rounded my-4 overflow-x-auto" {...props}>{children}</pre>,
  blockquote: ({ children, ...props }: MarkdownComponentProps<'blockquote'>) => <blockquote className="border-l-4 border-white pl-4 my-4 italic" {...props}>{children}</blockquote>,
  a: ({ children, ...props }: MarkdownComponentProps<'a'>) => <a className="text-blue-400 hover:underline" {...props}>{children}</a>,
  strong: ({ children, ...props }: MarkdownComponentProps<'strong'>) => <strong className="font-bold" {...props}>{children}</strong>,
  em: ({ children, ...props }: MarkdownComponentProps<'em'>) => <em className="italic" {...props}>{children}</em>,
};
