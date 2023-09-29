import React from "react";
import Business from "../Business/Business";

const BusinessList = (MockData) => {
  return (
    <div className="d-flex flex-row flex-wrap justify-content-around mb-3">
      {MockData.data.map((business) => {
        return (
          <Business
            key={business.id}
            imageSrc={business.imageSrc}
            name={business.name}
            address={business.address}
            city={business.city}
            state={business.state}
            zipCode={business.zipCode}
            category={business.category}
            rating={business.rating}
            reviewCount={business.reviewCount}
          />
        );
      })}
    </div>
  );
}

export default BusinessList;