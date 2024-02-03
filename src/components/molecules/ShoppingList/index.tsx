import { type FC } from "react";

import { DeleteButton, StyledList, StyledListItem } from "./styles";
import { Props } from "./types";

export const ShoppingList: FC<Props> = ({ data, onDelete }) => (
  <StyledList>
    {data?.map((item, index) => (
      <StyledListItem key={item.id}>
        <span>{index + 1}</span>
        <span>{item.name}</span>
        <DeleteButton onClick={() => onDelete(item.id)}>Remove Item</DeleteButton>
      </StyledListItem>
    ))}
  </StyledList>
);
