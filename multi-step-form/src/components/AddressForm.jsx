import React from "react";
import FormWrapper from "./FormWrapper";
import Input from "../widgets/Input";

const AddressForm = ({ street, city, state, zip, updateFields }) => {
  return (
    <FormWrapper title="Address Details">
      <Input
        label="Street"
        value={street}
        onChange={(e) =>
          updateFields({
            street: e.target.value,
          })
        }
        autoFocus
      />

      <Input
        label="City"
        value={city}
        onChange={(e) =>
          updateFields({
            city: e.target.value,
          })
        }
      />

      <Input
        label="State"
        value={state}
        onChange={(e) =>
          updateFields({
            state: e.target.value,
          })
        }
      />

      <Input
        label="Zip"
        value={zip}
        onChange={(e) =>
          updateFields({
            zip: e.target.value,
          })
        }
      />
    </FormWrapper>
  );
};

export default AddressForm;
