export function Tag(props: { keyword: string }) {
  return (
    <a
      href={`/blog/tag/${props.keyword}`}
      className='rounded-md bg-gray-800 px-3 py-1 text-gray-200 drop-shadow-sm hover:bg-red-400 hover:text-gray-950'
    >
      {props.keyword}
    </a>
  );
}
