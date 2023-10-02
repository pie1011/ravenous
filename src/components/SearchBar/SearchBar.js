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
  const [radioValue, setRadioValue] = React.useState('best_match');

  const handleSort = (e) => {
    console.log(radioValue);
    setRadioValue(e.target.value);
    console.log(radioValue);
  };


  return (

    <div className={styles.SearchBar}>
      <Form>
        <Container className="container-fluid d-flex flex-column justify-content-around align-items-center">

          <ToggleButtonGroup type='radio' defaultValue={'best_match'} >
            {sortOptions.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                name="sortButtons"
                variant='dark'
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => {
                  handleSort(e)
                }}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          <Container className="container-fluid d-flex flex-lg-row flex-column">
            <div className="p-lg-3 p-2 flex-grow-1">
              <Form.Control className='form-control-lg' type="text" placeholder="Search businesses" />
            </div>
            <div className="p-lg-3 p-2 flex-grow-1">
              <Form.Control className='form-control-lg' type="text" placeholder="Where?" />
            </div>
            <div className="p-lg-3 p-2 flex-grow-1">
              <Button className='form-control-lg' variant="primary" type="submit">
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