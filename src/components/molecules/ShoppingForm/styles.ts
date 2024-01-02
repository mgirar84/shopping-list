import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 0.5em;
  max-width: 20em;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 0.75em;
  width: 100%;
`;

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 0.75em;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;
