import { useState, type FC } from "react";

import { v4 as uuidv4 } from "uuid";

import { StyledButton, StyledForm, StyledInput } from "./styles";
import { Props } from "./types";

// todo add validation to prevent empty strings

export const ShoppingForm: FC<Props> = ({ onSubmit }) => {
  const [itemName, setItemName] = useState<string>("");

  const resetFormHandler = () => setItemName("");

  const submitFormHandler = (itemName: string) => {
    onSubmit({ name: itemName, id: uuidv4() });
    resetFormHandler();
  };

  return (
    <StyledForm>
      {/* todo: remove this outline */}
      <label style={{ outline: "solid green 1px" }}>
        Item Name:
        <StyledInput
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>
      <StyledButton type="button" onClick={() => submitFormHandler(itemName)}>
        Add to Shopping List
      </StyledButton>
    </StyledForm>
  );
};
