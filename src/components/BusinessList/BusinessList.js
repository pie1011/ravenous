import React from "react";
import Business from "../Business/Business";

const BusinessList = () => {
  return (
    <div className="d-flex flex-row justify-content-around mb-3">
        <Business />
        <Business />
        <Business />
        <Business />
    </div>
  );
}

export default BusinessList;