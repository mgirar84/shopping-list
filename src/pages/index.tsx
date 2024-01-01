import { type FC, useState } from "react";

import styled from "styled-components";

import { ShoppingForm, ShoppingList } from "../components/molecules";
import { ShoppingItem } from "../types";

export const StyledHeading = styled.h1`
  color: #333;
  font-size: 24px;
`;

const StyledMain = styled.main`
  max-width: 1350px;
  width: 95%;
  margin: auto;
  font-family: "Arial", sans-serif;
`;

const ShoppingWrapper = styled.div`
  outline: red 1px solid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 10px;
`;

const Main: FC = () => {
  const [items, setItems] = useState<ShoppingItem[]>();

  const createItem = (item: ShoppingItem) =>
    setItems((prevState) => (prevState ? [...prevState, item] : [item]));

  return (
    <StyledMain>
      <StyledHeading>Shopping List</StyledHeading>
      <ShoppingWrapper>
        <ShoppingForm onSubmit={createItem} />
        <ShoppingList items={items} />
      </ShoppingWrapper>
    </StyledMain>
  );
};

export default Main;
