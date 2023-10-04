import React from 'react';
import './SearchBar.css';
import { Form, Container, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({ sortBy: sortByOption });
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value });
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value });
  }

  handleSearch(event) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);

    event.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (

        <ToggleButton
          className={this.getSortByClass(sortByOptionValue)}
             key={sortByOptionValue}
          id={`radio-${sortByOptionValue}`}
          name="sortButtons"
          variant='dark'
          value={sortByOptionValue}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </ToggleButton>

      );
    });
  }

  render() {
    return (

      <div className="SearchBar">
        <Form>
          <Container className="container-fluid d-flex flex-column justify-content-around align-items-center">
            <ToggleButtonGroup type='radio' name='sortButtons' defaultValue={'best_match'} >
              {this.renderSortByOptions()}
            </ToggleButtonGroup>
            <p>{this.sortValue}</p>

            <Container className="container-fluid d-flex flex-lg-row flex-column">
              <div className="p-lg-3 p-2 flex-grow-1">
                <Form.Control
                  className='form-control-lg'
                  name='search'
                  type="text"
                  value={this.searchBusiness}
                  placeholder="Search businesses"
                  onChange={this.handleTermChange}
                />
              </div>
              <div className="p-lg-3 p-2 flex-grow-1">
                <Form.Control
                  className='form-control-lg'
                  name='search'
                  type="text"
                  value={this.searchLocation}
                  placeholder="Location"
                  onChange={this.handleLocationChange}
                />
              </div>
              <div className="p-lg-3 p-2 flex-grow-1">
                <Button
                  className='form-control-lg'
                  variant="primary"
                  type="submit"
                  name='submit'
                  onClick={this.handleSearch}
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
}

export default SearchBar;

// const SearchBar = (searchYelp) => {

//   const [ sortValue, setSortValue ] = React.useState('best_match');
//   const [ searchBusiness, setSearchBusiness ] = React.useState('');
//   const [ searchLocation, setSearchLocation ] = React.useState('');

//   const handleSort = (e) => {
//     setSortValue(e.target.value);
//   };

//   const handleBusinessChange = (e) => {
//     e.preventDefault();
//     setSearchBusiness(e.target.value);
//   };

//   const handleLocationChange = (e) => {
//     e.preventDefault();
//     setSearchLocation(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     console.log(`Sort by: ${sortValue}`);
//     console.log(`Search business: ${searchBusiness}`);
//     console.log(`Search location: ${searchLocation}`);
//     console.log('Submit button clicked');

//     searchYelp(searchBusiness, searchLocation, sortValue);
//     e.preventDefault();
//   };

//   return (

//     <div className={styles.SearchBar}>
//       <Form>
//         <Container className="container-fluid d-flex flex-column justify-content-around align-items-center">
//           <ToggleButtonGroup type='radio' name='sortButtons' defaultValue={'best_match'} >
//             {sortOptions.map((radio, index) => (
//               <ToggleButton
//                 key={index}
//                 id={`radio-${index}`}
//                 name="sortButtons"
//                 variant='dark'
//                 value={radio.value}
//                 checked={sortValue === radio.value}
//                 onChange={(e) => {
//                   handleSort(e)
//                 }}
//               >
//                 {radio.name}
//               </ToggleButton>
//             ))}
//           </ToggleButtonGroup>
//           <p>{sortValue}</p>

//           <Container className="container-fluid d-flex flex-lg-row flex-column">
//             <div className="p-lg-3 p-2 flex-grow-1">
//               <Form.Control 
//                 className='form-control-lg' 
//                 name='search' 
//                 type="text" 
//                 value={searchBusiness}
//                 placeholder="Search businesses"
//                 onChange={handleBusinessChange}
//               />
//             </div>
//             <div className="p-lg-3 p-2 flex-grow-1">
//             <Form.Control 
//                 className='form-control-lg' 
//                 name='search' 
//                 type="text" 
//                 value={searchLocation}
//                 placeholder="Location"
//                 onChange={handleLocationChange}
//               />
//               </div>
//             <div className="p-lg-3 p-2 flex-grow-1">
//               <Button 
//                 className='form-control-lg' 
//                 variant="primary" 
//                 type="submit"
//                 name='submit' 
//                 onClick={handleSubmit}
//               >
//                 Submit
//               </Button>
//             </div>
//           </Container>
//         </Container>
//       </Form>
//     </div>

//   );
// }

// export default SearchBar;