import React, { useState, useEffect } from 'react';
import Search from '../components/Search/Search';
import { fetchArtistData } from '../../Utilities/FetchCalls.js';
import ArtistList from '../components/Artist/ArtistList.jsx';

const SearchContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [artistResults, setArtistResults] = useState([]);

  // let { searchArtistName } = useParams();
  // useEffect(() => {
  //   fetchArtistData()
  //     .then(artist => setArtistResults(artist));
  // });

  const onChange = ({ target }) => setSearchText(target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    fetchArtistData(searchText)
      .then(artist => setArtistResults(artist));
    // console.log(artist));
    // setArtistResults(artist.name));
  };
// console.log(artistResults);
  return (
    <>
      <Search artistName={searchText} onSubmit={onSubmit} onChange={onChange}/>
      <ArtistList artists={artistResults}/>
    </>
  );
};
export default SearchContainer;
