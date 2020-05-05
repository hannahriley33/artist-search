import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ artistName, onSubmit, onChange  }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name={artistName} value={artistName} onChange={onChange} placeholder="Search for an artist" id="searchText" />
    <button>Search</button>
  </form>
);

Search.propTypes = {
  artistName: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Search;
