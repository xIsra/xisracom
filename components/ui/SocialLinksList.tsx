import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
} from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

export default function SocialLinksList() {
  return (
    <div
      data-aos-easing='ease-in-out'
      data-aos-duration='1500'
      data-aos='fade-up'
      className='mt-8 flex'
    >
      <a
        href='https://www.facebook.com/xIsr4'
        className='text-gray-400 hover:text-gray-500'
      >
        <span className='sr-only'>Facebook</span>
        <FaFacebook className='h-6 w-6' fill='currentColor' />
      </a>
      <a
        href='https://www.instagram.com/israkouper/'
        className='ml-6 text-gray-400 hover:text-gray-500'
      >
        <span className='sr-only'>Instagram</span>
        <FaInstagram className='h-6 w-6' fill='currentColor' />
      </a>
      <a
        href='https://x.com/israkouper'
        className='ml-6 text-gray-400 hover:text-gray-500'
      >
        <span className='sr-only'>X</span>
        <FaX className='h-6 w-6' fill='currentColor' />
      </a>
      <a
        href='https://stackoverflow.com/users/9634635/xisra'
        className='ml-6 text-gray-400 hover:text-gray-500'
      >
        <span className='sr-only'>StackOverflow</span>
        <FaStackOverflow className='h-6 w-6' fill='currentColor' />
      </a>
      <a
        href='https://github.com/xisra'
        className='ml-6 text-gray-400 hover:text-gray-500'
      >
        <span className='sr-only'>GitHub</span>
        <FaGithub className='h-6 w-6' fill='currentColor' />
      </a>
      <a
        href='https://linkedin.com/in/xisra'
        className='ml-6 text-gray-400 hover:text-gray-500'
      >
        <span className='sr-only'>Linkedin</span>
        <FaLinkedin className='h-6 w-6' fill='currentColor' />
      </a>
    </div>
  );
}
