import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import Yelp from './utils/Yelp';

function App() {

  const [businesses, setBusinesses] = React.useState([])

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then(businesses => {
      setBusinesses(businesses);
    });
  }

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;
