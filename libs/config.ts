const config = {
    yt: {
        apiKey: process.env.YOUTUBE_API_KEY,
        playlistId: process.env.YOUTUBE_PLAYLIST_ID,
    }
}

if (!config.yt.apiKey) {
    throw new Error('Missing YOUTUBE_API_KEY');
}
if (!config.yt.playlistId) {
    throw new Error('Missing YOUTUBE_PLAYLIST_ID');
}

export default config;