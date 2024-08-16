import {unstable_cache as cache} from "next/cache";
import {getPostsList} from "@/libs/posts";

const getPosts = cache(getPostsList, ['posts'], {
    revalidate: 60 * 60 * 24,
});


export async function Tags() {
    const posts = await getPosts();

    const keywords = new Set<string>();

    for (const post of posts) {
        for (const keyword of post.keywords) {
            keywords.add(keyword.toLowerCase().replace(/ /g, '-'));
        }
    }

    const keywordsList = Array.from(keywords);

    return <div className="container mx-auto max-w-6xl mb-32">
        <div className="flex flex-wrap justify-center">
            {keywordsList.map((keyword) => (
                <a key={keyword}

                   data-aos="fade-up"
                   data-aos-delay={100}
                   href={`/blog/tag/${keyword}`} className="m-2 px-4 py-2 bg-gray-800 text-white rounded-md">
                    {keyword}
                </a>
            ))}
        </div>
    </div>;
}