import React from 'react';
import { Metadata } from 'next';
import { BlogPosts } from '@/components/HeroBlog/BlogPosts';
import { Tags } from '@/components/HeroBlog/Tags';
import { getPostsList } from '@/libs/posts';
import { PostsGrid } from '@/components/HeroBlog/PostsGrid';

export const metadata: Metadata = {};

export default async function BlogPage() {
  const posts = await getPostsList();

  return (
    <>
      <div className='container mx-auto mt-16 max-w-7xl p-3'>
        <h1 className='mb-6 font-lexend text-6xl font-extralight'>Blog</h1>
        <PostsGrid posts={posts} />
        <h2 className='mb-6 mt-12 font-lexend text-3xl font-extralight'>
          Tags
        </h2>
        <Tags />
      </div>
    </>
  );
}
