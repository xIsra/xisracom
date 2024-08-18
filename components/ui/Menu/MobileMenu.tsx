'use client';
import { useEffect, useState } from 'react';
import { MenuList } from '@/components/ui/Menu/MenuList';

export function MobileMenu() {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <div className='md:hidden'>
      {/* Mobile menu */}
      <button
        className='block'
        aria-label='Open Menu'
        onClick={() => setOpen(!open)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </button>

      {/* Mobile menu */}
      <div
        className={`${
          open ? 'block' : 'hidden'
        } absolute inset-x-0 top-14 z-20 bg-gray-800/80 shadow-lg`}
      >
        <MenuList />
      </div>
    </div>
  );
}
