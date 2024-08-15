'use server';
import {unstable_cache as cache} from 'next/cache'
import {PlaylistItemResponse} from './playlist-item.response';
import config from "@/libs/config";

const YOUTUBE_API_KEY = config.yt.apiKey;

const createGetChannelUrl = (username: string) => `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=${username}&key=${YOUTUBE_API_KEY}`;

const createGetPlaylistUrl = (playlistId: string) => `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`;

async function _getVideosByPlaylist(playlistId: string): Promise<PlaylistItemResponse[]> {
    // const playlistFileContent = fs.readFileSync('playlist.json', {
    //     encoding: 'utf-8',
    //     flag: 'w+',
    // });
    //
    // const cachedPlaylistData = playlistFileContent ? JSON.parse(playlistFileContent) : {
    //     items: [] as PlaylistItemResponse[],
    //     expiresAt: undefined,
    // };
    //
    // if (cachedPlaylistData.expiresAt && Date.now() < cachedPlaylistData.expiresAt) {
    //     return cachedPlaylistData.items;
    // }

    const playlistResponse = await fetch(createGetPlaylistUrl(playlistId));

    const data = await playlistResponse.json();

    // fs.writeFileSync('playlist.json', JSON.stringify({
    //     expiration: Date.now() + 24 * 60 * 60 * 1000,
    //     items: data.items,
    // }, null, 2), {
    //     encoding: 'utf-8',
    //     flag: 'w+',
    // });

    return data.items as PlaylistItemResponse[] || [];
}

export const getVideosByPlaylist = cache(_getVideosByPlaylist, ['playlistId'], {
    revalidate: 60 * 60 * 24,
    tags: ['yt'],
});