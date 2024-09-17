import { PostMetadata } from '@/libs/posts';
import Image from 'next/image';
import {
  BiChevronLeft,
  BiChevronRight,
} from 'react-icons/bi';

export function PostsGrid({ posts }: { posts: PostMetadata[] }) {
  return (
    <div className='relative mt-8 grid grid-cols-1 justify-start gap-4 sm:grid-cols-3'>
      {posts.map((post, index) => (
        <div
          key={post.title}
          data-aos='zoom-y-out'
          data-aos-delay={300}
          data-aos-easing='ease-in-out'
          className={`overflow-hidden rounded-lg bg-gray-800 p-2 shadow-lg transition-transform hover:scale-105 hover:transform`}
        >
          <a href={`/blog/${post.slug}`}>
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={600}
              height={400}
              className='h-80 w-full rounded-lg object-cover'
              loading='lazy'
            />
          </a>
          <div className='p-4'>
            <h3 className='text-start text-xl font-extrabold'>
              <a href={`/blog/${post.slug}`}>{post.title}</a>
            </h3>
            <p className='mb-6 text-start text-gray-400'>{post.description}</p>
            <div className={'flex flex-wrap gap-1'}>
              {post.keywords?.slice(0, 3).map((keyword) => (
                <a
                  key={keyword}
                  href={`/blog/tag/${keyword}`}
                  className={'btn btn-sm bg-gray-900 hover:bg-red-400'}
                >
                  {keyword}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
      <BiChevronLeft
        className={
          'absolute -left-28 top-[50%] rounded-full text-5xl transition-all hover:bg-red-400'
        }
      />
      <BiChevronRight
        className={
          'absolute -right-28 top-[50%] rounded-full text-5xl transition-all hover:bg-red-400'
        }
      />
    </div>
  );
}
