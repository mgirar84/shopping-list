import { useState, type FC } from "react";

import { v4 as uuidv4 } from "uuid";

import { StyledButton, StyledForm, StyledInput } from "./styles";
import { Props } from "./types";

export const ShoppingForm: FC<Props> = ({ onSubmit }) => {
  const [itemName, setItemName] = useState<string>("");

  return (
    <StyledForm>
      <label>
        Item Name:
        <StyledInput
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </label>
      <StyledButton onClick={() => onSubmit({ name: itemName, id: uuidv4() })}>
        Add to Shopping List
      </StyledButton>
    </StyledForm>
  );
};
