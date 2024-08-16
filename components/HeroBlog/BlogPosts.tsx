import {getPostsList} from "@/libs/posts";
import {PostsGrid} from "@/components/HeroBlog/PostsGrid";

export async function BlogPosts() {
    const posts = await getPostsList();

    return <div className="container mx-auto max-w-6xl mb-32">
        <PostsGrid posts={posts}/>
    </div>;
}