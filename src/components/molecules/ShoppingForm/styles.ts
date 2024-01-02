import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 20em;
`;

export const StyledInput = styled.input`
  box-sizing: border-box;
  padding: 0.75em;
  width: 100%;
  margin-bottom: 0.75em;
`;

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 0.75em;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 5px;
`;
