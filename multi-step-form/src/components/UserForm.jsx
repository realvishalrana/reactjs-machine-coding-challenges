import React from "react";
import FormWrapper from "./FormWrapper";
import Input from "../widgets/Input";

const UserForm = ({ firstName, lastName, age, updateFields }) => {
  return (
    <FormWrapper title="User Details">
      <Input
        label="First Name"
        value={firstName}
        onChange={(e) =>
          updateFields({
            firstName: e.target.value,
          })
        }
        autoFocus
      />
      <Input
        label="Last Name"
        value={lastName}
        onChange={(e) =>
          updateFields({
            lastName: e.target.value,
          })
        }
      />

      <Input
        label="Age"
        value={age}
        type="number"
        onChange={(e) =>
          updateFields({
            age: e.target.value,
          })
        }
      />
    </FormWrapper>
  );
};

export default UserForm;
