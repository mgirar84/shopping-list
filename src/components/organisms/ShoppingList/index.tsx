import { type FC, useState } from "react";

import { ShoppingWrapper } from "./styles";
import { ShoppingForm, ShoppingList } from "../../../components/molecules";
import { ShoppingItem } from "../../../types";

export const Shopping: FC = () => {
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
