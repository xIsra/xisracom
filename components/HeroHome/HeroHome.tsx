import Image from 'next/image';
import me from './me-cut-transparent-small.png';
import SocialLinksList from '@/components/ui/SocialLinksList';
// import FloatingIcons from '@/components/HeroHome/FloatingIcons';
import { lazy } from 'react';

const FloatingIcons = lazy(() => import('@/components/HeroHome/FloatingIcons'));

export function HeroHome() {
  return (
    <section id='home' className='relative min-h-screen overflow-hidden'>
      <FloatingIcons />
      <div className='mx-auto flex min-h-full max-w-7xl flex-col justify-center align-middle'>
        <div className='flex flex-col flex-nowrap gap-16 px-8 pb-12 pt-24 md:pb-24 md:pt-36 lg:flex-row-reverse lg:pt-60 relative'>
          <div className='lg:py-0 flex justify-center md:justify-start md:flex-none'>
            <div className='h-64 w-64 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-secondary-400 to-primary-400 shadow-lg md:h-96 md:w-96'>
              <Image src={me} alt='avatar' className={''} loading='lazy' />
            </div>
          </div>
          <div className='lg:py-0'>
            <h1 className='mb-2 font-lexend text-6xl font-extralight md:text-7xl lg:text-9xl'>
              <span className='text-3xl text-red-400 lg:text-4xl'>Hi! </span>
              I&apos;m Isra
            </h1>
            <p className='mb-8 max-w-4xl font-normal text-gray-400 md:text-2xl'>
              Im a full stack developer with a passion for creation. I am always
              looking to learn new things and improve my skills.
            </p>
            <span className='mb-4 mt-4 block text-xl font-extralight text-red-400'>
              Feel free to reach out to me. I would love to hear from you!
            </span>
            {/* <div className='relative before:absolute before:inset-0 before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]'> */}
              <div className='mx-auto flex max-w-md gap-4 sm:flex sm:max-w-none sm:justify-start'>
                <a
                  className='btn w-full bg-red-50 text-xl font-extralight text-gray-800 shadow hover:bg-red-100 sm:w-auto'
                  href='#portfolio'
                >
                  Check my stuff
                </a>
                <a
                  className='btn group w-full bg-[length:100%_100%] bg-[bottom] text-xl font-extralight text-red-400 shadow-none hover:bg-red-400 hover:bg-[length:100%_150%] hover:text-gray-100 hover:shadow-sm sm:mb-0 sm:w-auto'
                  href='#contact'
                >
                  Contact me
                  <span className='ml-1 tracking-normal transition-transform group-hover:translate-x-0.5'>
                    -&gt;
                  </span>
                </a>
              </div>
            {/* </div> */}

            <div className='mt-8 flex gap-4'>
              <SocialLinksList />
            </div>
          </div>

          {/* Hero image */}
        </div>
      </div>
    </section>
  );
}
