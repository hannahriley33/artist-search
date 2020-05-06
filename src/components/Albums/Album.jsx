import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Album = ({ artistName, artistAlbums }) => {
  //map through albums

  return (
    <Link to={`/artists/${artistName}/${albumTitle}`}>
      <p>{albumTitle}</p>
      <p>{albumDate}</p>
      <img src={albumArt} alt="Album Cover Image"></img>
    </Link>
  );
};

Album.propTypes = {
  albumTitle: PropTypes.string.isRequired,
  albumDate: PropTypes.string.isRequired,
  albumArt: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
};

export default Album;
//
