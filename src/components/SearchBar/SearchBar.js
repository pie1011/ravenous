import React from 'react';
import styles from './SearchBar.module.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

const sortOptions = [
  { name: 'Best Match', value: 'best_match' },
  { name: 'Highest Rated', value: 'highest_rating' },
  { name: 'Most Reviewed', value: 'most_reviewed' }
];

const SearchBar = () => {

  const [ sortValue, setSortValue ] = React.useState('best_match');
  const [ searchBusiness, setSearchBusiness ] = React.useState('');
  const [ searchLocation, setSearchLocation ] = React.useState('');

  const handleSort = (e) => {
    setSortValue(e.target.value);
  };

  const handleBusinessChange = (e) => {
    e.preventDefault();
    setSearchBusiness(e.target.value);
  };

  const handleLocationChange = (e) => {
    e.preventDefault();
    setSearchLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Sort by: ${sortValue}`);
    console.log(`Search business: ${searchBusiness}`);
    console.log(`Search location: ${searchLocation}`);
    console.log('Submit button clicked');
  };

  return (

    <div className={styles.SearchBar}>
      <Form>
        <Container className="container-fluid d-flex flex-column justify-content-around align-items-center">
          <ToggleButtonGroup type='radio' name='sortButtons' defaultValue={'best_match'} >
            {sortOptions.map((radio, index) => (
              <ToggleButton
                key={index}
                id={`radio-${index}`}
                name="sortButtons"
                variant='dark'
                value={radio.value}
                checked={sortValue === radio.value}
                onChange={(e) => {
                  handleSort(e)
                }}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
          <p>{sortValue}</p>

          <Container className="container-fluid d-flex flex-lg-row flex-column">
            <div className="p-lg-3 p-2 flex-grow-1">
              <Form.Control 
                className='form-control-lg' 
                name='search' 
                type="text" 
                value={searchBusiness}
                placeholder="Search businesses"
                onChange={handleBusinessChange}
              />
            </div>
            <div className="p-lg-3 p-2 flex-grow-1">
            <Form.Control 
                className='form-control-lg' 
                name='search' 
                type="text" 
                value={searchLocation}
                placeholder="Search businesses"
                onChange={handleLocationChange}
              />
              </div>
            <div className="p-lg-3 p-2 flex-grow-1">
              <Button 
                className='form-control-lg' 
                variant="primary" 
                type="submit"
                name='submit' 
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </Container>
        </Container>
      </Form>
    </div>

  );
}

export default SearchBar;