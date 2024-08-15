import React, {JSX, ReactNode} from 'react';
import {MDXComponents} from "mdx/types";
// import { MDXProviderComponentsProp } from 'next-mdx-remote';
const H1 = ({ children, ...props }: JSX.IntrinsicElements['h1']) => (
    <h1 className="text-4xl font-bold my-4" {...props}>
        {children}
    </h1>
);

const H2 = ({ children, ...props }: JSX.IntrinsicElements['h2']) => (
    <h2 className="text-3xl font-semibold my-4" {...props}>
        {children}
    </h2>
);

const P = ({ children, ...props }: JSX.IntrinsicElements['p']) => (
    <p className="text-lg my-2 leading-relaxed" {...props}>
        {children}
    </p>
);

const A = ({ children, ...props }: JSX.IntrinsicElements['a']) => (
    <a className="text-blue-500 underline hover:text-blue-700" {...props}>
        {children}
    </a>
);

const UL = ({ children, ...props }: JSX.IntrinsicElements['ul']) => (
    <ul className="list-disc pl-5 my-2" {...props}>
        {children}
    </ul>
);

const OL = ({ children, ...props }: JSX.IntrinsicElements['ol']) => (
    <ol className="list-decimal pl-5 my-2" {...props}>
        {children}
    </ol>
);

const LI = ({ children, ...props }: JSX.IntrinsicElements['li']) => (
    <li className="my-1" {...props}>
        {children}
    </li>
);

const BLOCKQUOTE = ({ children, ...props }: JSX.IntrinsicElements['blockquote']) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4" {...props}>
        {children}
    </blockquote>
);

const CODE = ({ children, ...props }: JSX.IntrinsicElements['code']) => (
    <code className="bg-gray-100 rounded p-1 font-mono text-sm" {...props}>
        {children}
    </code>
);

const PRE = ({ children, ...props }: JSX.IntrinsicElements['pre']) => (
    <pre className="bg-gray-900 text-white rounded p-4 overflow-x-auto" {...props}>
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
};
