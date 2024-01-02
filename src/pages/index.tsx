import type { FC } from "react";

import styled from "styled-components";

import { ShoppingContainer } from "../components/organisms";

export const StyledHeading = styled.h1`
  color: #333;
  font-size: 24px;
`;

const StyledMain = styled.main`
  max-width: 1350px;
  width: 95%;
  margin: auto;
`;

const Main: FC = () => (
  <StyledMain>
    <StyledHeading>Shopping List</StyledHeading>
    <ShoppingContainer />
  </StyledMain>
);

export default Main;
