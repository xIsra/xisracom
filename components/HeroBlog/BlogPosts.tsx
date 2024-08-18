import { getPostsList } from '@/libs/posts';
import { PostsGrid } from '@/components/HeroBlog/PostsGrid';

export async function BlogPosts() {
  const posts = await getPostsList();

  return (
    <div className='container mx-auto mb-32 max-w-6xl'>
      <PostsGrid posts={posts} />
    </div>
  );
}
