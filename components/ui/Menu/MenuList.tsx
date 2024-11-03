import Link from 'next/link';
import {
  FaBlog,
  FaDrawPolygon,
  FaEnvelopeOpen,
  FaHome,
  FaNewspaper,
} from 'react-icons/fa';
import { FaC } from 'react-icons/fa6';

export function MenuList({ className = '' }) {
  return (
    <ul className={`items-center gap-1 md:flex ${className}`}>
      <li>
        <Link
          href='/'
          className='btn w-full px-4 py-10 font-light shadow-none hover:scale-110 hover:bg-red-400 hover:font-normal hover:text-gray-900 hover:drop-shadow-lg md:px-8 md:py-4 lg:px-10'
        >
          <FaHome className='mr-1' />
          Home
        </Link>
      </li>
      <li>
        <Link
          href='/#portfolio'
          className='btn w-full px-4 py-10 font-light shadow-none hover:scale-110 hover:bg-red-400 hover:font-normal hover:text-gray-900 hover:drop-shadow-lg md:px-8 md:py-4 lg:px-10'
        >
          <FaDrawPolygon className='mr-1' />
          My Stuff
        </Link>
      </li>
      <li>
        <Link
          href='/#blog'
          className='btn w-full px-4 py-10 font-light shadow-none hover:scale-110 hover:bg-red-400 hover:font-normal hover:text-gray-900 hover:drop-shadow-lg md:px-8 md:py-4 lg:px-10'
        >
          <FaNewspaper className='mr-1' />
          Posts
        </Link>
      </li>
      <li>
        <Link
          href='/#contact'
          className='btn w-full px-4 py-10 font-light shadow-none hover:scale-110 hover:bg-red-400 hover:font-normal hover:text-gray-900 hover:drop-shadow-lg md:px-8 md:py-4 lg:px-10'
        >
          <FaEnvelopeOpen className='mr-1' />
          Contact
        </Link>
      </li>
    </ul>
  );
}
