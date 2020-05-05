import React, { useState } from 'react';
import Search from '../components/Artists/Artists.jsx';

const SearchContainer = () => {
  const [searchText, setSearchText] = useState('');
  const [] = useState('');

  // let { searchArtistName } = useParams();

  const handleChange = ({ target }) => setSearchText(target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    fetchArtistDetails(); -> put this response in state
  }
  
  return ();
}