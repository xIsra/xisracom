import Link from 'next/link';
import AwesomeBox from '@/components/ui/AwesomeBox';
import { LogoSecondaryText } from '@/components/ui/LogoSecondaryText';

export const backgroundAwesomeStyles = {
  backgroundColor: '#ec407a',
  backgroundImage: `linear-gradient(45deg, '#fdd835' 0%, '#f06292' 100%)`,
  color: 'inherit',
};

export default function Logo({ type = 'default' }) {
  return (
    <Link href='/' className='inline-flex transform transition-transform delay-150 hover:rotate-2 hover:scale-105' aria-label='xisracom'>
      <AwesomeBox
      primary={'xisra.com'}
      secondary={<LogoSecondaryText type={type} />}
      />
    </Link>
  );
}
