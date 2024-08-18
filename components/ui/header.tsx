import Logo from './logo';
import { MenuList } from '@/components/ui/Menu/MenuList';
import { MobileMenu } from '@/components/ui/Menu/MobileMenu';

export default function Header() {
  return (
    <header
      className='fixed z-30 w-full'
      data-aos='slide-down'
      data-aos-delay={300}
    >
      <div className='mx-auto'>
        <div className='relative flex h-14 items-center justify-between gap-3 bg-gray-800/20 px-4 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]'>
          {/* Site branding */}
          <div className='flex flex-1 items-center'>
            <Logo />
          </div>

          {/* Desktop sign in links */}
          <MenuList />

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
