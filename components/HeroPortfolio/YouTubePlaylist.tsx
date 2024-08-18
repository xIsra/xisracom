import { getVideosByPlaylist } from '@/libs/yt/yt.repository';
import config from '@/libs/config';
import Image from 'next/image';
import { FaVideo } from 'react-icons/fa';

export async function YouTubePlaylist() {
  const playlistItems = await getVideosByPlaylist(config.yt.playlistId!);

  return (
    <div
      data-aos='fade-down'
      data-aos-delay={500}
      className='mx-auto max-w-7xl p-8'
    >
      <div className='mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3'>
        {playlistItems.slice(0, 3).map((item) => {
          const thumbnailSrc =
            item.snippet.thumbnails?.['maxres']?.url ||
            item.snippet.thumbnails?.['high']?.url ||
            item.snippet.thumbnails?.['standard']?.url;

          const title = item.snippet.title;

          return (
            <div
              key={title}
              className='overflow-hidden rounded-lg bg-gray-900 p-2 shadow-xl transition-transform hover:scale-105 hover:transform'
            >
              <Image
                src={thumbnailSrc}
                alt={title}
                width={1280}
                height={720}
                className='h-48 w-full rounded-lg object-cover sm:h-36 md:h-48 lg:h-64'
              />
              <div className='p-4'>
                <h3 className='text-md font-semibold md:text-lg'>{title}</h3>
              </div>
            </div>
          );
        })}
      </div>
      <div className={'sm:grid-col-3 grid gap-4 md:grid-cols-6'}>
        {playlistItems.slice(3).map((item) => {
          const thumbnailSrc =
            item.snippet.thumbnails?.['maxres']?.url ||
            item.snippet.thumbnails?.['high']?.url ||
            item.snippet.thumbnails?.['standard']?.url;

          const title = item.snippet.title;

          return (
            <div
              key={title}
              className='overflow-hidden rounded-lg bg-gray-900 shadow-xl transition-transform hover:scale-105 hover:transform'
            >
              <Image
                src={thumbnailSrc}
                alt={title}
                width={1280}
                height={720}
                className='h-auto w-full rounded-lg object-cover'
              />
            </div>
          );
        })}
      </div>
      <div className='mt-8 flex justify-center'>
        <a
          href={`https://youtube.com/@israkouper`}
          className='btn w-full bg-red-50 text-xl font-extralight text-gray-800 shadow hover:bg-red-100 sm:w-auto'
        >
          Check out more &nbsp;
          <FaVideo className={'text-red-400'} />
        </a>
      </div>
    </div>
  );
}
