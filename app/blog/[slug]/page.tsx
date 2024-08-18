import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

import MdxLayout from '@/app/blog/layout';
import { useMDXComponents } from '@/mdx-components';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPostBySlug } from '@/libs/posts';
import React from 'react';

export async function generateStaticParams() {
  const posts = fs.readdirSync('blog');

  return posts.map((post) => ({
    slug: post.replace(/\/blog\//, '').replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const filePath = path.join('blog', `${params.slug}.mdx`);

  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(markdownWithMeta);

  return {
    title: data.title,
    keywords: data.keywords,
  };
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const post = getPostBySlug(slug);

  const components = useMDXComponents({});

  if (!post) {
    return notFound();
  }

  return (
    <MdxLayout>
      <Image
        src={post.data.imageUrl}
        width={1280}
        height={720}
        alt={post.data.slug}
        className={'h-80 w-auto rounded-lg'}
      />
      <MDXRemote source={post.content} components={components} />
    </MdxLayout>
  );
}
