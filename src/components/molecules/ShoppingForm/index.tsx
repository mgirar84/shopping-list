import { useState, type FC, useMemo } from "react";

import { v4 as uuidv4 } from "uuid";

import { ErrorMessage, StyledButton, StyledForm, StyledInput } from "./styles";
import { Props } from "./types";
import { isItemValid } from "../../../utils";

const errorMessage =
  "Please enter a valid item name containing only letters and spaces.";

export const ShoppingForm: FC<Props> = ({ onSubmit }) => {
  const [itemName, setItemName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const resetInputHandler = () => setItemName("");
  const clearErrorHandler = () => setError(null);

  const submitFormHandler = (itemName: string) => {
    const trimmedItemName = itemName.trim();
    if (!isItemValid(itemName)) {
      return setError(errorMessage);
    }

    clearErrorHandler();
    onSubmit({ name: trimmedItemName, id: uuidv4() });
    resetInputHandler();
  };

  return (
    <StyledForm>
      <div>
        <label>
          Item Name:
          <StyledInput
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            name="Item Name:"
          />
        </label>
        {error && (
          <ErrorMessage aria-label={errorMessage} role="alert">
            {error}
          </ErrorMessage>
        )}
      </div>
      <StyledButton type="button" onClick={() => submitFormHandler(itemName)}>
        Add item to Shopping List
      </StyledButton>
    </StyledForm>
  );
};
