import React from 'react';
import styles from './SearchBar.module.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SearchBar = () => {
  return (
    <div className={styles.SearchBar}>
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