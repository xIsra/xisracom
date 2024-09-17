import Link from 'next/link';
import { FaBlog, FaDrawPolygon, FaEnvelopeOpen, FaHome, FaNewspaper } from 'react-icons/fa';
import { FaC } from 'react-icons/fa6';

export function MenuList({ className = '' }) {
  return (
    <ul className={`hidden items-center gap-1 md:flex ${className}`}>
      <li>
        <Link
          href='/'
          className='btn shadow-none hover:bg-red-400 hover:drop-shadow-lg hover:text-gray-900 hover:scale-110 font-light hover:font-normal'
        >
          <FaHome className='mr-1' />
          Home
        </Link>
      </li>
      <li>
        <Link
          href='/#portfolio'
          className='btn shadow-none hover:bg-red-400 hover:drop-shadow-lg hover:text-gray-900 hover:scale-110 font-light hover:font-normal'
        >
          <FaDrawPolygon className='mr-1' />
          My Stuff
        </Link>
      </li>
      <li>
        <Link
          href='/#blog'
          className='btn shadow-none hover:bg-red-400 hover:drop-shadow-lg hover:text-gray-900 hover:scale-110 font-light hover:font-normal'
        >
          <FaNewspaper className='mr-1' />
          Posts
        </Link>
      </li>
      <li>
        <Link
          href='/#contact'
          className='btn shadow-none hover:bg-red-400 hover:drop-shadow-lg hover:text-gray-900 hover:scale-110 font-light hover:font-normal'
        >
          <FaEnvelopeOpen className='mr-1' />
          Contact
        </Link>
      </li>
    </ul>
  );
}
