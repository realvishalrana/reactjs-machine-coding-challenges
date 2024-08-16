import React from "react";

const SingleEmployee = ({ selectedEmployee, handleEdit }) => {
  const {
    imageUrl,
    firstName,
    lastName,
    age,
    email,
    contactNumber,
    dob,
    address,
  } = selectedEmployee || {};

  return (
    <div className="w-full p-2">
      <p className="text-center border-b border-gray-600">
        Employee Information
      </p>
      <div className="flex flex-col items-center justify-center mt-6">
        {selectedEmployee ? (
          <>
            <img src={imageUrl} alt="profile img" width="70px" height="70px" />
            <p>
              {firstName} {lastName} ({age})
            </p>
            <p>{address}</p>
            <p>{email}</p>
            <p>Mobile : {contactNumber}</p>
            <p>DOB : {dob}</p>
            <button
              className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-full"
              onClick={() => handleEdit(selectedEmployee)}
            >
              Edit
            </button>
          </>
        ) : (
          "No Data Selected"
        )}
      </div>
    </div>
  );
};

export default SingleEmployee;
