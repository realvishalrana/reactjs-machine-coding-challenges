import { useState } from "react";
import data from "../data.json";

const initialValue = {
  firstName: "",
  lastName: "",
  imgUrl: "",
  email: "",
  contactNumber: "",
  salary: "",
  address: "",
  dob: "",
};

const useEmployee = () => {
  const [employeeList, setEmployeeList] = useState(data);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [open, setOpen] = useState();
  const [isEditMode, setIsEditMode] = useState(false);

  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRemove = (currentId) => {
    const filterEmployeeList = employeeList.filter(
      ({ id }) => id !== currentId
    );
    setEmployeeList(filterEmployeeList);
  };

  const handleClose = () => {
    setOpen(false);
    setFormData(initialValue);
    setSelectedEmployee(null);
    setIsEditMode(false);
  };

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);

    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleSubmit = () => {
    if (isEditMode) {
      const updatedList = employeeList.map((employee) =>
        employee.id === selectedEmployee.id
          ? { ...employee, ...formData }
          : employee
      );
      setEmployeeList(updatedList);
    } else {
      const { dob: oldDob, imageUrl } = formData;
      const age = calculateAge(oldDob);

      const payload = {
        ...formData,
        age: age,
        imageUrl: imageUrl || "https://cdn-icons-png.flaticon.com/512/0/93.png",
      };

      const newId =
        employeeList.length > 0
          ? employeeList[employeeList.length - 1].id + 1
          : 1;
      setEmployeeList([...employeeList, { id: newId, ...payload }]);
    }
    handleClose();
  };

  const handleEdit = (employee) => {
    setSelectedEmployee(employee);
    setFormData(employee);
    setIsEditMode(true);
    setOpen(true);
  };

  return {
    employeeList,
    setEmployeeList,
    handleRemove,
    open,
    setOpen,
    handleChange,
    handleSubmit,
    formData,
    handleClose,
    selectedEmployee,
    setSelectedEmployee,
    handleEdit,
    isEditMode,
    setIsEditMode,
  };
};

export default useEmployee;
