import React from 'react';
import styles from './SearchBar.module.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';

const sortOptions = [
  { name: 'Best Match', value: 'best_match' },
  { name: 'Highest Rated', value: 'rating' },
  { name: 'Most Reviewed', value: 'review_count' }
];

const SearchBar = () => {
  const [searchSort, setSearchSort] = React.useState("");
  const [radioValue, setRadioValue] = React.useState('best_match');

  const handleSort = (e) => {
    setSearchSort(e.target.value);
    console.log(searchSort);
    setRadioValue(e.target.value);
  };

  // const renderSortByOptions = () => {

  //     return (
  //       <ButtonGroup>
  //       {sortOptions.map((radio, idx) => (
  //         <ToggleButton
  //           key={idx}
  //           id={`radio-${idx}`}
  //           type="radio"
  //           name="radio"
  //           variant='dark'
  //           value={radio.value}
  //           checked={radioValue === radio.value}
  //           onClick={(e) => handleSort(e)}
  //         >
  //           {radio.name}
  //         </ToggleButton>
  //       ))}
  //     </ButtonGroup>
  //     );
  // };

  return (

    <div className={styles.SearchBar}>
      <Form>
        <Container className="container-fluid d-flex flex-column justify-content-around align-items-center">

        <ButtonGroup>
        {sortOptions.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            name="radio"
            variant='dark'
            value={radio.value}
            checked={radioValue === radio.value}
            onClick={(e) => handleSort(e)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

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