import Link from 'next/link';

export function MenuList({ className = '' }) {
  return (
    <ul className={`hidden items-center gap-1 md:flex ${className}`}>
      <li>
        <Link
          href='/'
          className='btn shadow-none hover:bg-red-400 hover:drop-shadow-lg'
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href='#portfolio'
          className='btn shadow-none hover:bg-red-400 hover:drop-shadow-lg'
        >
          My Stuff
        </Link>
      </li>
      <li>
        <Link
          href='#blog'
          className='btn shadow-none hover:bg-red-400 hover:drop-shadow-lg'
        >
          Posts
        </Link>
      </li>
      <li>
        <Link
          href='#contact'
          className='btn shadow-none hover:bg-red-400 hover:drop-shadow-lg'
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
