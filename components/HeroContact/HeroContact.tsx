'use client';

export function HeroContact() {
  return (
    <section id='contact' className='relative min-h-screen bg-gray-900'>
      <div className='mx-auto flex h-full max-w-4xl flex-col justify-center'>
        {/* Hero content */}
        <div className='py-24 md:py-32'>
          {/* Section header */}
          <div className='text-center'>
            <h2
              data-aos='fade-down'
              data-aos-delay={50}
              className='mb-6 font-lexend text-6xl font-extralight'
            >
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Contact me
            </h2>
            <p
              data-aos='fade-down'
              data-aos-delay={500}
              className='mb-6 text-xl text-gray-600'
            >
              Im always happy to chat about new projects, ideas, or anything
              else.
            </p>
            <form
              method={'post'}
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const response = await fetch('/api/contact', {
                  method: 'POST',
                  body: JSON.stringify(Object.fromEntries(formData)),
                  headers: {
                    'Content-Type': 'application/json',
                  },
                });
                if (response.ok) {
                  alert('Message sent!');
                } else {
                  alert('Failed to send message');
                }
              }}
              data-aos='fade-down'
              data-aos-delay={1500}
            >
              <div className='grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:px-0'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-red-400'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    autoComplete='name'
                    className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-red-400'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    autoComplete='email'
                    className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm'
                  />
                </div>
                <div className='sm:col-span-2'>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-red-400'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    name='subject'
                    id='subject'
                    className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm'
                  />
                </div>
                <div className='sm:col-span-2'>
                  <div className='flex justify-between'>
                    <label
                      htmlFor='message'
                      className='block text-sm font-medium text-red-400'
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
                    className='mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm'
                    aria-describedby='message-max'
                  />
                </div>
                <div className='sm:col-span-2'>
                  <button
                    type={'submit'}
                    className='inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:text-sm'
                  >
                    Send message
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
