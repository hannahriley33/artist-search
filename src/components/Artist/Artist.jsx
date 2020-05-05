import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Artist = ({ artistName }) => {
  return (
    <Link to={`/artists/${artistName}`}>
      <p>{artistName}</p>
    </Link>
  );
};

export default Artist;

Artist.propTypes = {
  artistName: PropTypes.string.isRequired
};
