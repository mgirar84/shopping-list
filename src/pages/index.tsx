import { ShoppingForm, ShoppingList } from "@/components/molecules";
import styled from "styled-components";

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

const Main = () => (
  <StyledMain>
    <Title>Shopping List</Title>
    <ShoppingForm onSubmit={() => {}} />
    <ShoppingList items={[{ name: "item", id: "1" }]} />
  </StyledMain>
);

export default Main;
