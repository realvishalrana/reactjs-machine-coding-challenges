import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex-cen">
      <h3>Look like you're lost</h3>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default PageNotFound;
