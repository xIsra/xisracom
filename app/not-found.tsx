import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
      <p className='mt-4'>The page you are looking for does not exist.</p>
      <p className='mt-4'>
        <Link href='/' className='text-blue-600 hover:underline'>
          Go back to the homepage
        </Link>
      </p>
    </div>
  );
}
