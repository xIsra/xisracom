import Image from 'next/image';
import { YouTubePlaylist } from '@/components/HeroPortfolio/YouTubePlaylist';
import Link from 'next/link';
import channelCover from './channel-cover.png';
import navigation from './navigation.jpg';

export function HeroPortfolio() {
  return (
    <section id='portfolio' className='relative min-h-screen bg-red-400'>
      <div className='mx-auto flex h-full flex-col justify-center'>
        {/* Hero content */}
        <div className='py-24 md:py-32'>
          {/* Section header */}
          <div className='px-4 pb-12 text-center md:pb-16'>
            <h2
              data-aos='fade-down'
              data-aos-delay={50}
              className='mb-6 font-lexend text-6xl font-extralight'
            >
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Here's my stuff
            </h2>
            <p
              data-aos='fade-down'
              data-aos-delay={150}
              className='bg-gradient-to-bl from-primary-200 to-secondary-100 bg-clip-text font-bold text-transparent'
            >
              {/* eslint-disable-next-line react/no-unescaped-entities */}I have
              a lot of projects that I've worked on. Here are some of them.
            </p>
            <div className='container mx-auto max-w-6xl'>
              <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                <div
                  className='overflow-hidden rounded-lg bg-gray-900 shadow-lg'
                  data-aos='fade-down'
                  data-aos-delay={300}
                >
                  <Image
                    src={navigation}
                    alt='action-map'
                    width={600}
                    height={400}
                    className='h-80 w-full object-cover'
                  />
                  <div className='p-4'>
                    <h3 className='text-xl font-semibold'>Action Map</h3>
                    <p className='text-gray-700'>To be published soon!</p>
                  </div>
                </div>
                {[1, 2].map((v) => (
                  <div
                    key={v}
                    className='overflow-hidden rounded-lg bg-gray-900 shadow-lg'
                    data-aos='fade-down'
                    data-aos-delay={300 + v * 300}
                  >
                    <Image
                      src={'https://placehold.co/600x400?text=?'}
                      alt={'tbd' + v}
                      width={600}
                      height={400}
                      className='h-80 w-full object-cover'
                    />
                    <div className='p-4'>
                      <h3 className='text-xl font-semibold'>Comming soon!</h3>
                      <p className='text-gray-700'>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm working on this project right now. Stay tuned for
                        updates!
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='relative pb-12 text-center'>
            <div
              data-aos={'fade'}
              data-aos-delay={50}
              data-aos-duration={1000}
              className='absolute inset-0 z-0 bg-cover bg-center'
            >
              <Image
                src={channelCover}
                alt='portfolio'
                layout='fill'
                className='scale-115 transform object-cover opacity-5 blur-[4px] filter'
                loading='lazy'
              />
            </div>

            <div className='relative z-10 py-24 lg:py-36'>
              <h2
                data-aos='fade-down'
                data-aos-delay={50}
                className='mb-6 font-lexend text-6xl font-extralight'
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                My Youtube channel
              </h2>
              <p
                data-aos='fade-down'
                data-aos-delay={200}
                className='bg-gradient-to-bl from-primary-200 to-secondary-100 bg-clip-text font-bold text-transparent'
              >
                I have a YouTube channel where I post my adventures.{' '}
                <Link
                  href={'http://youtube.com/@israkouper'}
                  className={'transition-colors hover:text-gray-900'}
                >
                  Check it out!
                </Link>
              </p>
              <YouTubePlaylist />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
