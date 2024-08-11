import React from "react";
import FormWrapper from "./FormWrapper";
import Input from "../widgets/Input";

const AccountForm = ({ email, password, updateFields }) => {
  return (
    <FormWrapper title="Account Form Details">
      <Input
        label="Email"
        value={email}
        onChange={(e) =>
          updateFields({
            email: e.target.value,
          })
        }
        type="email"
        autoFocus
      />

      <Input
        label="Password"
        value={password}
        onChange={(e) =>
          updateFields({
            password: e.target.value,
          })
        }
        type="password"
      />
    </FormWrapper>
  );
};

export default AccountForm;
