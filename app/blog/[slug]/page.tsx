import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '@/mdx-components';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPostBySlug, PostMetadata } from '@/libs/posts';
import React from 'react';
import { Tag } from '@/components/HeroBlog/Tag';
import ArticleLayout from '@/components/Article/ArticleLayout';

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

  const post = data as PostMetadata;

  return {
    title: data.title,
    description: post.description,
    keywords: data.keywords,
    openGraph: {
      title: data.title,
      description: post.description,
      url: `https://xisra.com/blog/${params.slug}`,
      type: 'article',
      // authors: [post.author],
      tags: post.keywords,
      publishedTime: post.createdAt,
      modifiedTime: post.createdAt,
      images: [
        {
          url: process.env.NODE_ENV === 'production'? `https://xisra.com${post.imageUrl}`: post.imageUrl,
          width: 1280,
          height: 720,
          alt: post.title,
        },
      ],
    }
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
    <>
      <Image
        src={post.data.imageUrl}
        width={1280}
        height={720}
        alt={post.data.slug}
        className={'mb-10 mt-24 h-80 w-auto rounded-lg'}
      />

      <h1 className={'mb-2 text-5xl font-extralight'}>{post.data.title}</h1>
      <h6
        className={'mb-2 font-bold'}
      >{`${new Date(post.data.createdAt).toDateString()}`}</h6>

      <div className='mb-12 flex w-full flex-wrap gap-1'>
        {post.data.keywords.map((keyword, index) => (
          <Tag key={index} keyword={keyword} />
        ))}
      </div>
      <ArticleLayout>
        <MDXRemote source={post.content} components={components} />
      </ArticleLayout>
    </>
  );
}
