import { BlogPosts } from '@/components/HeroBlog/BlogPosts';
import { Tags } from '@/components/HeroBlog/Tags';

export function HeroBlog() {
  return (
    <section id='blog' className='relative min-h-screen px-2 sm:md:px-4 md:px-8'>
      <div className='mx-auto flex h-full flex-col justify-center'>
        {/* Hero content */}
        <div className='py-12 md:py-32'>
          {/* Section header */}
          <div className='pb-12 text-center'>
            <h2 className='mb-6 font-lexend text-6xl font-extralight'>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Latest posts
            </h2>
            <BlogPosts />
            <h6 className='mb-6 font-lexend text-2xl font-extralight'>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Tags
            </h6>
            <Tags />
          </div>
        </div>
      </div>
    </section>
  );
}
