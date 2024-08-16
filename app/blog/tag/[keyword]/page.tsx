import {Metadata} from 'next';
import {unstable_cache as cache} from 'next/cache';
import {getPostsList} from "@/libs/posts";
import {PostsGrid} from "@/components/HeroBlog/PostsGrid";

const getPosts = cache(getPostsList, ['posts'], {
    revalidate: 60 * 60 * 24,
});


export async function generateStaticParams() {
    const posts = await getPosts();

    const keywords = new Set<string>();

    for (const post of posts) {
        for (const keyword of post.keywords) {
            keywords.add(keyword.toLowerCase().replace(/ /g, '-'));
        }
    }

    return Array.from(keywords.values()).map((keyword) => ({
        keyword,
    }));
}


export async function generateMetadata({
                                           params,
                                       }: {
    params: { keyword: string };
}): Promise<Metadata> {

    return {
        title: `Posts tagged with ${params.keyword}`,
        keywords: [params.keyword],
    };
}

export default async function BlogPost({params}: { params: { keyword: string } }) {
    const keyword = params.keyword;

    const posts = await getPosts();
    const keywordPosts = posts.filter((post) => post.keywords?.includes(keyword));

    return (
        <PostsGrid posts={keywordPosts}/>
    );
}