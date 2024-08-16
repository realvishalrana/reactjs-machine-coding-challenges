import React from "react";
import AddEmployee from "./AddEmployee";

const Header = (props) => {
  const { open, setOpen } = props;

  return (
    <div className="flex justify-between h-11 items-center">
      <p className="font-semibold mb-2">Employee Database Management</p>
      <button
        className="bg-gray-300 hover:bg-gray-400  py-2 px-4 rounded-full"
        onClick={() => setOpen(true)}
      >
        Add Employee
      </button>
      {open && <AddEmployee {...props} />}
    </div>
  );
};

export default Header;
