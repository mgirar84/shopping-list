import { type FC, useState } from "react";

import { ShoppingWrapper } from "./styles";
import { ShoppingForm, ShoppingList } from "../../molecules";
import { ShoppingItem } from "../../../types";

export const ShoppingContainer: FC = () => {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>([]);

  const createItem = (item: ShoppingItem) =>
    setShoppingItems((prevState) => [...prevState, item]);

  // todo: split out and add tests
  const deleteItem = (
    shoppingItems: ShoppingItem[],
    itemToFilterId: ShoppingItem["id"]
  ) => {
    const filteredItems = shoppingItems.filter(
      (item) => item.id !== itemToFilterId
    );
    setShoppingItems(filteredItems);
  };

  return (
    <ShoppingWrapper>
      <ShoppingForm onSubmit={createItem} />
      <ShoppingList
        data={shoppingItems}
        onDelete={(itemToFilterId: ShoppingItem["id"]) =>
          deleteItem(shoppingItems, itemToFilterId)
        }
      />
    </ShoppingWrapper>
  );
};
