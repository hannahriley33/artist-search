import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ artistName }) => {
  const albumElements = albums.map(album => (
    <li key={album.alb}
  ))
  
  <section>
    <h3>Albums by {artistName}</h3>

  </section>
};

Artist.propTypes = {
  artistName: PropTypes.string.isRequired,
  artistId: PropTypes.string.isRequired
};

export default Artist;


