import { getPostsList } from '@/libs/posts';
import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostsList();

  return [
    {
      url: 'https://xisra.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://xisra.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://xisra.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://xisra.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },

    // @ts-ignore
    ...posts.map((post) => ({
      url: `https://xisra.com/blog/${post.slug}`,
      lastModified: new Date(post.createdAt),
      changeFrequency: 'monthly',
      priority: 0.5,
    })),
  ];
}
