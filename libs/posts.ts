import fs from "fs";
import matter from "gray-matter";

export type PostMetadata = {
    title: string;
    slug: string
    description: string;
    keywords: string[];
    videoUrl: string;
    imageUrl: string;
}

export async function getPostsList() {
    const posts = fs.readdirSync('blog');

    return posts.map((post) => {
        const slug = post.replace(/\.mdx$/, '');
        return getPostBySlug(slug);
    });
}

function getPostBySlug(slug: string): PostMetadata {
    const file = fs.readFileSync(`blog/${slug}.mdx`, 'utf8');
    const {data} = matter(file);
    return {
        title: data.title,
        slug: slug,
        description: data.description,
        keywords: data.keywords,
        imageUrl: data.imageUrl,
        videoUrl: data.videoUrl,
    }
}
