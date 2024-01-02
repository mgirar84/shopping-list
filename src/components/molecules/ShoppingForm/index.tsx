import { useState, type FC, useMemo } from "react";

import { v4 as uuidv4 } from "uuid";

import { ErrorMessage, StyledButton, StyledForm, StyledInput } from "./styles";
import { Props } from "./types";
import { isStringValid } from "../../../utils";

export const ShoppingForm: FC<Props> = ({ onSubmit }) => {
  const [itemName, setItemName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const resetInputHandler = () => setItemName("");

  const submitFormHandler = (itemName: string) => {
    if (!isStringValid(itemName)) {
      return setError(
        "Please enter a valid item name containing only letters and spaces."
      );
    }

    setError(null);
    onSubmit({ name: itemName, id: uuidv4() });
    resetInputHandler();
  };

  const labelId = useMemo(() => uuidv4(), []);

  return (
    <StyledForm>
      <div>
        <label id={labelId}>Item Name:</label>
        <StyledInput
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          aria-labelledby={labelId}
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </div>
      <StyledButton
        // TODO: remove this?
        // aria-label="Add item to shopping list"
        type="button"
        onClick={() => submitFormHandler(itemName)}
      >
        Add item to Shopping List
      </StyledButton>
    </StyledForm>
  );
};
