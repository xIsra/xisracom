import Image from 'next/image';
import me from './me-cut-transparent-small.png';
import SocialLinksList from '@/components/ui/SocialLinksList';
import FloatingIcons from '@/components/HeroHome/FloatingIcons';

export function HeroHome() {
  return (
    <section id='home' className='relative min-h-screen overflow-hidden'>
      <FloatingIcons />
      <div className='mx-auto flex min-h-full max-w-7xl flex-col justify-center'>
        {/* Hero content */}
        <div className='px-8 pb-12 pt-24 md:pb-24 md:pt-36'>
          {/* Section header */}
          <div className='pb-12 text-center md:pb-16'>
            {/* avatar image*/}
            <div
              data-aos='zoom-y-out'
              data-aos-delay={200}
              className='mx-auto mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-secondary-400 to-primary-400 shadow-lg sm:h-64 sm:w-64 md:h-96 md:w-96'
            >
              <Image
                data-aos='zoom-y-out'
                data-aos-delay={300}
                src={me}
                alt='avatar'
                className={''}
              />
            </div>
            <h1
              className='mb-2 font-lexend text-5xl font-extralight md:text-6xl'
              data-aos='zoom-y-out'
              data-aos-delay={150}
            >
              Hi i&apos;m Isra!
            </h1>
            <div className='mx-auto max-w-3xl'>
              <p
                className='text-md mb-8 text-gray-400 md:text-lg'
                data-aos='zoom-y-out'
                data-aos-delay={300}
              >
                Im a full stack developer with a passion for creation. I am
                always looking to learn new things and improve my skills.
                <br />
                <span className='mt-4 block text-red-400'>
                  Feel free to reach out to me. I would love to hear from you!
                </span>
              </p>
              <div className='relative before:absolute before:inset-0 before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]'>
                <div
                  className='mx-auto flex max-w-md gap-4 sm:flex sm:max-w-none sm:justify-center'
                  data-aos='zoom-y-out'
                  data-aos-delay={450}
                >
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
              </div>
              <div className='mt-8 flex justify-center gap-4'>
                <SocialLinksList />
              </div>
            </div>
          </div>
          {/* Hero image */}
        </div>
      </div>
    </section>
  );
}
