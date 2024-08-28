import { getVideosByPlaylist } from '@/libs/yt/yt.repository';
import config from '@/libs/config';
import Image from 'next/image';
import { FaVideo } from 'react-icons/fa';

const BASE_DELAY = 300;
const SKIPPED_VIDS = 3;

export async function YouTubePlaylist() {
  const playlistItems = await getVideosByPlaylist(config.yt.playlistId!);
  return (
    <div className='mx-auto max-w-7xl p-8'>
      <div className='mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3'>
        {playlistItems.slice(0, SKIPPED_VIDS).map((item, i) => {
          const thumbnailSrc =
            item.snippet.thumbnails?.['maxres']?.url ||
            item.snippet.thumbnails?.['high']?.url ||
            item.snippet.thumbnails?.['standard']?.url;

          const title = item.snippet.title;

          return (
            <a
              key={title}
              href={`https://www.youtube.com/watch?v=${item.contentDetails.videoId}`}
              className='block overflow-hidden rounded-lg bg-gray-900 p-2 shadow-xl transition-transform hover:scale-105 hover:transform'
              data-aos='fade-down'
              data-aos-delay={BASE_DELAY + i * BASE_DELAY}
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
                <h6 className={'md:text-md text-sm font-light text-red-400'}>
                  {new Date(item.contentDetails.videoPublishedAt).getMonth() +
                    '/' +
                    new Date(
                      item.contentDetails.videoPublishedAt
                    ).getFullYear()}
                </h6>
              </div>
            </a>
          );
        })}
      </div>
      <div className={'sm:grid-col-3 grid gap-4 md:grid-cols-6'}>
        {playlistItems.slice(SKIPPED_VIDS).map((item, i) => {
          const thumbnailSrc =
            item.snippet.thumbnails?.['maxres']?.url ||
            item.snippet.thumbnails?.['high']?.url ||
            item.snippet.thumbnails?.['standard']?.url;

          const title = item.snippet.title;

          return (
            <a
              key={title}
              href={`https://www.youtube.com/watch?v=${item.contentDetails.videoId}`}
              className='block overflow-hidden rounded-lg bg-gray-900 shadow-xl transition-transform hover:scale-105 hover:transform'
              data-aos='fade-down'
              data-aos-delay={BASE_DELAY + (i + SKIPPED_VIDS) * 100}
            >
              <Image
                src={thumbnailSrc}
                alt={title}
                width={1280}
                height={720}
                className='h-auto w-full rounded-lg object-cover'
              />
            </a>
          );
        })}
      </div>
      <div className='mt-8 flex justify-center'>
        <a
          href={`https://youtube.com/@israkouper`}
          className='btn w-full bg-red-50 text-xl font-extralight text-gray-800 shadow hover:bg-red-100 sm:w-auto'
          data-aos='fade-down'
          data-aos-delay={BASE_DELAY + (playlistItems.length + 1) * 100}
        >
          Check out more &nbsp;
          <FaVideo className={'text-red-400'} />
        </a>
      </div>
    </div>
  );
}
