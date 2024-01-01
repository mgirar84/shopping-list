import { useState } from "react";

import styled from "styled-components";

import { StyledHeading } from "../components/atoms";
import { ShoppingForm, ShoppingList } from "../components/molecules";
import { ShoppingItem } from "../types";

const StyledMain = styled.main`
  max-width: 1350px;
  width: 95%;
  padding: 20px;
  margin: auto;
  font-family: "Arial", sans-serif;
`;

const ShoppingWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

const Main = () => {
  const [items, setItems] = useState<ShoppingItem[]>();

  const createItem = (item: ShoppingItem) =>
    setItems((prevState) => (prevState ? [...prevState, item] : [item]));

  return (
    <StyledMain>
      <StyledHeading>Shopping List</StyledHeading>
      <ShoppingWrapper>
        <ShoppingForm onSubmit={createItem} />
        {items && <ShoppingList items={items} />}
      </ShoppingWrapper>
    </StyledMain>
  );
};

export default Main;
