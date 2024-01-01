// import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1350px;
  padding: 20px;
  margin: auto;
  font-family: "Arial", sans-serif;
`;

const Title = styled.h1`
  color: #333;
`;

const Home = () => (
  <Container>
    <Title>Shopping List</Title>
  </Container>
);

export default Home;
