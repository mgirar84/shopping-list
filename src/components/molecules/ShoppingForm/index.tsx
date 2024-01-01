import { useState, type FC } from "react";

import { StyledForm } from "./styles";
import { Props } from "./types";

export const ShoppingForm: FC<Props> = () => {
  const [itemName, setItemName] = useState<string>("");

  return <StyledForm></StyledForm>;
};
