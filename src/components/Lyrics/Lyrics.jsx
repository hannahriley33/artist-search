import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ songTitle, artistName, songLyrics }) => {
  
  
  return (
    <section>
      <h4>{songTitle}</h4>
      <h5>{artistName}</h5>
      <h6>{songLyrics}</h6>
    </section>
  );
};

Lyrics.propTypes = {
  songTitle: PropTypes.string.isRequired,
  songLyrics: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired
};

export default Lyrics;
