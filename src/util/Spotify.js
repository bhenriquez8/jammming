'use strict';

let accessToken;

const client_id = '242856ffee8f4e888bdd9fa8566e6037';
const redirectURI = 'http://localhost:3000';

const Spotify = {
  getAccessToken: function() {
    if (accessToken) {
      return accessToken;
    } else {
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

      if (accessTokenMatch && expiresInMatch) {
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);

        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');

        return accessToken;
      } else {
        window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      }
    }
  },
  search: function(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artist[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  }
};

export default Spotify;