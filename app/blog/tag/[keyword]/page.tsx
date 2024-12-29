import { Metadata } from 'next';
import { unstable_cache as cache } from 'next/cache';
import { getPostsList } from '@/libs/posts';
import { PostsGrid } from '@/components/HeroBlog/PostsGrid';

const getPosts = cache(getPostsList, ['posts'], {
  revalidate: 60 * 60 * 24,
});

export async function generateStaticParams() {
  const posts = await getPosts();

  const keywords = new Set<string>();

  for (const post of posts) {
    for (const keyword of post.keywords) {
      keywords.add(keyword.toLowerCase().replace(/ /g, '-'));
    }
  }

  return Array.from(keywords.values()).map((keyword) => ({
    keyword,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ keyword: string }>;
}): Promise<Metadata> {
  const { keyword } = await params;
  return {
    title: `Posts tagged with ${keyword}`,
    keywords: [keyword],
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ keyword: string }>;
}) {
  const { keyword } = await params;

  const posts = await getPosts();
  const keywordPosts = posts.filter((post) => post.keywords?.includes(keyword));

  return (
    <>
      <h1 className={'mb-12 font-lexend text-6xl font-extralight'}>
        Tag: {keyword}
      </h1>
      {keywordPosts.length ? (
        <PostsGrid posts={keywordPosts} />
      ) : (
        <p>No posts found for tag: {keyword}</p>
      )}
    </>
  );
}
