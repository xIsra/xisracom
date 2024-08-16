import {PostMetadata} from "@/libs/posts";
import Image from "next/image";

export function PostsGrid({posts}: {
    posts: PostMetadata[],
}) {
    return <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-3">
        {posts.map(post => (
            <div key={post.title}

                 data-aos="zoom-y-out"
                 data-aos-delay={300}
                 data-aos-easing="ease-in-out"
                 className="bg-gray-800 rounded-lg shadow-lg overflow-hidden p-2 hover:transform hover:scale-105 transition-transform">
                <a href={`/blog/${post.slug}`}>
                    <Image src={post.imageUrl} alt={post.title} width={600} height={400}
                           className="object-cover w-full h-80 rounded-lg"/>
                </a>
                <div className="p-4">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className="text-gray-700">{post.description}</p>
                </div>
            </div>
        ))}
    </div>;
}