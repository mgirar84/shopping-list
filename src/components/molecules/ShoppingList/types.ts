import { ShoppingItem } from "../../../types";

export type Props = {
  data?: ShoppingItem[];
  onDelete: (itemToFilterId: ShoppingItem["id"]) => void;
};
