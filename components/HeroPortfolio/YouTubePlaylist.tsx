'use server';
import {getVideosByPlaylist} from "@/libs/yt/yt.repository";
import config from "@/libs/config";
import Image from "next/image";

export async function YouTubePlaylist() {
    const playlistItems = await getVideosByPlaylist(config.yt.playlistId!);

    return <div
        data-aos="fade-down"
        data-aos-delay={500}
        className="relative overflow-x-auto p-8">
        <div className="transform">
            <div className="flex flex-row gap-4 flex-nowrap">
                {playlistItems.map((item) => {
                    const thumbnailSrc =
                        item.snippet.thumbnails?.['maxres']?.url ||
                        item.snippet.thumbnails?.['high']?.url ||
                        item.snippet.thumbnails?.['standard']?.url;

                    const title = item.snippet.title;

                    return (
                        <div key={title} className="p-2 bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-transform"
                             style={{flex: '1 0 38rem'}}>
                            <Image src={thumbnailSrc} alt={title} width={1280} height={720}
                                   className="object-cover w-full h-80 rounded-lg"/>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{title}</h3>
                                <p className="text-gray-700"></p>
                            </div>
                        </div>
                    );
                })}
                {/*<div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">*/}
                {/*    <img src="/demo/code1.jpg" alt="awesome"*/}
                {/*         className="object-cover w-full h-80"/>*/}
                {/*    <div className="p-4">*/}
                {/*        <h3 className="text-xl font-semibold">Awesome</h3>*/}
                {/*        <p className="text-gray-700">This is a description of the project</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">*/}
                {/*    <img src="/demo/code1.jpg" alt="awesome"*/}
                {/*         className="object-cover w-full h-80"/>*/}
                {/*    <div className="p-4">*/}
                {/*        <h3 className="text-xl font-semibold">Awesome</h3>*/}
                {/*        <p className="text-gray-700">This is a description of the project</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">*/}
                {/*    <img src="/demo/code1.jpg" alt="awesome"*/}
                {/*         className="object-cover w-full h-80"/>*/}
                {/*    <div className="p-4">*/}
                {/*        <h3 className="text-xl font-semibold">Awesome</h3>*/}
                {/*        <p className="text-gray-700">This is a description of the project</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    </div>;
}