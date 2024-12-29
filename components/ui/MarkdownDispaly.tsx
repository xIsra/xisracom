import { useMDXComponents } from '@/mdx-components';
import { MDXRemote } from 'next-mdx-remote/rsc';

export default function MarkdownDisplay({ children }: { children: string }) {
  const components = useMDXComponents({});

  return <MDXRemote source={children} components={components} />;
}
