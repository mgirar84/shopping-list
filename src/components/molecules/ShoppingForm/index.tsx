import { useState, type FC, useMemo } from "react";

import { v4 as uuidv4 } from "uuid";

import { ErrorMessage, StyledButton, StyledForm, StyledInput } from "./styles";
import { Props } from "./types";
import { isItemValid } from "../../../utils";

export const ShoppingForm: FC<Props> = ({ onSubmit }) => {
  const [itemName, setItemName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const resetInputHandler = () => setItemName("");

  const submitFormHandler = (itemName: string) => {
    const trimmedItemName = itemName.trim();
    if (!isItemValid(itemName)) {
      return setError(
        "Please enter a valid item name containing only letters and spaces."
      );
    }

    setError(null);
    onSubmit({ name: trimmedItemName, id: uuidv4() });
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
        {error && <ErrorMessage role="alert" >{error}</ErrorMessage>}
      </div>
      <StyledButton
        type="button"
        onClick={() => submitFormHandler(itemName)}
      >
        Add item to Shopping List
      </StyledButton>
    </StyledForm>
  );
};
