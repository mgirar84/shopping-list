import { useState } from "react";

import styled from "styled-components";

import { StyledHeading } from "../components/atoms";
import { ShoppingForm, ShoppingList } from "../components/molecules";

const StyledMain = styled.main`
  max-width: 1350px;
  width: 95%;
  padding: 20px;
  margin: auto;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  color: #333;
`;

const Main = () => {
  const [items, setItems] = useState();
  return (
    <StyledMain>
      <StyledHeading>Shopping List</StyledHeading>
      <ShoppingForm onSubmit={() => {}} />
      <ShoppingList items={[{ name: "item", id: "1" }]} />
    </StyledMain>
  );
};

export default Main;
