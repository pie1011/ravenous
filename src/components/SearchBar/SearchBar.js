import React from 'react';
import styles from './SearchBar.module.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "rating",
  "Most Reviewed": "review_count",
};

const SearchBar = () => {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchLocation, setSearchLocation] = React.useState("");
  const [searchSort, setSearchSort] = React.useState("");

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li 
          className='list-group-item flex-fill text-center small' 
          key={sortByOptionValue}
          value={sortByOptionValue}
          onClick={handleSortByChange}
        >
            {sortByOption}
          </li>
      );
    });
  };

  const handleSearch = (event) => {
    event.preventDefault();
  };

  const handleSortByChange = (event) => {
    const sortValue = event.target.value;
    sortValue === searchSort ? setSearchSort(null) : setSearchSort(sortValue);
    console.log(sortValue);
  };

  return (

    <div className={styles.SearchBar}>
      <Container className='container'>
        <ul className='list-group list-group-horizontal'>{renderSortByOptions()}</ul><br />
      </Container>
      <Form>
        <Container className="container-fluid d-flex justify-content-around">
          <div className="p-3 flex-grow-1">
            <Form.Control type="text" placeholder="Search businesses" />
          </div>
          <div className="p-3 flex-grow-1">
            <Form.Control type="text" placeholder="Where?" />
          </div>
          <div className="p-3">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Container>
      </Form>
    </div>
  );
}

export default SearchBar;