import { unstable_cache as cache } from 'next/cache';
import { getPostsList } from '@/libs/posts';
import { Tag } from '@/components/HeroBlog/Tag';

const getPosts = cache(getPostsList, ['posts'], {
  revalidate: 60 * 60 * 24,
});

export async function Tags() {
  const posts = await getPosts();

  const keywords = new Set<string>();

  for (const post of posts) {
    for (const keyword of post.keywords) {
      keywords.add(keyword.toLowerCase().replace(/ /g, '-'));
    }
  }

  const keywordsList = Array.from(keywords);

  return (
    <div className='flex flex-wrap justify-center gap-2'>
      {keywordsList.map((keyword) => (
        <Tag key={keyword} keyword={keyword} />
      ))}
    </div>
  );
}
