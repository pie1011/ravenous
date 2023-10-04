import React from 'react';
import './BusinessList.module.css';

import Business from '../Business/Business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="d-flex flex-row flex-wrap justify-content-around mb-3 p-3">
        { this.props.businesses.length === 0 &&
          <div className="alert alert-warning" role="alert">
            Please search to view businesses.
          </div>
        }
        
        {
          this.props.businesses.map(business => {
            return <Business business={business} key={business.id} />
          })
        }
      </div>
    );
  }
}

export default BusinessList;