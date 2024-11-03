import { getPostsList } from '@/libs/posts';
import { PostsGrid } from '@/components/HeroBlog/PostsGrid';

export async function BlogPosts() {
  const posts = await getPostsList();

  return (
    <div className='container mx-auto mb-16 md:mb-32 md:max-w-6xl'>
      <PostsGrid posts={posts} />
    </div>
  );
}
