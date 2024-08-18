import React, { JSX, ReactNode } from 'react';
import { MDXComponents } from 'mdx/types';
// import { MDXProviderComponentsProp } from 'next-mdx-remote';
const H1 = ({ children, ...props }: JSX.IntrinsicElements['h1']) => (
  <h1 className='my-4 text-4xl font-bold' {...props}>
    {children}
  </h1>
);

const H2 = ({ children, ...props }: JSX.IntrinsicElements['h2']) => (
  <h2 className='my-4 text-3xl font-semibold' {...props}>
    {children}
  </h2>
);

const P = ({ children, ...props }: JSX.IntrinsicElements['p']) => (
  <p className='my-2 text-lg leading-relaxed' {...props}>
    {children}
  </p>
);

const A = ({ children, ...props }: JSX.IntrinsicElements['a']) => (
  <a className='text-blue-500 underline hover:text-blue-700' {...props}>
    {children}
  </a>
);

const UL = ({ children, ...props }: JSX.IntrinsicElements['ul']) => (
  <ul className='my-2 list-disc pl-5' {...props}>
    {children}
  </ul>
);

const OL = ({ children, ...props }: JSX.IntrinsicElements['ol']) => (
  <ol className='my-2 list-decimal pl-5' {...props}>
    {children}
  </ol>
);

const LI = ({ children, ...props }: JSX.IntrinsicElements['li']) => (
  <li className='my-1' {...props}>
    {children}
  </li>
);

const BLOCKQUOTE = ({
  children,
  ...props
}: JSX.IntrinsicElements['blockquote']) => (
  <blockquote
    className='my-4 border-l-4 border-gray-300 pl-4 italic'
    {...props}
  >
    {children}
  </blockquote>
);

const CODE = ({ children, ...props }: JSX.IntrinsicElements['code']) => (
  <code className='rounded bg-gray-100 p-1 font-mono text-sm' {...props}>
    {children}
  </code>
);

const PRE = ({ children, ...props }: JSX.IntrinsicElements['pre']) => (
  <pre
    className='overflow-x-auto rounded bg-gray-900 p-4 text-white'
    {...props}
  >
    {children}
  </pre>
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: H1,
    h2: H2,
    p: P,
    a: A,
    ul: UL,
    ol: OL,
    li: LI,
    blockquote: BLOCKQUOTE,
    code: CODE,
    pre: PRE,
    ...components,
  };
}
