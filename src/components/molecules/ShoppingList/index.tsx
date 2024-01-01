import { type FC } from "react";

import { StyledList, StyledListItem } from "./styles";
import { Props } from "./types";

export const ShoppingList: FC<Props> = ({ items }) => (
  <StyledList>
    {items?.map((item, index) => (
      <StyledListItem key={item.id}>
        <span>{index + 1}</span>
        <span>{item.name}</span>
      </StyledListItem>
    ))}
  </StyledList>
);
