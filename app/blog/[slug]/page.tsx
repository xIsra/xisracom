import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {Metadata} from 'next';
import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote/rsc'

import MdxLayout from "@/app/blog/layout";
import {useMDXComponents} from "@/mdx-components";

interface BlogPostProps {
    params: { slug: string };
    mdxSource: MDXRemoteSerializeResult;
    frontMatter: {
        title: string;
        date: string;
    };
}

// export async function getStaticPaths(): Promise<GetStaticPathsResult> {
//     const posts = fs.readdirSync('blog');
//
//
//     return {
//         paths: posts.map((post) => ({
//             params: {
//                 slug: post.replace(/\.mdx$/, '')
//             }
//         })),
//
//         fallback: false
//     }
// }


export async function generateStaticParams() {
    const posts = fs.readdirSync('blog');

    return posts.map(post => ({
        slug: post.replace(/\/blog\//, '').replace(/\.mdx$/, '')
    }))
}


export async function generateMetadata({
                                           params,
                                       }: {
    params: { slug: string };
}): Promise<Metadata> {
    const filePath = path.join('blog', `${params.slug}.mdx`);
    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const {data} = matter(markdownWithMeta);

    return {
        title: data.title,
    };
}

export default async function BlogPost({params}: { params: { slug: string } }) {
    const slug = params.slug;
    const filePath = path.join('blog', `${slug}.mdx`);
    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
    const {content, data} = matter(markdownWithMeta);

    const components = useMDXComponents({});

    return (
        <MdxLayout>
            <MDXRemote source={content} components={components}/>
        </MdxLayout>
    );
}