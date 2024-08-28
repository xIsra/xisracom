export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className='prose prose-base max-w-full grow text-black prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-red-400 prose-code:text-gray-400 prose-code:shadow-sm dark:text-white dark:prose-headings:text-white'>
      {children}
    </article>
  );
}
