import placeholderArt from '../assets/placeholderArt.jpg';

export const fetchArtistData = (searchText) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${searchText}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(json => json.artists.map(artist => ({
      artistName: artist.name,
      artistId: artist.id
    })));
};

export const fetchAlbumData = (artistId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`)
    .then(res => res.json())
    .then(json => 
      json.releases.map(release => ({
        albumId: release.id,
        albumTitle: release.title,
        albumDate: release.date,
        albumArt: release['cover-art-archive'].front
          ? `http://coverartarchive.org/release/${release.id}/front`
          : placeholderArt
      })));
};

export const fetchSongData = (albumId) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${albumId}&fmt=json`)
    .then(res => res.json())
    .then(json => json.recordings.map(song => ({
      songId: song.id,
      songTitle: song.title
    })));
};

export const fetchLyricsData = (artistName, songTitle) => {
  return fetch(`https://api.lyrics.ovh/v1/${artistName}/${songTitle}`)
    .then(res => res.lyrics);
};

  
    
