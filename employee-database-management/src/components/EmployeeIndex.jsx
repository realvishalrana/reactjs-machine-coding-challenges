import React from "react";
import List from "./List";
import SingleEmployee from "./SingleEmployee";
import useEmployee from "../hooks/useEmployee";
import Header from "./Header";

const EmployeeIndex = () => {
  const props = useEmployee();

  return (
    <div className="m-2">
      <Header {...props} />
      <div className="flex  border border-gray-500">
        <List {...props} />
        <SingleEmployee {...props} />
      </div>
    </div>
  );
};

export default EmployeeIndex;
