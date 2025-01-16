const SpotifyWebApi = require('spotify-web-api-node');
require('dotenv').config();

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.SPOTIFY_REDIRECT_URI
});

async function getArtistTracks() {
    const artistId = '6uia16AqBhaGIHJSOXDhKs';
    
    const albums = await spotifyApi.getArtistAlbums(artistId, {
        limit: 50,
        include_groups: 'album,single',
        market: 'NO'
    });
    
    const tracks = [];
    
    for (const album of albums.body.items) {
        const albumTracks = await spotifyApi.getAlbumTracks(album.id);
        tracks.push(...albumTracks.body.items.map(track => ({
            name: track.name,
            uri: track.uri,
            album_type: album.album_type,
            album_name: album.name,
            album_image: album.images[0]?.url,
            track_number: track.track_number,
            release_date: album.release_date,
            formatted_date: new Date(album.release_date).toLocaleDateString('no-NO'),
            total_tracks: album.total_tracks
        })));
    }
    
    return tracks;
}

module.exports = { spotifyApi, getArtistTracks }; 

