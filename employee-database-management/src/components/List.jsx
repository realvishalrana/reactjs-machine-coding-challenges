import React from "react";

const List = (props) => {
  const { employeeList, selectedEmployee, setSelectedEmployee, handleRemove } =
    props || {};

  return (
    <div className="flex flex-col gap-2 h-72 overflow-y-auto p-2">
      <p className="sticky top-0 bg-white z-10 border-b border-gray-600">
        Employee List
      </p>
      {employeeList.map((item, index) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              setSelectedEmployee(item);
            }}
            className={`flex justify-between px-1 bg-gray-200 hover:bg-gray-400 cursor-pointer ${
              item.id === selectedEmployee?.id
                ? "bg-blue-200 border-l-4 border-blue-500"
                : ""
            } ${index === 0 ? "mt-2" : ""}`}
          >
            {item.firstName + " " + item.lastName}
            <button
              className="text-red-700"
              onClick={(event) => {
                event.stopPropagation(); 
                handleRemove(item.id);
              }}
            >
              ✘
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
