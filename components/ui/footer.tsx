import Logo from './logo';
import SocialLinksList from '@/components/ui/SocialLinksList';

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className='mx-auto mb-16 max-w-7xl px-4 sm:px-6'>
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? 'border-t [border-image:linear-gradient(to_right,transparent,theme(colors.gray.900),transparent)1]' : ''}`}
        >
          {/* 1st block */}
          <div className='space-y-2 sm:col-span-12 md:col-span-6'>
            <div>
              <Logo type={'footer'} />
            </div>
            <div className='text-sm text-gray-600'>
              &copy; xisra.com - All rights reserved.
            </div>
          </div>

          {/* 2nd block */}
          {/*<div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">*/}
          {/*  <h3 className="text-sm font-medium">Product</h3>*/}
          {/*  <ul className="space-y-2 text-sm">*/}
          {/*    <li>*/}
          {/*      <Link*/}
          {/*        className="text-gray-600 transition hover:text-gray-900"*/}
          {/*        href="#0"*/}
          {/*      >*/}
          {/*        Features*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link*/}
          {/*        className="text-gray-600 transition hover:text-gray-900"*/}
          {/*        href="#0"*/}
          {/*      >*/}
          {/*        Integrations*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link*/}
          {/*        className="text-gray-600 transition hover:text-gray-900"*/}
          {/*        href="#0"*/}
          {/*      >*/}
          {/*        Pricing & Plans*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link*/}
          {/*        className="text-gray-600 transition hover:text-gray-900"*/}
          {/*        href="#0"*/}
          {/*      >*/}
          {/*        Changelog*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link*/}
          {/*        className="text-gray-600 transition hover:text-gray-900"*/}
          {/*        href="#0"*/}
          {/*      >*/}
          {/*        Our method*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}

          {/*/!* 3rd block *!/*/}
          {/*<div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">*/}
          {/*  <h3 className="text-sm font-medium">Company</h3>*/}
          {/*  <ul className="space-y-2 text-sm">*/}
          {/*    <li>*/}
          {/*      <Link*/}
          {/*        className="text-gray-600 transition hover:text-gray-900"*/}
          {/*        href="#0"*/}
          {/*      >*/}
          {/*        About us*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link*/}
          {/*        className="text-gray-600 transition hover:text-gray-900"*/}
          {/*        href="#0"*/}
          {/*      >*/}
          {/*        Diversity & Inclusion*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link*/}
          {/*        className="text-gray-600 transition hover:text-gray-900"*/}
          {/*        href="#0"*/}
          {/*      >*/}
          {/*        Blog*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link*/}
          {/*        className="text-gray-600 transition hover:text-gray-900"*/}
          {/*        href="#0"*/}
          {/*      >*/}
          {/*        Careers*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link*/}
          {/*        className="text-gray-600 transition hover:text-gray-900"*/}
          {/*        href="#0"*/}
          {/*      >*/}
          {/*        Financial statements*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}

          {/*/!* 4th block *!/*/}
          {/*<div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">*/}
          {/*  <h3 className="text-sm font-medium">Resources</h3>*/}
          {/*  <ul className="space-y-2 text-sm">*/}
          {/*    <li>*/}
          {/*      <Link*/}
          {/*        className="text-gray-600 transition hover:text-gray-900"*/}
          {/*        href="#0"*/}
          {/*      >*/}
          {/*        Community*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link*/}
          {/*        className="text-gray-600 transition hover:text-gray-900"*/}
          {/*        href="#0"*/}
          {/*      >*/}
          {/*        Terms of service*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link*/}
          {/*        className="text-gray-600 transition hover:text-gray-900"*/}
          {/*        href="#0"*/}
          {/*      >*/}
          {/*        Report a vulnerability*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}

          {/* 5th block */}
          <div className='space-y-2 sm:col-span-12 md:col-span-6 lg:col-span-6'>
            <h3 className='text-sm font-medium'>Social</h3>
            <SocialLinksList />
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className='relative -mt-20 h-60 w-full opacity-5' aria-hidden='true'>
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-pink-800 before:to-pink-900/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['xisracom'] after:absolute after:inset-0 after:bg-pink-950/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['xisracom'] after:[text-shadow:0_1px_0_gray]"></div>
        {/* Glow */}
        <div
          className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3'
          aria-hidden='true'
        >
          <div className='h-56 w-56 rounded-full border-[20px] border-red-500 blur-[80px]'></div>
        </div>
      </div>
    </footer>
  );
}
