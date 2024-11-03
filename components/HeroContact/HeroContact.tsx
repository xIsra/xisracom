'use client';
import { FaEnvelope } from 'react-icons/fa';

export function HeroContact() {
  return (
    <section id='contact' className='relative min-h-screen bg-gray-900'>
      <div className='mx-auto flex h-full max-w-4xl flex-col justify-center'>
        {/* Hero content */}
        <div className='py-24 md:py-32'>
          {/* Section header */}
          <div className='text-center'>
            <h2 className='mb-6 font-lexend text-6xl font-extralight'>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Contact me
            </h2>
            <p className='mb-6 text-xl text-gray-600'>
              Im always happy to chat about new projects, ideas, or anything
              else.
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                window.open(
                  `mailto:me@xisra.com?subject=${formData.get(
                    'subject'
                  )}&body=${formData.get('message')}`
                );
              }}
            >
              <div className='grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:px-0'>
                <div className='sm:col-span-2'>
                  <div className='mb-2 flex justify-between'>
                    <label
                      htmlFor='name'
                      className='block text-sm font-bold text-red-400'
                    >
                      Name
                    </label>
                  </div>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    autoComplete='name'
                    placeholder='Your name here...'
                    className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm'
                  />
                </div>
                <div className='sm:col-span-2'>
                  <div className='mb-2 flex justify-between'>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-bold text-red-400'
                    >
                      Subject
                    </label>
                  </div>
                  <input
                    type='text'
                    name='subject'
                    id='subject'
                    placeholder='Whats the goal?'
                    className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm'
                  />
                </div>
                <div className='sm:col-span-2'>
                  <div className='mb-2 flex justify-between'>
                    <label
                      htmlFor='message'
                      className='block text-sm font-bold text-red-400'
                    >
                      Message
                    </label>
                    <span className='text-sm text-red-400' id='message-max'>
                      Max. 500 characters
                    </span>
                  </div>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    maxLength={500}
                    className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm'
                    aria-describedby='message-max'
                    placeholder="Let's talk about..."
                  />
                </div>
                <div className='sm:col-span-2'>
                  <button
                    type={'submit'}
                    className='inline-flex size-24 w-full items-center justify-center rounded-md border border-transparent bg-red-400 px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:text-sm'
                  >
                    Send message
                    <FaEnvelope className='mx-2 h-6 w-6' fill='currentColor' />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
