import { type FC, useState } from "react";

import { ShoppingWrapper } from "./styles";
import { ShoppingForm, ShoppingList } from "../../molecules";
import { ShoppingItem } from "../../../types";

export const ShoppingContainer: FC = () => {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);

  const createItem = (item: ShoppingItem) =>
    setShoppingItems((prevState) => [...prevState, item]);

  return (
    <ShoppingWrapper>
      <ShoppingForm onSubmit={createItem} />
      <ShoppingList shoppingItems={shoppingItems} />
    </ShoppingWrapper>
  );
};
