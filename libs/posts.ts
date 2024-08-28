import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export type PostMetadata = {
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  videoUrl: string;
  imageUrl: string;
  createdAt: string;
  status?: 'DRAFT' | 'PUBLISHED';
};

export async function getPostsList() {
  const posts = fs.readdirSync('blog');

  return posts
    .map((post) => {
      const slug = post.replace(/\.mdx$/, '');
      return getPostBySlug(slug)?.data;
    })
    .filter((post): post is PostMetadata => post !== null)
    .filter((post) => post?.status === 'PUBLISHED');
}

export function getPostBySlug(slug: string): {
  content: string;
  data: PostMetadata;
} | null {
  const filePath = path.join('blog', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const file = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(file);
  return {
    content,
    data: {
      title: data.title,
      slug,
      status: data.status,
      createdAt: data.createdAt,
      description: data.description,
      keywords: data.keywords,
      imageUrl: data.imageUrl,
      videoUrl: data.videoUrl,
    },
  };
}
