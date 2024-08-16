import {BlogPosts} from "@/components/HeroBlog/BlogPosts";
import {Tags} from "@/components/HeroBlog/Tags";

export function HeroBlog() {
    return (
        <section id="blog" className="relative min-h-screen px-20">
            <div className="mx-auto h-full flex flex-col justify-center">
                {/* Hero content */}
                <div className="py-24 md:py-32">
                    {/* Section header */}
                    <div className="pb-12 text-center">
                        <h2 className="mb-6 text-6xl font-lexend font-extralight">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Latest posts
                        </h2>
                        <BlogPosts/>
                        <h6 className="text-2xl font-lexend font-extralight mb-6">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Tags
                        </h6>
                        <Tags/>
                    </div>
                </div>
            </div>
        </section>
    );
}
