import ArticleLayout from '@/components/Article/ArticleLayout';
import { Tag } from '@/components/HeroBlog/Tag';
import MarkdownDisplay from '@/components/ui/MarkdownDispaly';
import { getPostBySlug, PostMetadata } from '@/libs/posts';
import fs from 'fs';
import matter from 'gray-matter';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import path from 'path';

export async function generateStaticParams() {
  const posts = fs.readdirSync('blog');

  return posts.map((post) => ({
    slug: post.replace(/\/blog\//, '').replace(/\.mdx$/, ''),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join('blog', `${slug}.mdx`);

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
      url: `https://xisra.com/blog/${slug}`,
      type: 'article',
      // authors: [post.author],
      tags: post.keywords,
      publishedTime: post.createdAt,
      modifiedTime: post.createdAt,
      images: [
        {
          url:
            process.env.NODE_ENV === 'production'
              ? `https://xisra.com${post.imageUrl}`
              : post.imageUrl,
          width: 1280,
          height: 720,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <section>
      <Link
        href={'/blog'}
        aria-label='Back to blog'
        className='mb-4 block text-gray-400 transition-colors duration-200 hover:text-gray-600'
      >
        Back to blog
      </Link>
      <Image
        src={post.data.imageUrl}
        width={1280}
        height={720}
        alt={post.data.slug}
        aria-label={post.data.title}
        className={'mb-10 h-80 w-auto rounded-lg'}
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
        <MarkdownDisplay>{post.content}</MarkdownDisplay>
      </ArticleLayout>
    </section>
  );
}
