import React from "react";

const DisplayList = ({ prod }) => {
  return (
    <span className="products__single" key={prod.id}>
      <img src={prod.thumbnail} alt={prod.title} />
      <span>{prod.title}</span>
    </span>
  );
};

export default DisplayList;
