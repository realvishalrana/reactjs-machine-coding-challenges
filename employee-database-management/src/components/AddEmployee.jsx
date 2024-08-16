import React from "react";
import CustomModal from "../widgets/CustomModal";
import Input from "../widgets/Input";

const AddEmployee = (props) => {
  const {
    setOpen,
    handleChange,
    handleSubmit,
    formData,
    isEditMode,
    handleClose,
  } = props;

  const onSubmit = () => {
    handleSubmit(formData);
  };

  return (
    <>
      <CustomModal
        setOpen={setOpen}
        content={
          <>
            <div className="grid grid-cols-2 gap-2">
              <Input
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <Input
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <Input
                placeholder="Image URL(Optional)"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                className="col-span-2"
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="col-span-2"
              />
              <Input
                type="number"
                placeholder="Contact"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="col-span-2"
              />
              <Input
                placeholder="Salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="col-span-2"
              />
              <Input
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="col-span-2"
              />
              <Input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="col-span-2"
              />
            </div>
            <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit"
                onClick={onSubmit}
              >
                {isEditMode  ? "Update" : "Save Changes"}
              </button>
            </div>
          </>
        }
        title={isEditMode  ? "Edit Employee" : "Add a new Employee"}
        handleClose={handleClose}
      />
    </>
  );
};

export default AddEmployee;
