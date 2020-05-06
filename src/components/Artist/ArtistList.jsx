import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Artist from './Artist.jsx';

const ArtistList = ({ artists }) => {
  console.log(artists);
  const matchedArtists = artists.map(artist => (
    <li key={artist.id}>
      <Artist artistName={artist.artistName} />
    </li>
  ));

  return (
    <ul>
      {matchedArtists}
    </ul>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    artistName: PropTypes.string.isRequired
  })).isRequired
};

export default ArtistList;
