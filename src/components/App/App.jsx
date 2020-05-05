import React from 'react';
import SearchContainer from '../../Containers/SearchContainer.jsx';
import ArtistList from '../Artist/ArtistList';
import {
  Route,
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={SearchContainer} />
          <Route exact path="/artists/:artistId" component={ArtistList} />
        </Switch>
      </Router>
    </>
  );
}
